const PriceNetto = (props) => {
  return (
    <div className="px-5">
      <label htmlFor="netto">Price netto EUR</label>
      <input
        type="text"
        name="netto"
        id="netto"
        onChange={props.onChange}
        value={props.value}
        disabled={props.disable}
      />
      <p className="error">{props.error}</p>
    </div>
  );
};

export default PriceNetto;
