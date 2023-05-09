import './input.scss'
// import Button from './components/Buttons'
import * as React from 'react';
import Input from './components/Input'
import { MdPhone } from "react-icons/md";
import { MdLock } from "react-icons/md";

// import { MdAddShoppingCart } from "react-icons/md";
// import Btn from './components/Btn'
// function App() {
//   return (
//     // <div className='contained'>
//     //   <Button
//     //     className="btn-default"
//     //     text='Default'
//     //   />
//     //   <Button
//     //     className='btn-outline'
//     //     text='Outline' />
//     //   <Button
//     //     className='btn-text'
//     //     text='Text' />
//     //   <Button
//     //     disableShadow
//     //     text='Default' />
//     //   <Button disabled
//     //     text='Disable' />
//     //   <Button
//     //     text='Disable'
//     //     className='btn-text' disabled />
//     //   <Button className='btn-iconButton'
//     //     text=' &emsp;Default'
//     //     startIcon={<MdAddShoppingCart />}>
//     //   </Button>

//     //   <Button className='btn-iconButton'
//     //     text=' Default&emsp;'
//     //     endIcon={<MdAddShoppingCart />}>
//     //   </Button>
//     //   <Button className='btn-iconButton'
//     //     startIcon={<MdAddShoppingCart />}
//     //     text=' &emsp;Default&emsp;'
//     //     endIcon={<MdAddShoppingCart />}>
//     //   </Button>
//     //     <Button className='btn-sizeButton' size='sm' text='Default' />
//     //     <Button className='btn-sizeButton' size='md' text='Default' />
//     //     <Button className='btn-sizeButton' size='lg' text='Default' />
//     //   <Button color='default' text='Default'/>
//     //   <Button color='primary' text='Primary'/>
//     //   <Button color='secondary' text='Secondary'/>
//     //   <Button color='danger' text='Danger'/>

//     </div>

//   );
// }

function App() {
  return (
    <div className='contained'>
      <Input
        label='Label'
        placeholder='placeholder'
      />
      <Input
        label='Label'
        error
        placeholder='placeholder'
      />
      <Input
        label='Label'
        placeholder='placeholder'
        disabled
      />
      <Input
        label='Label'
        helperText='Some interesting text'
        placeholder='placeholder'
      />
      <Input
        label='Label'
        error
        helperText='Some interesting text'
        placeholder='placeholder'
      />
      <div></div>

      <Input
        label='Label'
        startIcon={<MdPhone />}
        placeholder='placeholder' />

      <Input
        label='Label'
        endIcon={<MdLock />}
        placeholder='placeholder' />
      <Input
        label='Label'
        placeholder='placeholder'
        value='Text' />
      <Input
        size="sm"
        label='Label'
        placeholder='placeholder' />
      <Input
        size="md"
        label='Label'
        placeholder='placeholder' />
      <div></div>
      <Input
          fullWidth
          label='Label'
          placeholder='placeholder'
          helperText='FullWidth'
          value='Text' />
      
      <Input multiline_row
        label='Label'
        placeholder='placeholder' />
    </div>
  )
}

export default App;
