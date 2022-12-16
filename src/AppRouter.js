import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Owner from './pages/Owner';
import Chef from './pages/Chef'
import UpdatePizza from './components/Edits/UpdatePizza'
import UpdateToppings from './components/Edits/UpdateToppings'




function AppRouter() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/owner' element={<Owner/>}/>
      <Route path='/chef' element={<Chef/>}/>
      <Route path='/updatepizza' element={<UpdatePizza/>}/>
      <Route path='/updatetoppings' element={<UpdateToppings/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default AppRouter;