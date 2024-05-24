// "use client"
// import Menu from "@/Components/Menu";
// import React from "react";

// const Single = () => {


//   return (
//     <div className="single">
//         <div className="content">
//             <img src="/Mosque3D.jpeg"/>
//             <div className="user">
//             <img src="/Mosque3D.jpeg"/>
//             <div className="info">
//                 <span>John</span>
//                 <p>Posted 2 days ago</p>
//             </div>
//             </div>
//             <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h1>
//             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
           
//             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            
//             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        
//         </div>
//         <div className="menu">
//             <Menu/>
//         </div>
//     </div>
//   );
// };

// export default Single;

"use client"
import Menu from "@/Components/Menu";
import React from "react";

const Single = () => {


  return (
    <div className="single">
        <div className="content">
            <img src="/invests.jpg" alt=""/>
            <div className="user" >
            <img src="/user.png" alt=""/>
            <div className="info">
                <span>User</span>
                <p>Posted in 2024</p>
            </div>
            </div>
            <h1>Why Invest in Al Noor Town?</h1>
           <p>Al Noor Town offers investors a unique opportunity to invest in a rapidly developing area with a prime location, appreciation potential, affordable prices, high-quality construction, diverse housing options, and a strong sense of belonging. Contact Ramsan Developers today to learn more about this amazing community and how you can become a part of it.</p>
           <h3>Al Noor Town - Prime Location, Appreciation, Affordability, Quality, Diversity, Belonging</h3>
           <p>Al Noor Town's prime location in a developing area offers easy access to services, employment opportunities, and amenities, making it an attractive investment location. The community's affordable prices and appreciation potential provide an excellent investment opportunity for both first-time buyers and experienced investors.</p>
           <p>Al Noor Town is known for its high-quality construction and modern urban town planning principles, ensuring long-term attractiveness to buyers and tenants. The community's diverse housing options, including apartments, villas, and plots, cater to different lifestyles and budgets, allowing investors to target a wider range of potential buyers and tenants. Additionally, Al Noor Town fosters a strong sense of community and belonging, with well-designed amenities providing opportunities for social interaction and engagement.</p>
           <h3>In conclusion</h3>
           <p>Al Noor Town offers investors a unique opportunity to invest in a rapidly developing area with a prime location, appreciation potential, affordable prices, high-quality construction, diverse housing options, and a strong sense of belonging. Contact Ramsan Developers today to learn more about this amazing community and how you can become a part of it.</p>
        </div>
        <div className="menu md:hidden">
        <Menu />
      </div>
    </div>
  );
};

export default Single;

