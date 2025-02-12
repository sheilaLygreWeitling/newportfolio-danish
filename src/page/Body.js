import React from 'react'
import Header from '../assets/components/frontPage/header/Header'
import Main from '../assets/components/frontPage/main/Main'

const Body = () => {
    return (
        <div className='bg-primary text-primary '>
            <header>
                <Header />
            </header>
            <main>
                <Main />
            </main>
        </div >
    )
}

export default Body