import React, { useState, useEffect } from "react";
import Image from "next/image";

const PasswordProtection = ({ password, children }) => {
  const [inputPassword, setInputPassword] = useState("");

  useEffect(() => {
    const storedPassword = localStorage.getItem("password");
    if (storedPassword) {
      setInputPassword(storedPassword);
    }
  }, []);

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setInputPassword(newPassword);
    localStorage.setItem("password", newPassword);
  };

  return (
    <div>
      {inputPassword === password ? (
        // Password is correct, show the protected content
        children
      ) : (
        <div className=" flex flex-col items-center h-screen w-screen bg-gradient-to-b from-[#020224] to-primary ">
          <form>
            <input
              className="mt-10 w-full border-2 border-gray-500 py-2 px-3 bg-[#000a23] text-white rounded-md"
              placeholder="Enter password"
              type="password"
              value={inputPassword}
              onChange={handlePasswordChange}
            />
          </form>
          <div className="mt-40">
            <Image
              src="/logo-white-final.png"
              width={448}
              height={56}
              priority
            />
            <p className="mt-4 text-2xl text-white font-medium text-center">
              USA Website Launching Soon!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PasswordProtection;
