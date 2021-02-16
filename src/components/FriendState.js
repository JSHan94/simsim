import React from "react";
import HashTag from "./HashTag";

//심심함 카드 보여주는 코드

const FriendState =({stateObj,index})=>{
    const state = stateObj.state
    const name = stateObj.name
    var tags = null
    if (stateObj.tag !== undefined){
        
        tags = stateObj.tag.filter(v=>v!=="").map(
            value =>
                (<HashTag tag={value}></HashTag>)   
        )
        console.log(tags)
    }

    var boring = false
    if (state ==="Boring"){
        boring = true
    }
    return(
        <div>
            {
                boring ? (
                <div className="state">
                    {name}
                    <div className="tag">
                        {tags}
                    </div>
                </div>
                ):(
                <>
                </>
                )
            }
            
        </div>
    )
}

export default FriendState;