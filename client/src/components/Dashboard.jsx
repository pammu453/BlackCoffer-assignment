import { useState, useEffect } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import RegionChart from "./RegionChart";
import SectorChart from "./SectorChart";
import TopicChart from "./TopicChart";
import BarChart from './BarChart'
import LineChart from './LineChart'
import RadarChart from './RadarChart'

Chart.register(CategoryScale);

const Dashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/data");
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchDataFromApi();
    }, []);

    return (
        <div className="mt-10 p-2 flex flex-col gap-4">
            <div className="flex">
                <RegionChart data={data} />
                <SectorChart data={data} />
            </div>
            <div className="flex">
                <TopicChart data={data} />
                <RadarChart data={data} />
            </div>
            <BarChart data={data} />
            <LineChart data={data} />
        </div>

    );
};

export default Dashboard;
