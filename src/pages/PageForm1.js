import React, {useState} from 'react';
import Form from "../components/formComponents/Form";
import TextBox from "../components/formComponents/TextBox";
import TextArea from "../components/formComponents/TextArea";
import {Combobox} from "../components/formComponents/ComboBox";
import FormButtons from "../components/formComponents/FormButtons";
import {CheckBoxGroup} from "../components/formComponents/CheckBoxGroup";
import {RadioButtonGroup} from "../components/formComponents/RadioButtonGroup";


const PageForm1 = () => {

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    city: "",
    checkBoxGroup1: {
      checkbox1: true,
      checkbox2: false,
      checkbox3: false,
    },
    radioButtonGroup1Selected: "radio1",
    combo1SelectedItems: new Set()

  });


  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  }

  const onChange = (e => {
    console.log("OnChange"+e.target.id);
    if (e.target.type==="checkbox") {
      setFormData({...formData, checkBoxGroup1:{...formData.checkBoxGroup1,[e.target.id]: e.target.checked }})
    }
   else if (e.target.type==="radio") {
      console.log("here");
      setFormData({...formData, radioButtonGroup1Selected:e.target.id} )
    }
    else {
      setFormData({...formData, [e.target.id]: e.target.value})
    }
  })

  return (
    <div className="form-container px-2 py-1">
      <h1 className="form-title text-primary ">Account Login </h1>
      <Form id="form1" className={"grid"} onSubmit={onSubmit} >
        <TextBox
          // className="row3"
          label="Name:"
          id="name"
          name="name"
          value={formData.name}
          type="text"
          autoComplete="name"
          //required
          onChange={onChange}
        />
        <TextBox
          //className="row1"
          label="Surname:"
          id="surname"
          name="surname"
          value={formData.surname}
          type="text"
          autoComplete="surname"
          //required
          onChange={onChange}
        />
        <TextBox
          label="Email:"
          id="email"
          name="email"
          value={formData.email}
          type="text"
          autoComplete="email"
          //required
          onChange={onChange}
        />

        <Combobox
          label="Combo:"
          id="cb1"
          name="cb1"
          type="text"
          autoComplete="surname"
          required
          multi
          hasBlank
          selectedItems={formData.combo1SelectedItems}
          items ={
            [
              {id: "Combobox Item 1"},
              {id: "Combobox Item 2"},
              {id: "Combobox Item 3"},
            ]
          }
        />
        <TextArea
          className="row3"
          label="City:"
          id="city"
          name="city"
          value={formData.city}
          type="text"
          autoComplete="city"
          form="form1"
          //required
          onChange={onChange}
        />
        <CheckBoxGroup
          items = {
            [
              {id: "checkbox1", name: "checkbox1", checked:formData.checkBoxGroup1["checkbox1"] ,label: "Check Here It İs"},
              {id: "checkbox2", name: "checkbox2", checked:formData.checkBoxGroup1["checkbox2"] , label: "Checkbox2 Here It İs"},
              {id: "checkbox3", name: "checkbox3", checked:formData.checkBoxGroup1["checkbox3"] , label: "Checkbox3 Here It İs"},
            ]
          }
          flex
          onChange={onChange}
        />

        <RadioButtonGroup
          groupName = "radioButtonGroup1"
          items = {
            [
              {id: "radio1", name: "radio1", checked:formData.radioButtonGroup1Selected==="radio1", label: "Radio Here It İs"},
              {id: "radio2", name: "radio2", checked:formData.radioButtonGroup1Selected==="radio2", label: "Radio Button 1 Here It İs"},
              {id: "radio3", name: "radio3", checked:formData.radioButtonGroup1Selected==="radio3", label: "Radio Button 2 Here It İs"},
            ]
          }
          flex
          onChange={onChange}
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
