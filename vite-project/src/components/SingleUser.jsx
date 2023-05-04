import React from 'react'
import user from './../assets/user.webp'
import star from './../assets/star.svg'

const SingleUser = ({ u }) => {
    return (
        <div className='flex justify-between mt-[25px]'>
            <div className='flex gap-[10px] items-center justify-center'>
                <img src={user} className='w-[55px] rounded-full' alt="" />
                <div className='flex flex-col'>
                    <h1 className='text-[12px] font-[800]'>{u.name}</h1>
                    <p className='text-[12px] font-[300]'>{u.level}</p>
                    <p className='text-[12px] font-[300]'>{u.visitsCompleted} visits completed</p>
                </div>
            </div>
            <div className='flex flex-col items-start justify-center'>
                <p className='text-[10px] font-[]'>Lat visit: {u.lastVisit}</p>
                <p className='text-[10px] font-[]'>ID: {u.id}</p>
                <button className='text-[10px] font-[] text-blue-500'>view report</button>
            </div>
            <div className='flex  items-center justify-center gap-[2px]'>
                <img src={star} className='w-[10px]' alt="" />
                <img src={star} className='w-[10px]' alt="" />
                <img src={star} className='w-[10px]' alt="" />
                <img src={star} className='w-[10px]' alt="" />
            </div>
        </div>
    )
}

export default SingleUser