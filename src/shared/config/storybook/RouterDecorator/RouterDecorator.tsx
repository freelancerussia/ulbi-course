import { JSX } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (Story: () => JSX.Element) => {
    return <BrowserRouter><Story /></BrowserRouter>;
};