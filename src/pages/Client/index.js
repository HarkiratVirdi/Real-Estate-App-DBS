import React from 'react';
import AddClientForm from './AddClientForm';
import ClientTable from './ClientTable';
import Layout from '../../components/Layout/index';
import { Paper } from '@mantine/core';

const Client = () => {
  return (
    <>
      <ClientTable />
      <Layout>
        <AddClientForm />
      </Layout>
      <br />
    </>
  );
};

export default Client;
