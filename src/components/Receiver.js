/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState,useEffect} from "react";
import { Input, Button} from 'antd';
import Account from "../modules/Account";
import Messages from "../modules/Messages";


const  Receiver  = () => {
  const [MessagesData, setMessages] = useState([]);


    
      useEffect(async () => {
        let userId = localStorage.getItem("userId");
      let res = await Messages.GetMessagesReceiver(userId);
      let message = res.length > 0 ? res[0].messages   : []
      setMessages(message)
      
    }, [])

    return (
      MessagesData.length > 0 ?

      MessagesData.map((item,index)=>
      <div className="box-message">
            <div className="theName"><b>From: </b> {item.account.username}</div>
            <div  className="theSubject"><b>subject: </b>
            {item.subject}
            </div>
            <div  className="theMessage"><b>message: </b>{item.message}</div>

      </div>
      ):null
    )
}

export default Receiver