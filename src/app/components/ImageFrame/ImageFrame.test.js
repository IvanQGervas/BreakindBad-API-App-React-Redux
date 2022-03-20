import React from 'react';
import { getByAltText, render } from '@testing-library/react';

import ImageFrame from './index';

test('Render ImageFrame', () => {
    const dataElement = {
        alt: 'alt-text',
        classNameFrame: 'p-4',
        classNameImg: 'p-2',
        frame: true,
        src: 'http://example.com/image'
    };
    render(
        <ImageFrame
            alt={dataElement.alt}
            classNameFrame={dataElement.classNameFrame}
            classNameImg={dataElement.classNameImg}
            frame={dataElement.frame}
            src={dataElement.src} />
    );
    const displayedImage = document.querySelector('img');
    expect(displayedImage.src).toContain(dataElement.src);
});

test('ImageFrame has the classNameFrame and classNameImg', () => {
    const dataElement = {
        alt: 'alt-text',
        classNameFrame: 'p-4',
        classNameImg: 'p-2',
        frame: true,
        src: 'http://example.com/image'
    };
    render(
        <ImageFrame
            alt={dataElement.alt}
            classNameFrame={dataElement.classNameFrame}
            classNameImg={dataElement.classNameImg}
            frame={dataElement.frame}
            src={dataElement.src} />
    );
    const displayedImage = document.querySelector('img');
    expect(displayedImage.parentNode.classList.contains(dataElement.classNameFrame)).toBe(true);
    expect(displayedImage.classList.contains(dataElement.classNameImg)).toBe(true);
});

test('ImageFrame has the alt attribute', () => {
    const dataElement = {
        alt: 'alt-text',
        classNameFrame: 'p-4',
        classNameImg: 'p-2',
        frame: true,
        src: 'http://example.com/image'
    };
    const { getAllByAltText } = render(
        <ImageFrame
            alt={dataElement.alt}
            classNameFrame={dataElement.classNameFrame}
            classNameImg={dataElement.classNameImg}
            frame={dataElement.frame}
            src={dataElement.src} />
    );
    getAllByAltText(dataElement.alt)
});