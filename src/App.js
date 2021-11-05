import useCoin from "./customHook";

function App() {

  const data = useCoin();
  

  return (
    <div>
      <h1>My number state :  {data.number}</h1>
      <button onClick={data.handleNumber}>Update</button>
    </div>
  );
}

export default App;
