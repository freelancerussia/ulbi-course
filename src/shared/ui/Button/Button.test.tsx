import { render, screen } from '@testing-library/react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('without props', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('with theme prop', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
    test('with size prop', () => {
        render(<Button size={ButtonSize.M}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('size_m');
    });
    test('with size square prop', () => {
        render(<Button square={true} theme={ButtonTheme.BACKGROUND} size={ButtonSize.M}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('square background size_m');
    });
});