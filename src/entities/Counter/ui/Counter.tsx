import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {

    const counterValue = useSelector(getCounterValue);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(counterActions.increment());

    };
    const decrement = () => {
        dispatch(counterActions.decrement());

    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="decrement-btn" onClick={decrement}>-</Button>
            <Button data-testid="increment-btn" onClick={increment}>+</Button>
        </div>
    );
};