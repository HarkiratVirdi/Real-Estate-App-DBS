import React, { useState } from 'react';
import Layout from '../../components/Layout';
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import './styles.css';
import useFetch from '../../hooks/useFetch';
import endpoints from '../../api/endpoints';

const Staff = () => {
  const [rows, setRows] = useState([]);
  const columns = [
    { key: 'id', name: 'ID' },
    { key: 'title', name: 'Title' },
  ];
  const { data, error } = useFetch(endpoints.allStaff);

  return (
    <Layout>
      <DataGrid columns={columns} rows={data} onRowsChange={setRows} />
    </Layout>
  );
};

export default Staff;
