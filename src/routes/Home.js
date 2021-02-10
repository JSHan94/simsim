import React,{useState,useEffect} from 'react';
import {dbService,storageService} from "fbase";
import BoringButton from 'components/BoringButton';
import FriendState from 'components/FriendState';
import FriendStates from 'components/FriendStates';


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
        
        <input type="text" value="지금 심심한가요?" style={{marginBottom : 10}}></input>
        <BoringButton userObj={userObj}></BoringButton>
        
        <input type="text" value="지금 '심심해요'를 누른 친구들"
            style={{marginTop:30, marginBottom : 10}}></input>
        
        <FriendStates></FriendStates>
        {/* <div>
            {
                states.map((feeling)=>(
                    <FriendState feelingObj = {feeling}/>
                ))
            }
        </div> */}
    </div>
    )
}
export default Home;