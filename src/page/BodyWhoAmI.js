import React from 'react'
import Header from '../assets/components/frontPage/header/Header'
import MainWhoAmI from '../assets/components/whoAmI/main/MainWhoAmI'


const BodyWhoAmI = () => {
    return (
        <div className="bg-primary text-primary">
            <header>
                <Header />
            </header>
            <main>
                <MainWhoAmI />
            </main>
        </div >
    )
}

export default BodyWhoAmI