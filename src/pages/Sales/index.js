import React, { useState, useEffect } from 'react';
import './styles.scss';
import DebounceSelect from '../../components/DebounceSelect';
import LineChart from '../../components/Charts/LineChart';
import PieChart from '../../components/Charts/PieChart';
import { getSalePerson } from '../../services/saleperson';

import { Table } from 'antd';
import { getChartDataByID, getQuotaDataByID, getSalesPersonID } from '../../services/charts';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Territory',
    dataIndex: 'territory',
    key: 'territory',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'StoreNum',
    dataIndex: 'storeNum',
    key: 'storeNum',
  },
  {
    title: 'CustomerNum',
    dataIndex: 'customerNum',
    key: 'customerNum',
  },
  {
    title: 'OrderNum',
    dataIndex: 'orderNum',
    key: 'orderNum',
  },
];
const data = [
  {
    key: '1',
    id: 32,
    territory: 'United Kingdom',
    storeNum: 34,
    customerNum: 1000,
    orderNum: 12000,
  },
];

const Sales = () => {
  const [value, setValue] = React.useState([]);
  const [value1, setValue1] = React.useState([]);
  const [valueLine, setLine] = React.useState([]);
  const [valuePie, setPie] = React.useState([]);

  // useEffect is used to call API, dependency array [value] is used to call API when value changes

  useEffect(() => {
    if (value?.id) {
      // call API chart
    }
  }, [value]);

  async function fetchUserList(username) {
    console.log('fetching user', username);
    return fetch('https://randomuser.me/api/?results=5')
      .then((response) => response.json())
      .then((body) =>
        body.results.map((user) => ({
          label: `${user.name.first} ${user.name.last}`,
          value: user.login.username,
        }))
      );
  }

  async function fetchPersonData(personId) {
    console.log('fetching person', personId);
    return getSalePerson(personId).then((res) => {
      // console.log(res.data);

      // return res.data;
      

      const returnedValue = [
        {
          label: `${res.data.id}`,
          value: res.data.id,
        },
      ];
      return returnedValue;
    });
  }

  useEffect(() => {
    getSalesPersonID(value.key).then((res) => {
      console.log(res.data);
      //setDataPieChart(res.data);
      setValue1([res.data])
    });
  }, [value]);

  useEffect(() => {
    getQuotaDataByID(value.key).then((res) => {
      console.log(res.data);
      //setDataPieChart(res.data);
      setLine(res.data)
    });
  }, [value]);

  useEffect(() => {
    getChartDataByID(value.key).then((res) => {
      console.log(res.data);
      //setDataPieChart(res.data);
      setPie(res.data)
    });
  }, [value]);

  

  return (
    <div className="sale-page">
      <div className="sale-page__body">
        <h1 className="title">Sale person</h1>

        <DebounceSelect
          mode="multiple"
          value={value}
          placeholder="Select users"
          fetchOptions={fetchPersonData}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          style={{
            width: '100%',
          }}
          onSelect={(value) => {
            setValue(value);
            console.log('select value', value);
          }}
          className="select-input"
        />

        <div className="data-container">
          <div className="data-container__row">
            <div className="data-container__col">
              <PieChart dataArray={valuePie.data} labelArray={valuePie.label}/>
            </div>

            <div className="data-container__col">
              <LineChart text={"Personal Quota History"} dataArray={valueLine.data} labelArray={valueLine.label} idArray={valueLine.salesid} />
            </div>
          </div>

          <div className="data-container__row">
            <div className="data-container__col">
              <Table columns={columns} dataSource={value1} />
            </div>

            <div className="data-container__col">
              {/* {console.log(value1[0].territoryURL)} */}
              {/* No image */}
              <img
                src={value1[0]?.territoryURL || "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2f/fe/united-kingdom.jpg?w=700&h=500&s=1"}
                alt=""
                width="400" 
                height="200"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
