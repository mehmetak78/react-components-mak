import React from 'react';
import TextBox from "../components/formComponents/TextBox";
import FormButtons from "../components/formComponents/FormButtons";
import Form from "../components/formComponents/Form";

const Form1 = () => {
  return (
    <div className="form-container px-2 py-1">
      <h1 className="form-title text-primary ">Account Login </h1>
      <Form className={"grid"}>
        <TextBox
          label="Name"
          name="name"
          type="text"
          autoComplete="name"
          required
        />
        <TextBox
          className="col1"
          label="Surname"
          name="surname"
          type="text"
          autoComplete="surname"
          required
        />
        <TextBox
          label="Email"
          name="email"
          type="text"
          autoComplete="email"
          required
        />
        <TextBox
          label="Surname"
          name="surname"
          type="text"
          autoComplete="surname"
          required
        />
        <FormButtons
          buttons= {
            [
              {label:"Ok", value:"Ok", type:"submit"},
              {label:"Cancel", value:"Cancel", type:"reset"}
            ]
          }
        />
      </Form>
    </div>
  );
};

export default Form1;
