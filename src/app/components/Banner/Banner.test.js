import React from 'react';
import { render } from '@testing-library/react';
import Banner from './index';

test('Render Banner content', () => {
    const dataBanner = {
        classNameContainer: 'p-4',
        title: 'Title Banner',
        secondaryText: 'Secondary text Banner'
    };

    const component = render(<Banner
        classNameContainer='classNameContainer'
        title={dataBanner.title}
        secondaryText={dataBanner.secondaryText} />
    );

    const title = component.getByText(dataBanner.title);
    const secondaryText = component.getByText(dataBanner.secondaryText);
    expect(title).toBeInTheDocument();
    expect(secondaryText).toBeInTheDocument();
});