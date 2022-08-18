import { useGetGamesQuery } from '../store/rawg/rawg.api';

import Heading from "../components/ui/heading/Heading";

import StatBar from '../components/statistic/StatBar';
import StatTag from '../components/statistic/StatTag';
import StatMeta from '../components/statistic/StatMeta';
import StatDate from '../components/statistic/StatDate';

const StatisticsPage = () => {

    const { data = [], isLoading, error } = useGetGamesQuery();

    let labels: string[] = [];

    const NUMBER_OF_SLICE = 8;

    data.slice(0, NUMBER_OF_SLICE).forEach(item => labels.push(item.name));
    
    return (
        <>
            <Heading title='Statistics' />

            <div className='stat__container'>
                <StatDate data={data} />
                <StatMeta data={data} />
                <StatTag data={data} />
                <StatBar 
                    labels={labels}
                    data={data} />
            </div>
        </>
    )
}

export default StatisticsPage