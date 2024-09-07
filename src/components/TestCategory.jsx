function TestCategory({ test }) {
  return (
    <li className={`test test--${test.category}`}>
      <div className="test__left">
        <img src={`../src${test.icon}`} alt="" className="text__icon" />
        <h3 className="test__name">{test.category}</h3>
      </div>
      <div className="test__right">
        <p className="test__score">{test.score}</p>
        <p className="test__divider">/</p>
        <p className="test__of-100">100</p>
      </div>
    </li>
  );
}

export default TestCategory;
