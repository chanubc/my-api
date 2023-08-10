import React from 'react';

export default function generateImageItems(data) {
    return data.slice(0, 4).map((user, index) => (
        <li key={index} className={`w-1/4 bg-gray-500 ${index !== 3 ? 'mr-3' : ''} rounded-[5px]`}>
            <img className="image-item" src={user.avatar} alt="User Avatar" />
        </li>
    ));

}
