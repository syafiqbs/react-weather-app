import React from 'react';
import { Line } from 'react-chartjs-2';

const AreaChart: React.FC<{ data: any }> = ({ data }) => {
    return (
      <div>
        <Line data={data} />
      </div>
    );
};

export default AreaChart;