import { Layout, Menu } from 'antd';

import { Link } from 'react-router-dom';
import config from '../../../config';

const { Header } = Layout;

function HeaderPage() {
   const items = [
      {
         label: <Link to={config.routes.dashboard}>Dashboard</Link>,
         key: 'dashboard',
      },
      {
         label: <Link to={config.routes.showcase}>Showcase</Link>,
         key: 'showcase',
      },
      {
         label: 'Feature',
         key: 'feature',
      },
      {
         label: 'Pricing',
         key: 'pricing',
      },
      {
         label: 'Contact',
         key: 'contact',
      },
   ];

   return (
      <Header
         style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'white',
         }}
      >
         <Link to={config.routes.home}>
            <div
               style={{
                  display: 'flex',
                  alignItems: 'center',
               }}
            >
               <img
                  style={{ height: '32px', marginRight: '10px' }}
                  src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                  alt="logo"
               />
               <h3 style={{ fontSize: '2rem', marginRight: '10px' }}>AntDesign</h3>
            </div>
         </Link>
         <Menu
            theme="light"
            mode="horizontal"
            items={items}
            style={{
               marginLeft: 15,
               flex: 1,
               minWidth: 0,
               color: '#212121',
               fontSize: 16,
               fontWeight: 500,
            }}
         />
      </Header>
   );
}

export default HeaderPage;
