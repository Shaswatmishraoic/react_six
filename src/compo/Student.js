import React, { useContext } from 'react';
import StoreData from './Store';
import { Link, useNavigate } from 'react-router-dom';
import './Compo.css'

function Student() {
  const contextData = useContext(StoreData);
  const Navi = useNavigate();

  return (
    <div>
      <h1>Student</h1>
      <button className='Add' onClick={() => Navi('/addnewstudent')}>Add New Student</button>
      <table border='3px' cellPadding='15px' cellSpacing='15px'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {contextData.stuName.map((item, index) => (
            <tr key={index}>
              <td>{item.Name}</td>
              <td>{item.Age}</td>
              <td>{item.Course}</td>
              <td>{item.Batch}</td>
              <td><Link to='/editstudent' state = {{data : index}} className='edit'>Edit</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Student;
