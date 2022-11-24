import React, { useEffect } from 'react';
import './styles.scss';
import DebounceSelect from '../../components/DebounceSelect';
import LineChart from '../../components/Charts/LineChart';
import PieChart from '../../components/Charts/PieChart';
import { getSalePerson } from '../../services/charts';

import { Table } from 'antd';

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

  // useEffect is used to call API, dependency array [value] is used to call API when value changes

  useEffect(() => {
    if (value?.id) {
      // call API chart
    }
  }, [value]);

  // async function fetchUserList(username) {
  //   console.log('fetching user', username);
  //   return fetch('https://randomuser.me/api/?results=5')
  //     .then((response) => response.json())
  //     .then((body) =>
  //       body.results.map((user) => ({
  //         label: `${user.name.first} ${user.name.last}`,
  //         value: user.login.username,
  //       }))
  //     );
  // }

  async function fetchPersonData(personId) {
    console.log('fetching person', personId);
    return getSalePerson(personId).then((res) => {
      console.log(res.data);

      // return res.data;

      const returnedValue = [
        {
          label: `${res.data.id}`,
          value: res.data,
        },
      ];
      return returnedValue;
    });
  }

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
              <PieChart />
            </div>

            <div className="data-container__col">
              <LineChart />
            </div>
          </div>

          <div className="data-container__row">
            <div className="data-container__col">
              <Table columns={columns} dataSource={value} />
            </div>

            <div className="data-container__col">
              {/* No image */}
              <img
                src="https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
