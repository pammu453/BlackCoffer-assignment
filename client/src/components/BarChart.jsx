import { Card } from 'flowbite-react';
import React from 'react';
import { Bar } from 'react-chartjs-2';

const MetricComparisonCharts = ({ data }) => {

    // Intensity vs. Sector
    const intensityBySector = {
        labels: data.map(item => item.sector),
        datasets: [
            {
                label: 'Intensity',
                data: data.map(item => item.intensity),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    // Likelihood vs. Topic
    const likelihoodByTopic = {
        labels: data.map(item => item.topic),
        datasets: [
            {
                label: 'Likelihood',
                data: data.map(item => item.likelihood),
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
            },
        ],
    };

    // Relevance vs. Region
    const relevanceByRegion = {
        labels: data.map(item => item.region || 'Unknown'),
        datasets: [
            {
                label: 'Relevance',
                data: data.map(item => item.relevance),
                backgroundColor: 'rgba(255, 159, 64, 0.6)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className='flex flex-col gap-4'>
            {/* Intensity vs. Sector */}
            <Card className='h-80'>
                <Bar
                    data={intensityBySector}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: { y: { beginAtZero: true } }
                    }}
                    height={200}
                />
                <h1 className='text-gray-700 text-center font-bold'> Intensity vs. Sector</h1>
            </Card>

            {/* Likelihood vs. Topic */}
            <Card className='h-80'>
                <Bar
                    data={likelihoodByTopic}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: { y: { beginAtZero: true } }
                    }}
                    height={200}
                />
                <h1 className='text-gray-700 text-center font-bold'> Likelihood vs. Topic</h1>
            </Card>

            {/* Relevance vs. Region */}
            <Card className='h-80'>
                <Bar
                    data={relevanceByRegion}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: { y: { beginAtZero: true } }
                    }}
                    height={200}
                />
                <h1 className='text-gray-700 text-center font-bold'>Relevance vs. Region</h1>
            </Card>
        </div>
    );
};

export default MetricComparisonCharts;
