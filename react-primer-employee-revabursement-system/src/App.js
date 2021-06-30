import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Menu, Home, Login, Register, GetUsers, GetUser, GetForms, Submit, Resolve } from './components/pages';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Routes>
        <Route path = '/' element = {<Menu />}>
          <Route path = '/' element = {<Home />}/>
          <Route path = '/login' element = {<Login />} />
          <Route path = '/register' element = {<Register />}/>
          <Route path = '/users' element = {<GetUsers />}/>
          <Route path = '/user' element = {<GetUser />}/>
          <Route path = '/forms' element = {<GetForms />}/>
          <Route path = '/submit' element = {<Submit />}/>
          <Route path = '/resolve' element = {<Resolve />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
