import { useDispatch, useSelector } from "react-redux";
import {
  selectCounter,
  setIncrementedValue,
  type CounterState,
} from "redux/counterSlice";

export const useCounter = () => {
  const counter: CounterState = useSelector(selectCounter);
  const dispatch = useDispatch();

  const increment = () => dispatch(setIncrementedValue());

  return {
    counter,
    increment,
  };
};
