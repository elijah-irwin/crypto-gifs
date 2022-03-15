// Components
import Headers from './Headers';
import Details from './Details';
import EtherCard from './EtherCard';
import Form from './Form';

/*************************************
 * - Welcome.jsx -
 *************************************/
const Welcome = () => {
  return (
    <div className='container mx-auto flex flex-col lg:flex-row justify-around items-center py-10 md:py-10 gap-x-20 gap-y-5'>
      <section className='w-full'>
        <Headers />
        <Details />
      </section>

      <section className='w-full md:w-3/4 flex flex-col items-center'>
        <EtherCard />
        <Form />
      </section>
    </div>
  );
};

export default Welcome;
