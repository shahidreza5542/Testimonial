import React from 'react'

const TestmonialCard = () => {
    return (
        <div className='w-screen h-screen bg-gray-50 flex justify-center items-center'>
            <div className='bg-white shadow-md px-5 py-5 border border-gray-200 rounded-2xl w-70 md:w-80 h-55 md:h-60 flex gap-5 flex-col'>
                <div className='flex gap-2'>
                    <img src="/src/assets/profile-thumbnail.png" alt="" className='w-10 h-10' />
                    <div>
                        <h2 className='text-md'>Shahid Reza</h2>
                        <p className='text-sm text-gray-400'>@shahidreza</p>
                    </div>
                </div>
                <div>
                    <p className='text-sm text-gray-400'>
                        i,ve been searching for high-quality
                        abstract images for my desing
                        projects, and I'am thilled to have found
                        this platform. The variety and depth of
                        creativity are astounding
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TestmonialCard
