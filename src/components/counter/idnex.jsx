import { useEffect, useRef, useState } from "react";

// useLayoutEffect
// custom hook
export default function Counter(props) {
  console.log("MOUNTE");
  const [timer, setTimer] = useState(180);
  const { count = 0, increaseCount, decreaseCount } = props;

  const inputRef = useRef(null);

  useEffect(() => {
    const timerId = setTimeout(() => {
      // 180
      setTimer((prev) => prev - 1); // 179
      console.log("SET INTERVAL", timer); // 180
    }, 1000);

    return () => {
      clearInterval(timerId);
      console.log("CLEAN UP");
    };
  }, [timer]);

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-4xl font-bold">Counter: {count}</h1>
      <h1 className="text-4xl font-bold">Timer: {timer}</h1>

      <div className="flex items-center justify-center space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            const inputValue = inputRef.current.value;
            increaseCount(parseInt(inputValue));
          }}
        >
          Increment
        </button>

        <input
          ref={inputRef}
          type="number"
          id="input"
          className="px-4 py-2 rounded text-white"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />

        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => {
            const inputValue = inputRef.current.value;
            decreaseCount(parseInt(inputValue));
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
