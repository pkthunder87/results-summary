import Button from "./Button";
import TestCategory from "./TestCategory";
import data from "../data/data.json";

function Summary() {
  return (
    <section className="summary">
      <p className="summary__title">Summary</p>

      <ul className="summary__tests">
        {data.map((test) => {
          return <TestCategory test={test} key={test.category} />;
        })}
        <Button />
      </ul>
    </section>
  );
}

export default Summary;
