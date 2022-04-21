import { useSelector, useDispatch } from "react-redux";
import { RootState, decrement, increment } from "../../store/store";


const ReduxCounter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispacth = useDispatch();
  const incrementHandler = () => {
    dispacth(increment());
  };

  const decrementHandler = () => {
    dispacth(decrement());
  };

  return (
    <div>
      <button aria-label="increment value" onClick={incrementHandler}>
        Increment
      </button>
      <span role="contentinfo">{count}</span>
      <button aria-label="decrement value" onClick={decrementHandler}>
        Decrement
      </button>
    </div>
  );
};

export default ReduxCounter;
