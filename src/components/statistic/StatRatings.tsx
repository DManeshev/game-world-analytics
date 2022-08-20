import { FC, useState, ChangeEvent } from "react";

import StatCard from "../ui/cardGame/StatCard";
import StatLabel from "../ui/heading/StatLabel";
import ProgressBar from "../progress-bar/ProgressBar";

import { IGame } from '../../models/models';

const StatRating:FC<{data: IGame[]}> = ({ data }) => {

    const [ value, setValue ] = useState<number | string>(data[0].id)

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setValue(event.target.value)
    }

    const gameFiltered = data.filter(game => game.id === Number(value));

    const NUMBER_OF_RECOMMENDED = 4;

    const gameFilteredRating = gameFiltered[0].ratings.filter(rating => rating.id === NUMBER_OF_RECOMMENDED);

    return (
        <StatCard className='stat--justify'>
            <StatLabel label="Recommendation rating" />

            <select
                className="stat__select"
                name="game"
                value={value}
                onChange={e => handleChange(e)}>
                {data?.map(game =>
                    <option value={game.id} key={game.id}>{game.name}</option>
                )}
            </select>

            <div>
                <ProgressBar percent={gameFilteredRating[0].percent} />
            </div>
        </StatCard>
    )
}

export default StatRating;