import { FC } from "react";

const StatLabel:FC<{label: string}> = ({ label }) => {

    return (
        <h2 className="stat__label">{label}</h2>
    )
}

export default StatLabel;