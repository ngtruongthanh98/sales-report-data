import React, { useState, useEffect } from 'react';
import './styles.scss';
import LineChart from '../../components/Charts/LineChart';
import VerticalBarChart from '../../components/Charts/VerticalBarChart';
import PieChart from '../../components/Charts/PieChart';
import { getChartData } from '../../services/charts';

const Analysis = () => {
  const [dataChart, setDataChart] = useState({});

  useEffect(() => {
    getChartData().then((res) => {
      console.log(res.data);
      setDataChart(res.data);
    });
  }, []);

  return (
    <div className="analysis-page">
      <div className="row">
        <div className="chart-item-50 pie-chart">
          <PieChart dataArray={dataChart.data} labelArray={dataChart.label} />
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
