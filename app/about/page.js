import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div className="about">
      <div className="box">
        <Image src="/pic.jpg" alt="My Pic" className="img" width={240} height={240} />
      </div>

      <div className="box">
        <h1 className="h1">About Me</h1>
        <p>
          I&rsquo;m Faheem, a frontend developer with a passion for creating interactive and user-friendly web interfaces.
          I&rsquo;m currently pursuing a <b>Bachelor of Science in Software Engineering</b>, were I&rsquo;m building a strong foundation in software development and problem-solving.
          Alongside my studies, I&rsquo;m actively expanding expanding my skills in modern web development by learning <b>React.js</b> and <b>Next.js</b>.
          I enjoy building responsive, accessible websites and constantly seek to improve both my design sense and technical abilities.
          My core technologies include <b> HTML, CSS, JavaScript, React,</b> and <b>Next.js</b>.
        </p>

        <a href="/cv.pdf" view="true" className="download-btn">Download CV</a>
      </div>
    </div>
  );
};

export default About;
