import React from 'react'
import Link from "next/link";
const Menu = () => {

    const posts = [
        {
          id: 1,
          title: "Inside Al Noor Town's Commitment to Community",
          desc:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
          img: "/306710493_143001478428274_6129429244563538739_n.jpg",
          slug: "/visionBlog"
        },
        {
          id: 2,
          title: "A Journey Through its Unique Features",
          desc:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
          img: "/vision1.jpg",
          slug: "/journeyBlog"
        },
        {
          id: 3,
          title: "Why Al Noor Town is the Ideal Choice",
          desc:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
          img: "/vision.jpg",
          slug: "/idealChoiceBlog"
        },
        {
          id: 4,
          title: "Exploring the Value of Al Noor Town's Prime Position",
          desc:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
          img: "/LocationImg.jpg",
          slug: "/locationBlog"
        },
      ];

      return (
        <div className="menu">
          <h1>Other posts you may like</h1>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            {posts.map((post) => (
              <div className="post" key={post.id}>
                <img src={post.img} alt={post.title} className="w-full" />
                <h2 className="text-lg font-semibold">{post.title}</h2>
                <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">
                <Link href={post.slug} passHref>Read More</Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      );
      
}

export default Menu
