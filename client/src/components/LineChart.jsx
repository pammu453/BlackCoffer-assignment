import { Card } from 'flowbite-react';
import { Line } from 'react-chartjs-2';

const LineChartComponent = ({ data }) => {

  const validData = data.filter(item => item.start_year && !isNaN(item.start_year));

  validData.sort((a, b) => a.start_year - b.start_year);

  const chartData = {
    labels: validData.map(item => item.start_year),
    datasets: [
      {
        label: 'Intensity Over Time',
        data: validData.map(item => item.intensity),
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        tension: 1,
      },
    ],
  };


  return (
    <Card className="h-80">
      <Line
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Year',
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Intensity',
              },
            },
          },
        }}
        height={200}
      />
    </Card>
  );
};

export default LineChartComponent;
