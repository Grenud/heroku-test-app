import { useState, useEffect } from "react"
import axios from "axios"

function App() {

  const [data, setData] = useState([])


  useEffect(() => {
    axios.get("http://localhost:8000/api/bayava")
      .then(res => {
        setData(res.data.rows)
        console.log(res.data.rows)
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <div className="h-screen flex flex-col items-center justify-center gap-10">
    {
      data.map((item, index) => {
        return (
          <div key={index} className="flex justify-center items-center">
            <div className="flex flex-col items-center gap-5">
              <h1 className="text-3xl">{item.name}</h1>
              <p>{item.instructor__c}</p>
              <p>{item.start_date__c}</p>
              <p>{item.end_date__c}</p>
              <img className="object-cover h-48 w-96 rounded-xl" src={item.cover_photo__c}/>
            </div>
          </div>
        )
      })
    }

    </div>
  )
}

export default App
