import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterPage from './RegisterPage';

describe('#RegisterPage', () => {
  test('it renders a register page', () => {
    render(<RegisterPage />);
    screen.getByLabelText('Username');
    screen.getByLabelText('Email');
    screen.getByLabelText('Password');
    screen.getByLabelText('Confirm password');
    screen.getByRole('button', { name: 'Register' });
  });
  test('it calls the handleSubmit method and renders an error alert on error', async () => {
    render(<RegisterPage />);
    const submitButton = screen.getByRole('button', { name: 'Register' });
    act(() => userEvent.click(submitButton));
    await screen.findByText(/error/);
  });
});
