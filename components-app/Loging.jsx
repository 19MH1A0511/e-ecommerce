import React,{ useState} from "react";

const Login =() => {
    const [username,setUsername] = useState();
    const [password, setPassword] = useState();

    const onSubmitHandle = (e) => {
        e.preventDefault(username);
        alert("your are submit details"`${username}`);  
    }
    const onChangeHandle = (e) => {
        setUsername(e.target.value);
        
    }
    const handleChange = (e) => {
        setPassword(e.target.value);
    }
    return(
        <div>
            <form onClick={onSubmitHandle}>
                <label>usernames</label>
                <input type="text" value={username} onChange={onChangeHandle}  /><br />
                <label>Password</label>
                <input type ="password" value={password}  onChange={handleChange}/><br />
                <button type="submit" >Submit</button>
            </form>
        </div>
   )
}
export default Login;