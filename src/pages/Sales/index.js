import React from 'react';
import './styles.scss';
import DebounceSelect from '../../components/DebounceSelect';
import LineChart from '../../components/Charts/LineChart';
import PieChart from '../../components/Charts/PieChart';

import { Space, Table, Tag } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  // {
  //   title: 'Action',
  //   key: 'action',
  //   render: (_, record) => (
  //     <Space size="middle">
  //       <a>Invite {record.name}</a>
  //       <a>Delete</a>
  //     </Space>
  //   ),
  // },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  // {
  //   key: '2',
  //   name: 'Jim Green',
  //   age: 42,
  //   address: 'London No. 1 Lake Park',
  //   tags: ['loser'],
  // },
  // {
  //   key: '3',
  //   name: 'Joe Black',
  //   age: 32,
  //   address: 'Sidney No. 1 Lake Park',
  //   tags: ['cool', 'teacher'],
  // },
];

const Sales = () => {
  const [value, setValue] = React.useState([]);

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

  return (
    <div className="sale-page">
      <div className="sale-page__body">
        <h1 className="title">Sale person</h1>

        <DebounceSelect
          mode="multiple"
          value={value}
          placeholder="Select users"
          fetchOptions={fetchUserList}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          style={{
            width: '100%',
          }}
          onSelect={(value) => {
            console.log('value', value);
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
              <Table columns={columns} dataSource={data} />
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
