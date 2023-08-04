import React, { Component } from "react";
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Searchbar } from './Searchbar/Searchbar';
import Api from './Api/Api';



import css from './App.module.css'

class App extends Component  {
  state = {
    picture: '',
  
   
  }
  
  

  // onSubmitForm = e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   if (e.currentTarget.name.value.trim() === '') {
  //     toast.error("Поле пусте");
  //     return
  //   }
  //   this.setState({
  //     picture: e.currentTarget.name.value,
  //     page: 1,
  //     items:[]
  //   })
  //   form.reset();
  // }
  // onClickButton = e => {
  //   this.setState(prevState => ({
  //     page: prevState.page + 1,
  //   }));
  // }
  

  render() {
    const { picture} = this.state;
    return (
    <div  className={css.App}>
        {/* <Searchbar onSubmit={this.onSubmitForm} /> */}
        <Api picture={picture} />
       {/* {items.length > 0 && <Button onClickButton={this.onClickButton} /> } */}
        {/* <ToastContainer /> */}
        
    </div>
  );
  }
  
};

export default App;