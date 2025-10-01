import { useState } from "react"
import { Button } from "./Button"
import { Link } from "react-router-dom"
export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl text-white">Resap<span className="text-[#df6853] font-bold">Resep</span></h1>
                <div className="lg:flex hidden flex-row items-center gap-5 text-lg font-light cursor-pointer text-white">
                    <Link to={"/"} className="focus:text-[#df6853] focus:font-bold">
                        Home
                    </Link>
                    <Link to={"/about"} className="focus:text-[#df6853] focus:font-bold">
                        About
                    </Link>
                    <Link to={"/contact-us"} className="focus:text-[#df6853] focus:font-bold">
                        Contact Us
                    </Link>
                </div>
                <div className=" hidden lg:flex gap-5">
                    <Button value="Sing In" style={"bg-[#df6853] text-white"} />
                    <Button value="Sing Out" style={"bg-[#df6853]/15 text-[#df6853]"} />
                </div>

                <div className="flex lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="#fff" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="flex flex-col bg-white shadow-sm border border-gray-300 p-5 rounded-xl mt-2 gap-5 lg:hidden ">
                    <div className="flex flex-col items-center gap-5 text-lg font-light cursor-pointer text-black">
                        <Link to={"/"} className="focus:text-[#df6853] focus:font-bold">
                            Home
                        </Link>
                        <Link className="focus:text-[#df6853] focus:font-bold">
                            About
                        </Link>
                        <Link className="focus:text-[#df6853] focus:font-bold">
                            Contact Us
                        </Link>
                    </div>
                    <div className="flex flex-col gap-5">
                        <Button value="Sing In" style={"bg-[#df6853] text-white"} />
                        <Button value="Sing Out" style={"bg-[#df6853]/15 text-[#df6853]"} />
                    </div>
                </div>
            )}
        </>
    )
}