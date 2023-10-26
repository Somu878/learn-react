import React,{useState} from 'react'

export default function Forms() {
    let [values,setvalues] = useState({
        uname:"",
        pw:""
    });
    
  return (
    <div>
        <form action="">
            <input type="text" name='uname' placeholder='username'/> <br /> <br />
            <input type="password" name='pw'  placeholder='password' /><br /> <br />
        </form>
        <button onClick={()=>{
            console.log(values);
        }}>Click me</button>
    </div>
  )
}


