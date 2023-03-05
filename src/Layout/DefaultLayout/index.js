import classNames from "classnames/bind";
import styles from './DefaultLayout.module.scss';
import Navigation from "../../components/Navigation";

const cx = classNames.bind(styles)

function DefaultLayout ({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Navigation />
            <div className={cx('container')}>
                {children}
            </div>
        </div>
    )
}

export default DefaultLayout