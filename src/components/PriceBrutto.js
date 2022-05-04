const PriceBrutto = (props) => {
  return (
    <div className="px-5">
      <label htmlFor="brutto">Price brutto EUR</label>
      <input
        type="text"
        name="brutto"
        id="brutto"
        onChange={props.onChange}
        value={+props.value.netto + (props.value.netto * props.value.VAT) / 100}
        disabled
      />
    </div>
  );
};

export default PriceBrutto;
