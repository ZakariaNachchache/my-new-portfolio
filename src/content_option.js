const logotext = "ZN";
const meta = {
  title: "Zakaria Nachchache's Portfolio",
  description: "I’m Zakaria Nachchache Mobile  _ Full stack Developer",
};

const introdata = {
  title: "I’m Zakaria Nachchache",
  animated: {
    first: "I love coding",
    second: "I code cool websites",
    third: "I develop mobile apps",
  },
  description:
    "Full Stack Developer specializing in Java Spring Boot and Python ecosystems, with proven experience in developing scalable, secure, and high-performance applications. Skilled in creating RESTful APIs, microservices, and responsive frontends using Spring Boot, Next.js, React, Node.js, and Express.js. Experienced in cloud deployments and containerization with Docker.",
  your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
  title: "abit about my self",
  aboutme:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};
const worktimeline = [
  {
    jobtitle: "Java/Next.js Developer Intern",
    where: "DNA-Engineering",
    date: "2024/02/01 - 2024/08/01",
  },
  {
    jobtitle: "Full-Stack Developer Intern",
    where: "LeyaCom Solutions",
    date: "2024/02/01 - 2024/08/01",
  },
  {
    jobtitle: "Full-Stack Developer Intern",
    where: "Armada Systems",
    date: "2024/02/01 - 2024/08/01",
  },
];

const skills = [
  {
    name: "Java",
    value: 90,
  },
  {
    name: "Javascript",
    value: 85,
  },
  {
    name: "Python",
    value: 80,
  },
  {
    name: "React",
    value: 80,
  },
  {
    name: "React Native",
    value: 75,
  },
];

const services = [
  {
    title: "UI & UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Mobile Apps",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Wordpress Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
];

const dataportfolio = [
  {
    img: require("./assets/images/image.png"),
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/800/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/600/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/300/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/700/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },

  {
    img: "https://picsum.photos/400/600/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/300/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/550/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/700/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
];

const contactConfig = {
  YOUR_EMAIL: "zakaria@nachchache.com",
  YOUR_FONE: "(212)641036125",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_il4xup5",
  YOUR_TEMPLATE_ID: "template_c862z1h",
  YOUR_USER_ID: "wjX9Ntr0hvzjh40vU",
};

const socialprofils = {
  github: "https://github.com/ZakariaNachchache",
  facebook: "https://facebook.com",
  linkedin: "https://www.linkedin.com/in/zakaria-nachchache-a172ab194/",
  twitter: "https://twitter.com",
};

const projectsData = [
  {
    title: "E-commerce shopping platform",
    description:
      "This project is a full-featured e-commerce platform built using the MERN stack. It provides a seamless shopping experience with a user-friendly UI where customers can browse products, add items to their cart, and securely check out using integrated payment options. The platform also includes an Admin Dashboard for managing the store. The admin panel features real-time analytics to monitor sales, revenue, and user activity. This robust dashboard empowers the store owner to efficiently oversee all aspects of the online business.",
    image: "image.png",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "Tailwind CSS",
      "PayPal API",
      "Google Charts",
      "Render",
    ],
    keyfeatures: [
      "User authentication",
      "Product management",
      "Secure payment integration",
      "Admin dashboard",
      "Responsive design",
    ],
  },
  {
    title: "Bilingual Translation Chatbot Using Google Colab and React",
    description:
      "This project focuses on building a machine translation chatbot that leverages deep learning models to translate text between French and English. It combines backend machine learning models built with TensorFlow and Keras on Google Colab with a frontend user interface developed in React for seamless interaction. The chatbot uses a Seq2Seq model with an attention mechanism to provide accurate translations. The user can input text in either language, and the chatbot will output the corresponding translation in real-time.",
    image: "gg.png",
    technologies: [
      "NumPy",
      "TensorFlow",
      "Keras",
      "Google Colab",
      "Python",
      "React",
      "Keras",
      "Sequence-to-Sequence",
      "Attention Mechanism",
      "Long Short-Term Memory (LSTM)",
      "Axios",
      "Docker",
    ],
    keyfeatures: [
      "Bilingual translation",
      "Real-time chatbot",
      "Deep learning Sequence Models",
      "Attention Mechanism",
      "Scalable Model Deployment using Docker Containers",
      "User-friendly interface",
      "Scalable Model Deployment",
      "Text Preprocessing",
    ],
  },
  {
    title: "geTeam: AI-Powered Recruitment Platform for Tech Talent Matching",
    description:
      "geTeam is a data-driven recruitment platform designed to revolutionize the hiring process for tech companies by leveraging AI. Built as part of a full-stack solution using Spring Boot microservices, Keycloak for secure authentication, and a responsive Next.js frontend, geTeam efficiently connects companies with optimal candidates based on skills, experience, and project requirements. The platform integrates intelligent matching algorithms, allowing companies to discover and engage with tech talent more effectively, streamlining the recruitment pipeline, and reducing hiring time. It empowers clients to make data-informed decisions while improving candidate experience through personalized recommendations and automated processes.",
    image: "geTeam.png",
    technologies: [
      "IntelliJ IDEA ",
      "PostMan",
      "Swagger",
      "PostgreSQL",
      "Cassandra",
      "SpringBoot",
      "RabbitMQ",
      "Keycloak",
      "Nextjs",
      "Axios",
      "TailwindCSS",
      "Gitlab",
      "SonarQube",
      "Docker",
    ],
    keyfeatures: [
      "Job Posting & Candidate Profile Management",
      "Advanced Search & Filtering",
      "AI-Powered Candidate Matching",
      "Resume Parsing & Skill Extraction",
      "Microservices Architecture",
      "Secure Authentication & Authorization with Keycloak & OAuth2",
      "Real-Time Notifications",
      "Scalable Infrastructure",
    ],
  },
  {
    title: "Scalable Web Hosting Application",
    description:
      "During my Full Stack Developer internship from July 2023 to September 2023, I led the creation and deployment of a scalable web application designed for hosting services. The project was built using the MERN stack (MongoDB, Express.js, React, Node.js), ensuring robust performance and easy maintainability.",
    image: "hostclub.png",
    technologies: [
      "React.js ",
      "Redux",
      "Swagger",
      "PostgreSQL",
      "RabbitMQ",
      "Keycloak",
      "Nextjs",
      "Axios",
      "TailwindCSS",
      "Docker",
      "NGINX",
    ],
    keyfeatures: [
      "State Management with Redux",
      "Secure User Authentication",
      "RESTful API Integration",
      "Deployment & Optimization",
    ],
  },
];

export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
  projectsData,
};