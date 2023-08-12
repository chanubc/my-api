import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";

const NavText = () => {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState('');

    useEffect(() => {
        setCurrentPage(location.pathname);
    }, [location]);

    return (
        <>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-bold md:flex-row md:space-x-[75px] md:mt-0 md:border-0">
                <li>
                    <Link to='/' id="home"
                        className={`block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 hover:bg-transparent md:hover:bg-transparent md:hover:text-[#29A99A] ${currentPage === '/' ? 'text-[#29A99A]' : 'text-gray-900'
                            }`}
                    >
                        홈화면
                    </Link>
                </li>
                <li>
                    <Link to='/sales' id="sale"
                        className={`block py-2 pl-3 pr-4 rounded hover:bg-transparent md:hover:bg-transparent md:hover:text-[#29A99A] md:p-0 ${currentPage === '/sales' ? 'text-[#29A99A]' : 'text-gray-900'
                            }`}
                    >
                        판매중인 상품
                    </Link>
                </li>
                <li>
                    <Link to='/guest' id="guest"
                        className={`block py-2 pl-3 pr-4 rounded hover:bg-transparent md:hover:bg-transparent md:hover:text-[#29A99A] md:p-0 ${currentPage === '/guest' ? 'text-[#29A99A]' : 'text-gray-900'
                            }`}
                    >
                        방명록
                    </Link>
                </li>
            </ul>

        </>
    )

}

export default NavText;
