// Contexts
import { useTransactionContext } from '../context/TransactionContext';

// Components
import TransactionCard from './TransactionCard';

/*************************************
 * - Transactions.jsx -
 *************************************/
const Transactions = () => {
  const { wallet, transactions } = useTransactionContext();

  return (
    <div className='w-full flex flex-col px-8 sm:px-0 flex-1'>
      <h3 className='text-slate-200 text-3xl text-center pb-10 pt-2 sm:pt-10'>
        {wallet
          ? 'Latest Transactions'
          : 'Connect With MetaMask To See The Latest Transactions'}
      </h3>
      <div className='flex flex-wrap justify-center items-center'>
        {transactions.map((el, i) => (
          <TransactionCard key={i} {...el} />
        ))}
      </div>
    </div>
  );
};

export default Transactions;
