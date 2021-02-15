import React from 'react'
import {dbService} from "fbase";

const HashTagForm = ({userObj}) =>{

    const addTag =()=>{
        try{
            dbService
             .collection("tags")
             .doc

        }
    }

    return(
        <div>
            <span>
                뭐 하고 놀까요?
            </span>
            <form className="hashBox">                
                <input className="hashInput" type="text" />
                <input className="hashInput hashSubmit" type="submit" value="등록" />
            </form>
        </div>
        
    )
}

export default HashTagForm;