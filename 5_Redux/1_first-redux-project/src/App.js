// import logo from './logo.svg';
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h2>Counter: {counter} </h2>
      <button onClick={()=>dispatch(increment(5))}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>

      {isLogged ? <h3>Info only seen if logged</h3> : ""}
    </div>
  );
}

export default App;
