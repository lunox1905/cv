import classNames from "classnames/bind";
import styles from './SkillPercents.module.scss'

const cx = classNames.bind(styles)

function SkillPercents ({percent}) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('percent')} style={{width: percent + '%'}}></div>
        </div>
    )
}

export default SkillPercents