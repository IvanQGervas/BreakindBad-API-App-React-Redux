import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Button from './Button';
import ButtonDark from './ButtonDark';
import ButtonLight from './ButtonLight';
import ButtonPrimary from './ButtonPrimary';

// Button
test('Render Button content', () => {
    const dataButton = {
        textButton: 'Click!'
    };
    render(<Button>{dataButton.textButton}</Button>);
    const text = screen.getByText(dataButton.textButton);
    expect(text).toBeInTheDocument();
});

test('Click Button', () => {
    const dataButton = {
        textButton: 'Click!'
    };
    const mockHandler = jest.fn();
    render(<Button onClick={mockHandler}>{dataButton.textButton}</Button>);
    const button = screen.getByText(dataButton.textButton);
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalledTimes(1);
});

test('Button has the class', () => {
    const dataButton = {
        className: 'p4',
        textButton: 'Click!'
    };
    render(<Button className={dataButton.className}>{dataButton.textButton}</Button>);
    const button = screen.getByText(dataButton.textButton);
    expect(button.classList.contains('btn')).toBe(true)
});


// ButtonDark
test('Render ButtonDark content', () => {
    const dataButton = {
        textButton: 'Click!'
    };
    render(<ButtonDark>{dataButton.textButton}</ButtonDark>);
    const text = screen.getByText(dataButton.textButton);
    expect(text).toBeInTheDocument();
});

test('Click ButtonDark', () => {
    const dataButton = {
        textButton: 'Click!'
    };
    const mockHandler = jest.fn();
    render(<ButtonDark onClick={mockHandler}>{dataButton.textButton}</ButtonDark>);
    const button = screen.getByText(dataButton.textButton);
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalledTimes(1);
});

test('ButtonDark has the class', () => {
    const dataButton = {
        className: 'p4',
        textButton: 'Click!'
    };
    render(<ButtonDark className={dataButton.className}>{dataButton.textButton}</ButtonDark>);
    const button = screen.getByText(dataButton.textButton);
    expect(button.classList.contains('btn')).toBe(true)
});


// ButtonLight
test('Render ButtonLight content', () => {
    const dataButton = {
        textButton: 'Click!'
    };
    render(<ButtonLight>{dataButton.textButton}</ButtonLight>);
    const text = screen.getByText(dataButton.textButton);
    expect(text).toBeInTheDocument();
});

test('Click ButtonLight', () => {
    const dataButton = {
        textButton: 'Click!'
    };
    const mockHandler = jest.fn();
    render(<ButtonLight onClick={mockHandler}>{dataButton.textButton}</ButtonLight>);
    const button = screen.getByText(dataButton.textButton);
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalledTimes(1);
});

test('ButtonLight has the class', () => {
    const dataButton = {
        className: 'p4',
        textButton: 'Click!'
    };
    render(<ButtonLight className={dataButton.className}>{dataButton.textButton}</ButtonLight>);
    const button = screen.getByText(dataButton.textButton);
    expect(button.classList.contains('btn')).toBe(true)
});


// ButtonPrimary
test('Render ButtonPrimary content', () => {
    const dataButton = {
        textButton: 'Click!'
    };
    render(<ButtonPrimary>{dataButton.textButton}</ButtonPrimary>);
    const text = screen.getByText(dataButton.textButton);
    expect(text).toBeInTheDocument();
});

test('Click ButtonPrimary', () => {
    const dataButton = {
        textButton: 'Click!'
    };
    const mockHandler = jest.fn();
    render(<ButtonPrimary onClick={mockHandler}>{dataButton.textButton}</ButtonPrimary>);
    const button = screen.getByText(dataButton.textButton);
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalledTimes(1);
});

test('ButtonPrimary has the class', () => {
    const dataButton = {
        className: 'p4',
        textButton: 'Click!'
    };
    render(<ButtonPrimary className={dataButton.className}>{dataButton.textButton}</ButtonPrimary>);
    const button = screen.getByText(dataButton.textButton);
    expect(button.classList.contains('btn')).toBe(true)
});