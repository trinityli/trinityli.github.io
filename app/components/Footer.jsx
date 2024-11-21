import React from 'react'

const Footer = () => {
  return (
    // <footer className='absolute bottom-0 -mb-10 left-0 w-full bg-transparent text-black dark:text-white py-2 z-10'> 
    <footer className='w-full bg-transparent text-black dark:text-white py-2 z-10'> 
      <div className='container mx-auto justify-start'> 
        {/* <p>&copy; {new Date().getFullYear()} Trinity Li</p> */}
        <a className="karla text-base transition-opacity duration-200 ease-in-out opacity-100 hover:opacity-60" 
        href="https://www.flaticon.com/free-icons/rabbit" 
        title="rabbit icons"> Rabbit icons created by Irfansusanto20 - Flaticon</a>

      </div>
    </footer>
  )
}

export default Footer