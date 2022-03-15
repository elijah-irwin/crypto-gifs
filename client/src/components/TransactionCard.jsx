import { shortenAddress } from '../utils/shorten-address';
import useFetchGif from '../hooks/useFetchGif';

/*************************************
 * - TransactionCard.jsx -
 *************************************/
const TransactionCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}) => {
  const gifUrl = useFetchGif(keyword);

  return (
    <div className='blue-glassmorphism m-2 flex 2xl:min-w-[450px] 2xl:max-w-[500px] sm:min-w-[270px] sm:max-w-[375px] min-w-full rounded-xl p-5 pb-3'>
      <div className='flex flex-col items-center w-full'>
        <div className='w-full flex flex-col space-y-2 pb-5'>
          <a
            href={`https://ropsten.etherscan.io/address/${addressFrom}`}
            target='_blank'
            rel='noreferrer'>
            <p className='text-white text-base'>
              <span className='font-bold mr-1'>From:</span>{' '}
              <span className='underline text-slate-400 hover:text-slate-500'>
                {shortenAddress(addressFrom)}
              </span>
            </p>
          </a>
          <a
            href={`https://ropsten.etherscan.io/address/${addressTo}`}
            target='_blank'
            rel='noreferrer'>
            <p className='text-white text-base'>
              <span className='font-bold mr-1'>To:</span>{' '}
              <span className='underline text-slate-400 hover:text-slate-500'>
                {shortenAddress(addressTo)}
              </span>
            </p>
          </a>
          <p className='text-white text-base'>
            <span className='font-bold mr-1'>Amount:</span> {amount}ETH
          </p>
          <p className='text-white text-base'>
            <span className='font-bold mr-1'>Message:</span> {message}
          </p>
        </div>
        <img
          src={gifUrl || url}
          alt='nature'
          className='w-full h-64 2xl:h-80 rounded-md shadow-lg object-cover'
        />
        <div className='white-glassmorphism py-2 px-5 w-max rounded-3xl -mt-5 shadow-2xl'>
          <p className='text-white'>{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
