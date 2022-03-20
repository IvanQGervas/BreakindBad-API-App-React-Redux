import React from 'react';
import { render, screen } from '@testing-library/react';

import UlNavigation from '../UlNavigation';

test('Render UlNavigation content', () => {
    const dataElement = {
        className: 'p-4',
        children: 'text children'
    };
    render(
        <UlNavigation className={dataElement.className}>
            {dataElement.children}
        </UlNavigation>
    );
    const element = screen.getByText(dataElement.children);
    expect(element).toBeInTheDocument();
});

test('UlNavigation has the class', () => {
    const dataElement = {
        className: 'p-4',
        children: 'text children'
    };
    render(
        <UlNavigation className={dataElement.className}>
            {dataElement.children}
        </UlNavigation>
    );
    const element = screen.getByText(dataElement.children);
    expect(element.classList.contains(dataElement.className)).toBe(true)
});