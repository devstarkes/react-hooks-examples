import React, { useState, useRef, useCallback } from 'react';

function App() {
  useCountRenders('app');
  const [count, setCount] = useState(0);

  const onIncrementMemo = useCallback(() => {
    setCount(v => v + 1);
  }, [setCount])

  function onIncrement() {
    setCount(v => v + 1);
  }

  return (
    <div>
      <MemoChildren onIncrement={onIncrementMemo}/>
      <div>count: {count}</div>
    </div>
  )
}

function Children({ onIncrement }) {
  useCountRenders('children');

  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
    </div>
  )
}

const MemoChildren = React.memo(Children);

const useCountRenders = (name) => {
  const renders = useRef(0);
  console.log(`${name} renders: `, renders.current++);
}
