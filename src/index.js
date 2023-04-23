import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

const items = [
  { text: 'Item 1' },
  { text: 'Item 2' },
  { text: 'Item 3' },
  { text: 'Item 4' },
  { text: 'Item 5' },
  { text: 'Item 6' },
  { text: 'Item 7' },
  { text: 'Item 8' },
  { text: 'Item 9' },
  { text: 'Item 10' },
];

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '600px', width: '100%', padding: '20px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>List Component</h1>
        <List items={items} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
