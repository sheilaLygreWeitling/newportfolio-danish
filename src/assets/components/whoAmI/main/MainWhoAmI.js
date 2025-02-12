import React from 'react'
import SectionWhoAmI from '../section/SectionWhoAmI'
import { motion } from 'framer-motion';

const MainWhoAmI = () => {
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
        <div className='flex'>
            <motion.div initial="hidden" animate="shown" variants={fadeVariants}>
                <div>
                    <SectionWhoAmI />
                </div>
            </motion.div>
        </div>

    )
}

export default MainWhoAmI