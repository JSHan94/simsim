import React,{useState,useEffect} from 'react';
import {dbService} from "fbase";
import BoringButton from 'components/BoringButton';

import FriendStates from 'components/FriendStates';
import HashTagForm from 'components/HashTagForm';


const Home =  ({userObj}) =>{
    
    const [states, setStates] = useState([])

    useEffect(()=>{
        dbService.collection("states").onSnapshot((snapshot)=>{
            const stateArray = snapshot.docs.map((doc) =>({
                id : doc.id,
                ...doc.data()
            }))

            setStates(stateArray)
        })
    },[])
    return(
    <div className="container">
        
        <BoringButton userObj={userObj}></BoringButton>
        
        <HashTagForm userObj={userObj}></HashTagForm>
        
        <FriendStates></FriendStates>

    </div>
    )
}
export default Home;