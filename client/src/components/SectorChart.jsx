import { Card, Tooltip } from "flowbite-react";
import React from "react";
import { Pie } from "react-chartjs-2";

const SectorChart = ({ data }) => {
    
    const sectors = {};

    data.forEach((entry) => {
        if (!sectors[entry.sector]) {
            sectors[entry.sector] = 0;
        }
        sectors[entry.sector] += entry.intensity;
    });

    const getRandomColor = (index) => {
        const colors = [
            "#FF0080",
            "#00BFFF",
            "#FFD700",
            "#32CD32",
            "#FF4500",
            "#9400D3",
        ];
        return colors[index % colors.length];
    };

    const chartData = {
        labels: Object.keys(sectors),
        datasets: [
            {
                data: Object.values(sectors),
                backgroundColor: Object.keys(sectors).map((_, index) =>
                    getRandomColor(index)
                ),
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                position: "average",
            },
        },
    };

    return (
        <Card style={{ maxWidth: '50%', margin: '0 auto' }}>
            <Tooltip content="Sector Chart">
                <Pie data={chartData}
                    options={chartOptions}
                    style={{ width: '200%', height: '400px' }} />
            </Tooltip>
        </Card>
    );
};

export default SectorChart;
