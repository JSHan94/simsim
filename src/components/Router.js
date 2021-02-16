import React from "react";
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile"
import Navigation from "components/Navigation";

//{isLoggedIn && <Navigation/>}

const AppRouter = ({refreshUser, isLoggedIn, userObj}) => {
    
    return (
        <Router>
            {isLoggedIn && <Navigation userObj={userObj}/>}
            <Switch>
                <>
                {isLoggedIn
                ? (
                    <div
                        style={{
                            maxWidth:890,
                            width:"100%",
                            margin:"0 auto",
                            marginTop:80,
                            display:"flex",
                            justifyContent:"center",
                        }}>
                        <Route exact path = "/" render={()=><Home userObj ={userObj}/>}/>
                        <Route exact path = "/profile" render = {()=><Profile userObj={userObj} refreshUser={refreshUser}/>}/>
                        <Redirect from="*" to="/"/>
                    </div>
                ) : 
                (
                    <>
                        <Route exact path = "/" component={Auth}/>
                        <Redirect from="*" to="/" />
                    </>
                )
                }
                </>
            </Switch>
        </Router>
    );
};

export default AppRouter;

