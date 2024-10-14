import { Layout } from 'antd';
import HeaderPage from '../components/Header/Header';

const { Content, Footer } = Layout;

function DefaultLayout({ children }) {
   return (
      <Layout
         style={{
            width: '100%',
         }}
      >
         <HeaderPage />
         <Content
            style={{
               padding: '0 48px',
               background: '#dbdbdb',
            }}
         >
            <div
               style={{
                  padding: 24,
                  minHeight: 380,
               }}
            >
               <div>{children}</div>
            </div>
         </Content>

         <Footer
            style={{
               textAlign: 'center',
               backgroundColor: '#212121',
               color: 'white',
            }}
         >
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
         </Footer>
      </Layout>
   );
}

export default DefaultLayout;
