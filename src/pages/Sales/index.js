import React from 'react';
import './styles.scss';
import DebounceSelect from '../../components/DebounceSelect';

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
        />
      </div>
    </div>
  );
};

export default Sales;
