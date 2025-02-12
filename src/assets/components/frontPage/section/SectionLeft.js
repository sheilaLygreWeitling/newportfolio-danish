import React from 'react'
import { BsDot } from "react-icons/bs";

const SectionLeft = () => {
    return (
        <div>
            <div className='justify-between md:flex lg:flex xl:flex xl:flex-col'>
                <div>
                    <p className='AsideLeft__p'>
                        Sheila Lygre Weitling
                    </p>
                </div>
                <br />
                <div className='hidden md:block'>
                    <BsDot />
                </div>
                <br />
                <div>
                    <p className='AsideLeft__p'>
                        Junior udvikler
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SectionLeft