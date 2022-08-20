import { FC } from "react";

import StatCard from "../ui/cardGame/StatCard";
import StatLabel from "../ui/heading/StatLabel";

import { IGame } from '../../models/models';

const StatDate:FC<{data: IGame[]}> = ({ data }) => {

    const gameDate = data.map(game => {
        return new Date(game.released)
    })

    const date = new Date();

    gameDate.sort((a, b) => {
        const distancea = Math.abs(date.getTime() - a.getTime());
        const distanceb = Math.abs(date.getTime() - b.getTime());

        return distancea - distanceb; 
    });


    const gameDateClosest = gameDate[0] && `${gameDate[0].getFullYear()}-${gameDate[0].getMonth() < 10 ? `0${gameDate[0].getMonth() + 1}` : gameDate[0].getMonth() + 1}-${gameDate[0].getDate() < 10 ? `0${gameDate[0].getDate()}` : gameDate[0].getDate()}`;
    
    const findGame = gameDateClosest && data.find(game => String(game.released) === gameDateClosest);
    
    return (
        <StatCard>
            <StatLabel label='The newest game' />

            {findGame &&
                <>
                    <div className="stat__descr">{findGame.name}</div>
                    <div className="stat__value">{String(findGame.released).split('-').join('.')}</div>
                </>
            }
        </StatCard>
    )
}

export default StatDate;