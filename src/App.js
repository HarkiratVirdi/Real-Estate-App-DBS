import './App.css';
import { Button, Group } from '@mantine/core';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div
        style={{
          height: '85vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Group>
          <Link to="/staff">
            <Button>Staff Information</Button>
          </Link>

          <Link to="/client">
            <Button>Client Information</Button>
          </Link>

          <Link to="/branch">
            <Button>Branch Information</Button>
          </Link>
        </Group>
      </div>
    </div>
  );
}

export default App;
