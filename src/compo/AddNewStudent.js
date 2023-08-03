import React, {useContext} from 'react'
import StoreData from './Store'
import {useNavigate} from 'react-router-dom'
import './Compo.css'

function AddNewStudent() {
    const ContextData = useContext(StoreData)
    const Navi= useNavigate();
    console.log(ContextData);
    const newStu = {
      Name:'',
      Age:'',
      Course:'',
      Batch:''
    }
    const handleChange = (e) =>{
      newStu[e.target.name] = e.target.value;
    }
    const handleClick = () =>{
      ContextData.stuName.push(newStu);
      Navi('/student')
    }
  return (
    <div>
      <h1 className='addstudent'>student Detail Please</h1>
      <form>
      <div className='one'>
      <label htmlFor='name'>Name: </label>
      <input type='text' id='name' name='Name' placeholder='Name' onChange={handleChange}/>
      </div>
      <div className='two'>
      <label htmlFor='age'>Age: </label>
      <input type='text' id='age' name='Age' placeholder='Age' onChange={handleChange}/>
      </div>
      <div className='three'>
      <label htmlFor='course'>Course: </label>
      <input type='text' id='course' name='Course' placeholder='Course' onChange={handleChange}/>
      </div>
      <div className='four'>
      <label htmlFor='batch'>Batch: </label>
      <input type='text' id='batch' name='Batch' placeholder='Batch' onChange={handleChange}/>
      </div>
      <button className='Add1' onClick={handleClick}>Submit</button>
      <button className='cancle ctwo' onClick={() => Navi('/student')}>Cancle</button>
      </form>
    </div>
  )
}

export default AddNewStudent
