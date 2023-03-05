import styles from './Profile.module.scss';
import classNames from 'classnames/bind'
import SkillPercents from '../../components/SkillPercents'
const cx = classNames.bind(styles)

function Profile () {


    const studys = [
        {
            school: 'THPT Đô Lương I',
            time: '2015-2018',
            content: 'Là học sinh trường cấp 3 THPT Đô Lương I từ năm 2015-2018'
        },
        {
            school: 'Trường đại học Vinh',
            time: '2019 - nay',
            content: 'Hiện tại là sinh viên năm 4 trường đại học Vinh'
        },
    ]

    const experiences = [
        {
            job: 'Tạo project',
            time: '2021-nay',
            content: 'Thiết kế hệ thống và code giao diện theo các trang web khác'
        },
       
    ]

    const devSkill = [
        {
            title: 'HTML',
            percent: 70
        },
        {
            title: 'CSS',
            percent: 65
        },
        {
            title: 'Javascript',
            percent: 55
        },
        {
            title: 'Nodejs',
            percent: 50
        },
        {
            title: 'ReactJs',
            percent: 40
        },
        {
            title: 'PHP',
            percent: 20
        },
        {
            title: 'ASP',
            percent: 25
        },
    ]

    const otherSkill = [
        {
            title: 'English',
            percent: 35
        },
        {
            title: 'Tự học',
            percent: 80
        },
        {
            title: 'Phân tích vấn đề',
            percent: 70
        },
        {
            title: 'Office',
            percent: 40
        },
        {
            title: 'Design',
            percent: 10
        },
    ]
    return (
        
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h1>Hồ sơ năng lực</h1>  
            </div>

            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('col')}>
                        <h3>Học vấn</h3>
                        {
                            studys.map((study,index) => (
                                <div key={index} className={cx('content')}>
                                    <div className={cx('detail')}>
                                        <h3>{study.school}</h3>
                                    
                                        <span>{study.time}</span>
                                        <p>{study.content}</p>
                                    
                                    </div>
                                </div>
                            ))
                        }  
                    </div>
                    <div className={cx('col')}>
                        <h3>Kinh nghiệm</h3>
                        {
                            experiences.map((experience, index) => (
                                <div key={index} className={cx('content')}>
                                    <div className={cx('detail')}>
                                        <h3>{experience.job}</h3>
                                    
                                        <span>{experience.time}</span>
                                        <p>{experience.content}</p>
                                    
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className={cx('row')}>
                    <div className={cx('col')}>
                        <div className={cx('skill')}>
                        <h3>Kỹ năng lập trình</h3>
                            {
                                devSkill.map((skill,index) => (
                                    <div key={index} className={cx('skill-box')}>
                                        <p>{skill.title}</p>
                                        <SkillPercents percent={skill.percent}/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className={cx('col')}>
                        <div className={cx('skill')}>
                        <h3>Kỹ năng khác</h3>
                            {
                                otherSkill.map((skill,index) => (
                                    <div key={index} className={cx('skill-box')}>
                                        <p>{skill.title}</p>
                                        <SkillPercents percent={skill.percent}/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Profile