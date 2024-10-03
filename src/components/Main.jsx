import { useState } from 'react';
import AutoTypingPortfolio from './AutoTyping/AutoTyping'
import './Main.css'
import profile from '../assets/profile.jpg'

export default function Main() {


    let [names] = useState(['Youssef Yasser Mohammed', 'Frontend Developer - React.js']);


    return (
        <main className='my-cv h-screen flex items-center'>
            <div className="container text-white">
                <div className='profile w-[200px] h-[200px]  rounded-full overflow-hidden border-4 border-white mx-auto'>
                    <img src={profile} alt="" className='w-full relative top-[-25px]' />
                </div>
                <AutoTypingPortfolio names={names} duration={3}></AutoTypingPortfolio>
                <ul className=' w-fit mx-auto flex items-center'>
                    <li className=' bg-gray-400 w-7 h-7 flex justify-center items-center rounded-full mx-2'>
                        <a href="https://www.linkedin.com/in/youssef-yasser97/" className=' text-black' target='_blank'>
                            <i className="fa-brands fa-linkedin-in" />
                        </a>
                    </li>
                    <li className=' bg-gray-400 w-7 h-7 flex justify-center items-center rounded-full mx-2'>
                        <a href="https://github.com/YoussefYaser" className=' text-black' target='_blank'>
                            <i className="fa-brands fa-github" />
                        </a>
                    </li>
                </ul>
            </div>

        </main>
    )
}
