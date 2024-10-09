import React from 'react';
import { Layout } from 'antd';

import Scene from './components/scene/Scene';
import Home from './layouts/components/mainPage/Home';

const { Content } = Layout;

function App() {
   return (
      <Layout>
         <Content style={{ height: '100vh' }}>
            <Home />
            <Scene />
         </Content>
      </Layout>
   );
}

export default App;
