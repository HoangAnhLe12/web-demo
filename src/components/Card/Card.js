import { useState, startTransition } from 'react';
import { Card } from 'antd';
import InfoModal from '../Modal/Modal';

function CardItem({ src, title, description }) {
   const [open, setOpen] = useState(false);
   const [loading, setLoading] = useState(true);
   const showLoading = () => {
      setOpen(true);
      setLoading(true);
      // Simple loading mock. You should add cleanup logic in real world.
      // Giả lập việc tải dữ liệu (ví dụ gọi API)
      startTransition(() => {
         setTimeout(() => {
            setLoading(false);
         }, 2000);
      });
   };
   return (
      <>
         <Card
            onClick={showLoading}
            style={{
               width: '100%',
               border: '1px solid #f0f0f0',
               cursor: 'pointer',
            }}
            cover={
               <img
                  style={{
                     border: '1px solid #f0f0f0',
                     width: '100%',
                     maxHeight: '298px',
                     objectFit: 'cover',
                  }}
                  alt="example"
                  src={src}
               />
            }
         >
            <div
               style={{
                  paddingBottom: '15px',
               }}
            >
               <h2 style={{ fontSize: '4rem', fontWeight: 500 }}>{title}</h2>
               <p style={{ fontSize: '1.8rem' }}>{description}</p>
            </div>
         </Card>
         <InfoModal loadingCard={loading} open={open} onClose={() => setOpen(false)} screen={true} />
      </>
   );
}

export default CardItem;
