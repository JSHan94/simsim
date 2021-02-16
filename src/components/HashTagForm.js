import React from 'react'
import {dbService,firebaseInstance} from "fbase";
import { useState } from 'react/cjs/react.development';

const HashTagForm = ({userObj}) =>{
    const [hashTag, setHashTag] = useState()

    const addTag =()=>{
        try{
            dbService
             .collection("states")
             .doc(userObj.uid)
             .get()
             .then(doc=>{
                 if(!doc.data()){
                    dbService
                     .collection(userObj.uid)
                     .set({
                        tag : hashTag
                     })
                 }else{
                    dbService.doc(`states/${userObj.uid}`)
                     .update({
                        tag : firebaseInstance.firestore.FieldValue.arrayUnion(hashTag)
                     })
                 }
             })
        }catch(error){
            console.log(error)
        }
    }
    const onChangeTag = (event) =>{
        const {
            target : {value},
        } =event;
        setHashTag(value)
    }
    const onSubmitTag = (event) =>{
        addTag()
    }
    return(
        <div>
            <span>
                뭐 하고 놀까요?
            </span>
            <form className="hashBox">                
                <input className="hashInput" type="text" value={hashTag} onChange={onChangeTag}/>
                <input className="hashInput hashSubmit" onClick={onSubmitTag} type="submit" value="등록"/>
            </form>
        </div>
        
    )
}

export default HashTagForm;