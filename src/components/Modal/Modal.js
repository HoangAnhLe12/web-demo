import { useState } from 'react';
import { Button, Modal } from 'antd';
import { BackSide, TextureLoader } from 'three';
import { Canvas, useLoader } from '@react-three/fiber';
import images from '../../assets/images';

export default function InfoModal({ open, loadingCard, onClose, data, screen }) {
   const map = useLoader(TextureLoader, images.house);
   const [loading, setLoading] = useState(false);

   const handleOk = () => {
      setLoading(true);
      setTimeout(() => {
         setLoading(false);
      }, 3000);
   };

   return (
      <>
         <Modal
            style={{
               top: 0,
               bottom: 0,
               left: 0,
               right: 0,
               backgroundColor: 'transparent',
            }}
            width={screen ? '100vw' : '50vw'}
            open={open}
            loading={screen ? loadingCard : null}
            title={!screen ? data.title : null}
            onCancel={onClose}
            contentBg={'#333'}
            footer={
               !screen
                  ? [
                       <Button key="link" href="https://google.com" type="primary" loading={loading} onClick={handleOk}>
                          MoreInfo
                       </Button>,
                    ]
                  : null
            }
         >
            {screen ? (
               <Canvas style={{ height: '485px' }}>
                  <mesh>
                     <sphereGeometry attach="geometry" args={[500, 60, 40]} />
                     <meshBasicMaterial attach="material" map={map} side={BackSide} />
                  </mesh>
               </Canvas>
            ) : (
               <>
                  <p>Content</p>
                  <p>Content</p>
               </>
            )}
         </Modal>
      </>
   );
}
