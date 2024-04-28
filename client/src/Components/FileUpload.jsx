import React, {useState} from 'react'
import axios from 'axios'

const FileUpload = () => {

    const [caption, setCaption] = useState('');
    const [image, setImage] = useState(null);
  
    const submitHandler = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append('caption', caption);
      formData.append('image', image);
  
      try {
        const res = await axios.post('/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  
    return (
      <>
        <form onSubmit={submitHandler} className='pt-[10em]'>
          <input type="text" placeholder="Caption" value={caption} onChange={(e) => setCaption(e.target.value)} /><br />
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          <button type="submit">Upload</button>
        </form>
      </>
    )
}

export default FileUpload