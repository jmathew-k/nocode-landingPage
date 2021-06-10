import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
	return (
		<footer>
			<div className='max-w-6xl mx-auto px-4 sm:px-6'>
				{/* Bottom area */}
				<div className='md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200'>
					<div className='sm:col-span-12 lg:col-span-3'>
						<div className='mb-2'>
							{/* Logo */}
							<Link to='/' className='inline-block' aria-label='Tesseract'>
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
						<div className='text-xs py-1 text-gray-600'>
							<Link
								to='#'
								className='text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out'
							>
								Terms
							</Link>{' '}
							·{' '}
							<Link
								to='#'
								className='text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out'
							>
								Privacy Policy
							</Link>
							{/* Copyrights note */}
							<div className='text-xs text-gray-600 mr-4 my-1'>
								Copyright © 2021{' '}
								<a
									className='text-gray-900 hover:underline'
									href='https://tesseractiq.com/'
								>
									Tesseract
								</a>
								. All rights reserved.
							</div>
						</div>
					</div>

					{/* Social links */}
					<ul className='flex mb-4 md:order-1 md:ml-4 md:mb-0'>
						<li>
							<Link
								to='#'
								className='flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out'
								aria-label='Twitter'
							>
								<svg
									className='w-8 h-8 fill-current'
									viewBox='0 0 32 32'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z' />
								</svg>
							</Link>
						</li>
						<li className='ml-4'>
							<Link
								to='#'
								className='flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out'
								aria-label='Github'
							>
								<svg
									className='w-8 h-8 fill-current'
									viewBox='0 0 32 32'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z' />
								</svg>
							</Link>
						</li>
						<li className='ml-4'>
							<Link
								to='#'
								className='flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out'
								aria-label='Facebook'
							>
								<svg
									className='w-8 h-8 fill-current'
									viewBox='0 0 32 32'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z' />
								</svg>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer
