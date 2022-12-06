import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Owner from './components/Owner';
import Chef from './components/Chef'
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