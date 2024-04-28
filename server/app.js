const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser")
const multer = require("multer");
const crypto = require("crypto");
const {S3Client, PutObjectCommand} = require("@aws-sdk/client-s3");

const poolDB = require("./db");

// Config
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

// AWS S3 Config
const s3Bucket = process.env.S3_BUCKET
const s3Region = process.env.S3_REGION
const s3AccessKey = process.env.S3_ACCESS_KEY
const s3AccessSecret = process.env.S3_ACCESS_SECRET

// AWS S3 Client Setup
const s3 = new S3Client({
    region: s3Region,
    credentials: {
        accessKeyId: s3AccessKey,
        secretAccessKey: s3AccessSecret
    }
});

// MIDDLEWARE
const corsOptions = {
    credentials: true,
    origin: 'http://localhost:3000',    
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// ----------- ROUTES --------------
// DB CRUD ops routes


// Test Msg
app.get("/", (req, res) => {
    res.status(200).json({msg: "Hello World"});
});


// GET Operation
app.get("/api/bayava", async (req, res) => {
    try {
        const users = await poolDB.query("SELECT * from bayavasfdc.course__c");
        res.status(200).json(users);
    } 
    catch (error) {
        console.error(error.message)
    }
    
});

// POST Operation
app.post("/api/bayava", async (req, res) => {
    try {
        const {mode__c, instructor__c, name, cover_photo__c} = req.body;
        const newCourse = await poolDB.query("INSERT INTO bayavasfdc.course__c (mode__c, instructor__c, name, cover_photo__c) VALUES($1, $2, $3, $4) RETURNING *", [mode__c, instructor__c, name, cover_photo__c]);
        res.status(200).json(newCourse.rows[0]);
    } 
    catch (error) {
        console.error(error.message)
    }
});

// DELETE Operation
app.delete("/api/bayava/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteCourse = await poolDB.query("DELETE FROM bayavasfdc.course__c WHERE id = $1", [id]);
      res.json("Course was deleted!");
    } 
    catch (err) {
      console.log(err.message);
    }
});


// Upload Image

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), async (req, res) => {

    const randomImageName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex');

    const newImageName = randomImageName();
    const params = {
        Bucket: s3Bucket,
        Key: newImageName,
        Body: req.file.buffer,
        ContentType: req.file.mimetype
    }

    const command = new PutObjectCommand(params);
    await s3.send(command);

    res.status(201).json({msg: "Image uploaded successfully!", url: `https://d3o3o3yj4icffw.cloudfront.net/${newImageName}`});
})




// Register and Login Routes
app.use("/auth", require("./routes/jwtAuth"));

app.use("/dashboard", require("./routes/dashboard"));

// Listener
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});