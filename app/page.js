import Link  from 'next/link'
import Image from 'next/image';

const Home = () => {
  return (
    <main className="home">
      <section className="hero">
        <Image src="/cropped.png" alt="Faheem" className="profile-img" width={300} height={300}/>
        <h1>Hi, I&rsquo;m <span className="name">Faheem</span></h1>
        <h2>Frontend Developer</h2>
        <p className="intro">
           I like working with tools like React and Next.js to create clean, responsive, and accessible interfaces. I&rsquo;m the kind of developer who cares about the details how things load, how they move, and how people interact with them. 
        </p>
        <div className="buttons">
          <Link className="btn" href="/projects">See Projects</Link>
          <Link className="btn" href="/about">About Me</Link>
        </div>
      </section>

      <section className="contact-cta">
        <p>Looking to collaborate or have a project in mind?</p>
        <Link className="btn secondary" href="/contact">Let’s Chat</Link>
      </section>
    </main>
  );
};


export default Home
