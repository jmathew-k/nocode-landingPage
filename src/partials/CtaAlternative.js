import React from 'react'
import { Link } from 'react-router-dom'

function CtaAlternative() {
	return (
		<section>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 pt-24'>
				<div className='pb-12 md:pb-20'>
					{/* CTA box */}
					<div
						className='bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12'
						data-aos='zoom-y-out'
					>
						<div className='flex flex-col lg:flex-row justify-between items-center'>
							{/* CTA content */}
							<div className='mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2'>
								<h2 className='h4 text-white'>
									Ready to build with Tesseract?
								</h2>
							</div>

							{/* CTA button */}
							<div>
								<Link
									to='/demo'
									className='btn text-black text-sm bg-white hover:bg-gray-100'
								>
									GET EARLY ACCESS
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CtaAlternative
