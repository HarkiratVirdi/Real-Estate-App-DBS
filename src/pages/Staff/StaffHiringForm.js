import React from 'react';
import {
  Title,
  TextInput,
  Button,
  Group,
  NumberInput,
  Input,
} from '@mantine/core';
import Layout from '../../components/Layout/index';

const StaffHiringForm = () => {
  const onHire = (e) => {};
  const onCancel = (e) => {};

  return (
    <Layout>
      <Title order={2}>Staff Hiring Form</Title>

      <Group grow={true} mt={'md'}>
        <TextInput label="Staff No" placeholder="Staff No" />
        <TextInput label="First Name" placeholder="First Name" />
        <TextInput label="Last Name" placeholder="Last Name" />
        <TextInput label="Gender" placeholder="Gender" />
      </Group>

      <Group grow={true} mt={'md'}>
        <TextInput label="Branch No" placeholder="Branch No" />
        <TextInput label="Position" placeholder="Position" />
        <Input.Wrapper label={'DOB'}>
          <Input type={'date'} />
        </Input.Wrapper>
        <NumberInput label="Salary" placeholder="Salary" />
      </Group>

      <Group grow={true} mt={'md'}>
        <TextInput label="Telephone" placeholder="Telephone" />
        <TextInput label="Mobile" placeholder="Mobile" />
        <TextInput label="Email" placeholder="Email" />
      </Group>
      <Group my={'md'}>
        <Button onClick={onCancel}>Cancel </Button>
        <Button onClick={onHire}>Hire </Button>
      </Group>
    </Layout>
  );
};

export default StaffHiringForm;
