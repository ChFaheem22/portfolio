import  Link  from 'next/link'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='flex'>
      <p>Faheem Portfolio</p>
      </div>
      <div className='flex'>
        <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contacts</Link>
      </div>
    </nav>
  )
}

export default Navbar