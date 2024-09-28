import { BrowserRouter } from 'react-router-dom'

import NavBar from './components/navbar'
import AllRoutes from './route'
import GlobalCss from './style.js'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalCss></GlobalCss>
        <NavBar></NavBar>
        <AllRoutes></AllRoutes>
      </BrowserRouter>
    </>
  );
}

export default App;
