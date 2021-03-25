import React, { BaseSyntheticEvent, useState } from 'react';
import { States, RegistrationState, StateError } from '../../ts/common/states';
import * as api from '../../utils/apiClient';
import { isEmail } from '../../utils/validations';

function RegisterPage() {
  const [state, setState] = useState<RegistrationState>({
    status: 'success',
    data: null,
    email: '',
  });

  const validateForm = (): boolean => {
    const { email } = state;
    const isValid = isEmail(email || '');
    if (!isValid) {
      const errorState: StateError = { status: 'error', error: 'Error: Please check the form.' };
      setState({ ...state, ...errorState });
      return false;
    }
    return true;
  };

  const handleInput = (e: BaseSyntheticEvent, field: string): void => {
    const value = e.target.value || '';
    setState({ ...state, [field]: value });
  };

  const handleSubmit = async (e: BaseSyntheticEvent): Promise<void | undefined> => {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) return;
    const result = await api.registerUser();
    if (result.status !== 201) {
      setState({ ...state, status: 'error', error: "Error: Sorry, it's not you, it's us." });
    } else {
      setState({ ...state, status: 'success', data: result.data });
    }
  };

  if (state.status === 'pending') return <h1>Loading</h1>;
  else
    return (
      <main>
        <form onSubmit={handleSubmit}>
          <fieldset className='flex flex-col'>
            <legend>Please complete the registration.</legend>
            <label htmlFor='username' className='mt-4'>
              Username
            </label>
            <input type='text' id='username' className='shadow p-2 focus:ring rounded' />
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
            <input type='password' id='password' className='shadow p-2 focus:ring rounded' />
            <label htmlFor='confirm' className='mt-4'>
              Confirm password
            </label>
            <input type='password' id='confirm' className='shadow p-2 focus:ring rounded' />
            <button className='bg-gray-400 mt-6 p-4 rounded focus:ring'>Register</button>
            {state.status === 'error' && <p className='rounded bg-red-500 mt-4 p-4 text-center'>{state.error}</p>}
            {state.status === 'success' && state?.data && (
              <p className='rounded bg-green-500 mt-4 p-4 text-center'>Success. Thank you!.</p>
            )}
          </fieldset>
        </form>
      </main>
    );
}

export default RegisterPage;
