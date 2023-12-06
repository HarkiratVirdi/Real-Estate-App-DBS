import React, { useState } from 'react';
import {
  Title,
  TextInput,
  Button,
  Text,
  Group,
  NumberInput,
  Input,
} from '@mantine/core';
import axios from 'axios';
import Layout from '../../components/Layout/index';
import endpoints from '../../api/endpoints';
import { baseRoute } from '../../utils';

const StaffHiringForm = () => {
  const initialState = {
    STAFFNO: '',
    FNAME: '',
    LNAME: '',
    POSITION: '',
    SEX: '',
    DOB: '',
    SALARY: '',
    BRANCHNO: '',
    TELEPHONE: '',
    MOBILE: '',
    EMAIL: '',
  };
  const [staffDetails, setStaffDetails] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [error, setError] = useState({ showError: false, msg: '' });

  const handleChange = (e) => {
    return setStaffDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onHire = async (e) => {
    setLoading(true);
    try {
      const response = await axios.post(
        baseRoute + endpoints.staff.addStaff(),
        staffDetails,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response) {
        setLoading(false);
        setShowNotification(true);
        setStaffDetails(initialState);
        setError({ msg: '', showError: false });

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      console.log('error', error);
      setError({ msg: error.message, showError: true });
      setLoading(false);
    }
  };

  const onCancel = (e) => {
    return setStaffDetails(initialState);
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <Title order={2}>Staff Hiring Form</Title>

      <Group grow={true} mt={'md'}>
        <TextInput
          label="Staff No"
          onChange={handleChange}
          value={staffDetails.STAFFNO}
          name="STAFFNO"
          placeholder="Staff No"
        />
        <TextInput
          onChange={handleChange}
          name="FNAME"
          value={staffDetails.FNAME}
          label="First Name"
          placeholder="First Name"
        />
        <TextInput
          onChange={handleChange}
          name="LNAME"
          value={staffDetails.LNAME}
          label="Last Name"
          placeholder="Last Name"
        />
        <TextInput
          onChange={handleChange}
          name="SEX"
          value={staffDetails.SEX}
          label="Gender"
          placeholder="Gender"
        />
      </Group>

      <Group grow={true} mt={'md'}>
        <TextInput
          onChange={handleChange}
          name="BRANCHNO"
          value={staffDetails.BRANCHNO}
          label="Branch No"
          placeholder="Branch No"
        />
        <TextInput
          onChange={handleChange}
          name="POSITION"
          label="Position"
          value={staffDetails.POSITION}
          placeholder="Position"
        />
        <Input.Wrapper label={'DOB'}>
          <Input
            type={'date'}
            onChange={handleChange}
            value={staffDetails.DOB}
            name="DOB"
          />
        </Input.Wrapper>
        <NumberInput
          label="Salary"
          placeholder="Salary"
          onChange={(e) => setStaffDetails((prev) => ({ ...prev, SALARY: e }))}
          name="SALARY"
          value={staffDetails.SALARY}
        />
      </Group>

      <Group grow={true} mt={'md'}>
        <TextInput
          onChange={handleChange}
          value={staffDetails.TELEPHONE}
          name="TELEPHONE"
          label="Telephone"
          placeholder="Telephone"
        />
        <TextInput
          onChange={handleChange}
          name="MOBILE"
          value={staffDetails.MOBILE}
          label="Mobile"
          placeholder="Mobile"
        />
        <TextInput
          onChange={handleChange}
          name="EMAIL"
          value={staffDetails.EMAIL}
          label="Email"
          placeholder="Email"
        />
      </Group>
      <Group my={'md'}>
        <Button onClick={onCancel}>Cancel </Button>
        <Button loading={loading} onClick={onHire}>
          Hire{' '}
        </Button>
      </Group>

      {showNotification && !error.showError && (
        <Text mt={'lg'} style={{ color: 'green' }}>
          New Staff Added
        </Text>
      )}

      {error.showError && <Text>{error.msg}</Text>}
    </div>
  );
};

export default StaffHiringForm;
