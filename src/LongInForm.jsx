import React from 'react'
import { useState } from 'react/cjs/react.production.min'
import { axios } from "axios";


const LongInForm = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {

    }
    
  return (
    <div className='wrapper'>
      <div className='form'>
          <h1 className='title'> Chat Application</h1>
          <form onSubmit={handleSubmit} >
                <input type="text" value={usename} onChange={(e) => setUserName(e.target.value)} className="input" placeholder='Username' required/>
                <input type="password" value={password} onChange={(e) => setUserPassword(e.target.value)} className="input" placeholder='Password' required/>
                <input/>
                <div style={}></div>
          </form>

      </div>
    </div>
    
  )
}

export default LongInForm;
