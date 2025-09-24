import Link from "next/link";
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
        
        <h1 className='text-3xl font-bold underline mb-10'>Resume Templates</h1>
        <div className="flex gap-10">
            <Link href="/resumeTemplates/template1" test-id="resumeTemplate1">
                <div className='border p-10 rounded-lg bg-blue-500 hover:bg-blue-400 hover:shadow-lg'>
                    View Template 1
                </div>
            </Link>
            <Link href="/resumeTemplates/template2" test-id="resumeTemplate2">
                <div className='border p-10 rounded-lg bg-blue-500 hover:bg-blue-400 hover:shadow-lg'>
                    View Template 2
                </div>
            </Link>
        </div>
    </div>
  )
}

export default page
