import React, { useState } from 'react';
import {
  Title,
  TextInput,
  Button,
  Group,
  NumberInput,
  Input,
  Text,
} from '@mantine/core';
import Layout from '../../components/Layout/index';
import axios from 'axios';
import { baseRoute } from '../../utils';
import endpoints from '../../api/endpoints';

const AddClientForm = () => {
  const initialState = {
    clientNo: '',
    fname: '',
    lname: '',
    telno: '',
    street: '',
    city: '',
    email: '',
    preftype: '',
    maxrent: '',
  };

  const [clientDetails, setClientDetails] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const onAddClient = async (e) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        baseRoute + endpoints.client.addClient(),
        clientDetails,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response) {
        setIsLoading(false);
        setShowNotification(true);
        setClientDetails(initialState);
      }
    } catch (error) {
      console.log('error', error);
      setIsLoading(false);
    }
  };

  const onCancel = (e) => {
    setClientDetails(initialState);
    setShowNotification(false);
  };

  const handleChange = (e) => {
    return setClientDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Title order={2}>Add New Client</Title>

      <Group grow={true} mt={'md'}>
        <TextInput
          onChange={handleChange}
          name="clientNo"
          label="Client No"
          placeholder="Client No"
        />
        <TextInput
          onChange={handleChange}
          name="fname"
          label="First Name"
          placeholder="First Name"
        />
        <TextInput
          onChange={handleChange}
          name="lname"
          label="Last Name"
          placeholder="Last Name"
        />
      </Group>

      <Group grow={true} mt={'md'}>
        <TextInput
          onChange={handleChange}
          label="Telephone No"
          name="telno"
          placeholder="Telephone No"
        />
        <TextInput
          onChange={handleChange}
          label="Street"
          name="street"
          placeholder="Street"
        />
        <TextInput
          onChange={handleChange}
          name="city"
          label="City"
          placeholder="City"
        />
      </Group>

      <Group grow={true} mt={'md'}>
        <TextInput
          onChange={handleChange}
          name="email"
          label="Email"
          placeholder="Email"
        />
        <TextInput
          onChange={handleChange}
          label="Preftype"
          name="preftype"
          placeholder="Preftype"
        />
        <TextInput
          onChange={handleChange}
          label="Maxrent"
          name="maxrent"
          placeholder="Maxrent"
        />
      </Group>
      <Group my={'md'}>
        <Button onClick={onCancel}>Cancel</Button>
        <Button loading={isLoading} onClick={onAddClient}>
          + Add Client
        </Button>
      </Group>
      {showNotification && (
        <Text mt={'lg'} style={{ color: 'green' }}>
          New Client Added
        </Text>
      )}
    </>
  );
};

export default AddClientForm;
