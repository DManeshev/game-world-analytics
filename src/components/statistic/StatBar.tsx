import { FC } from 'react';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';

import StatCard from './StatCard';
import StatLabel from "../ui/heading/StatLabel";

import { optionsBar } from './options';
import { IGame } from '../../models/models';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
);

const StatBar:FC<{labels: string[], data: IGame[]}> = ({ labels, data }) => {

    const stat = {
        labels,
        datasets: [{
            label: '',
            data: data.map(item => item.reviews_count),
            backgroundColor: '#6F6EFF',
            barThickness: 50,
            borderRadius: 15,
            borderSkipped: false,
        }],
    }

    return (
        <StatCard className='stat__bar'>
            <StatLabel label='Review on RAWG.IO' />
            {/* @ts-ignore*/}
            <Bar options={optionsBar} data={stat}/>
        </StatCard>
    )
}

export default StatBar;