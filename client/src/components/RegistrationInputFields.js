import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <input
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field}
        {...props}
        autoComplete='off'
      />
      <ErrorMessage colour='red' component='div' name={field.name} className='error' />
    </div>
  );
};
