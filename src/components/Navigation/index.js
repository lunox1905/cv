import styles from './Navigation.module.scss';
import className from 'classnames/bind';
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
const cx = className.bind(styles)

function Navigation () {
    const [nav, setNav] = useState(false)
    const navRef = useRef()
    useEffect(() => {
        const handleScroll = () => {
            setNav(window.scrollY >= 50)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        
        if(nav) {
            console.log(navRef)
            navRef.current.classList.add(cx('active'))
        } else {
            navRef.current.classList.remove(cx('active'))
        }
    }, [nav])
    const handleClick = (e) => {
        const bar = document.querySelectorAll('li')
        console.log(e.target.closest('li'))
        bar.forEach(bar => {
            bar.classList.remove(cx('active'))
        })
        
        e.target.closest('li').classList.add(cx('active'))
      
    }

    
    return (
        <div className={cx('wrapper')} ref={navRef}>
            <div className={cx('container')}>
                <ul onClick={handleClick}>
                    <Link to="/">
                        <li className={cx('active')}>Home</li>
                    </Link> 
                    <Link to="/profile">
                        <li>Hồ sơ</li>
                    </Link>
                    <Link to="/project">
                        <li>Dự án</li>
                    </Link>
                   
                </ul>
            </div>
        </div>
    )
}

export default Navigation