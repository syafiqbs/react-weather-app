import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { CategoryScale, LinearScale, Filler, Chart as ChartJS } from 'chart.js/auto';
import ColumnChart from './components/ColumnChart';
import LineChart from './components/LineChart';
import AreaChart from './components/AreaChart';

ChartJS.register(CategoryScale, LinearScale, Filler);

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=1.29&longitude=103.85&hourly=relativehumidity_2m,direct_radiation&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FSingapore&start_date=2023-10-01&end_date=2023-10-10';

function App() {

  const [humidityData, setHumidityData] = useState<any>(null);
  const [minTemperature, setMinTemperature] = useState<any>(null);
  const [maxTemperature, setMaxTemperature] = useState<any>(null);
  const [directRadiation, setDirectRadiation] = useState<any>(null);

  const fixedData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    datasets: [
      {
        fill: true,
        label: 'min humidity',
        data: [50, 60, 70, 80, 90],
      }
    ],
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Call API
        const response = await axios.get(API_URL);
        // Handle response
        if (response) {

          // Column Chart: Average Daily Humidity
          const dailyHumidity = calculateAverageDailyValues(response.data.hourly.relativehumidity_2m);
          setHumidityData(dailyHumidity);

          // Line Chart: Min and Max Temperature
          const minTemperature = response.data.daily.temperature_2m_min;
          const maxTemperature = response.data.daily.temperature_2m_max;
          setMinTemperature(minTemperature);
          setMaxTemperature(maxTemperature);

          // Area Chart: Direct Radiation
          const directRadiation = calculateAverageDailyValues(response.data.hourly.direct_radiation);
          setDirectRadiation(directRadiation);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const calculateAverageDailyValues = (hourlyData: number[]) => {
    const dailyValues = [];
    for (let i = 0; i < hourlyData.length; i += 24) {
      let dailyData = hourlyData.slice(i, i + 24);
      let sum: number = 0;
      for (let j = 0; j < dailyData.length; j++) {
        sum += dailyData[j];
      }
      let dailyAverage = sum / dailyData.length;
      dailyValues.push(dailyAverage);
    }
    return dailyValues;
  };

  const columnChartData = humidityData ? {
    labels: Array(10).fill(0).map((_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: 'Average Daily Humidity',
        data: humidityData,
      },
    ],
  } : null;

  const lineChartData = minTemperature && maxTemperature ? {
    labels: Array(10).fill(0).map((_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: 'Min Temperature',
        data: minTemperature,
      },
      {
        label: 'Max Temperature',
        data: maxTemperature,
      }
    ],
  } : null;

  const areaChartData = directRadiation ? {
    labels: Array(10).fill(0).map((_, i) => `Day ${i + 1}`),
    datasets: [
      {
        fill: true,
        label: 'Direct Radiation',
        data: directRadiation,
      }
    ],
  } : null;

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full lg:w-3/4 sm-1 bg-white overflow-auto">
        {/* Column Chart for Relative Humidity */}
        {columnChartData && <ColumnChart data={columnChartData} />}

        {/* Line Chart for Temperature (Max and Min) */}
        {lineChartData && <LineChart data={lineChartData} />}

        {/* Area Chart for Direct Radiation */}
        {areaChartData && <AreaChart data={areaChartData} />}
      </div>
    </div>
  );

}

export default App;
