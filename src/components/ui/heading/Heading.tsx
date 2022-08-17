import { FC } from 'react';

import './heading.style.css';

const Heading: FC<{
    title: string, 
    className?: string
}>  = ({ title, className = ''} ) => {
    return (
        <h2 className={`main__title ${className}`}>
            {title}
        </h2>
    )
}

export default Heading;