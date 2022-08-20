import { FC } from 'react';
import { motion } from 'framer-motion';
import { useProgressAnimate } from './useProgressAnimate';

import './progressBar.style.css';

const ProgressBar:FC<{percent: number}> = ({ percent }) => {

    const { variants } = useProgressAnimate(percent);

    return (
        <div className="circle-wrap">
            <div className="circle">
                <motion.div className="mask full" {...variants}>
                    <motion.div 
                        className="fill" 
                        {...variants}></motion.div>
                </motion.div>
                <div className="mask half">
                    <motion.div className="fill" {...variants}></motion.div>
                </div>
                <div className="inside-circle">{percent}%</div>
            </div>
        </div>
    )
}

export default ProgressBar