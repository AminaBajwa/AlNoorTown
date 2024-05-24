
import React from "react";
import Link from "next/link";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Exploring the Vision - Inside Al Noor Town's Commitment to Community",
      desc:"Al Noor Town is more than just a residential development; it's a community that values connection, inclusivity, and a commitment to its residents. With a focus on amenities, sustainability, and a long-term vision for growth, Al Noor Town is the perfect place to call home.",
      img: "/306710493_143001478428274_6129429244563538739_n.jpg",
      slug: "/visionBlog"
    },
    {
      id: 2,
      title: "The Essence of Al Noor Town - A Journey Through its Unique Features",
      desc: "Al Noor Town is a residential development that offers a unique and enriching living experience. From its sense of space to its commitment to sustainability, the development has something for everyone. So, if you're looking for a place to call home that offers a rich cultural tapestry, a wide range of amenities, and a strong sense of community, look no further than Al Noor Town.",
      img: "/331609100_5929819440467410_4274732349169904206_n.jpg",
      slug: "/journeyBlog"
    },
    {
      id: 3,
      title: "Community Living Redefined - Why Al Noor Town is the Ideal Choice",
      desc: "If you're looking for a community that offers modern amenities, comfortable living spaces, and a strong sense of belonging, Al Noor Town is the ideal choice. With its prime location, thoughtful design, and strong sense of community, Al Noor Town is redefining community living. Contact Ramsan Developers today to learn more about this amazing community and how you can become a part of it.",
      img: "/bcommitmentBlog.jpg",
      slug: "/idealChoiceBlog"
    },
    {
      id: 4,
      title: "The Importance of Location - Exploring the Value of Al Noor Town's Prime Position",
      desc: "Al Noor Town's prime position offers residents easy access to services, employment opportunities, and amenities, thanks to its location along the rural-urban continuum. By recognizing the importance of rural-urban linkages, Al Noor Town provides a more nuanced perspective on development.",
      img: "/LocationImg.jpg",
      slug: "/locationBlog"
    },
    {
      id: 5,
      title: "Why Invest in Al Noor Town",
      desc: "Al Noor Town offers investors a unique opportunity to invest in a rapidly developing area with a prime location, appreciation potential, affordable prices, high-quality construction, diverse housing options, and a strong sense of belonging. Contact Ramsan Developers today to learn more about this amazing community and how you can become a part of it.",
      img: "/305502637_140878598640562_3104782451448573961_n.jpg",
      slug: "/single"
    },
  ];

  return (
   <>
    <div className="home">
      <div className="posts grid md:grid-cols-2 justify-center items-center gap-12 max-w-7xl mx-auto">
        {posts.map((post, index) => (
          <div
            className={`post flex flex-col md:flex-row items-center gap-x-6 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
            key={post.id}
          >
            <div className="mt-22 rounded-md px-4 ">
                <div className="img flex-2 relative">
                <div className="overlay absolute w-full h-full bg-lightGreen top-8 left-0 z-0"></div>
                <img
                    src={post.img}
                    alt=""
                    className="w-full max-h-400 object-cover"
                />
                </div>
            </div>
            <div className="content flex-3 flex flex-col gap-y-4 justify-between mt-30">
              <Link href={post.slug} passHref>
                <h1 className="text-2xl md:text-4xl font-bold cursor-pointer">
                  {post.title}
                </h1>
              </Link>
              <p className="text-base">{post.desc}</p>
              <button className="py-2 px-4 border rounded-md hover:text-black transition duration-300 ease-in-out">
                <Link href={post.slug} passHref>Read More</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
   </>
  );
};

export default Blog;

