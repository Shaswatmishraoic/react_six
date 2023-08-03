import React, { useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Student from './Student';
import Contact from './Contact';
import StoreData from './Store';
import AddNewStudent from './AddNewStudent';
import EditStudent from './EditStudent';



function Routecompo() {
    const [studentData, setStudentData] = useState([
        {Name:'anbg', Age:23, Course:'web', Batch:'EA23'},
        {Name:'anbg', Age:23, Course:'web', Batch:'EA23'},
        {Name:'anbg', Age:23, Course:'web', Batch:'EA23'},
        {Name:'anbg', Age:23, Course:'web', Batch:'EA23'},
    ])
  return (
    <div>
      <BrowserRouter>
      <section className="navbar">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/student'>Student</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
      </section>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/student' element={
                <StoreData.Provider value = {{stuName: studentData, updateStu: setStudentData }}>
                    <Student/>
                </StoreData.Provider>
            }/>
            <Route path='/addnewstudent' element={
                <StoreData.Provider value = {{stuName: studentData, updateStu: setStudentData }}>
                    <AddNewStudent/>
                </StoreData.Provider>
            }/>
            <Route path='/editstudent' element={
                <StoreData.Provider value = {{stuName: studentData, updateStu: setStudentData }}>
                    <EditStudent/>
                </StoreData.Provider>
            }/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routecompo
