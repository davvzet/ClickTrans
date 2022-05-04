import { useState } from "react";
import Description from "./Description";
import Confirmation from "./Confirmation";
import ChooseVat from "./ChooseVAT";
import PriceNetto from "./PriceNetto";
import PriceBrutto from "./PriceBrutto";
import Axios from "axios";

const Form = () => {
  const [errors, setErrors] = useState({});
  const [charsLeft, setCharsLeft] = useState(255);
  const [inputDisable, setInputDisable] = useState(true);
  const [formValues, setFormValues] = useState({
    description: "",
    confirmation: "",
    VAT: "",
    netto: 0,
    brutto: 0,
  });

  // Unfortunately I haven't made the external API so I just prepared post form
  const postForm = () => {
    const url = "";
    Axios.post(url, {
      description: formValues.description,
      confirmation: formValues.confirmation,
      VAT: formValues.VAT,
      netto: formValues.netto,
      brutto: formValues.brutto,
    }).then((res) => {
      console.log(res.data);
    });
  };

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });

    // calculte characters left
    if (e.target.name === "description") {
      setCharsLeft(e.target.maxLength - e.target.value.length);
    }

    // if VAT choosen enable netto input
    if (e.target.name === "VAT") {
      setInputDisable(false);
    }
    if (e.target.name === "netto") {
      let netto = "";
      if (!noCharsCheck(e.target.value)) {
        netto = "Please, input number";
      }
      setErrors({ ...errors, netto });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValues({
      ...formValues,
      brutto: (
        +formValues.netto +
        (formValues.netto * formValues.VAT) / 100
      ).toString(),
    });
    setErrors(validateForm(formValues));

    // if no errors occured post data to server
    if (Object.keys(errors).length === 0) {
      postForm();
    }
  };

  // check if no chars in netto input
  const noCharsCheck = (netto) => {
    let chars = "";
    [...netto].map((char) => {
      if (char !== "," && char !== ".") {
        chars += char;
      }
    });
    if (isNaN(chars)) {
      return false;
    } else {
      return true;
    }
  };

  // Form data validation
  const validateForm = (values) => {
    const errors = {};
    if (!values.description) {
      errors.description =
        "Text is required, You can't enter more than 255 characters";
    }
    if (!values.confirmation) {
      errors.confirmation = "Text is required";
    }
    if (!values.VAT) {
      errors.VAT = "Text is required";
    }
    if (!values.netto) {
      errors.netto = "Text is required";
    } else if (!noCharsCheck(values.netto)) {
      errors.netto = "Please, input number";
    }
    return errors;
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="form">
          <Description
            onChange={handleChange}
            value={formValues.description}
            error={errors.description}
            charsLeft={charsLeft}
          />
          <Confirmation onChange={handleChange} error={errors.confirmation} />
          <ChooseVat onChange={handleChange} error={errors.VAT} />
          <PriceNetto
            onChange={handleChange}
            value={formValues.netto}
            disable={inputDisable}
            error={errors.netto}
          />
          <PriceBrutto onChange={handleChange} value={formValues} />
          <button type="submit" className="button mt-4 btn btn-warning">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
