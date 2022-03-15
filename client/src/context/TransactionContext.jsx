import React, { useState, useEffect, useContext } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

const { ethereum } = window;
export const TransactionContext = React.createContext();
export const useTransactionContext = () => useContext(TransactionContext);

const getEtherContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return transactionContract;
};

const metamaskAlert = () =>
  alert('This app requires a MetaMask connection! 😊');

/*************************************
 * - TransactionProvider.jsx -
 *************************************/
export const TransactionProvider = ({ children }) => {
  const [wallet, setWallet] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    addressTo: '',
    amount: '',
    keyword: '',
    message: '',
  });

  const updateForm = (e, name) =>
    setFormData(prev => ({ ...prev, [name]: e.target.value }));

  const submitForm = e => {
    e.preventDefault();
    const { addressTo, amount, keyword, message } = formData;
    if (!addressTo || !amount || !keyword || !message)
      return alert('Please fully fill out the form. 🙂');
    sendTransaction();
  };

  const isWalletConnected = async () => {
    try {
      if (!ethereum) return metamaskAlert();
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      if (accounts.length) setWallet(accounts[0]);
      else console.log('No Metamask accounts found. 😔');
    } catch (err) {
      console.log(err);
    }
  };

  const getAllTransactions = async () => {
    try {
      if (!ethereum) return metamaskAlert();
      const contract = getEtherContract();
      const transactions = await contract.getAllTransactions();
      const formatted = transactions.map(transaction => ({
        addressTo: transaction.receiver,
        addressFrom: transaction.sender,
        timestamp: new Date(
          transaction.timestamp.toNumber() * 1000
        ).toLocaleString(),
        message: transaction.message,
        keyword: transaction.keyword,
        amount: parseInt(transaction.amount._hex) / 10 ** 18,
      }));
      setTransactions(formatted.reverse());
    } catch (err) {
      console.log(err);
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return metamaskAlert();
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      setWallet(accounts[0]);
      getAllTransactions();
    } catch (err) {
      console.log(err);
    }
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum || !wallet) return metamaskAlert();
      const { addressTo, amount, keyword, message } = formData;
      console.log(addressTo);
      const parsedAmount = ethers.utils.parseEther(amount);
      setIsLoading(true);

      await ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: wallet,
            to: addressTo,
            gas: '0x76c0',
            value: parsedAmount._hex,
          },
        ],
      });

      const contract = getEtherContract();
      const transaction = await contract.addToBlockchain(
        addressTo,
        parsedAmount,
        message,
        keyword
      );

      console.log(`Loading: ${transaction.hash}`);
      await transaction.wait();

      setIsLoading(false);
      console.log(`Success: ${transaction.hash}`);
      getAllTransactions();
      setFormData({
        addressTo: '',
        amount: '',
        keyword: '',
        message: '',
      });
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    isWalletConnected();
    getAllTransactions();
  }, []);

  // Context values.
  const value = {
    wallet,
    transactions,
    connectWallet,
    formData,
    updateForm,
    submitForm,
    isLoading,
  };

  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );
};
