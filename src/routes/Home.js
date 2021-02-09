import React,{useState,useEffect} from 'react';
import {dbService,storageService} from "fbase";
import BoringButton from 'components/BoringButton';
import FriendState from 'components/FriendState';


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
        <div style={{marginTop : 30}}>
            {
                states.map((feeling)=>(
                    <FriendState feelingObj = {feeling}/>
                ))
            }
        </div>
        {/* <NweetFactory userObj={userObj}/>
        <div style={{marginTop : 30}}>
            {
                nweets.map((nweet)=>(
                    <Nweet key={nweet.id} nweetObj={nweet} isOwner={nweet.creatorId === userObj.uid}/> 
                ))
            }
        </div> */}
    </div>
    )
}
export default Home;