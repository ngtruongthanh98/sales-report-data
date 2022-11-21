import React, { useState, useEffect } from 'react';
import './styles.scss';
import LineChart from '../../components/Charts/LineChart';
import VerticalBarChart from '../../components/Charts/VerticalBarChart';
import PieChart from '../../components/Charts/PieChart';
import { getChartData } from '../../services/charts';

const Analysis = () => {
  const [dataPieChart, setDataPieChart] = useState({});
  const [dataLineChart, setDataLineChart] = useState({});
  const [dataVerticalBarChart, setDataVerticalBarChart] = useState({});

  useEffect(() => {
    getChartData().then((res) => {
      console.log(res.data);
      setDataPieChart(res.data);
    });
  }, []);

  return (
    <div className="analysis-page">
      <div className="row">
        <div className="chart-item-50 pie-chart">
          <PieChart dataArray={dataPieChart.data} labelArray={dataPieChart.label} />
        </div>

        <div className="chart-item-50">
          <VerticalBarChart
            dataArray={dataVerticalBarChart.data}
            labelArray={dataVerticalBarChart.label}
          />
        </div>
      </div>

      <div className="row single">
        <div className="chart-item-50">
          <LineChart dataArray={dataLineChart.data} labelArray={dataLineChart.label} />
        </div>
      </div>
    </div>
  );
};

export default Analysis;
