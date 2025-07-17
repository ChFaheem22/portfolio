import Link  from 'next/link'
import Image from 'next/image';

const Home = () => {
  return (
    <div className="home">
      <div className='bio'>
      <h1>Hi there, <br /> I&rsquo;m <span className='name'>Faheem</span> <br />
      Frontend Developer</h1>
      <Link className="btn1" href="/about">About Me</Link>
      <Link className="btn1" href="/projects">Projects</Link>
      <Link className="btn1" href="/contact">Contacts</Link>
      </div>
      <div>
      <Image src="/cropped.png" alt="My Image" className='profile' width={300} height={300}/>
      </div>
    </div>
  )
}

export default Home
