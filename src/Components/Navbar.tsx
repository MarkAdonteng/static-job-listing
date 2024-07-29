import NavImg from '../assets/bg-header-desktop.svg'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-center items-center'>
        <img src={NavImg} className='bg-blue-200 h-36 w-full'/>
      </nav>
    </div>
  )
}

export default Navbar
