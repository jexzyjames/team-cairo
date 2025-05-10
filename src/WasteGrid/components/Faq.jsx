import {FaMinus, FaPlus} from 'react-icons/fa'
const Faq = ({ title, content, isOpen, onClick }) => {
  return (
    <div id='faq' className=" bg-gray-100 fades rounded-md w-full   overflow-hidden mb-1  ">
      <button
        onClick={onClick}
        // className="w-full flex items-center justify-between text-green-500 text-left px-4 py-3   font-bold focus:outline-none"
         className={`w-full cursor-pointer text-sm  flex justify-between items-center px-4 py-3 transition-colors duration-200 ${
          isOpen ? ' text-green-500' : ' text-gray-800'
        } font-extrabold   `}
      >
        <span  className='text-left '>{title} </span>
        <span onClick={onClick} className={`rounded-[200px] ${isOpen ? 'bg-green-400 text-white' : 'bg-white'}  text-black cursor-pointer  py-1 px-1   text-md shadow-lg `}>
 {isOpen ? <FaMinus /> : <FaPlus />}
            
              </span>
      </button>
      {isOpen && (
        <div className="px-4 mb-2  text-gray-700 ">
          {content}
        </div>
      )}
    </div>
  );
};

export default Faq;
