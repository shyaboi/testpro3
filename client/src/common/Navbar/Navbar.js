import React from "react";
import { useAuth0 } from "../../utils/auth0Provider";

function Navbar() {
  const { isAuthenticated, loading, loginWithPopup, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && !loading ? (
        <button onClick={() => loginWithPopup()}>Sign In</button>
      ) : (
        <button onClick={() => logout()}>Sign Out</button>
      )}
    </div>
  );
}

export default Navbar;
