import { FC, ReactNode } from 'react';
import './statistic.style.css';

type CardProps = {
    children: ReactNode,
    className?: string,
}

const StatCard:FC<CardProps> = ({ children, className = '' }) => {

    return (
        <div className={`stat ${className}`}>
            {children}
        </div>
    )
}

export default StatCard;