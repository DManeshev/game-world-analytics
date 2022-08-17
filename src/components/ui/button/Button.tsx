import { MouseEvent, forwardRef } from 'react';

import './button.style.css';

type ButtonProps = { 
    title: string,
    className?: string,
    handleClick: (event: MouseEvent<HTMLButtonElement>) => void,
};

type RefBtn = HTMLButtonElement

const Button = forwardRef<RefBtn, ButtonProps>(({ title, className = '', handleClick }, ref) => {

    return (
        <button 
            className={`btn ${className}`}
            onClick={event => handleClick(event)}
            ref={ref}
            >
            <span>{title}</span>
        </button>
    )
})

    

export default Button;