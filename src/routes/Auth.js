import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGoogle,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { analyticService, authService, firebaseInstance} from "fbase";
import AuthForm from "components/AuthForm";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import FriendStates from 'components/FriendStates';
const Auth = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "facebook") {
      provider = new firebaseInstance.auth.FacebookAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };
  return (
    <div className="authContainer">
      <FontAwesomeIcon
        icon={faCheckCircle}
        color={"#04AAFF"}
        size="3x"
        style={{ marginBottom: 30 }}
      />
      {/* <AuthForm /> */}
      심심 레이더
      <div>
        <button onClick={onSocialClick} name="google" className="authBtn">
          Google 계정으로 시작 <FontAwesomeIcon icon={faGoogle} />
        </button>
        <button onClick={onSocialClick} name="facebook" className="authBtn">
          Facebook 계정으로 시작 <FontAwesomeIcon icon={faFacebook} />
        </button>
      </div>
    </div>
  );
};
export default Auth;