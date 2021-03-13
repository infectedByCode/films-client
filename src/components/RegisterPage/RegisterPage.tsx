import React, { BaseSyntheticEvent, useState } from 'react';
import { States } from '../../ts/common/states';
import * as api from '../../utils/apiClient';

function RegisterPage() {
  const [state, setState] = useState<States>({
    status: 'success',
  });

  const handleSubmit = async (e: BaseSyntheticEvent): Promise<void> => {
    e.preventDefault();
    const result = await api.registerUser();
    if (result?.status !== 201) {
      setState({ status: 'error', error: 'Invalid data' });
    } else {
      setState({ status: 'success' });
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
            <input type='text' id='email' className='shadow p-2 focus:ring rounded' />
            <label htmlFor='password' className='mt-4'>
              Password
            </label>
            <input type='text' id='password' className='shadow p-2 focus:ring rounded' />
            <label htmlFor='confirm' className='mt-4'>
              Confirm password
            </label>
            <input type='text' id='confirm' className='shadow p-2 focus:ring rounded' />
            <button className='bg-gray-400 mt-6 p-4 rounded focus:ring'>Register</button>
            {state.status === 'error' ? (
              <p className='rounded bg-red-500 mt-4 p-4 text-center'>Sorry. It's us with the error.</p>
            ) : null}
          </fieldset>
        </form>
      </main>
    );
}

export default RegisterPage;
