import React from 'react';
import {
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from 'recharts';

// Sample data
const data = [
  { name: 'IT', value: 30 },
  { name: 'Others', value: 10 },
];

// Define custom active bar style
const CustomBar = (props) => {
  const { fill, x, y, width, height, value } = props;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
      />
      <text
        x={x + width / 2}
        y={y - 5}
        textAnchor="middle"
        fill="#000"
        fontSize={14}
      >
        {value}
      </text>
    </g>
  );
};

// Custom BarChart component
const CustomBarChart = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const handleBarEnter = (data, index) => {
    setActiveIndex(index);
  };

  const handleBarLeave = () => {
    setActiveIndex(null);
  };

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="value"
          fill="#8884d8"
          onMouseEnter={handleBarEnter}
          onMouseLeave={handleBarLeave}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={index === activeIndex ? '#19594D' : '#ffffff'}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
