import React from 'react';
import {useForm} from 'react-hook-form';

const NewForm = () => {
  const{register, handleSubmit, errors} = useForm();
  const onFormSubmit = data => {
    console.log(data);
  }
  return(
    <form onSubmit={handleSubmit(onFormSubmit)}>
    <input 
      type="text" 
      placeholder="First Name" 
      name="name" 
      ref={register({
        required: "INVALID FIRST NAME", minLength: 10
      })} 
    />{errors.name && <p style={{color: "red"}}>{errors.name.message}</p>}<br />
    <input 
      type="email" 
      placeholder="Email" 
      name="email" ref={register} 
    /><br />
    <input 
      type="password" 
      placeholder="Password" 
      name="password" 
      ref={register({
        required: "PASSWORD TOO SHORT",
        minLength: 8,
      })} 
      
    />
    {errors.password && <p style={{color: "red"}}>{errors.password.message}</p>}<br />
    <input type="submit" value="SEND" />
    </form>
  )
}

export default NewForm;
