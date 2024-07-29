import React from 'react';
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

// Sample data
const data = [
  { name: 'IT', value: 30 },
  { name: 'Others', value: 10 },
];

// Define custom active shape
const renderActiveShape = (props) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill } = props;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

// Custom PieChart component
const CustomPieChart = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handlePieEnter = (data, index) => {
    setActiveIndex(index);
  };

  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Tooltip />
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          onMouseEnter={handlePieEnter}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={index === activeIndex ? '#19594D' : '#ffffff'} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
