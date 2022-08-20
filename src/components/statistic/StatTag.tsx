import { FC } from "react";

import StatCard from "../ui/cardGame/StatCard";
import StatLabel from "../ui/heading/StatLabel";

import { IGame } from '../../models/models';

const StatTag:FC<{data: IGame[]}> = ({ data }) => {

    const gameTagsNum = data.map(game => {
        return game.tags.length
    })

    const maxGameTags = Math.max(...gameTagsNum);

    const findGame = data.find(game => game.tags.length === maxGameTags);

    return (
        <StatCard>
            <StatLabel label='Most tags in the game' />

            {findGame &&
                <>
                    <div className="stat__descr">{findGame.name}</div>
                    <div className="stat__value">{findGame.tags.length}</div>
                </>
            }
        </StatCard>
    )
}

export default StatTag