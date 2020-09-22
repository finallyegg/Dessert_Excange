import React from "react";
import "../App.css";
import Amplify from "aws-amplify";
import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignOut,
  AmplifySignUp,
  AmplifyConfirmSignUp,
} from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

const AuthStateApp = () => {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();
  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <div className="App">
      {/* <AmplifyGreetings
        username={user.attributes.preferred_username}
      ></AmplifyGreetings> */}
      <div class="welcome">
        <p>当前登录的用户为： {user.attributes.preferred_username}</p>
      </div>
      <button>
        <AmplifySignOut />
      </button>
    </div>
  ) : (
    <AmplifyAuthenticator>
      <AmplifySignUp
        headerText="Hello, Please Sign up!"
        slot="sign-up"
        formFields={[
          {
            type: "username",
            label: "Email",
            placeholder: "Enter your email address",
            required: true,
          },
          {
            type: "preferred_username",
            label: "Preferred_username",
            placeholder: "Enter Your Preferred_username",
            required: true,
          },
          {
            type: "password",
            label: "Password",
            placeholder:
              "8-16 Characters, Upper and lower cases with special chacter",
            required: true,
          },
          {
            type: "phone_number",
            label: "Phone number",
            placeholder: "Enter Your Phone number",
            required: true,
          },
          {
            type: "custom:location",
            label: "Location",
            placeholder:
              "We will use this location to give you best match results!",
            required: false,
          },
        ]}
      />
      <AmplifySignIn
        headerText="My Custom Sign In Text"
        slot="sign-in"
        formFields={[
          {
            type: "username",
            label: "Email",
            placeholder: "Enter your email address",
            required: true,
          },
          {
            type: "password",
            label: "Password",
            placeholder: "Enter your password",
            required: true,
          },
        ]}
      ></AmplifySignIn>
      <AmplifyConfirmSignUp
        headerText="Thanks, please checking your mail enter your auth code!"
        slot="confirm-sign-up"
      ></AmplifyConfirmSignUp>
    </AmplifyAuthenticator>
  );
};

export default AuthStateApp;
