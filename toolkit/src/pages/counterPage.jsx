import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, setCount } from '../app/counterSlice';


const CounterPage = () => {
    const state = useSelector((store) => store.counterReducer);
    const dispatch = useDispatch();

  return (
    <div>
      <h1>{state.counter} </h1>
      <button onClick={() => dispatch(increase())}>Arttir</button>
      <button onClick={() => dispatch(decrease())}>Azalt</button>
      <button onClick={() => dispatch(setCount(0))}>Sifirla</button>
    </div>
  );
};

export default CounterPage;
