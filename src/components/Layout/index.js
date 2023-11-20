import { Container } from '@mantine/core';
import React from 'react';

const Layout = ({ children }) => {
  const demoProps = {
    bg: 'var(--mantine-color-blue-light)',
    my: 'md',
    mx: 'xl',
  };

  return <Container {...demoProps}>{children}</Container>;
};

export default Layout;
