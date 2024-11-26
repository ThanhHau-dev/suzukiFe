// Component cha (ParentComponent)
import React from "react";

function ParentComponent() {
  const name = "Nguyen Van A";
  const age = 30;

  return (
    <div>
      <ChildComponent name={name} age={age} />
    </div>
  );
}
