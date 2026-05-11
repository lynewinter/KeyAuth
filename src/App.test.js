// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders KeyAuth title', () => {
    render(<App />);
    const titleElement = screen.getByText(/KeyAuth/i);
    expect(titleElement).toBeInTheDocument();
});
