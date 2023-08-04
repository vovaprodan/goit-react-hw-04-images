import React from "react";
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Searchbar } from './Searchbar/Searchbar';
import Api from './Api/Api';



import css from './App.module.css'
const App = ()  => {
  
  

    const { picture} = this.state;
    return (
    <div  className={css.App}>
        <Api picture={picture} /> 
    </div>
  );
  
};

export default App;