import React from "react";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faHome } from "@fortawesome/free-solid-svg-icons";

// 프로필, 홈 화면 선택
const Navigation = ({userObj}) => (
    
    <nav>
        <ul style={{display:"flex", justifyContent:"center",marginTop:50}}>
            <li>
                <Link to="/" 
                    style={{
                        marginRight:30,
                        display:"flex",
                        flexDirection:"column",
                        alignItems:"center",
                        fontSize:12
                    }}>
                    <FontAwesomeIcon icon={faHome} color={"#48A8C6"} size="2x"/>
                    <span style={{marginTop:10}}>
                        홈
                    </span>
                </Link>
            </li>
            <li>
                <Link 
                    to="/profile"
                    style={{
                        marginLeft:30,
                        display:"flex",
                        flexDirection:"column",
                        alignItems:"center",
                        fontSize:12
                    }}>
                    <FontAwesomeIcon icon={faUser} color={"#48A8C6"} size = "2x"/>
                    <span style={{marginTop:10}}>
                        프로필
                    </span>
                </Link>
            </li>
        </ul>
    </nav>
);

export default Navigation;
