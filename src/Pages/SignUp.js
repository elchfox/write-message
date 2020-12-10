/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from "react";
import { Input, Button } from 'antd';
import Account from "../modules/Account";
import Auth from "../Helper/Auth";
import { Redirect } from "react-router-dom";

const  SignUp  = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [Error, setError] = useState(null);
    const [path, setPath] = useState(null);

    const onSubmit =  async () => {
        if(username.length > 3){
            if(password.length > 3){
                await Account.SignUp({username,password})
                let res = await Auth.signin(username,password)
                Auth.setLocal(res);
                setPath('/')   
            }else{
                setError("Password most be more then 3")
            }

        }else{
            setError("User Name most be more then 3")
        }
      };
    
    return (
    <div className="wapper signup">
        <form>
            <Input placeholder="User name" onChange={(e)=> setUsername(e.target.value)} />
            <Input placeholder="Password" type="password"  onChange={(e)=> setPassword(e.target.value)} />
            <Button type="primary" onClick={()=> onSubmit()}>SignUp</Button>
            {Error !== null && <div>
                        {Error}
                </div>}
        </form>
        {path !== null && <Redirect to={{pathname:path}}/>}

    </div>
    )
}

export default SignUp