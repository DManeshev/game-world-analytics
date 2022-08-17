import { FC, ReactNode } from "react";

import './card.style.css';

type Props = { children: ReactNode };

const Card: FC<Props> = ({ children }) => {

    return (
        <div className="card">
            {children}
        </div>
    )
}

export default Card;