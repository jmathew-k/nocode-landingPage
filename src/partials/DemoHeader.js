import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Header() {
	const [top, setTop] = useState(true)

	// detect whether user has scrolled the page down by 10px
	useEffect(() => {
		const scrollHandler = () => {
			window.pageYOffset > 10 ? setTop(false) : setTop(true)
		}
		window.addEventListener('scroll', scrollHandler)
		return () => window.removeEventListener('scroll', scrollHandler)
	}, [top])

	return (
		<header
			className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
				!top && 'bg-white blur shadow-lg'
			}`}
		>
			<div className='max-w-6xl mx-auto px-5 sm:px-6'>
				<div className='flex items-center justify-between h-16 md:h-15'>
					{/* Site branding */}
					<div className='flex-shrink-0 mr-3'>
						{/* Logo */}
						<Link to='/' className='block' aria-label='Tesseract'>
							<svg
								version='1.0'
								xmlns='http://www.w3.org/2000/svg'
								width='35'
								height='35'
								viewBox='0 0 512 512'
							>
								<path d='M231 .6C170.2 7.8 120.2 30.9 78.7 70.9 37.8 110.3 13.1 157 2.9 214.5.8 226 .5 230.6.5 255.5c0 22.4.4 30.2 1.8 39 8.9 54.2 31.9 100.7 68.6 138.8 39.4 40.9 86.1 65.6 143.6 75.8 11.5 2.1 16.1 2.4 41 2.4 22.4 0 30.2-.4 39-1.8 54.2-8.9 100.7-31.9 138.8-68.6 40.9-39.4 65.6-86.1 75.8-143.6 2.1-11.5 2.4-16.1 2.4-41 0-22.4-.4-30.2-1.8-39-8.9-54.2-31.9-100.7-68.6-138.8-39.4-40.9-86.2-65.6-143.6-75.8C287.7 1.1 280.8.7 260 .5c-14-.2-27.1-.1-29 .1zm38.1 161.3l2.3 1.8-3.8 30.4c-2 16.7-4 32.1-4.3 34.1l-.6 3.8h37.9c41.3 0 42.4.1 42.4 5.5 0 2.8 2.5-.3-51.3 64.2-44.5 53.4-43.6 52.6-48.8 48.4l-2.3-1.8 3.8-30.4c2-16.7 4-32.1 4.3-34.2l.6-3.7h-37.9c-41.3 0-42.4-.1-42.4-5.5 0-1.8 12.8-17.9 45.1-56.7 24.8-29.9 46-55.1 47.1-56.1 2.6-2.2 5-2.2 7.9.2z' />
								<path d='M221.8 227.2l-33.5 40.3 35.3.5c31.6.4 35.5.7 37 2.2 1.7 1.6 1.6 3.2-1.5 27.9-1.8 14.3-3 26.3-2.8 26.5.3.3 15.6-17.6 34-39.8l33.6-40.3-35.4-.5c-31.7-.4-35.6-.7-37.1-2.2-1.7-1.6-1.6-3.2 1.5-27.9 1.8-14.3 3.1-26.3 2.8-26.5-.2-.2-15.5 17.7-33.9 39.8z' />
							</svg>
						</Link>
					</div>
					<h1>Tesseract</h1>
					{/* Site navigation */}
					<nav className='flex flex-grow'>
						<ul className='flex flex-grow justify-end flex-wrap items-center'>
							<li>
								<Link
									to='/'
									className='text-sm text-gray-600 hover:text-gray-900 px-2 py-3 flex items-center transition duration-150 ease-in-out'
								>
									Home
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header
