import { MouseEvent } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

import { deletePlayedGame } from "../store/rawg/rawg.slice";

import Heading from "../components/ui/heading/Heading";
import Card from "../components/ui/cardGame/Card";
import Button from '../components/ui/button/Button';

import '../components/ui/cardGame/card.style.css';

const PlayedPage = () => {

    const playedGames = useAppSelector(state => state.rawg.playedGames);

    const dispatch = useAppDispatch();

    const handleDeleteGame = (event: MouseEvent, id: number) => {
        dispatch(deletePlayedGame(id))
    }

    return (
        <>
            <Heading title="Played Games" />

            <div className="cards__games">
                {playedGames && playedGames.map(game => 
                    <Card key={game.id}>
                        <img className='card__img' src={game.background_image} alt={game.slug} />
                            <div className='card__label'>
                                <div className='card__logo'>{game.name}</div>
                            </div>
                            <a 
                                href={game.website}
                                className="card__link"
                                target="_blank">
                                {game.website}
                            </a>
                            <div className='card__footer'> 
                                <Button 
                                    title="Delete"
                                    className="btn--delete"
                                    handleClick={event => handleDeleteGame(event, game.id)} />
                            </div>
                    </Card>
                )}
            </div>
        </>
    )
}

export default PlayedPage;