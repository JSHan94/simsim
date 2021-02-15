import React,{useState,useEffect} from 'react';
import {dbService} from "fbase";
import FriendState from 'components/FriendState';
const FriendStates = ()=>{

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

    return (
        <div className="container">
            <span className="textBox">
                지금 '심심해요'를 누른 친구들
            </span>
            {
                states.map((feeling)=>(
                    <FriendState feelingObj = {feeling}/>
                ))
            }
        </div>
    )
}

export default FriendStates;