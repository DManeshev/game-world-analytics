import { useGetGamesQuery } from '../store/rawg/rawg.api';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

import Heading from "../components/ui/heading/Heading";
import StatLabel from "../components/ui/heading/StatLabel";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
);

export const options = {
    responsive: true,
    plugins: { 
        tooltip: {
            yAlign: 'bottom',
            displayColors: false,
            backgroundColor: '#fff',
            titleColor: '#000',
            bodyAlign: 'center',
            bodyColor: '#000',
            bodyFont: {
                size: 12
            },
        }
    },
    scales: {
        x: {
            grid: {
                display: false,
                drawBorder: false
            },
            ticks: {
                font: {
                    family:'Roboto',
                    size: 7,
                    weight: 600,
                },
                color: 'white', 
            }
        },
        y: {
            grid: {
                display: false,
                drawBorder: false
            },
            ticks: {
                display: false
            }
        }
    },
};

const StatisticsPage = () => {

    const { data = [], isLoading, error } = useGetGamesQuery();

    let labels: string[] = [];

    data.slice(0, 8).forEach(item => labels.push(item.name))

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

    console.log(data)

    return (
        <>
            <Heading title='Statistics' />

            <div className='stat__bar'>
                <StatLabel label='Review on RAWG.IO' />
                {/* @ts-ignore*/}
                <Bar options={options} data={stat}/>
            </div>

        </>
    )
}

export default StatisticsPage