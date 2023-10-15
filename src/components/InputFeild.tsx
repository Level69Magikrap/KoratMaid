import React from 'react'
import './style.css'
const InputFeild = () =>{
    return(
    <form className='input'>
        <input type='input' placeholder='enter a task' className='input_box' />
        <button className='input_submit' type='submit'>Go</button>

    </form>
    )
}

export default InputFeild