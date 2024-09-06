import Button from "./Button";
import TestCategory from "./TestCategory";

function Summary() {
  return (
    <section className="summary">
      <p className="summary__title">Summary</p>
      <TestCategory category="reaction" />
      <TestCategory category="memory" />
      <TestCategory category="verbal" />
      <TestCategory category="visual" />
      <Button />
    </section>
  );
}

export default Summary;
