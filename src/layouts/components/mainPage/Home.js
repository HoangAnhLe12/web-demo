import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import images from '../../../assets/images';

const cx = classNames.bind(styles);

export default function Home() {
   return (
      <>
         <div className={cx('wrapper')}>
            <h1 className={cx('header')}>Virtual Tours Made Simple</h1>
            <p className={cx('des')}>If you have a place to go when being tired, it is your home</p>
            <button className={cx('home-button')}>TRY FOR FREE </button>
            <button className={cx('home-button')}>MORE INFO</button>{' '}
            <div className={cx('img-content')}>
               <div className={cx('img-container')}>
                  <p className={cx('img-title')}>House</p>
                  <img className={cx('img')} src={images.natural} alt="logo" />
               </div>
               <div className={cx('img-container')}>
                  <p className={cx('img-title')}>House</p>
                  <img className={cx('img')} src={images.natural} alt="logo" />
               </div>
               <div className={cx('img-container')}>
                  <p className={cx('img-title')}>House</p>
                  <img className={cx('img')} src={images.natural} alt="logo" />
               </div>
            </div>
         </div>
      </>
   );
}
