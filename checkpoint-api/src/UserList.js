import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";
export default function App() {
  const [users, setUsers] = useState([])
  const [id,setId]= useState(null)
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users/`)//use : $[id] 
    .then(res=>{console.log(res)
    setUsers(res.data)})
    .catch(err=>{console.log(err)
    })
  }, [])
  

  return(
    <div>
       {/*<input type='text' value={id} onChange={e=>setId(e.target.value)}/>*/}
       <ul>
        {
        users.map(user => (<li key={user.id}>{user.name}</li>)

         )}
        </ul>
       
</div>
  );
        };