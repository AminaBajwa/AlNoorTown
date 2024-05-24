
// import React, { useState } from 'react';
// import AccordionItem from './AccordionItem';

// const Features2 = () => {
//   const [open, setOpen] = useState(null);

//   const toggle = (index) => {
//     if (index === open) {
//       return setOpen(null);
//     }
//     setOpen(index);
//   };

//   const AccordionData = [
    
//     {
//       title: 'Infrastructure',
//       desc:
//         'Enjoy the comforts of modern living with wide carpeted roads, a robust sewerage system, and an overhead water tank ensuring uninterrupted water supply.',
//     },
//     {
//       title: 'Security and Peace of Mind',
//       desc:
//         'Your safety is our priority. With round-the-clock security measures in place, residents can enjoy peace of mind and tranquility within the community.',
//     },
//     {
//       title: 'Immediate Possession',
//       desc:
//         'Say goodbye to waiting periods. With immediate possession available, you can start building your future in Al Noor Town without delay.',
//     },
//   ];

//   return (
//     <section className="gap-4 p-4">
//       {AccordionData.map((data, index) => {
//         return (
//           <AccordionItem
//             key={index}
//             open={index === open}
//             title={data.title}
//             desc={data.desc}
//             toggle={() => toggle(index)}
            
//           />
//         );
//       })}
//     </section>
//   );
// };

// export default Features2;