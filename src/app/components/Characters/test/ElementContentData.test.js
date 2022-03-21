import React from 'react';
import { render, screen } from '@testing-library/react';

import ElementContentData from '../ElementContentData';

test('Render ElementContentData content', () => {
    const dataElement = {
        className: 'p-4',
        data: 'text data',
        typeData: 'text type data'
    };
    render(<ElementContentData data={dataElement.data} typeData={dataElement.typeData} />);
    const data = screen.getByText(dataElement.data);
    const typeData = screen.getByText(dataElement.typeData);
    expect(data).toBeInTheDocument();
    expect(typeData).toBeInTheDocument();
});

test('ElementContentData has the class', () => {
    const dataElement = {
        className: 'p-4',
        data: 'text data',
        typeData: 'text type data'
    };
    render(<ElementContentData className={dataElement.className} data={dataElement.data} typeData={dataElement.typeData} />);
    const data = screen.getByText(dataElement.data);
    expect(data).toBeInTheDocument();
    expect(data.parentNode.classList.contains(dataElement.className)).toBe(true)
});