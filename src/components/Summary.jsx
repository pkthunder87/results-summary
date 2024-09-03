import Button from "./Button";
import TestCategory from "./TestCategory";

function Summary() {
  return (
    <section className="summary">
      <p>Summary Section</p>
      <TestCategory />
      <TestCategory />
      <TestCategory />
      <TestCategory />
      <Button />
    </section>
  );
}

export default Summary;
