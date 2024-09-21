import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';
import { HiUser } from 'react-icons/hi2';
import Link from 'next/link'; // Import Link for navigation

function Header() {
    const headerMenu = [
        {
            id: 1,
            name: 'Ride',
            icon: '/shd.jpeg'
        },
        {
            id: 2,
            name: 'Package',
            icon: '/pack.jpeg'
        }
    ];

    return (
        <div className='p-5 pb-3 pl-20 border-b-[4px] border-gray-300 flex items-center justify-between'>
            <div className='flex gap-20 items-center'>
                <Image src='/th.jpeg' width={80} height={50} alt='Logo' />
                <div className='flex gap-6 items-center'>
                    {headerMenu.map((item) => (
                        <div key={item.id} className='flex gap-2 items-center'>
                            <Image src={item.icon} width={30} height={30} alt={item.name} />
                            <h2 className='text-[14px] font-medium'>{item.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <Link href="/sign-in"> {/* Link to Sign In Page */}
                    <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
                    Authentic
                    </button>
                </Link>
                <UserButton/>
                <HiUser />
            </div>
        </div>
    );
}

export default Header;
