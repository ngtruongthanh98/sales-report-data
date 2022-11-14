import React from 'react';
import './styles.scss';
import LineChart from '../../components/Charts/LineChart';
import VerticalBarChart from '../../components/Charts/VerticalBarChart';
import PieChart from '../../components/Charts/PieChart';

const Analysis = () => {
  return (
    <div className="analysis-page">
      <div className="row">
        <div className="chart-item-50 pie-chart">
          <PieChart />
        </div>

        <div className="chart-item-50">
          <VerticalBarChart />
        </div>
      </div>

      <div className="row single">
        <div className="chart-item-50">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default Analysis;
