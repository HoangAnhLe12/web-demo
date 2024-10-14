import { TextureLoader, BackSide } from 'three';
import { Suspense, useState } from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import { Canvas, useLoader } from '@react-three/fiber';
import Controls from '../../components/scene/Controls';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import images from '../../assets/images';
import config from '../../config';

const cx = classNames.bind(styles);
const data = [images.bedroom, images.sea, images.snow];
function HomePage() {
   const [which, set] = useState(0);
   const maps = useLoader(
      TextureLoader,
      data.map((entry) => entry),
   );
   return (
      <Layout style={{ height: '100vh' }}>
         <div className={cx('wrapper')}>
            <h1 className={cx('header')}>Virtual Tours Made Simple</h1>
            <p className={cx('des')}>If you have a place to go when being tired, it is your home</p>
            <Link to={config.routes.showcase}>
               <button className={cx('home-button')}>TRY FOR FREE </button>
            </Link>
            <Link to={config.routes.showcase}>
               <button className={cx('more-info')}>MORE INFO </button>
            </Link>
            <div className={cx('img-content')}>
               <div className={cx('img-container')} onClick={() => set(0)}>
                  <p className={cx('img-title')}>Nature</p>
                  <img className={cx('img')} src={images.natural} alt="logo" />
               </div>
               <div className={cx('img-container')} onClick={() => set(1)}>
                  <p className={cx('img-title')}>House</p>
                  <img
                     className={cx('img')}
                     src="https://storage.googleapis.com/xxd6-x9vs-v21v.n7.xano.io/vault/VK6NBzth/hxxJmIl1hpDP8WriRRss4LX6Z3k/fYRH-A../17ea0864/livingroom%20panorama.jpg"
                     alt="logo"
                  />
               </div>
               <div className={cx('img-container')} onClick={() => set(2)}>
                  <p className={cx('img-title')}>Service</p>
                  <img
                     className={cx('img')}
                     src="https://storage.googleapis.com/xxd6-x9vs-v21v.n7.xano.io/vault/VK6NBzth/JALMTymWk9fm76zqTBkAPtLcPJE/--cniw../17ea0864/fantasy_landscape_koalas_in_a_jungle.jpeg"
                     alt="logo"
                  />
               </div>
            </div>
         </div>
         <Canvas>
            <Controls
               enableZoom={false}
               enablePan={false}
               enableDamping
               dampingFactor={0.2}
               autoRotate={false}
               rotateSpeed={-0.1}
            />
            <Suspense fallback={null}>
               <mesh>
                  <sphereGeometry attach="geometry" args={[500, 60, 40]} />
                  <meshBasicMaterial attach="material" map={maps[which]} side={BackSide} />
               </mesh>
            </Suspense>
         </Canvas>
      </Layout>
   );
}

export default HomePage;
