import { useState } from 'react';
import AccordionItems from '../components/Faq';

const AccordionItem = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className=" w-full ">
      {items.map((item, index) => (
        <AccordionItems
          key={index}
          title={item.title}
          content={item.content}
          isOpen={index === openIndex}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default AccordionItem;
