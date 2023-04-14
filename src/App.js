import './App.css';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character/';
const API_KEY = '7da817cce430.1c6f2ec4a38636c0abe5';
const email = 'david@gmail.com'
const password = '123456a'

function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [acces, setAcces] = useState(false);

   const login = (userData) => {
      if (userData.email === email && userData.password === password) {
         setAcces(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !acces && navigate('/');
   }, [acces]);

   const onSearch = (id) => {
         axios(`${URL_BASE}${id}?key=${API_KEY}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
                window.alert('¡No hay personajes con este ID!');
            }
         });
      }

      const onClose = (id) => {
         const charactersFilterd = characters.filter(character => character.id !== Number(id));
         setCharacters(charactersFilterd);
      }

   return (
      <div className='App'>
         {
            location.pathname !== '/'
            ? <Nav onSearch={onSearch}/>
            : null
         }
         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
         </Routes>
         
      </div>
   );
}

export default App;
