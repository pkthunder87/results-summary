import data from "../data/data.json";

function Results() {
  const totalScore = Math.round(
    data.map((data) => data.score).reduce((acc, cur) => acc + cur, 0) /
      data.length
  );

  return (
    <section className="results">
      <h2 className="results__title">Your Results</h2>
      <div className="results__circle">
        <h3 className="results__score">{totalScore}</h3>
        <p className="results__of">of 100</p>
      </div>
      <h3 className="results__eval">Great</h3>
      <p className="results__text">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </section>
  );
}

export default Results;
