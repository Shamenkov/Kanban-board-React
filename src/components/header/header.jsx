import React from "react";
import { useState } from 'react';
import Button from "../button/button";


const userAvatar = <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1124_182)">
                        <path d="M20 39.2C30.6039 39.2 39.2001 30.6039 39.2001 20C39.2001 9.39612 30.6039 0.799988 20 0.799988C9.39618 0.799988 0.800049 9.39612 0.800049 20C0.800049 30.6039 9.39618 39.2 20 39.2Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
                        <path d="M23.9463 28.4224C23.8295 27.1328 23.8743 26.2328 23.8743 25.0544C24.4583 24.748 25.5047 22.7944 25.6815 21.144C26.1407 21.1064 26.8647 20.6584 27.0767 18.8896C27.1911 17.94 26.7367 17.4056 26.4599 17.2376C27.2071 14.9904 28.7591 8.03841 23.5895 7.32001C23.0575 6.38561 21.6951 5.91281 19.9247 5.91281C12.8415 6.04321 11.9871 11.2616 13.5399 17.2376C13.2639 17.4056 12.8095 17.94 12.9231 18.8896C13.1359 20.6584 13.8591 21.1064 14.3183 21.144C14.4943 22.7936 15.5823 24.748 16.1679 25.0544C16.1679 26.2328 16.2119 27.1328 16.0951 28.4224C15.0863 31.1344 9.90555 31.3464 6.91675 33.9616C10.0415 37.108 15.1055 39.3584 20.4495 39.3584C25.7935 39.3584 32.0751 35.1392 33.1207 33.988C30.1503 31.3488 24.9575 31.144 23.9463 28.4224Z" fill="black"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1124_182">
                        <rect width="40" height="40" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>

const arrowClose = <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.415 0.209991L6 4.79499L10.585 0.209991L12 1.62499L6 7.62499L0 1.62499L1.415 0.209991Z" fill="white"/>
                    </svg>

const arrowOpen = <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.415 7.79001L6 3.20501L10.585 7.79001L12 6.37501L6 0.375008L0 6.37501L1.415 7.79001Z" fill="white"/>
                </svg>




function Header () {

    const [open, setOpen] = useState(false)
    const [userOpen, setUserOpen] = useState(false)

    function hendlerClick(){
        setOpen(!open)
        setUserOpen(!userOpen)
    } 
        return(
            <div className='header'>
                <h1>Awesome Kanban Board</h1>
                <div>
                    <Button customClass={'userAvatar'} onClick={hendlerClick}>{userAvatar}{userOpen ? arrowOpen : arrowClose}</Button>
                    {open && 
                    <ul className="profileSelect">
                        <div>Profile</div>
                        <div>Log Out</div>
                    </ul>}
                </div>
            </div> 
        )
        
} 

export default Header;