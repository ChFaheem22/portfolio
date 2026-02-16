import Link  from 'next/link'
import Image from 'next/image';

const Home = () => {
  return (
    <main className="home">
      <section className="hero">
        <Image src="/pic-3.jpeg" alt="Profile image" className="profile-img" width={300} height={300}/>
        <h1>Hi, I&rsquo;m <span className="name">Faheem</span></h1>
        <h2>Frontend Developer • MERN Stack Enthusiast</h2>
        <p className="intro">
            I&rsquo;m a Software Engineering student focused on building fast,
            scalable, and user-centered web applications. I specialize in
            React and Next.js, with a strong emphasis on clean UI design,
            performance optimization, and smooth user experiences.
        </p>
        <div className="buttons">
          <Link className="btn" href="/projects">View My Work</Link>
          <Link className="btn" href="/about">Learn More About Me</Link>
        </div>
      </section>

      <section className="contact-cta">
        <p>Interested in collaborating or discussing a project opportunity?</p>
        <Link className="btn secondary" href="/contact">Let&rsquo;s Connect</Link>
      </section>
    </main>
  );
};


export default Home
