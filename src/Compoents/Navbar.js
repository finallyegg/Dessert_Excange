import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { Link, NavLink } from "react-router-dom";

const Authbar = () => {
  const [is_signedIn, setsignedIn] = useState(false);
  useEffect(() => {
    Auth.currentAuthenticatedUser().then(
      (result) => {
        console.log(result.attributes.preferred_username);
        setsignedIn(true);
      },
      (err) => {
        console.log(err);
        setsignedIn(false);
      }
    );
  });

  return is_signedIn ? (
    <div className="s">
      <span>
        Hello! <Link to="/auth">You are signedIn, Signed out?</Link>
      </span>
    </div>
  ) : (
    <NavLink to="/auth">Click Here to signIn</NavLink>
  );
};

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a href="/">HomeBaker!</a>
        <ul className="right">
          <Authbar />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
