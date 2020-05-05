import React from 'react';

const Form = (props) => {
  const {id, onSubmit} = props;
  return (
    <form id= {id} className= {"form "+ props.className} onSubmit={onSubmit}>
      {props.children}
    </form>
  );
};

export default Form;
