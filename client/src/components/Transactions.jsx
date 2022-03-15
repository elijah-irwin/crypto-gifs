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
    <div className='w-full flex flex-col px-8 sm:px-0 md:py-5'>
      <h3 className='text-white text-3xl text-center pb-10 pt-2 sm:pt-10'>
        {wallet
          ? 'Latest Transactions'
          : 'Connect With Metamask To See The Latest Transactions'}
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
