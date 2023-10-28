import React, { useState } from 'react';

function Hoc(OriginalComponent) {
  function UpdatedComponent() {
    const [Count, setCount] = useState(0);
    const handleClick = () => {
      setCount(Count + 1);
    };
    return <OriginalComponent Count={Count} handleClick={handleClick} />;
  }
  return UpdatedComponent;
}

export default Hoc;