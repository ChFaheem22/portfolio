import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div className="about">
      <div className="box">
        <Image src="/pic-2.jpeg" alt="Cover Image" className="img" width={300} height={300} />
      </div>

      <div className="box">
        <h1 className="h1">About Me</h1>
        <p>
          I&rsquo;m Faheem, a dedicated <b> Frontend Developer</b> and Software Engineering student <b></b> 
          with a strong interest in building modern, scalable, and performance driven 
          web applications. I enjoy transforming ideas into clean, responsive, and 
          intuitive digital experiences.
        </p>

        <p>
          My primary focus is on <b>React.js</b> and <b>Next.js</b>, where I work on creating 
          reusable components, structured architectures, and smooth user interactions. 
          I pay close attention to performance, accessibility, and detail because 
          I believe great products are built through thoughtful design and clean code.
        </p>
        <p>
          Alongside my academic journey, I continuously work on real-world projects 
          to strengthen my problem-solving skills and <b>Full-stack understanding</b>. 
          I am always eager to learn, improve, and take on challenging opportunities 
          that help me grow as a developer.
        </p>

        <a href="/CV.pdf" view="true" className="download-btn">Download Resume</a>
      </div>
    </div>
  );
};

export default About;
