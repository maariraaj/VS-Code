import React from 'react'
import { useState } from 'react';

const FormContext = React.createContext({
  data: [],
  formIsShown: false,
  onClose: () => { },
  onShow: () => { },
  onInput: () => { },
  onDelete: (postId) => { },
  onEdit: (postId, postUrl, postTitle, postDescription) => { },
  setData: () => { },
  url: '',
  title: '',
  description: '',
  setUrl: () => { },
  setTitle: () => { },
  setDescription: () => { }
});

export const FormContextProvider = (props) => {
  const [data, setData] = useState([]);

  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [formIsShown, setFormIsShown] = useState(false);

  const closeFormHandler = () => {
    setFormIsShown(false);
  }
  const showFormHandler = () => {
    setFormIsShown(true);
  }
  const inputHandler = () => {
    const obj = {
      id: `${title}_${Math.random().toString()}`,
      url: url,
      title: title,
      description: description
    }
    setData([...data, obj]);
    setUrl('');
    setTitle('');
    setDescription('');
  }
  const deleteHandler = (postId) => {
    setData((prevData) => {
      const updatedData = prevData.filter((post) => post.id !== postId);
      return updatedData;
    })
  }
  const editHandler = (postId, postUrl, postTitle, postDescription) => {
    setFormIsShown(true);
    setData((prevData) => {
      const updatedData = prevData.filter((post) => post.id !== postId);
      return updatedData;
    })

    setUrl(postUrl);
    setTitle(postTitle);
    setDescription(postDescription);
  }


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
      url: url,
      title: title,
      description: description,
      setUrl: setUrl,
      setTitle: setTitle,
      setDescription: setDescription
    }}>
      {props.children}
    </FormContext.Provider>
  )

}
export default FormContext

