import React, { useState } from 'react';
import { Input, Button, Title, Paper, Divider } from '@mantine/core';
import Layout from '../../components/Layout';
import endpoints from '../../api/endpoints';
import { baseRoute } from '../../utils';
import axios from 'axios';
import BranchTable from './BranchTable';

const Branch = () => {
  const [branchNo, setBranchNo] = useState('');
  const [branchDetails, setBranchDetails] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchBranchDetails = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        baseRoute + endpoints.branch.getBranch(branchNo)
      );

      console.log('branch details', data);
      setShowResult(true);
      setBranchDetails(data.data?.[0]);
      setLoading(false);
    } catch (error) {
      console.log('error', error);
      setBranchDetails({});
      setLoading(false);
    }
  };

  return (
    <>
      <Title mt={'lg'} style={{ marginLeft: '3rem' }} order={2}>
        Manage Branches
      </Title>

      <BranchTable />
      <Layout>
        <Title mt={'xl'} order={2}>
          Search for a Specific Branch
        </Title>
        <Input.Wrapper label={'Enter Branch No'}>
          <Input
            type="text"
            onChange={(e) => {
              setShowResult(false);
              setBranchDetails({});
              setBranchNo(e.target.value);
            }}
          ></Input>
        </Input.Wrapper>
        <Button loading={loading} mt={'sm'} onClick={fetchBranchDetails}>
          Search Branch Details
        </Button>
        {showResult &&
          (branchDetails?.STREET ? (
            <Paper mt={'lg'}>
              <Title order={2}>Branch Details for {branchNo}</Title>
              <p>
                <b>Branch Street</b>: {branchDetails?.STREET}
              </p>
              <p>
                <b>Branch City</b>: {branchDetails?.CITY}
              </p>
              <p>
                <b>Branch PostCode</b>: {branchDetails?.POSTCODE}
              </p>
            </Paper>
          ) : (
            <Paper mt={'lg'}>
              <Title order={2}>No Details for branch {branchNo} found</Title>
            </Paper>
          ))}
      </Layout>
    </>
  );
};

export default Branch;
