import {BrowserRouter, Routes, Route} from 'react-router-dom'
import EditToppings from './components/Edits/EditToppings';
import Home from './components/Home'
import Owner from './components/Owner';
import Chef from './components/Chef'
import EditPizza from './components/Edits/EditPizza';
import UpdatePizza from './components/Edits/UpdatePizza'



function AppRouter() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/owner' element={<Owner/>}/>
      <Route path='/edittoppings' element={<EditToppings/>}></Route>
      <Route path='/editpizza' element={<EditPizza/>}></Route>
      <Route path='/chef' element={<Chef/>}/>
      <Route path='/updatepizza' element={<UpdatePizza/>}/>

    </Routes>
   </BrowserRouter>
  );
}

export default AppRouter;