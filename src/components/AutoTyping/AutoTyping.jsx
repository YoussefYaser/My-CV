
import { useEffect, useRef, useState } from 'react'
import './AutoTyping.css'
import cv from '../../assets/Youssef_Yasser_Frontend_Developer_CV.pdf'

export default function AutoTypingPortfolio({ names, duration }) {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = cv;  // Path to your file in the public folder
        link.download = 'Youssef_Yasser_Frontend_Developer_CV.pdf';  // The file name for the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    let [typing, setTyping] = useState(names[0]);
    let [spanStyle, setSpanStyle] = useState({
        animationName: 'typing',
        animationDuration: `${duration}s`,
        animationIterationCount: 'infinite'
    });
    let liRef = useRef([]);
    let count = useRef('');

    let [stopTyping, setStopTyping] = useState(false);


    useEffect(() => {
        return () => {
            clearInterval(count.current);
        }
    }, []);

    useEffect(() => {

        let i = 0;

        setSpanStyle({
            ...spanStyle,
            '--typing': liRef.current[i].clientWidth + 5 + 'px'
        });


        count.current = setInterval(() => {
            i = i == 1 ? 0 : i + 1;

            setSpanStyle({
                ...spanStyle,
                '--typing': liRef.current[i].clientWidth + 5 + 'px'
            });
            setTyping(names[i]);

        }, 3000);

        let key = 0;
        function stopAnimation() {

            if (window.scrollY > window.innerHeight) {
                setSpanStyle({});
                clearInterval(count.current);
                key = 1;

            }
            else if ((window.scrollY <= window.innerHeight) && key) {
                setSpanStyle({
                    animationName: 'typing',
                    animationDuration: `${duration}s`,
                    animationIterationCount: 'infinite'
                });
                setTyping(names[0]);
                setStopTyping(!stopTyping);

            }
        }

        window.addEventListener('scroll', stopAnimation);


        return () => {
            window.removeEventListener('scroll', stopAnimation);
        }

    }, [stopTyping]);


    return (
        <div className='typing-portfolio'>
            <div className='box madimi-one-regular'>
                <h2 className=' text-[3rem] mb-4'>Hello Developers
                    &#128075;
                </h2>
                <div className='text-[2rem]'>
                    <p>I am </p>
                    <span style={spanStyle} className=' border-e-2 border-white'>{typing}</span>
                </div>
                <ul className='text-[2rem]'>
                    {names.map((elem, i) => <li key={i} ref={l => liRef.current[i] = l}>{elem}</li>)}
                </ul>
                <button className=' bg-white rounded-full border-none outline-none mt-14 hover:scale-125 transition-transform duration-300'>
                    <a className='text-black' onClick={handleDownload}>
                        Download CV
                    </a>
                </button>
            </div>
        </div>
    )
}
