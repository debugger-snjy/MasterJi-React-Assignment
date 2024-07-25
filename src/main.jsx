// Importing React
import React from 'react'

// Importing React DOM
import ReactDOM from 'react-dom/client'

// Importing the Functions and Components needed from react-router-dom
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// Importing the CSS
import './index.css'

// Importing the Pages
import OTPVerificationForm from './pages/OTPVerificationForm'
import CourseListDragNDrop from './pages/CourseListDragNDrop'
import BatchesDataTable from './pages/BatchesDataTable'

// Created router and all its path 
const myMasterjiRouter = createBrowserRouter(
    createRoutesFromElements(

        <Route path='/'>

            {/* Home Page (/) => Will be Redirected to the OTP Form */}
            <Route path='' element={<OTPVerificationForm />} />,

            {/* OTP Form (/otp-form) => Will Render the OTP Verification Form */}
            <Route path='/otp-form' element={<OTPVerificationForm />} />,

            {/* Drag And Drop List (/course-list) => Will Render the Course List */}
            <Route path='/course-list' element={<CourseListDragNDrop />} />,

            {/* Data Table (/batches) => Will Render the Batches with Data Table */}
            <Route path='/batches' element={<BatchesDataTable />} />,

        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // We have to remove this StrictMode because it will cause the code to run twice
    // <React.StrictMode>

    // Adding the RouterProvider Tag
    <RouterProvider router={myMasterjiRouter} />

    // </React.StrictMode>
)