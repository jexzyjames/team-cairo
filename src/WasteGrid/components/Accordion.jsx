import AccordionItem from '../components/AccordionItem';
import faqImg from '../assets/faqImg.png';
const  Accordion =()=> {
  const data = [
    {
      title: '1. What is WasteGrid?',
      content: 'WasteGrid is a mobile app that he;ps you sort waste correctly, learn about recycling, and earn rewards like airtime and vouchers for taking eco-friendly actions..',
    },
    {
      title: '2. How do i earn rewards on WasteGrid?',
      content: 'React makes building complex UIs easier and more maintainable.',
    },
     {
      title: '3. Is the app free to use?',
      content: 'React uses a virtual DOM and diffing algorithm for efficient rendering.',
    },
    {
      title: '4. How do i redeem my points?',
      content: 'React uses a virtual DOM and diffing algorithm for efficient rendering.',
    },
     {
      title: '5. Can schools or communities use WasteGrid together?',
      content: 'React uses a virtual DOM and diffing algorithm for efficient rendering.',
    },
    
  ];

  return (
    <div className=" md:mt-10 w-full  p-6">
      <h1 className="md:text-3xl text-xl md:mt-20 font-bold text-center mb-6">Frequently Asked Question</h1>

      <div className="flex md:mx-auto  lg:px-[5%] justify-center mt-20 w-full md:flex-row flex-col gap-10 ">
        <div  className='w-full   justify-center flex h-full'>
          <img className='w-73' src={faqImg} alt="" />
        </div>


        <div className=' flex flex-col w-full h-full rounded-xl bg-white shadow-xs p-1  '>
        <div className='bg-stone-50  h-full'>

      <AccordionItem items={data} />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
