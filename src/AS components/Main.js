import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Routes, Route, Link } from 'react-router-dom';
import NavBar from './NavBar';
import Homepage from './Homepage';
import Bday from '../MK components/Bday';
import Catering from '../MK components/Catering';
import Registration from '../MK components/Registration';
import Book from '../MA components/Book';
import Reservation from '../YV components/Reservation';
import Deactivate from '../YV components/DeActivate';
import Career from './Career';

export default function Main() {
    return (
        <>
            <Router>
                <NavBar />
                <Routes>
                    <Route exact path="HomePage" element={<Homepage />} ></Route>
                    <Route exact path="deact" element={<Deactivate />} ></Route>
                    <Route path="registration" element={<Registration />}></Route>
                    <Route path="bday" element={<Bday />}></Route>
                    <Route path="career" element={<Career/>}></Route>
                    
                </Routes>

            </Router>
        </>
    )
}