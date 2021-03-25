import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterPage from './RegisterPage';

describe('#RegisterPage', () => {
  afterEach(() => {
    delete process.env.THROW_ERROR;
  });
  test('it renders a register page', () => {
    render(<RegisterPage />);
    screen.getByLabelText('Username');
    screen.getByLabelText('Email');
    screen.getByLabelText('Password');
    screen.getByLabelText('Confirm password');
    screen.getByRole('button', { name: 'Register' });
  });
  test('it calls the handleSubmit method and renders an error alert on error', async () => {
    process.env.THROW_ERROR = 'true';
    render(<RegisterPage />);
    const submitButton = screen.getByRole('button', { name: 'Register' });
    act(() => userEvent.click(submitButton));
    await screen.findByText(/error/i);
  });
  test('it calls the handleSubmit method and renders a success message if post is a succes', async () => {
    render(<RegisterPage />);
    userEvent.type(screen.getByLabelText('Username'), 'myname');
    userEvent.type(screen.getByLabelText('Email'), 'myemail@me.com');
    userEvent.type(screen.getByLabelText('Password'), 'badpassword');
    userEvent.type(screen.getByLabelText('Confirm password'), 'badpassword');

    const submitButton = screen.getByRole('button', { name: 'Register' });
    act(() => userEvent.click(submitButton));
    await screen.findByText(/success/i);
  });
  test('it validates the form and shows error message', async () => {
    render(<RegisterPage />);

    userEvent.type(screen.getByLabelText('Email'), 'me.com');

    const submitButton = screen.getByRole('button', { name: 'Register' });
    act(() => userEvent.click(submitButton));

    await screen.findByText(/error/i);
  });
});
