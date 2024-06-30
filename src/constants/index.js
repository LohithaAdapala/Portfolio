import project1 from "../assets/projects/food.gif";
import project2 from "../assets/projects/todo.gif";
import project3 from "../assets/projects/robot.gif";
import project4 from "../assets/projects/portfolio.gif";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I always believe in that "If You Can Dream It, You Can Do It"...🤷‍♂️ I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including HTML5, Javascript, React, Node.js, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;


export const PROJECTS = [
  {
    title: "Food World Website",
    image: project1,
    description:
      "I created a basic Food World website using HTML and CSS, displaying a variety of food items with a clean and organized layout. The site features visually appealing design elements and ensures a user-friendly browsing experience. This project highlights my skills in web development and design using fundamental technologies.",
    technologies: ["HTML","CSS","BootStrap"]
  },
  {
    title: "Chat Application",
    image: project3,
    description:
      "Developed a real-time chat application for instant messaging. This application uses MongoDB for efficient data storage, seamlessly integrating with Node.js to handle operations like user authentication. Additionally, I integrated Socket.IO to enable real-time bidirectional communication, ensuring instant message delivery and updates.",
    technologies: ["React","NodeJS","Socket IO","MongoDB"],
  },
  {
    title: "Interactive Todo application",
    image: project2,
    description:
      "Utilized React.js for building a responsive and dynamic user interface. Implemented drag-and-drop feature to enhance user interaction and task management efficiency. Employed local storage to store and retrieve TODO tasks locally, ensuring data persistence across sessions.",
    technologies: ["React", "CSS", "Javascript"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "Developed a portfolio website using React and TailwindCSS, featuring sections for Home, About Me, Education, Skills, Projects, and Contact Information. The site offers a responsive and modern design, showcasing my technical skills and professional journey effectively.",
    technologies: ["React","TailwindCSS"],
  },
  
];

export const CONTACT = {
  address: "Tenali, AndhraPradesh",
  phoneNo: "+91-9398798623",
  email: "lohithaadapala@gmail.com",
};