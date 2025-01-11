import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex bg-black p-10">
      <Link href={"/"}>
        <h1 className="text-white text-3xl font-semibold">Recipe App</h1>
      </Link>
    </div>
  );
}

export default Header;
