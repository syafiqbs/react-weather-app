import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { CategoryScale, LinearScale, Chart as ChartJS } from 'chart.js/auto';
import ColumnChart from './components/ColumnChart';
import LineChart from './components/LineChart';

ChartJS.register(CategoryScale, LinearScale);

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=1.29&longitude=103.85&hourly=relativehumidity_2m,direct_radiation&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FSingapore&start_date=2023-10-01&end_date=2023-10-10';

function App() {

  const [humidityData, setHumidityData] = useState<any>(null);
  const [minTemperature, setMinTemperature] = useState<any>(null);
  const [maxTemperature, setMaxTemperature] = useState<any>(null);

  const fixedData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    datasets: [
      {
        label: 'min humidity',
        data: [50, 60, 70, 80, 90],
      },
      {
        label: 'max humidity',
        data: [60, 70, 80, 90, 100],
      }
    ],
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Call API
        const response = await axios.get(API_URL);
        // Handle response
        if (response) {

          // Column Chart: Average Daily Humidity
          const dailyHumidity = calculateAverageHumidity(response.data.hourly.relativehumidity_2m);
          setHumidityData(dailyHumidity);

          // Line Chart: Min and Max Temperature
          const minTemperature = response.data.daily.temperature_2m_min;
          const maxTemperature = response.data.daily.temperature_2m_max;
          setMinTemperature(minTemperature);
          setMaxTemperature(maxTemperature);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const calculateAverageHumidity = (hourlyHumidity: number[]) => {
    const dailyHumidity = [];
    for (let i = 0; i < hourlyHumidity.length; i += 24) {
      let dailyData = hourlyHumidity.slice(i, i + 24);
      let sum: number = 0;
      for (let j = 0; j < dailyData.length; j++) {
        sum += dailyData[j];
      }
      let dailyAverage = sum / dailyData.length;
      dailyHumidity.push(dailyAverage);
    }
    return dailyHumidity;
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

  return (
    <div className="App">
      <h1 className="text-3xl underline text-center">Weather App</h1>
      <div className="container mx-auto w-1/2">
        {columnChartData && <ColumnChart data={columnChartData} />}
      </div>
      <div className="container mx-auto w-1/2">
        {lineChartData && <LineChart data={lineChartData} />}
      </div>
        
    </div>
  );
}

export default App;
