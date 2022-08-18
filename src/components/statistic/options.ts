export const optionsBar = {
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