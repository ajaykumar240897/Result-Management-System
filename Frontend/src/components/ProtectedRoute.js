import React, { useEffect } from 'react'
import axios from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from "react-redux"
import { ShowLoading, HideLoading } from "../../redux/alert.js"

function ProtectedRoute() {
  const dispatch = useDispatch();
  const getEmployeeData = () => {
    try {
      dispatch(ShowLoading());
      const token = localStorage.getItem('token')
      dispatch(HideLoading());
      const response = axios.post('/api/employee/get-employee-by-id', { token }, {
        headers: {
          Authorization: `Bearer $(token)`,
        },
      });
      if (response.data.success) {
        console.log(response.data.data)
      }
    } catch (error) {
      dispatch(HideLoading();)
      toast.error('Invalid token')
    }
  };
  useEffect(() => {
    getEmployeeData();
  }, []);

  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute