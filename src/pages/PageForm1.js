import React, {useState} from 'react';
import Form from "../components/formComponents/Form";
import TextBox from "../components/formComponents/TextBox";
import TextArea from "../components/formComponents/TextArea";
import {Combobox} from "../components/formComponents/ComboBox";
import FormButtons from "../components/formComponents/FormButtons";
import CheckBox from "../components/formComponents/CheckBox";
import {CheckBoxGroup} from "../components/formComponents/CheckBoxGroup";


const PageForm1 = () => {

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    city: ""
  });


  const onSubmit = (e) => {
    e.preventDefault();
    console.log("OnSubmit")
    console.log(formData)
  }

  const onChange = (e => {
    console.log("OnChange");
    setFormData({...formData, [e.target.name]: e.target.value})
  })

  return (
    <div className="form-container px-2 py-1">
      <h1 className="form-title text-primary ">Account Login </h1>
      <Form id="form1" className={"grid"} onSubmit={onSubmit} >
        <TextBox
          // className="row3"
          label="Name:"
          name="name"
          value={formData.name}
          type="text"
          autoComplete="name"
          //required
          onChange={onChange}
        />
        <TextArea
          className="row1"
          label="Surname:"
          name="surname"
          value={formData.surname}
          type="text"
          autoComplete="surname"
          form="form1"
          //required
          onChange={onChange}
        />
        <TextBox
          label="Email:"
          name="email"
          value={formData.email}
          type="text"
          autoComplete="email"
          //required
          onChange={onChange}
        />
        <TextBox
          label="City:"
          name="city"
          value={formData.city}
          type="text"
          autoComplete="city"
          //required
          onChange={onChange}
        />
        <Combobox
          label="Combo:"
          name="surname"
          type="text"
          autoComplete="surname"
          //required
          //multi
        />
        <CheckBoxGroup
          checkBoxItems = {
            [
              {id: "checkbox1", name: "checkbox1", label: "Check Here It İs"},
              {id: "checkbox2", name: "checkbox2", label: "Checkbox2 Here It İs"},
              {id: "checkbox3", name: "checkbox3", label: "Checkbox3 Here It İs"},
            ]
          }
          //flex
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
