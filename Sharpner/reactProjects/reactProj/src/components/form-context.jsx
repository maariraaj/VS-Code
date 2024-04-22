import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const FormContext = React.createContext({
  data: [],
  formIsShown: false,
  onClose: () => { },
  onShow: () => { },
  onInput: () => { },
  onDelete: (postId) => { },
  onEdit: (postId, postName, postMobile, postAddress) => { },
  setData: () => { },
  name: '',
  mobile: '',
  address: '',
  setName: () => { },
  setMobile: () => { },
  setAddress: () => { }
});

export const FormContextProvider = (props) => {
  const [data, setData] = useState([]);

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');

  const [formIsShown, setFormIsShown] = useState(false);

  const axiosAPI = 'b0000cf7ff88482ea24762bcfc455314';

  const closeFormHandler = () => {
    setFormIsShown(false);
  }
  const showFormHandler = () => {
    setFormIsShown(true);
  }
  const inputHandler = () => {
    const obj = {
      id: `${mobile}`,
      name: name,
      mobile: mobile,
      address: address
    }
    axios.post(`https://crudcrud.com/api/${axiosAPI}/students`, obj, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log('Student added:', response.data);
      fetchStudents();
    });

    setName('');
    setMobile('');
    setAddress('');
    fetchStudents();
  }
  const deleteHandler = (postId) => {
    const existingStudentIndex = data.findIndex(student => student.id === postId);
    if (existingStudentIndex !== -1) {
      const existingStudent = data[existingStudentIndex];
      axios.delete(`https://crudcrud.com/api/${axiosAPI}/students/${existingStudent._id}`)
      .then(()=>{
        console.log('Student deleted:', existingStudent);
        fetchStudents();
      });
    }
  }
  const editHandler = (postId, postName, postMobile, postAddress) => {
    setFormIsShown(true);
    
    const existingStudentIndex = data.findIndex(student => student.id === postId);
    if (existingStudentIndex !== -1) {
      const existingStudent = data[existingStudentIndex];
      axios.delete(`https://crudcrud.com/api/${axiosAPI}/students/${existingStudent._id}`)
      .then((response)=>{
        console.log('Student deleted:', existingStudent);
      });
    }

    setName(postName);
    setMobile(postMobile);
    setAddress(postAddress);
  }
  const fetchStudents = async () => {
    try {
      const response = await axios.get(`https://crudcrud.com/api/${axiosAPI}/students`);
      console.log('Students:', response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };
  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <FormContext.Provider value={{
      data: data,
      formIsShown: formIsShown,
      onClose: closeFormHandler,
      onShow: showFormHandler,
      onInput: inputHandler,
      onDelete: deleteHandler,
      onEdit: editHandler,
      setData: setData,
      name: name,
      mobile: mobile,
      address: address,
      setName: setName,
      setMobile: setMobile,
      setAddress: setAddress
    }}>
      {props.children}
    </FormContext.Provider>
  )

}
export default FormContext

