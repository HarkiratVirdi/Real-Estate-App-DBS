import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import 'react-data-grid/lib/styles.css';
import useFetch from '../../hooks/useFetch';
import endpoints from '../../api/endpoints';
import { Button } from '@mantine/core';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import axios from 'axios';
import { baseRoute } from '../../utils';

const BranchTable = () => {
  const columns = [
    { field: 'BRANCHNO', headerName: 'Branch No' },
    { field: 'STREET', headerName: 'Street', editable: true },
    { field: 'CITY', headerName: 'city', editable: true },
    { field: 'POSTCODE', headerName: 'Postcode', editable: true },
  ];

  const { data, error } = useFetch(endpoints.branch.getAllBranches());

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
        <div
          id="myGrid"
          className="ag-theme-alpine"
          style={{ height: '400px', marginRight: 0, marginLeft: 0 }}
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
                    endpoints.branch.updateBranch(event.data.BRANCHNO),
                  {
                    street: event.data.STREET,
                    city: event.data.CITY,
                    postcode: event.data.POSTCODE,
                  }
                );

                if (response) {
                  console.log('response for updating branch', response);
                  event.api.hideOverlay();
                }
              } catch (err) {
                console.log('error updating branch info', error);
                event.api.hideOverlay();
              }
            }}
          />
        </div>

        <div style={{ marginTop: '1rem' }}>
          <Link to="/addBranch">
            <Button>+ Add New Branch</Button>
          </Link>
        </div>
      </Layout>
    );
  }
};

export default BranchTable;
