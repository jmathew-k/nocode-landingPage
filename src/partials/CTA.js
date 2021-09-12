import React from 'react'

function CTA() {
	return (
		<section>
			{/* CTA box */}
			<div className=' bg-white text-center py-16 px-6'>
				{/* CTA content */}
				{/* <div className="text-center py-40"> */}
				<p className='h2 text-gray-900 mb-6'>Ready to build with Tesseract?</p>
				<p className='text-gray-900 text-lg mb-6'>
					Give your team the tools required for digital transformation
				</p>
				{/* </div> */}
				<br />
				<a
					className='btn text-white bg-gray-900 hover:bg-gray-800 mb-6 w-full sm:w-auto sm:mb-0'
					href='/demo'
				>
					Get early access
				</a>
			</div>
		</section>
	)
}

export default CTA
