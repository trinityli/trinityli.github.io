import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-primary text-white py-4 mt-4'> 
      <div className='container mx-auto'> 
        <p>&copy; {new Date().getFullYear()} Trinity Li</p>
      </div>
    </footer>
  )
}

export default Footer