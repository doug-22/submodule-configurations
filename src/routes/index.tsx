import { Route, Routes as ReactRoutes, BrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Page } from '../pages/Page';
import { RouteGuard } from './RouteGuard';


const Routes = () => (
  <BrowserRouter>
    <ReactRoutes>
      <Route path='/config-home' element={<RouteGuard component={<Home />} />} />
      <Route path='/config-page' element={<RouteGuard component={<Page />} />} />
    </ReactRoutes>
  </BrowserRouter>
);

export default Routes;
