import './App.css';
import { Button, Group, AppShell, rem, Title } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';

function App() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell padding="md" header={{ height: 60 }}>
      <AppShell.Header style={{ background: 'transparent' }}>
        <Title mt={'md'} ml={'md'} order={2}>
          DBS 501 Dream House Real Estate
        </Title>
      </AppShell.Header>

      <AppShell.Main
        pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}
        style={{ background: 'transparent' }}
      >
        <div className="App">
          <div
            style={{
              height: '70vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Group>
              <Link to="/staff">
                <Button variant="filled" color="gray">
                  Staff Information
                </Button>
              </Link>

              <Link to="/client">
                <Button variant="filled" color="gray">
                  Client Information
                </Button>
              </Link>

              <Link to="/branch">
                <Button variant="filled" color="gray">
                  Branch Information
                </Button>
              </Link>
            </Group>
          </div>
        </div>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
