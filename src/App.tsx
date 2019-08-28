import React, { Component } from 'react'
import MenuSide from './components/menu/menu_side';
// import { handleClick } from './metodos/selectedItem';
// import Test from './components/pages/test'
// import Test2 from './components/pages/test2'

import './App.scss';

import {IMenuselected} from "./components/menu/interfaces";
export default class App extends Component {

  
  state = {
    recursos: true,
    proyectos: false,
    gastos: false,
    habilidades: false,

  }
  handleClick= (text:String) =>{
    console.log("App "+ text);
    return text;

   }
  
  render() {
   
    return (
      <div className="App container-fluid px-0 mx-0">
        <MenuSide handleClick={this.handleClick} selected={this.state}></MenuSide>
        {/* {this.state.recursos ? <Test text={'Recursos'}></Test> : this.state.proyectos ? <Test2 text={'Proyectos'}></Test2> : this.state.gastos ? <Test text={'Gastos'}></Test> : <Test2 text={'Habilidades'}></Test2>} */}
      </div>
    );
  }
}
