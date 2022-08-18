import { FC } from "react";

import StatCard from "./StatCard";
import StatLabel from "../ui/heading/StatLabel";

import { IGame } from '../../models/models';

const StatMeta:FC<{data: IGame[]}> = ({ data }) => {
    
    const gameMetaNum = data.map(game => {
        return game.metacritic
    })

    const maxGameMeta = Math.max(...gameMetaNum);

    const findGame = data.find(game => game.metacritic === maxGameMeta);

    return (
        <StatCard>
            <StatLabel label="Highest rating on Metacritic" />

            {findGame &&
                <>
                    <div className="stat__descr">{findGame.name}</div>
                    <div className="stat__value">{findGame.metacritic}</div>
                </>
            }
        </StatCard>
    )
}

export default StatMeta;