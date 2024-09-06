function TestCategory({ category }) {
  return (
    <div className={`test test--${category}`}>
      <div className="test__left">
        <img
          src={`./images/icon-${category}.svg`}
          alt=""
          className="text__icon"
        />
        <h3 className="test__name">{category}</h3>
      </div>
      <div className="test__right">
        <p className="test__score">80 </p>
        <p className="test__divider">/</p>
        <p className="test__of-100">100</p>
      </div>
    </div>
  );
}

export default TestCategory;
