import './App.css'
import Button from './components/Buttons'
import * as React from 'react';
import { MdAddShoppingCart } from "react-icons/md";
import Btn from './components/Btn'
function App() {
  return (
    <div>
    <Button>Default</Button>
    <br/>
    <br/>
    <Button variant ='outline' >Default</Button>
    <br/>
    <br/>
    <Button variant ='text' >Default</Button>
    <br/>
    <br/>
    <Button disabled >Disable</Button>
    <br/>
    <br/>
    <Button 
      variant ='text' disabled> 
      Disable
    </Button>
    <br/>
    <br/>
    <Button variant = 'iconButton' startIcon ={<MdAddShoppingCart />}>
      &emsp;Default      
    </Button>
    <br/>
    <br/>
    <Button variant = 'iconButton' endIcon ={<MdAddShoppingCart />}> Default&emsp; </Button>
    <br/>
    <br/>
    <Btn size = "sm">Default</Btn>
    <Btn size = "md">Default</Btn>
    <Btn size = "lg">Default</Btn>
  <br/>
  <br/>
  <br/>
    <Btn color ="default">Default</Btn>
    <Btn color ="primary">Default</Btn>
    <Btn color ="secondary">Default</Btn>
    <Btn color ="danger">Default</Btn>

    </div>
  );
}

export default App;
