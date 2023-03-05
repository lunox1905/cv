import classNames from "classnames/bind";
import { useState } from "react";
import styles from './Project.module.scss'

const cx = classNames.bind(styles)

function Project () {
    const projects = [
        {
            title: 'Blog IT',
            image: require('../../assets/images/blog.jpg'),
            filter: 1,
            link: 'https://blog-it-thaichinh.onrender.com',
            tech: 'Nodejs, hanlebar, mongodb'
        },
        {
            title: 'hh kungfu',
            image: require('../../assets/images/hhkungfu.png'),
            filter: 1,
            link: 'https://thaichinh-hhkungfu.onrender.com',
            tech: 'Nodejs, hanlebar, mongodb'
        },
        {
            title: 'Shop 360',
            image: require('../../assets/images/shop360.png'),
            filter: 1,
            link: 'https://thaichinh-shop360.onrender.com',
            tech: 'Nodejs, Reactjs, mongodb'
        },
    ]

    const [filter, setFilter] = useState(0)

    const handleClick = (e) => {
        const filters = document.querySelectorAll('li')
        filters.forEach(filter => {
            filter.classList.remove(cx('active'))
        })
        
        e.target.closest('li').classList.add(cx('active'))
        setFilter( e.target.closest('li').value)
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h1>Dự án đã thực hiện</h1>  
            </div>

            <div className={cx('container')}>
                <div className={cx('filter')}>
                    <ul onClick={handleClick}>
                        <li value={0} className={cx('active')}>Tất cả</li>
                        <li value={1}>Cá nhân</li>
                        <li value={2}>Công ty</li>
                    </ul>
                </div>

                <div className={cx('row')}>
                    {
                        projects.map((project, index) => {
                           
                            if(filter === 0) {
                                return (
                                    <div key={index} className={cx('col')}>
                                        <div className={cx('detail')}>
                                            <a href={project.link}>
                                                <img alt="project-img" src={project.image}/>
                                                <div className={cx('cover')}>
                                                    <div className={cx('box')}>
                                                        <h6>{project.title}</h6>
                                                        <p>{project.tech}</p>
                                                    </div>
                                                </div>
                                            </a> 
                                        </div>
                                    </div>
                                )
                            } 
                            if(filter !== 0 && filter === project.filter) {
                                return (
                                    <div key={index} className={cx('col')}>
                                        <div className={cx('detail')}>
                                            <a href={project.link}>
                                                <img alt="img-project" src={project.image}/>
                                                <div className={cx('cover')}>{project.title}</div>
                                            </a>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>

                
            </div>
        </div>
    )
}

export default Project