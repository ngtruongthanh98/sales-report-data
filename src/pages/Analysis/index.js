import React, { useState, useEffect } from 'react';
import './styles.scss';
import LineChart from '../../components/Charts/LineChart';
import VerticalBarChart from '../../components/Charts/VerticalBarChart';
import PieChart from '../../components/Charts/PieChart';
import { getChartData, getCusChartData, getOrdChartData } from '../../services/charts';

const Analysis = () => {
  const [dataPieChart, setDataPieChart] = useState({});
  const [dataLineChart, setDataLineChart] = useState({});
  const [dataVerticalBarChart, setDataVerticalBarChart] = useState({});
  const [dataVerticalBarChart1, setDataVerticalBarChart1] = useState({});

  useEffect(() => {
    getChartData().then((res) => {
      console.log(res.data);
      setDataPieChart(res.data);
    });
  }, []);

  useEffect(() => {
    getCusChartData().then((res) => {
      console.log(res.data);
      setDataVerticalBarChart(res.data);
    });
  }, []);


  useEffect(() => {
    getOrdChartData().then((res) => {
      console.log(res.data);
      setDataVerticalBarChart1(res.data);
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
            textTitle={"Top 10 SalesPerson Ranked By Customer"}
            textCom={"SalesPersonID"}
          />
        </div>
      </div>

      <div className="row single">
        <div className="chart-item-50">
          <LineChart dataArray={dataLineChart.data} labelArray={dataLineChart.label} />
        </div>

        <div className="chart-item-50">
          <VerticalBarChart
            dataArray={dataVerticalBarChart1.data}
            labelArray={dataVerticalBarChart1.label}
            textTitle={"Top 10 SalesPerson Ranked By Orders"}
            textCom={"SalesPersonID"}
          />
        </div>
      </div>
    </div>
  );
};

export default Analysis;
