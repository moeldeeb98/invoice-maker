import React from "react";
import MultiLang from "../MultiLang";
function Header() {
  return (
    <div className="flex items-center justify-between mb-5">
      <div>
        <img
          src="images/logo.png"
          className="md:w-20 w-10"
          alt="INVOICE MAKER"
        />
      </div>
      <div
        style={{ color: "#5139B8" }}
        className="font-bold md:text-3xl text-sm"
      >
        INVOICE MAKER
      </div>
      <div>
        <MultiLang />
      </div>
    </div>
  );
}

export default Header;
