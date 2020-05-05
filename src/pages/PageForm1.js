import React from 'react';
import Form from "../components/formComponents/Form";
import TextBox from "../components/formComponents/TextBox";
import TextArea from "../components/formComponents/TextArea";
import {Combobox} from "../components/formComponents/ComboBox";
import FormButtons from "../components/formComponents/FormButtons";
import CheckBox from "../components/formComponents/CheckBox";
import {CheckBoxGroup} from "../components/formComponents/CheckBoxGroup";


const PageForm1 = () => {
  return (
    <div className="form-container px-2 py-1">
      <h1 className="form-title text-primary ">Account Login </h1>
      <Form id="form1" className={"grid"}>
        <TextBox
          // className="row3"
          label="Name:"
          name="name"
          type="text"
          autoComplete="name"
          required
        />
        <TextArea
          className="row1"
          label="Surname:"
          name="surname"
          type="text"
          autoComplete="surname"
          form="form1"
          required
        />
        <TextBox
          label="Email:"
          name="email"
          type="text"
          autoComplete="email"
          required
        />
        <TextBox
          label="Surname:"
          name="surname"
          type="text"
          autoComplete="surname"
          required
        />
        <Combobox
          label="Combo:"
          name="surname"
          type="text"
          autoComplete="surname"
          required
          //multi
        />
        <CheckBoxGroup
          checkBoxItems = {
            [
              {id: "checkbox1", name: "checkbox1", label: "Checkbox1 Here It İs"},
              {id: "checkbox2", name: "checkbox2", label: "Checkbox2 Here It İs"},
              {id: "checkbox3", name: "checkbox3", label: "Checkbox3 Here It İs"},
            ]
          }
          flex
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

export default PageForm1;
