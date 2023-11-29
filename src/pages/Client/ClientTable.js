import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import useFetch from '../../hooks/useFetch';
import endpoints from '../../api/endpoints';
import { Button, Title } from '@mantine/core';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import axios from 'axios';
import { baseRoute } from '../../utils';

const ClientTable = () => {
  const columns = [
    { field: 'CLIENTNO', headerName: 'Client No' },
    { field: 'FNAME', headerName: 'Full Name' },
    { field: 'LNAME', headerName: 'Last Name' },
    { field: 'EMAIL', headerName: 'Email', editable: true },
    { field: 'CITY', headerName: 'City', editable: true },
    { field: 'STREET', headerName: 'Street', editable: true },
    { field: 'PREFTYPE', headerName: 'Preftype', editable: true },
    { field: 'TELNO', headerName: 'Telephone', editable: true },
    { field: 'MAXRENT', headerName: 'Maxrent', editable: true },
  ];

  const { data, error } = useFetch(endpoints.client.getClients());

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 150,
      sortable: true,
      resizable: true,
      filter: true,
    };
  }, []);

  const autoGroupColumnDef = useMemo(() => {
    return {
      minWidth: 200,
      filter: 'agGroupColumnFilter',
    };
  }, []);

  if (data) {
    return (
      <Layout>
        <Title mb={'md'} mt={'xl'} order={2}>
          Manage Clients
        </Title>
        <div
          id="myGrid"
          className="ag-theme-alpine"
          style={{ height: '550px', marginBottom: '2rem' }}
        >
          <AgGridReact
            defaultColDef={defaultColDef}
            autoGroupColumnDef={autoGroupColumnDef}
            rowData={data?.data || []}
            columnDefs={columns}
            onCellEditingStopped={async (event) => {
              event.api.showLoadingOverlay();

              try {
                const response = await axios.put(
                  baseRoute +
                    endpoints.client.updateClient(event.data.CLIENTNO),
                  {
                    fname: event.data.FNAME,
                    lname: event.data.LNAME,
                    telno: event.data.TELNO,
                    city: event.data.CITY,
                    street: event.data.STREET,
                  }
                );

                if (response) {
                  console.log('response for updating', response);
                  event.api.hideOverlay();
                }
              } catch (err) {
                console.log('error updating client info', error);
                event.api.hideOverlay();
              }
            }}
          />
        </div>
      </Layout>
    );
  }
};

export default ClientTable;
