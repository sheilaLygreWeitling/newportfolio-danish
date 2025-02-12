import React from 'react'
import { FiGithub } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";

const SectionRight = () => {

    return (
        <div>
            <div className='flex gap-14 md:flex-row lg:flex-row xl:flex-col'>
                <div className='pb-3'>
                    <a href="mailto:sheilalygreweitling@gmail.com" target="_blank" rel="noreferrer"> <AiOutlineMail /></a>
                </div>
                <div className=' pb-3'>
                    <a href="tel:29928854" target="_blank" rel="noreferrer"> <AiFillPhone /></a>
                </div>
                <div className=' pb-3'>
                    <a href="https://github.com/sheilaLygreWeitling" target="_blank" rel="noreferrer"><FiGithub /></a>
                </div>
                <div className='pb-3'>
                    <a href="https://www.linkedin.com/in/sheila-lygre-weitling/" target="_blank" rel="noreferrer"> <AiFillLinkedin /></a>
                </div>
            </div>
        </div>
    )
}

export default SectionRight