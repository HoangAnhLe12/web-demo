import './App.css';
import React from 'react';
import Scene from './components/scene/Scene';

import { Layout } from 'antd';

const { Content } = Layout;

function App() {
   return (
      <Layout>
         <button
            style={{
               display: 'block',
               color: '#fff',
               fontSize: 20,
               padding: '20px 25px',
               fontWeight: 600,
               backgroundColor: '#0000004d',
               position: 'absolute',
               zIndex: 1,
               right: '30px',
               top: '30px',
               border: '1px solid #fff3',
               borderRadius: '50px',
            }}
         >
            Dashboard
         </button>
         <Content style={{ height: '100vh' }}>
            <Scene />
         </Content>
      </Layout>
   );
}

export default App;
