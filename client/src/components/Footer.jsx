import { FiArrowLeftCircle } from 'react-icons/fi';

/*************************************
 * - Footer.jsx -
 *************************************/
const Footer = () => (
  <div className='w-full flex justify-end items-center flex-col py-4 container mx-auto'>
    <div className='w-full flex sm:flex-row flex-col justify-between items-center my-4'></div>
    <div className='w-full h-[0.25px] bg-slate-400 mt-5 ' />
    <div className='w-full flex justify-between items-center mt-3'>
      <a
        className='text-slate-400 text-left text-sm flex items-center hover:cursor-pointer hover:text-slate-300'
        href='https://mak-irwin.netlify.app/'
        target='_blank'
        rel='noopener noreferrer'>
        <FiArrowLeftCircle className='mr-2' />
        back to portfolio
      </a>
      <p className='text-slate-400 text-right text-sm'>mak | 2022</p>
    </div>
  </div>
);

export default Footer;
