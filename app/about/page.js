import Image from 'next/image';

const About = () => {
  return (
    <div className="about">
      <div  className="box">
      <Image src="/pic.jpg" alt="My Pic" className="img" width={300} height={300}/>
      </div>

      <div className="box">
      <h1 className="h1">About Me</h1>
      <p>
        I&rsquo;m Faheem, a frontend developer with a passion for creating interactive and user-friendly web interfaces. I&rsquo;sm currently expanding my skills in modern web development by learning React and Next.js. I enjoy building responsive, accessible websites and constantly seek to improve both my design sense and technical abilities. My core technologies include HTML, CSS, JavaScript, React, and Next.js.
      </p>
      </div>
    </div>
  );
};

export default About;
