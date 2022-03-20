import React from 'react';
import { render, screen } from '@testing-library/react';

import Quote from './index';

test('Render Quote content', () => {
    const dataElement = {
        author: 'text author',
        children: 'text children',
        className: 'p-4'
    };
    render(
        <Quote author={dataElement.author} className={dataElement.className}>
            {dataElement.children}
        </Quote>
    );
    const children = screen.getByText(`"${dataElement.children}"`);
    const author = screen.getByText(`- ${dataElement.author}`);
    expect(children).toBeInTheDocument();
    expect(author).toBeInTheDocument();
});

test('Quote has the class', () => {
    const dataElement = {
        author: 'text author',
        children: 'text children',
        className: 'p-4'
    };
    render(
        <Quote author={dataElement.author} className={dataElement.className}>
            {dataElement.children}
        </Quote>
    );
    const children = screen.getByText(`"${dataElement.children}"`);
    expect(children.parentNode.classList.contains(dataElement.className)).toBe(true)
});