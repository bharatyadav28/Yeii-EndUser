import React from "react";
import ClientAuth from "./ClientAuth";

const AuthPage = ({ children, route, heading, showHeader, className }) => {
  return (
    <div
      className={`w-full flex flex-col !h-screen bg-[url('/profile-main-bg.png')] bg-cover bg-center ${className}`}
    >
      <div className="w-full h-full px-6 py-5 flex flex-col">
        <ClientAuth route={route} heading={heading} showHeader={showHeader}>
          {children}
        </ClientAuth>
      </div>
    </div>
  );
};

export default AuthPage;
