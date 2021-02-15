import React, {useState } from "react";
import {  dbService} from "fbase";

const BoringButton = ({userObj}) =>{
  const checkedColor = "#48A8C6 "
  const uncheckedColor = "white"
  const [boringColor,setBoringColor] = useState(checkedColor)
  const [notBoringColor, setNotBoringColor] = useState(uncheckedColor)

  const addState = (feeling) =>{
    try {
      dbService
        .collection("states")
        .doc(userObj.uid)
        .get()
        .then(doc=>{
          if (!doc.data()){
            /* No data*/
            dbService
              .collection("states")
              .doc(userObj.uid)
              .set({
                state : feeling,
                createdAt: Date.now(),
                name : userObj.displayName
              })
          }else{
            /* Data Exist */
            dbService.doc(`states/${userObj.uid}`).update({
              state : feeling,
              createdAt: Date.now(),
              name : userObj.displayName
            })
          }
        })
    }catch(error){
      console.log(error)
    }
  }
  const onBoringClick =async (event)=>{
    setBoringColor(checkedColor)
    setNotBoringColor(uncheckedColor)
    addState("Boring")    
  }
  const onNotBoringClick =async(event)=>{
    setBoringColor(uncheckedColor)
    setNotBoringColor(checkedColor)
    addState("NotBoring")
  }


  return (
    <div >
      <span>지금 심심한가요?</span>
      <div className="boringBox">
        <button className="boringBtn" style={{color : notBoringColor, backgroundColor : boringColor}} onClick={onBoringClick}>심심해</button>
        <button className="boringBtn" style={{color : boringColor, backgroundColor : notBoringColor}} onClick={onNotBoringClick}>괜찮아</button>
      </div>
    </div>
  )
}

export default BoringButton;