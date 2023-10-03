import React from 'react'

export default function MyNetworkHeader() {
    return (
        <div className='bg-[white] border rounded-xl min-h-[8vh] flex justify-between items-center px-4'>
            <div>
                <h1 className='text-[#8E8E8E]'>No pending invitations</h1>
            </div>
            <div>
                <button className='text-[#8d8c8c] px-2 py-1 rounded transition hover:bg-[#e7e7e7]'>Manage</button>
            </div>
        </div>
    )
}
