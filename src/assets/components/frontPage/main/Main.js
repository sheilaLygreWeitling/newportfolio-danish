import { motion } from 'framer-motion'
import React from 'react'
import Section from '../section/Section'
import SectionLeft from '../section/SectionLeft'
import SectionRight from '../section/SectionRight'


const Main = () => {

    const fadeVariants = {
        hidden: { opacity: 0 },
        shown: {
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
    };


    return (
        <div className=''>
            <motion.div initial="hidden" animate="shown" variants={fadeVariants}>
                <main className='md:flex md:flex-col lg:flex lg:flex-col xl:flex xl:flex-row'>
                    <section className=' border-[1px] p-5 m-9  rounded-xl bg-secondary text-accent border-primary'>
                        <SectionLeft />
                    </section>
                    <section className=' border-[1px] p-5 m-9  rounded-xl bg-secondary text-accent border-primary'>
                        <div>
                            <Section />
                        </div>
                    </section>
                    <section className=' border-[1px] p-5 m-9  rounded-xl bg-secondary text-accent border-primary'>
                        <SectionRight />
                    </section>
                </main>
            </motion.div>
        </div >
    )
}

export default Main