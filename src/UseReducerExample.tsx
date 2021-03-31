import React, { useReducer } from 'react';

type Actions = 
  | { type: 'add'; text: string; }
  | { type: 'remove'; index: number; };

interface Todo {
  text: string;
  complete: boolean;
}

type State = Todo[];

const TodoReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case 'add':
      return [...state, { text: action.text, complete: false }];
    case 'remove':
      return state.filter((_, index) => action.index !== index);
    default:
      return state;
  }
}

export const ReducerExample: React.FC = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);
  return (
    <div>
      {JSON.stringify(todos)}
      <button
        onClick={() => {
          dispatch({ type: 'add', text: 'adding haha' });
        }}
      >
        Click me!
      </button>
    </div>
  )
};
