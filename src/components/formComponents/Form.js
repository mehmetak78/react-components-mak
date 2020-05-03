import React from 'react';

const Form = (props) => {
  const {id} = props;
  return (
    <form id= {id} className= {"form "+ props.className}>
      {props.children}
    </form>
  );
};

export default Form;
