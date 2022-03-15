const companyCommonStyles =
  'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-300 text-sm text-white';

/*************************************
 * - Details.jsx -
 *************************************/
const Details = () => {
  return (
    <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
      <div className={`rounded-tl-2xl ${companyCommonStyles}`}>Ethereum</div>
      <div
        className={`rounded-tr-2xl sm:rounded-tr-none ${companyCommonStyles}`}>
        Solidity
      </div>
      <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>Hardhat</div>
      <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>Alchemy</div>
      <div
        className={`rounded-bl-2xl sm:rounded-bl-none ${companyCommonStyles}`}>
        React
      </div>
      <div className={`rounded-br-2xl ${companyCommonStyles}`}>TailwindCSS</div>
    </div>
  );
};

export default Details;
