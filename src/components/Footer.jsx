import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
      <div className='max-w-screen-xl mx-auto py-10 flex gap-10'>
            <div className='basis-1/2'>
              <h1 className='text-[10rem] font-semibold leading-none tracking-tight'>refokus.</h1>
            </div>
            <div className='basis-1/2 flex gap-4'>
              <div>
                <h4 className='m-10 capitalize text-zinc-500'>socials</h4>
                {["instagram", "twitter (x?)", "LinkedIn"].map((item,index) => <a key={index} className='block mt-2 capitalize text-zinc-500 text-center '>{item}</a>)}
              </div>
              <div>
                <h4 className='m-10 capitalize text-zinc-500'>socials</h4>
                {["instagram", "twitter (x?)", "LinkedIn"].map((item,index) => <a key={index} className='block mt-2 capitalize text-zinc-500 text-center '>{item}</a>)}
              </div>
              <div className='basis-1/2 pt-10 flex flex-col items-end'>
                <p className='text-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam explicabo dolores in ducimus obcaecati molestiae?</p>
                <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" className='w-32 mt-10' alt="" />
              </div>
            </div>
      </div>
    </div>
  )
}

export default Footer
