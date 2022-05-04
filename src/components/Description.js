const Description = (props) => {
  return (
    <div className="px-5 mt-3">
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        cols="35"
        rows="2"
        maxLength="255"
        onChange={props.onChange}
        value={props.value}
      ></textarea>
      <p>{props.charsLeft < 255 && `Characters left: ${props.charsLeft}`}</p>
      <p className="error">{props.error}</p>
    </div>
  );
};

export default Description;
