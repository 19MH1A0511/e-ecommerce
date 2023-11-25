import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './contact.css';

const Contact = () => {
    const { loginWithRedirect , logout, user, isAuthenticated} = useAuth0();
    const [users, setUser] = useState (
        {
            Name:'',Email:'',subject:'',Message:''
        }
    )
    let name, value
    const data = (e) =>{
        name = e.target.name;
        value = e.target.value;
        setUser({...users,[name]: value})
    }
    const senddate = async(e) => {
          const { Name,Email,subject,Message} =users
          e.preventDefault();
          const options = {
            method: 'POST',
            headers:{
                'Content-Type': 'applicaion/json'
            },
            body: JSON.stringify({
                Name,Email,subject,Message
            })
          }
          const res = await fetch ("https://e--commerce-5b383-default-rtdb.firebaseio.com/Message.json", options)
          console.log(res)
          if(res){
            alert('your Message sent')
          }
          else{
            alert('an error occured')
          }
    }
  return (
    <div>
      <div className='contact_container'>
        <div className='contant' >
            <h2># contact us</h2>
            <div className='form'>
                <form method='POST'>
                    <input type='text' name='Name' value={users.Name} placeholder='Enter your full Name' required autoComplete='off' onChange={data}/>
                    <input type='email' name='Email' value={users.Email}  placeholder='Enter your e-mail' autoComplete='off' onChange={data} />
                    <input type='text' name='subject' value={users.sub}  placeholder='Enter your Subject' autoComplete='off' onChange={data} />
                    <textarea name ='Message' value={users.Message}  placeholder='your Message' autoComplete='off' onChange={data} ></textarea>
                    {
                        isAuthenticated ?
                        <button type='submit' onClick={senddate} >send</button>
                        :<button type='submit' onClick={() => loginWithRedirect()} >Login to message</button>

                    }
                    
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
