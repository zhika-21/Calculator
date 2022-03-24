import React, {useState} from 'react'
import {data} from "./components/data"
import "./App.css"

function App() {
 const [change, setChange] = useState(null);

 const toggle= i=>{
  if(change===i){
    return setChange(null)
  }
  setChange(i)

 }
  
  return (
 <div className="wrapper">
   <div className="container">
     {data.map((item,i)=>(
       <div className="item">
         <div className="title" onClick={()=>{
           toggle(i)
         }}>
           <h2>{item.question}</h2>
           <span>{change===i?"-":"+"}</span>
         </div>
         <div className={change ===i ? "content show" : "content"}>
           <p>{item.answer}</p>
         </div>
       </div>
     ))}
   </div>
 </div>
  )
}
export default App
