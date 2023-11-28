import React from 'react';
import { Bar } from 'react-chartjs-2';

const ColumnChart: React.FC<{ data: any }> = ({ data }) => {
    return (
      <div>
        <Bar data={data} />
      </div>
    );
  };
export default ColumnChart;