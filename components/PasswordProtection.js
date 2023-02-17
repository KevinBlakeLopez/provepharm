import React, { useState } from "react";

const PasswordProtection = ({ password, children }) => {
  const [inputPassword, setInputPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputPassword === password) {
      // Password is correct, show the protected content
      setInputPassword("");
    } else {
      // Password is incorrect, clear the input field
      setInputPassword("");
      alert("Incorrect password, please try again.");
    }
  };

  return (
    <div>
      {inputPassword === password ? (
        // Password is correct, show the protected content
        children
      ) : (
        // Password is not correct, show the password form
        <div className="flex justify-center ">
          <form onSubmit={handleSubmit}>
            <input
              className="mt-20 border-2 border-primary p-2"
              placeholder="Enter password"
              type="password"
              value={inputPassword}
              onChange={(event) => setInputPassword(event.target.value)}
            />

            <button className="border-2 border-primary p-2 ml-2" type="submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PasswordProtection;
