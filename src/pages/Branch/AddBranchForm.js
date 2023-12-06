import React, { useState } from 'react';
import { Title, TextInput, Button, Group, Text } from '@mantine/core';
import Layout from '../../components/Layout/index';
import endpoints from '../../api/endpoints';
import axios from 'axios';
import { baseRoute } from '../../utils';

const AddBranchForm = () => {
  const initialState = { branchNo: '', street: '', city: '', postcode: '' };
  const [branchDetails, setBranchDetails] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [error, setError] = useState({ showError: false, msg: '' });

  const onAddBranch = async (e) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        baseRoute + endpoints.branch.addBranch(),
        branchDetails,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response) {
        console.log('response', response);
        setIsLoading(false);
        setShowNotification(true);
        branchDetails(initialState);

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      console.log('error', error);
      setError({ msg: error.message, showError: true });
      setIsLoading(false);
    }
  };

  const onCancel = () => {
    setBranchDetails(initialState);
  };

  const handleChangeEvent = (e) => {
    return setBranchDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      <Title order={2}>Add Branch Form</Title>

      <Group grow={true} mt={'md'}>
        <TextInput
          value={branchDetails.branchNo}
          label="Branch No"
          placeholder="Branch No"
          name="branchNo"
          onChange={handleChangeEvent}
        />
        <TextInput
          value={branchDetails.street}
          label="Street"
          placeholder="Street"
          name="street"
          onChange={handleChangeEvent}
        />
      </Group>

      <Group grow={true} mt={'md'}>
        <TextInput
          name="city"
          value={branchDetails.city}
          onChange={handleChangeEvent}
          label="City"
          placeholder="City"
        />
        <TextInput
          name="postcode"
          value={branchDetails.postcode}
          onChange={handleChangeEvent}
          label="Postcode"
          placeholder="Postcode"
        />
      </Group>

      {showNotification && <p style={{ color: 'green' }}>New Branch Added</p>}

      <div style={{ marginTop: '1rem' }}>
        <Button mr={'md'} onClick={onCancel}>
          Cancel{' '}
        </Button>
        <Button loading={isLoading} onClick={onAddBranch}>
          + Add Branch
        </Button>
      </div>
    </Layout>
  );
};

export default AddBranchForm;
