import Image from "next/image";
import ImageSlider from "./Components/ImageSlider";
import "flowbite"; 
import BlogCategories from "./Components/BlogCategories";
import HomeBlog from "./Components/HomeBlog";


export default function Home() {
  const blogData = [
    {
      title: "Mastering React",
      description: "Learn the fundamentals of React and build dynamic web applications.",
      image: "/slider.jpg",
      link: "/blogs/mastering-react",
    },
    {
      title: "Next.js Guide",
      description: "Understand how to use Next.js for building SEO-friendly web apps.",
      image: "/slider.jpg",
      link: "/blogs/nextjs-guide",
    },
    {
      title: "Node.js Best Practices",
      description: "Explore best practices for writing clean and scalable Node.js code.",
      image: "/slider.jpg",
      link: "/blogs/nodejs-best-practices",
    },
    {
      title: "Mastering React",
      description: "Learn the fundamentals of React and build dynamic web applications.",
      image: "/slider.jpg",
      link: "/blogs/mastering-react",
    },
    {
      title: "Next.js Guide",
      description: "Understand how to use Next.js for building SEO-friendly web apps.",
      image: "/slider.jpg",
      link: "/blogs/nextjs-guide",
    },
    {
      title: "Node.js Best Practices",
      description: "Explore best practices for writing clean and scalable Node.js code.",
      image: "/slider.jpg",
      link: "/blogs/nodejs-best-practices",
    },
    {
      title: "Mastering React",
      description: "Learn the fundamentals of React and build dynamic web applications.",
      image: "/slider.jpg",
      link: "/blogs/mastering-react",
    },
    {
      title: "Next.js Guide",
      description: "Understand how to use Next.js for building SEO-friendly web apps.",
      image: "/slider.jpg",
      link: "/blogs/nextjs-guide",
    },
    {
      title: "Node.js Best Practices",
      description: "Explore best practices for writing clean and scalable Node.js code.",
      image: "/slider.jpg",
      link: "/blogs/nodejs-best-practices",
    },
    {
      title: "Mastering React",
      description: "Learn the fundamentals of React and build dynamic web applications.",
      image: "/slider.jpg",
      link: "/blogs/mastering-react",
    },
    {
      title: "Next.js Guide",
      description: "Understand how to use Next.js for building SEO-friendly web apps.",
      image: "/slider.jpg",
      link: "/blogs/nextjs-guide",
    },
    {
      title: "Node.js Best Practices",
      description: "Explore best practices for writing clean and scalable Node.js code.",
      image: "/slider.jpg",
      link: "/blogs/nodejs-best-practices",
    },
  ];

  return (
    <div className="">
      <ImageSlider />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-10">
        
      {blogData.map((blog, index) => (
        <HomeBlog
          key={index}
          title={blog.title}
          description={blog.description}
          image={blog.image}
          link={blog.link}
        />
      ))}</div>
      <BlogCategories/>
    </div>
  );
}
