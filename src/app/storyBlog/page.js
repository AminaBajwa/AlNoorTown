"use client"
import Menu from "@/Components/Menu";
import React from "react";

const StoryBlog = () => {


  return (
    <div className="single">
        <div className="content">
            <img src="/alnoorHero1.jpg" alt=""/>
            <div className="user" >
            <img src="/user.png" alt=""/>
            <div className="info">
                <span>User</span>
                <p>Posted in 2024</p>
            </div>
            </div>
            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
           
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. when an unknown remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        
        </div>
        <div className="menu md:hidden">
        <Menu />
      </div>
    </div>
  );
};

export default StoryBlog;

