import Link  from 'next/link'

const Home = () => {
  return (
    <div className="home">
      <div className='bio'>
      <h1>Hi there, <br /> I'm <span className='name'>Faheem</span> <br />
      Frontend Developer</h1>
      <Link className="btn1" href="/about">About Me</Link>
      <Link className="btn1" href="/projects">Projects</Link>
      <Link className="btn1" href="/contact">Contacts</Link>
      </div>
      <div>
      <img src="/cropped.png" alt="My Image" className='profile'/>
      </div>
    </div>
  )
}

export default Home
