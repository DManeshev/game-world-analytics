import { MouseEvent, useState, useEffect } from 'react';
import { useGetGamesQuery, useGetGameQuery } from '../store/rawg/rawg.api';

import { useAppDispatch } from '../hooks/hooks';
import { addPlayedGame } from '../store/rawg/rawg.slice';

import Heading from "../components/ui/heading/Heading";
import Card from '../components/ui/cardGame/Card';
import Button from '../components/ui/button/Button';
import Loader from '../components/loader/Loader';
import Error from '../components/error/Error';

import '../components/ui/cardGame/card.style.css';

import metacriticPng from '../assets/images/Metacritic.svg.png';

const HomePage = () => {

    const [ id, setId ] = useState<number | null>(null);

    const { data = [], isLoading, error } = useGetGamesQuery();

    const { data: game } = useGetGameQuery(id, {
        skip: !id,
    });

    const dispatch = useAppDispatch();
    
    const handlePlayedGame = (event: MouseEvent, id: number) => {
        setId(id)
    }

    useEffect(() => {
        if (game) {
            dispatch(addPlayedGame(game))
        }
    }, [game])

    if (error) {
        if ('status' in error) {
            const errMsg = 'data' in error ? JSON.stringify(error.data) : error.error;
            const statusNum = 'originalStatus' in error ? error.originalStatus : null;

            return <Error message={errMsg} status={statusNum} />
        }
    }

    return (
        <>
            <Heading title='Games' />

            { isLoading && <Loader />}

            <div className="cards__games">
                { data?.map(item => 
                    <Card key={item.id}>
                        <img className='card__img' src={item.background_image} alt={item.slug} />
                        <div className='card__genres'>{item.genres[0].name}</div>
                        <div className='card__label'>
                            <div className='card__logo'>{item.name}</div>
                            <span className='card__label-span'>
                                <img src={metacriticPng} alt='metacritic' />
                                <div 
                                    className='card__raiting'
                                    style={item.metacritic > 65 ? {color: '#24CB8D'} : {color: '#FF4738'}}>
                                    {item.metacritic || '-'}
                                </div>
                            </span>
                        </div>
                        <div className='card__footer'>
                            <div>
                                {item.parent_platforms.map(({ platform }) =>
                                    <span 
                                        key={platform.id}
                                        className="card__platform"
                                    >{platform.name}</span>
                                )}
                            </div>
 
                            <Button 
                                title='Played'
                                handleClick={event => handlePlayedGame(event, item.id)}
                            />

                        </div>
                    </Card>
                )}
            </div>
        </>
    )
}

export default HomePage