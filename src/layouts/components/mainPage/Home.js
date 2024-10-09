import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import images from '../../../assets/images';

const cx = classNames.bind(styles);

export default function Home() {
   return (
      <div className={cx('wrapper')}>
         <h1 className={cx('header')}>Virtual Tours Made Simple</h1>
         <p className={cx('des')}>Create your future life and look after your family</p>
         <button className={cx('home-button')}>Dashboard</button>
         <button className={cx('home-button')}>Dashboard</button>
         <div>
            <img className={cx('img')} src={images.natural} alt="logo" />
            <img className={cx('img')} src={images.natural} alt="logo" />
            <img className={cx('img')} src={images.natural} alt="logo" />
         </div>
      </div>
   );
}
