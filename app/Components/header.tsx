'use client'
import Link from "next/link";

const Header: React.FC = () => {

    return(
        <header className="sticky flex flex-row items-center justify-between sm:justify-around mx-auto p-4 bg-white top-0 flew-grow shadow z-20 w-auto">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="\autoserve-logo.png" className="h-10" />
          </a>
        </header>
    )
}

export default Header;