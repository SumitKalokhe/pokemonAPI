import { AudioOutlined } from '@ant-design/icons';
import React from 'react';
import { Input, Space } from 'antd';
import './searchbar.css'
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);
const Searchbar = () =>
(
  <div className='input'>

    <Space direction="vertical">
      <Search
        placeholder="input pokemon name"
        allowClear
        onSearch={onSearch}
        style={{
          width: 400,
        }}
      />
    </Space>
  </div>
);

export default Searchbar;