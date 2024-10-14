import { Col, Row } from 'antd';
import CardItem from '../../components/Card/Card';
import { initialData } from '../../components/Data';

function ShowcasePage() {
   return (
      <>
         <div
            style={{
               padding: '15px',
               marginTop: '10px',
               marginBottom: '30px',
            }}
         >
            <h1 style={{ fontSize: '4.8rem' }}>360° Showcase</h1>
            <p style={{ fontSize: '2rem' }}>Our favourite tours curated from over 5000+ members</p>
         </div>
         <Row gutter={[48, 40]}>
            {initialData.map((item) => (
               <Col span={12} key={item.id}>
                  <CardItem title={item.title} src={item.src} description={item.description} />
               </Col>
            ))}
         </Row>
      </>
   );
}

export default ShowcasePage;
