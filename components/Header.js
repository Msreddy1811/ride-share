import { UserButton, UserProfile } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
    const headerMenu=[
        {
            id:1,
            name:'Ride',
            icon:'/shd.jpeg'
        },
        {
            id:2,
            name:'package',
            icon:'/pack.jpeg'
        }
    ]
  return (
    <div className='p-5 pb-3 pl-20 border-b-[4px] border-gray-300 flex items-center justify-between'>
        <div className='flex gap-20 item-center'>
        <Image src ='/th.jpeg' width={80} height={50} alt='Logo' />
        <div className='flex gap-6 item-center'>
            {headerMenu.map((item)=>(
                <div className='flex gap-5 item-center'>
                    <Image src={item.icon} width={30} height={3}/>
                    <h2 className='[text-14px] font-medium'>{item.name}</h2>
                </div>
            ))}
            </div>
            </div>
            <UserButton/>
            </div>
    );
}

export default Header