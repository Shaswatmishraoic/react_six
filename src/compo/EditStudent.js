import React, { useContext } from 'react'
import './Compo.css'
import {useNavigate, useLocation} from 'react-router-dom'
import StoreData from './Store';

function EditStudent() {
    const ContextData = useContext(StoreData);
    console.log(ContextData);
    const Navi= useNavigate();
    const IndexValue = useLocation().state.data;

    const updateObj = {
        Name:ContextData.stuName[IndexValue].Name,
        Age:ContextData.stuName[IndexValue].Age,
        Course:ContextData.stuName[IndexValue].Course,
        Batch:ContextData.stuName[IndexValue].Batch
    }
    const handleChange = (event) => {
        updateObj[event.target.name] = event.target.value;
    }

    const handleClick = () => {
        ContextData.stuName[IndexValue] = updateObj;
        Navi('/student')
    }
  return (
    <div>
      <form>
      <div className='one'>
      <label htmlFor='name'>Name: </label>
      <input type='text' id='name' name='Name' placeholder={ContextData.stuName[IndexValue].Name} onChange={handleChange}/>
      </div>
      <div className='two'>
      <label htmlFor='age'>Age: </label>
      <input type='text' id='age' name='Age' placeholder={ContextData.stuName[IndexValue].Age} onChange={handleChange}/>
      </div>
      <div className='three'>
      <label htmlFor='course'>Course: </label>
      <input type='text' id='course' name='Course' placeholder={ContextData.stuName[IndexValue].Course} onChange={handleChange}/>
      </div>
      <div className='four'>
      <label htmlFor='batch'>Batch: </label>
      <input type='text' id='batch' name='Batch' placeholder={ContextData.stuName[IndexValue].Batch} onChange={handleChange}/>
      </div>
      <button className='Add1' onClick={handleClick}>Submit</button>
      <button className='cancle cone' onClick={() => Navi('/student')}>Cancle</button>
      </form>
    </div>
  )
}

export default EditStudent
