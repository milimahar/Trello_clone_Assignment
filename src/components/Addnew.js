import React, { useState } from 'react'
import { addList,addCard } from '../store/listSlice';
import { useDispatch } from 'react-redux';

const Addnew = ({type,parentId}) => {

  const[inputVal,setInputVal]=useState("");
  const[isFormVisible,setIsFormVisible]=useState(false)
  const dispatch=useDispatch()


  const submitHandler= (e) =>{
    e.preventDefault();
    if(type){
   dispatch(addCard({id:Math.random(),title:inputVal,parentId:parentId}))
    }else {
      dispatch(addList({id: Math.random(), title: inputVal}));
    }
    setInputVal("")
  };

    const updateInput =(e)=> {
     
      setInputVal(e.target.value);
  };
const openForm =()=>{
  setIsFormVisible(true)
}
const hideForm =()=>{
  setIsFormVisible(false)
}


  return (
    <div><button onClick={openForm}>+Add  {type? "a card":"another list"} </button>
    {isFormVisible && (
    <form onSubmit={submitHandler}  className='mt-3'>
      <input
       value={inputVal}
        onChange={updateInput} 
        className="w-full h-10 p-2"
         placeholder={type?"enter Card Name":"Enter List Name"} />

      <div className='mt-3'>
      <button  onClick={hideForm} className="mr-3">
        Cancel
        </button>
      <button  onClick={submitHandler} className="px-3 py-1 bg-blue-500">Save</button>
      </div>
       </form>
       )}
    
    
    </div>
  )
}

export default Addnew