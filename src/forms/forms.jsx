import React,{useState} from 'react'

export default function Forms() {
    let [values,setvalues] = useState({
        uname:"",
        pw:""
    });
    let handleValues =(e)=>{
        let {name,value}=e.target
        setvalues({
            ...values,
            [name]:value

        })
    }
    
  return (
    <div>
        <form action="">
            <input type="text" name='uname' value={values.uname} onChange={handleValues} placeholder='username'/> <br /> <br />
            <input type="password" name='pw' value={values.pw}  onChange={handleValues} placeholder='password' /><br /> <br />
        </form>
        <button onClick={()=>{
            console.log(values);
        }}>Click me</button>
    </div>
  )
}


