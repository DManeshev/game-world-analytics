import { MotionProps } from "framer-motion";

export const useProgressAnimate = (percent: number) => {

    const num = ((360 / 100) * percent) / 2;

    const variants:MotionProps = {
        initial: {
            rotate: 0
        },
        whileInView: {
            rotate: `${num}deg`,
            transition: { type: 'easeInOut', duration: 2 }
        }
    }

    return { variants }
}