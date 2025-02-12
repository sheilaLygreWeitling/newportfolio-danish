import React from 'react'
import { FiGithub } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";


const SoMe = () => {
    return (
        <div className=''>
            <div className='flex text-2xl justify-center'>
                <div className='p-3'>
                    <a href="mailto:sheialygreweitling@gmail.com" target="_blank" rel="noreferrer"> <AiOutlineMail /></a>
                </div>
                <div className='p-3'>
                    <a href="tel:29928854" target="_blank" rel="noreferrer"> <AiFillPhone /></a>
                </div>
                <div className=' p-3'>
                    <a href="https://github.com/sheilaLygreWeitling" target="_blank" rel="noreferrer"><FiGithub /></a>
                </div>
                <div className='p-3'>
                    <a href="https://www.linkedin.com/in/sheila-lygre-weitling/" target="_blank" rel="noreferrer"> <AiFillLinkedin
                    /></a>
                </div>
            </div>
        </div>
    )
}

export default SoMe