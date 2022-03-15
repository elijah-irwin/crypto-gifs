import { Navbar, Welcome, Transactions, Footer } from './components';

const App = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
      </div>
      <div className='gradient-bg-footer flex flex-col flex-1'>
        <Transactions />
        <Footer />
      </div>
    </div>
  );
};

export default App;
