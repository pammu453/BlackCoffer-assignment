import { Card, Tooltip } from 'flowbite-react';
import React from 'react';
import { Radar } from 'react-chartjs-2';

const MultiMetricRadarChart = ({ data }) => {

    const sectors = {};

    data.forEach(item => {
        if (!sectors[item.sector]) {
            sectors[item.sector] = { intensity: 0, likelihood: 0, relevance: 0 };
        }
        sectors[item.sector].intensity += item.intensity || 0;
        sectors[item.sector].likelihood += item.likelihood || 0;
        sectors[item.sector].relevance += item.relevance || 0;
    });

    const chartData = {
        labels: Object.keys(sectors),
        datasets: [
            {
                label: 'Intensity',
                data: Object.values(sectors).map(s => s.intensity),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
            },
            {
                label: 'Likelihood',
                data: Object.values(sectors).map(s => s.likelihood),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
            },
            {
                label: 'Relevance',
                data: Object.values(sectors).map(s => s.relevance),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
            },
        ],
    };

    return (
        <Card style={{ maxWidth: '50%', margin: '0 auto' }}>
            <Tooltip content="Intensity, Likelihood, Relevance across different sectors">
                <Radar
                    data={chartData}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false
                    }}
                    style={{ width: '200%', height: '400px' }}
                />
            </Tooltip>
        </Card>
    );
};

export default MultiMetricRadarChart;
