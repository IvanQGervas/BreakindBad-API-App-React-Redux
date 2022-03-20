import React from 'react';
import { render, screen } from '@testing-library/react';

import ContainerBreakpoits from './index';

test('Render ContainerBreakpoits content', () => {
    const dataElement = {
        className: 'p-4',
        children: 'text children'
    };
    render(<ContainerBreakpoits className={dataElement.className}>
        {dataElement.children}
    </ContainerBreakpoits>);
    const element = screen.getByText(dataElement.children);
    expect(element).toBeInTheDocument();
});

test('ContainerBreakpoits has the class', () => {
    const dataElement = {
        className: 'p-4',
        children: 'text data'
    };
    render(<ContainerBreakpoits className={dataElement.className}>
        {dataElement.children}
    </ContainerBreakpoits>);
    const element = screen.getByText(dataElement.children);
    expect(element.classList.contains(dataElement.className)).toBe(true)
});