import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const NavText = ({ userId }) => {

    const location = useLocation();
    const navigate = useNavigate(); // useNavigate 훅 사용
    const [currentPage, setCurrentPage] = useState('');

    console.log(userId+"in navtext.js first");



    // const handleLinkClick = (path) => {
    //     // 페이지 이동 시 userId를 함께 전달
    //     navigate(path, { state: { userId } });
    //     console.log(path+ userId +"in navtext.js paht");
    // }

    useEffect(() => {
        setCurrentPage(location.pathname);
    }, [location]);

    return (
        <>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-bold md:flex-row md:space-x-[75px] md:mt-0 md:border-0">
                <li>
                    <Link to='/' id="home"
                        // onClick={() => handleLinkClick('/')}
                        className={`block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 hover:bg-transparent md:hover:bg-transparent md:hover:text-[#29A99A] ${currentPage === '/' ? 'text-[#29A99A]' : 'text-gray-900'
                            }`}
                    >
                        홈화면
                    </Link>
                </li>
                <li>
                    <Link to='/sales' id="sale"
                        // onClick={() => handleLinkClick('/')}
                        className={`block py-2 pl-3 pr-4 rounded hover:bg-transparent md:hover:bg-transparent md:hover:text-[#29A99A] md:p-0 ${currentPage === '/sales' ? 'text-[#29A99A]' : 'text-gray-900'
                            }`}
                    >
                        판매중인 상품
                    </Link>
                </li>
                <li>
                    <Link to='/guest' id="guest"
                        // onClick={() => handleLinkClick('/')}
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
