import { Container } from '@mantine/core';
import React from 'react';

const Layout = ({ children }) => {
  const props = {
    my: 'md',
    mx: 'xl',
    size: '1360px',
  };

  return <Container {...props}>{children}</Container>;
};

export default Layout;
