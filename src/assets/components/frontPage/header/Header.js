import React from 'react'
import { Link } from "react-router-dom";
import ToogleMode from '../../ToogleMode';
import { useState } from 'react';
import { CgMenu, CgClose } from "react-icons/cg";

const Header = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div>
            <div>
                <nav className=' border-b-[1px] border-black p-4 '>
                    <section className='lg:hidden bg-primary text-accent '>
                        <div onClick={() => setIsNavOpen((prev) => !prev)}>
                            <CgMenu />
                        </div>
                        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                            <div
                                className="absolute top-0 right-0 px-8 py-8"
                                onClick={() => setIsNavOpen(false)}
                            ><CgClose />
                            </div>
                            <ul className="flex flex-col items-center justify-between min-h-[250px] bg-primary text-accent">
                                <Link to="/">
                                    <li className="border-b border-gray-400 my-8 ">
                                        <button>Hjem</button>
                                    </li>
                                </Link>
                                <Link to="/About">
                                    <li className="border-b border-gray-400 my-8 ">
                                        <button>Om</button>
                                    </li>
                                </Link>
                                <li className=" my-8 uppercase">
                                    <ToogleMode />
                                </li>
                            </ul>
                        </div>
                    </section>

                    <ul className='lg:flex justify-evenly hidden'>
                        <li className=''>
                            <Link to="/"><button className='text-xl  border-b-2 rounded-sm '>
                                Hjem
                            </button></Link>
                        </li>
                        <li>
                            <Link to="/About"><button className=' border-b-2 rounded-sm'>
                                Om
                            </button></Link>
                        </li>
                        <ToogleMode />
                    </ul>

                </nav>
            </div>
        </div >
    )
}

export default Header