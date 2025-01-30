import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounte3r', () => {
    test('should return counter value', () => {
        const state: Partial<StateSchema> = {
            counter: { value: 10 }
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
