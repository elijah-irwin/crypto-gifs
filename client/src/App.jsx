import { Navbar, Welcome, Transactions, Footer } from './components';

const App = () => {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
      </div>
      <div className='gradient-bg-footer'>
        <Transactions />
        <Footer />
      </div>
    </div>
  );
};

export default App;
