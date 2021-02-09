import React, { useState } from "react";

//심심함 카드 보여주는 코드

const FriendState =({feelingObj})=>{
    const state = feelingObj.state
    const name = feelingObj.name
    var boring = false
    if (state ==="Boring"){
        boring = true
    }
    return(
        <div>
            {
                boring ? (
                <div className="nweet">
                 {name} 심심합니다
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