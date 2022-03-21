import React from 'react';
import { render, screen } from '@testing-library/react';

import ContainerBreakpoints from './index';

test('Render ContainerBreakpoints content', () => {
    const dataElement = {
        className: 'p-4',
        children: 'text children'
    };
    render(<ContainerBreakpoints className={dataElement.className}>
        {dataElement.children}
    </ContainerBreakpoints>);
    const element = screen.getByText(dataElement.children);
    expect(element).toBeInTheDocument();
});

test('ContainerBreakpoints has the class', () => {
    const dataElement = {
        className: 'p-4',
        children: 'text data'
    };
    render(<ContainerBreakpoints className={dataElement.className}>
        {dataElement.children}
    </ContainerBreakpoints>);
    const element = screen.getByText(dataElement.children);
    expect(element.classList.contains(dataElement.className)).toBe(true)
});