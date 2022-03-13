import { useEffect } from 'react';

// Contexts
import { useTransactionContext } from '../context/TransactionContext';

// Components
import TransactionCard from './TransactionCard';

// Utils
import { tempData } from '../utils/temp-data';

const Transactions = () => {
  const { transactions } = useTransactionContext();

  return (
    <div className=' flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions'>
      <div className='flex flex-col md:p-12 py-12 px-4'>
        <h3 className='text-white text-3xl text-center my-2'>
          See The Latest Transactions
        </h3>

        <div className='flex flex-wrap justify-center items-center mt-10'>
          {transactions.map((el, i) => (
            <TransactionCard key={i} {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
