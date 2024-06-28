import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

export default function Header() {
  return (
    <header className="w-full">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logotype.svg"
            alt="logo"
            width={98}
            height={26}
            className="object-contain"
          />
        </Link>
        <Button>Sign in</Button>
      </nav>
    </header>
  );
}
