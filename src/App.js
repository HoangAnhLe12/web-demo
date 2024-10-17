import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import Scene from './components/scene/Scene';

import DefaultLayout from './layouts/defaultLayout/defaultLayout';

function App() {
   return (
      <Router>
         <div className="App">
            <Routes>
               {publicRoutes.map((route, index) => {
                  let Layout = Fragment;
                  if (route.layout) {
                     Layout = DefaultLayout;
                  }
                  const Page = route.component;

                  return (
                     <Route
                        key={index}
                        path={route.path}
                        element={
                           <Layout>
                              <div style={{ height: '100vh' }}>
                                 <Scene />
                              </div>
                              {/* <Page /> */}
                           </Layout>
                        }
                     />
                  );
               })}
            </Routes>
         </div>
      </Router>
   );
}

export default App;
