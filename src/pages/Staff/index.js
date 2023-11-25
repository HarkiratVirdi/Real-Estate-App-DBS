import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import 'react-data-grid/lib/styles.css';
import './styles.css';
import useFetch from '../../hooks/useFetch';
import endpoints from '../../api/endpoints';
import { Button } from '@mantine/core';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import axios from 'axios';
import { baseRoute } from '../../utils';

const Staff = () => {
  const columns = [
    { field: 'STAFFNO', headerName: 'Staff No' },
    { field: 'FNAME', headerName: 'Full Name' },
    { field: 'LNAME', headerName: 'Last Name' },
    { field: 'EMAIL', headerName: 'Email', editable: true },
    { field: 'DOB', headerName: 'Date Of Birth' },
    { field: 'MOBILE', headerName: 'Mobile' },
    { field: 'POSITION', headerName: 'Position' },
    { field: 'SALARY', headerName: 'Salary', editable: true },
    { field: 'SEX', headerName: 'Sex' },
    { field: 'TELEPHONE', headerName: 'Telephone', editable: true },
    { field: 'BRANCHNO', headerName: 'Branch No' },
  ];

  const { data, error } = useFetch(endpoints.staff.allStaff());

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
          style={{ height: '400px' }}
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
                  baseRoute + endpoints.staff.updateStaff(event.data.STAFFNO),
                  {
                    salary: event.data.SALARY,
                    telephone: event.data.TELEPHONE,
                    email: event.data.EMAIL,
                  }
                );

                if (response) {
                  console.log('response for updating', response);
                  event.api.hideOverlay();
                }
              } catch (err) {
                console.log('error updating staff info', error);
                event.api.hideOverlay();
              }
            }}
          />
        </div>

        <Link to="/addStaff">
          <Button>+ Add New Staff Member</Button>
        </Link>
      </Layout>
    );
  }
};

export default Staff;
