import Hoc from './Hoc';
function Counter({Count,handleClick}) {
  return (
    <div>
        <h1>Counter 1</h1>
      <h1>{Count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default Hoc(Counter);