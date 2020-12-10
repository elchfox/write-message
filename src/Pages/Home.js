/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState,useEffect} from "react";
import {Tabs} from 'antd';
import Account from "../modules/Account";

import Receiver from "../components/Receiver";
import Sent from "../components/Sent";
import SendMessage from "../components/SendMessage";

const { TabPane } = Tabs;


const  Home  = () => {
  
  

    
      
    return (
    <div className="wapper signup">
        <div className="float-send"> 
        <SendMessage/>
        </div>
        <Tabs defaultActiveKey="1" style={{width:"80%"}}>
            <TabPane tab="Receiver" key="1">
                <Receiver/>
            </TabPane>
            <TabPane tab="Sent" key="2">
                <Sent/>
            </TabPane>
        </Tabs>
    </div>
    )
}

export default Home