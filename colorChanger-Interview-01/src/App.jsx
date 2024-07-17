import { useState } from "react";

function App() {
  const data = ["red", "yellow", "green", "blue"];
  const [value, setValue] = useState(data);

  //method 1
  // const rightRotated = [...value];
  // const leftRotated = [...value];

  const onNext = () => {
    // const temp = rightRotated.shift();
    // rightRotated.push(temp);
    // setValue(rightRotated);
    const rightRotatedArray = [...value.slice(1), value[0]];
    setValue(rightRotatedArray);
  };

  const onPrevious = () => {
    // const temp = leftRotated.pop();
    // leftRotated.unshift(temp);
    // setValue(leftRotated);
    const leftRotatedArray = [
      value[value.length - 1],
      ...value.slice(0, value.length - 1),
    ];
    setValue(leftRotatedArray);
  };

  return (
    <>
      <div className="outerContainer">
        <button onClick={onPrevious} className="previousButton">
          Prev
        </button>
        {value &&
          value.map((cur, idx) => {
            return (
              <div
                style={{ backgroundColor: cur }}
                key={cur}
                className={`border border-black p-10`}
              >{`div${idx + 1}`}</div>
            );
          })}
        <button onClick={onNext} className=" nextButton">
          Next
        </button>
      </div>
      {value}
    </>
  );
}

export default App;
