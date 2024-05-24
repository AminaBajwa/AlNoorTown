
// import React, { useState } from 'react';
// import AccordionItem from './AccordionItem';

// const Features = () => {
//   const [open, setOpen] = useState(null);

//   const toggle = (index) => {
//     if (index === open) {
//       return setOpen(null);
//     }
//     setOpen(index);
//   };

//   const AccordionData = [
//     {
//       title: 'TMA Approved',
//       desc:
//         'Rest assured, Al Noor Town is fully approved by the Tehsil Municipal Administration (TMA), ensuring compliance with all necessary regulations and standards.',
//     },
//     {
//       title: 'Commercial Plots',
//       desc:
//         'Ideal for entrepreneurs and investors, Al Noor Town also offers commercial plots, providing lucrative opportunities for business venture.',
//     },
//     {
//       title: 'Modern Amenities',
//       desc:
//         'Experience unparalleled convenience with essential amenities such as electricity, a graveyard, a masjid (mosque), a community center, and a maintenance department service, all within close proximity.',
//     },
   
//   ];

//   return (
//     <section className=" gap-4 p-4">
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

// export default Features;