import React from 'react';
import './App.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
/*
import React, { useState, useEffect } from 'react';
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers"
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { Container, Grid, Button, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { VictoryPie, VictoryTooltip } from 'victory';
import Modal from './components/Modal';
import ExpenseList from './components/ExpenseList';
// import functions to interact with controller.
import { fetchExpenses, expenseByCategory } from './utils';
import './App.css';
*/

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={ <SignIn /> } />
    <Route path='/sign-in' element={ <SignIn /> } />
    <Route path='/sign-up' element={ <SignUp /> } />
  </>
));


export default function App () {
  return (
    <RouterProvider router={ router } />
  );
}

