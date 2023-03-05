import styles from './Home.module.scss';
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

function Home () {

    const date = new Date();
    const age = date.getFullYear() - 2001;

    return (
        
        <div className={cx('wrapper', '.slide-in-transition-view-to-hide', '.transition-slide-in')}>
            <div className={cx('header')}>
                <div className={cx('img')}>
                    <img src={require('../../assets/images/profile.jpg')} alt="profile-img"/>
                </div>
                <div className={cx('container-header')}>
                    <div className={cx('content')}>
                        <h1>Thái Bá Chính</h1>
                        <p>Web designer</p>

                        <div className={cx('contact')}>
                            <a href='https://www.facebook.com/thaichinh1905'>
                                <i class="fab fa-facebook"></i>
                            </a>
                            
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('col')}>
                        <div className={cx('detail')}>
                            <h3>Về Tôi</h3>
                            <p>Xin chào! Tôi là Thái Bá Chính, sinh viên năm 4 ngành CNTT trường Đại học Vinh.
                                Với mơ ước trở thành một lập trình viên, tôi đem nhiều hoài bão và sự nỗ lực của 
                                mình để cố gắng học tập và trau dồi kỹ năng cho bản thân.</p>
                        </div>
                    </div>
                    <div className={cx('col')}>
                        <ul className={cx('detail')}>
                            <li>
                                <span>Tuổi</span>
                                <p>{age}</p>
                            </li>
                            <li>
                                <span>Quê quán</span>
                                <p>Đô Lương - Nghệ An</p>
                            </li>
                            <li>
                                <span>Email</span>
                                <p>stvegito@gmail.com</p>
                            </li>
                            <li>
                                <span>Điện thoại</span>
                                <p>0396 514 223</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Home