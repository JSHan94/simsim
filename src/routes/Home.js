import React,{useState,useEffect} from 'react';
import {dbService} from "fbase";
import BoringButton from 'components/BoringButton';

import FriendStates from 'components/FriendStates';
import HashTagForm from 'components/HashTagForm';


const Home =  ({userObj}) =>{

    return(
    <div className="container">
        
        <BoringButton userObj={userObj}></BoringButton>
        
        <HashTagForm userObj={userObj}></HashTagForm>
        
        <FriendStates></FriendStates>

    </div>
    )
}
export default Home;