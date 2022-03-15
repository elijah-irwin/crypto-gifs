import React from 'react';

// Contexts
import { useTransactionContext } from '../context/TransactionContext';

// Components
import Loader from './Loader';

/*************************************
 * - Input Used By Form.jsx -
 *************************************/
const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step='0.0001'
    value={value}
    maxLength={60}
    onChange={e => handleChange(e, name)}
    className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism'
  />
);

/*************************************
 * - Form.jsx -
 *************************************/
const Form = () => {
  const { formData, updateForm, submitForm, isLoading } =
    useTransactionContext();

  // Render
  return (
    <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism'>
      <Input
        placeholder='Receiving Wallet Address'
        name='addressTo'
        type='text'
        value={formData.addressTo}
        handleChange={updateForm}
      />
      <Input
        placeholder='Amount (ETH)'
        name='amount'
        type='number'
        value={formData.amount}
        handleChange={updateForm}
      />
      <Input
        placeholder='Keyword (ex. cats)'
        name='keyword'
        type='text'
        value={formData.keyword}
        handleChange={updateForm}
      />
      <Input
        placeholder='Message'
        name='message'
        type='text'
        value={formData.message}
        handleChange={updateForm}
      />

      <div className='h-[1px] w-full bg-gray-700 my-2' />

      {isLoading ? (
        <Loader />
      ) : (
        <button
          type='button'
          onClick={submitForm}
          className='text-gray-400 w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer'>
          Send Now
        </button>
      )}
    </div>
  );
};

export default Form;
