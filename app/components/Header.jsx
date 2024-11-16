import Link from 'next/link';

const Header = () => {
  return (
    <header className='absolute top-0 left-0 w-full bg-transparent text-black dark:text-white py-8 z-10'>
        {/* <div className = "navbar">
            <div className='navbar-start'>
                <ul
                tabIndex={0}
                className="menu text-white py-8 rounded-box z-[1] mt-3 w-52 p-2 flex-row">
                    <li><a> Resume </a></li>
                    <li><a> Experience </a></li>
                    <li><a> GitHub </a></li>
                </ul>
            </div>
        </div> */}
        <div className='container mx-auto'>
            {/* <div className='flex items-start justify-between px-4 py-2'> */}
                {/* <Link href="/">
                    <img src="/assets/bunny_light.png"
                    alt="icon"
                    className="h-10 w-auto cursor-pointer align-middle" />
                </Link> */}
            {/* </div>  */}
            {/* <div className='flex justify-between'> */}
                {/* <Link href='/'>
                    <h1 className='text-2xl font-bold'>Trinity Li</h1>
                </Link> */}
                <ul className='flex justify-center items-center font-bold space-x-10 tracking-widest'>
                    <Link href="/">
                        <img src="/assets/bunny_light.png"
                        alt="light icon"
                        className="h-10 w-auto cursor-pointer align-middle items-start transition-opacity duration-200 ease-in-out hover:opacity-40 opacity-100 dark:hidden" />
                        <img src="/assets/bunny_dark.png"
                        alt="dark icon"
                        className="h-10 w-auto cursor-pointer align-middle items-start hidden dark:block transition-opacity duration-200 ease-in-out hover:opacity-60 opacity-100" />

                    </Link>

                    <li><a href='/assets/resume.pdf' target="_blank" rel="noopener noreferrer"
                    className="hover:text-primary hover:shadow-primary transition duration-200 ease-in-out">Resume</a></li>
                    <li><Link href='/projects'
                    className="hover:text-primary hover:shadow-primary transition duration-200 ease-in-out">Projects</Link></li>
                    <li><Link href='https://github.com/trinityli'
                    className="hover:text-primary hover:shadow-primary transition duration-200 ease-in-out">GitHub</Link></li>
                    <li><Link href='https://www.linkedin.com/in/trinity-li/'
                    className="hover:text-primary hover:shadow-primary transition duration-200 ease-in-out">LinkedIn</Link></li>
                </ul>
            {/* </div> */}
        </div>
    </header>
  )
}

export default Header