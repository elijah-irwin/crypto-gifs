import { FiUser } from 'react-icons/fi';

// Internals
import { useTransactionContext } from '../context/TransactionContext';
import { shortenAddress } from '../utils/shorten-address';

/*************************************
 * - Navbar.jsx -
 *************************************/
const Navbar = () => {
  const { wallet, connectWallet } = useTransactionContext();

  return (
    <nav className='flex justify-between items-center align-middle py-5 container mx-auto'>
      <div className='text-white text-2xl font-semibold'>mak</div>
      <button
        className='bg-[#3250be] flex items-center text-white py-2 px-5 rounded-full cursor-pointer hover:bg-[#2546bd]'
        onClick={() => connectWallet()}>
        <FiUser className='mr-2 text-lg' />
        {wallet ? shortenAddress(wallet) : 'Connect Wallet'}
      </button>
    </nav>
  );
};

export default Navbar;
