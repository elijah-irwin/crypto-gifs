/*************************************
 * - Welcome.jsx -
 *************************************/
const Headers = () => (
  <div className='text-white'>
    <h1 className='text-4xl sm:text-5xl pb-3'>
      Send Crypto Over <br /> the Ropsten Test Network
    </h1>
    <p className='mt-5 text-slate-100'>
      This educational project allows you to connect your MetaMask wallet and
      send Ethereum to anyone over the Ropsten test network. Each transaction is
      recorded on the blockchain by interfacing with the Solidity smart contract
      I wrote and deployed via Alchemy.
    </p>
  </div>
);

export default Headers;
