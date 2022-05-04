const ChooseVat = (props) => {
  return (
    <div className="px-5">
      <select name="VAT" defaultValue="" onChange={props.onChange}>
        <option disabled={true} hidden={true} value="">
          Choose VAT
        </option>
        <option value="19">19%</option>
        <option value="21">21%</option>
        <option value="23">23%</option>
        <option value="25">25%</option>
      </select>
      <p className="error">{props.error}</p>
    </div>
  );
};

export default ChooseVat;
