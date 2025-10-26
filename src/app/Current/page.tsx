import React from 'react'

const page = () => {
  return (
    // Main container: Centers content, provides background, and padding.
    <div className='flex flex-col items-center p-4 sm:p-8 min-h-screen bg-gray-50'>
        <div className='w-full max-w-2xl mt-12'>
            
            {/* Page Title */}
            <h1 className='text-xl font-extrabold text-gray-900 mb-10 pb-2 text-center'>
                Current Updates
            </h1>
            
            {/* Month Header */}
            <h2 className='text-md font-bold text-blue-600 mb-6  pl-4 '>JULY</h2>
            
            {/* Timeline List: Relative positioning is key for the vertical line */}
            <ol className='relative border-l-4 border-gray-300 space-y-12 ml-4'>
                
                {/* Timeline Item 1 */}
                <li className='ml-8'>
                    {/* Circle marker for the timeline */}
                    <span className='absolute flex items-center justify-center w-3 h-3 bg-blue-600 rounded-full -left-2 top-1 ring-8 ring-white'></span>
                    <p className='text-xl font-semibold text-gray-900'>Mathematics Focus</p>
                    <p className='text-base text-gray-700 mt-1'>
                        Currently doing maths (Proofs and **discrete maths**). Focusing on logical structures and complex problem sets.
                    </p>
                </li>
                
                {/* Timeline Item 2 */}
                <li className='ml-8'>
                    <span className='absolute flex items-center justify-center w-3 h-3 bg-blue-600 rounded-full -left-2 top-1 ring-8 ring-white'></span>
                    <p className='text-xl font-semibold text-gray-900'>Rust Programming</p>
                    <p className='text-base text-gray-700 mt-1'>
                        Learning **Rust** and making some projects to explore systems programming and guaranteed memory safety.
                    </p>
                </li>
                
                {/* Timeline Item 3 */}
                <li className='ml-8'>
                    <span className='absolute flex items-center justify-center w-3 h-3 bg-blue-600 rounded-full -left-2 top-1 ring-8 ring-white'></span>
                    <p className='text-xl font-semibold text-gray-900'>Personal Development</p>
                    <p className='text-base text-gray-700 mt-1'>
                        Trying to become a better person by establishing positive daily habits and practicing consistent self-reflection.
                    </p>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default page
