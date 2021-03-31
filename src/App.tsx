import React from 'react';
import { Counter } from './components/Counter';
import { TextField } from './components/TextField';

const App: React.FC = () => (
  <div>
    Yo
    <TextField text="hello" ok fn={() => {}} />
    <Counter>
      {({ count, setCount }) => (
        <div onClick={() => setCount(count + 1)}>
          {count}
        </div>
      )}
    </Counter>
  </div>
);

export default App;
