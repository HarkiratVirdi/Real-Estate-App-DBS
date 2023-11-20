import React from 'react';
import { Title, TextInput, Button, Group } from '@mantine/core';
import Layout from '../../components/Layout/index';

const StaffHiringForm = () => {
  const onHire = (e) => {};
  const onCancel = (e) => {};

  return (
    <Layout>
      <Title order={2}>Staff Hiring Form</Title>
      <TextInput label="First Name" placeholder="First Name" />
      <TextInput label="Last Name" placeholder="Last Name" />
      <TextInput label="Position" placeholder="Position" />
      <TextInput label="Branch No" placeholder="Branch No" />
      <TextInput label="DOB" placeholder="DOB" />
      <TextInput label="Salary" placeholder="Salary" />
      <TextInput label="Telephone" placeholder="Telephone" />
      <TextInput label="Mobile" placeholder="Mobile" />
      <TextInput label="Email" placeholder="Email" />
      <Group my={'md'}>
        <Button onClick={onCancel}>Cancel </Button>
        <Button onClick={onHire}>Hire </Button>
      </Group>
    </Layout>
  );
};

export default StaffHiringForm;
