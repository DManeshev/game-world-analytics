import { useGetGamesQuery } from '../store/rawg/rawg.api';

import Loader from '../components/loader/Loader';
import Error from '../components/error/Error';
import Heading from "../components/ui/heading/Heading";
import StatBar from '../components/statistic/StatBar';
import StatTag from '../components/statistic/StatTag';
import StatMeta from '../components/statistic/StatMeta';
import StatDate from '../components/statistic/StatDate';
import StatRating from '../components/statistic/StatRatings';

const StatisticsPage = () => {

    const { data = [], isLoading, error } = useGetGamesQuery();

    let labels: string[] = [];

    const NUMBER_OF_SLICE = 8;

    data.slice(0, NUMBER_OF_SLICE).forEach(item => labels.push(item.name));

    if (isLoading) return <Loader />

    if (error) {
        if ('status' in error) {
            const errMsg = 'data' in error ? JSON.stringify(error.data) : error.error;
            const statusNum = 'originalStatus' in error ? error.originalStatus : null;

            return <Error message={errMsg} status={statusNum} />
        }
    }

    return (
        <>
            <Heading title='Statistics' />

            <div className='stat__container'>
                <StatDate data={data} />
                <StatMeta data={data} />
                <StatTag data={data} />
                <StatRating data={data} />
                <StatBar 
                    labels={labels}
                    data={data} />
            </div>
        </>
    )
}

export default StatisticsPage