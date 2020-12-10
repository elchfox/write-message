/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState,useEffect} from "react";
import { Input, Button, message  } from 'antd';
import Account from "../modules/Account";
import Messages from "../modules/Messages";
const { TextArea } = Input;

  

const  SendMessage  = () => {
  const [username, setUsername] = useState(null);
    const [Message, setMessage] = useState(null);
    const [Users, setUsers] = useState([]);
    const [subject, setSubject] = useState(null);
    const [receiverId, setreceiverId] = useState(null);
    const [Error, setError] = useState(null);
    const [userselect, setUserselect] = useState(null);

    const findUser = async (name) => {
      let res = await Account.FindUser(name);
      setUsers(res)
    };
    
    const onSubmit = async () => {
      if(Message.length > 0 && receiverId !== null){
              Messages.createNew({subject,message:Message,receiverId,senderId:global.userId});
              setUsername(null)
              setMessage(null)
              setSubject(null)
              setreceiverId(null)
              setUsers([])
      }
    };
    return (
      <form>
      <Input placeholder="Search User To Send Message" value={userselect}
      onChange={(e)=> findUser(e.target.value)} />
      <div className="search">
          {Users.map((item)=>
                  item._id !== global.userId && 
                  <div className="user" onClick={()=>  {setreceiverId(item._id)
                    setUserselect(item.username)
                    setUsers([])
                  }}>{item.username}</div>   
          )}
      </div>
      {receiverId !== null &&
      <>
      <Input placeholder="Subject" onChange={(e)=> setSubject(e.target.value)} />
      <TextArea rows={4}  placeholder="Message..."  onChange={(e)=> setMessage(e.target.value)}/>
      <Button type="primary" onClick={()=> onSubmit()}>Send</Button>
      </>}
      {Error !== null && <div>
                  {Error}
          </div>}
  </form>
    )
}

export default SendMessage