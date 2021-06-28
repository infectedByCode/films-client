import { BaseSyntheticEvent, useState } from 'react';
import { useHistory } from 'react-router';
import { RegistrationState, StateError } from '../../ts/common/states';
import * as api from '../../utils/apiClient';
import { isAlpha, isEmail, isValidPassword } from '../../utils/validations';

function RegisterPage() {
  const history = useHistory();
  const [state, setState] = useState<RegistrationState>({
    status: 'success',
    data: null,
    email: '',
    username: '',
    password: '',
    confirmedPassword: ''
  });

  const validateForm = (): boolean => {
    let errorState: StateError | null = null;
    const { email, username, password, confirmedPassword } = state;
    if (!isAlpha(username || '')) {
      errorState = {
        status: 'error',
        error: 'Error: Username can only be alphanumeric characters.'
      };
    }

    if (!isEmail(email || '')) {
      errorState = {
        status: 'error',
        error: 'Error: Invalid email address.'
      };
    }

    if (!isValidPassword(password || '')) {
      errorState = {
        status: 'error',
        error: 'Error: Password criteria not met.'
      };
    }
    const isPasswordConfirmed = password === confirmedPassword;
    if (!isPasswordConfirmed) {
      errorState = {
        status: 'error',
        error: 'Error: Please check the form.'
      };
    }

    if (errorState) {
      setState((state) => ({
        ...state,
        ...errorState
      }));
      return false;
    }
    return true;
  };

  const handleInput = (e: BaseSyntheticEvent, field: string): void => {
    const value = e.target.value || '';
    setState((state) => ({ ...state, [field]: value }));
  };

  const handleSubmit = async (
    e: BaseSyntheticEvent
  ): Promise<void | undefined> => {
    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) return;
    const result = await api.registerUser();
    if (result.status !== 201) {
      setState((state) => ({
        ...state,
        status: 'error',
        error: "Error: Sorry, it's not you, it's us."
      }));
    } else {
      setState((state) => ({ ...state, status: 'success', data: result.data }));

      history.push('/films');
    }
  };

  if (state.status === 'pending') return <h1>Loading</h1>;
  else
    return (
      <section>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <fieldset className='flex flex-col'>
            <legend>Please complete the registration.</legend>
            <label htmlFor='username' className='mt-4'>
              Username
            </label>
            <input
              type='text'
              id='username'
              onChange={(e) => handleInput(e, 'username')}
              value={state.username}
              className='shadow p-2 focus:ring rounded'
              autoComplete='off'
            />
            <label htmlFor='email' className='mt-4'>
              Email
            </label>
            <input
              type='text'
              id='email'
              onChange={(e) => handleInput(e, 'email')}
              value={state.email}
              className='shadow p-2 focus:ring rounded'
            />
            <label htmlFor='password' className='mt-4'>
              Password
            </label>
            <input
              type='password'
              id='password'
              onChange={(e) => handleInput(e, 'password')}
              value={state.password}
              className='shadow p-2 focus:ring rounded'
            />
            <label htmlFor='confirm' className='mt-4'>
              Confirm password
            </label>
            <input
              type='password'
              id='confirm'
              onChange={(e) => handleInput(e, 'confirmedPassword')}
              value={state.confirmedPassword}
              className='shadow p-2 focus:ring rounded'
            />
            <button className='bg-gray-400 mt-6 p-4 rounded focus:ring'>
              Register
            </button>
            {state.status === 'error' && (
              <p className='rounded bg-red-500 mt-4 p-4 text-center'>
                {state.error}
              </p>
            )}
            {state.status === 'success' && state?.data && (
              <p className='rounded bg-green-500 mt-4 p-4 text-center'>
                Success. Thank you!.
              </p>
            )}
          </fieldset>
        </form>
      </section>
    );
}

export default RegisterPage;
