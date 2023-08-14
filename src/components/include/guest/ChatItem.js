import React, { useEffect, useState } from 'react';

import IconWrite from '../../img/Icon_write.svg'
import IconDelete from '../../img/Icon_trash.svg'

const ChatItem = () => {

    return (
        <>
            {/* <!-- 채팅 item --> */}
            <main className='mb-3'>
                <p className='flex items-center justify-center text-sm mb-1'>
                    7월 21일 오전 11:17
                </p>
                {/* 내부요소 수직 좌측 정렬 flex item-center /justify between 는 없음. */}
                <section className='rounded-md bg-[#E3EDE3] z-50 h-14 py-1 px-3 overflow-hidden flex items-center w-full'>
                    <div className='flex w-full overflow-hidden justify-between items-center'>
                        <p className='ml-2 text-base font-semibold'>저는 송아지 키우는데 어쩌고 저쩌고 ~~~~~</p>
                        <div className='flex items-end'>
                            <img className='p-1 mr-1 rounded hover:bg-[#D3DEDA]' src={IconWrite} alt='write'></img>
                            <img className='p-1 rounded hover:bg-[#D3DEDA]' src={IconDelete} alt='delete'></img>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default ChatItem;
