import React, { useEffect, useState } from 'react';

const NeighborList = () => {
    return (
        <>
            <section class="flex items-center">
                <img class="w-10 h-10 rounded-full mr-4 bg-black" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink" />
                <div class="text-sm">
                    <p class="text-gray-900 leading-none">Jonathan Reinink</p>
                    <p class="text-gray-600">Aug 18</p>
                </div>
            </section>
        </>
    )
}

export default NeighborList