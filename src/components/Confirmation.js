const Confirmation = (props) => {
  return (
    <div className="px-5">
      Send confirmation
      <br />
      <div className="radioItem">
        <input
          type="radio"
          name="confirmation"
          value="yes"
          onChange={props.onChange}
        />
        &nbsp;Yes
      </div>
      <div className="radioItem">
        <input
          type="radio"
          name="confirmation"
          value="no"
          onChange={props.onChange}
        />
        &nbsp;No
      </div>
      <p className="error">{props.error}</p>
    </div>
  );
};

export default Confirmation;
