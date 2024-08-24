import { Doughnut } from 'react-chartjs-2';
import { Card, Tooltip } from 'flowbite-react'

const RegionChart = ({ data }) => {

  const regionCounts = {};
  data.forEach(item => {
    if (item.region === "") {
      item.region = "Unknown";
    }
    if (item.region in regionCounts) {
      regionCounts[item.region]++;
    } else {
      regionCounts[item.region] = 1;
    }
  });

  const chartData = {
    labels: Object.keys(regionCounts),
    datasets: [
      {
        data: Object.values(regionCounts),
        backgroundColor: [
          '#1F2937',
          '#3B82F6',
          '#10B981',
          '#F59E0B',
          '#EF4444',
          '#8B5CF6',
          '#EC4899',
        ],
        hoverBackgroundColor: [
          '#4B5563',
          '#2563EB',
          '#059669',
          '#D97706',
          '#DC2626',
          '#7C3AED',
          '#DB2777',
        ],

      },
    ],
  };

  return (
    <>
      <Card style={{ maxWidth: '50%', margin: '0 auto' }}>
        <Tooltip content="Region chart">
          <Doughnut
            data={chartData}
            options={{
              maintainAspectRatio: false,
              responsive: true,
            }}
            style={{ width: '200%', height: '400px' }}
          />
        </Tooltip>
      </Card>
    </>
  );
};

export default RegionChart;