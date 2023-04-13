import './App.scss'
import Button from './components/Buttons'
import * as React from 'react';
import { MdAddShoppingCart } from "react-icons/md";
// import Btn from './components/Btn'
function App() {
  return (
    <div className='contained'>
      <Button
        className="btn-default"
        text='Default'
      />
      <Button
        className='btn-outline'
        text='Outline' />
      <Button
        className='btn-text'
        text='Text' />
      <Button
        disableShadow
        text='Default' />
      <Button disabled
        text='Disable' />
      <Button
        text='Disable'
        className='btn-text' disabled />
      <Button className='btn-iconButton'
        text=' &emsp;Default'
        startIcon={<MdAddShoppingCart />}>
      </Button>

      <Button className='btn-iconButton'
        text=' Default&emsp;'
        endIcon={<MdAddShoppingCart />}>
      </Button>
      <Button className='btn-iconButton'
        startIcon={<MdAddShoppingCart />}
        text=' &emsp;Default&emsp;'
        endIcon={<MdAddShoppingCart />}>
      </Button>
        <Button className='btn-sizeButton' size='sm' text='Default' />
        <Button className='btn-sizeButton' size='md' text='Default' />
        <Button className='btn-sizeButton' size='lg' text='Default' />
      <Button color='default' text='Default'/>
      <Button color='primary' text='Primary'/>
      <Button color='secondary' text='Secondary'/>
      <Button color='danger' text='Danger'/>

    </div>

  );
}

export default App;
