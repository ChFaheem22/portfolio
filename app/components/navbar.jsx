import  Link  from 'next/link'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contacts</Link>
    </nav>
  )
}

export default Navbar