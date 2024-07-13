import { useRef, useState } from "react";

export default function Counter(props) {
  const { count = 0, increaseCount, decreaseCount } = props;
  const inputRef = useRef(null);

  return (
    <div className="min-h-screen w-[100vw] flex items-center justify-center flex-col">
      <h1 className="text-4xl font-bold">Counter: {count}</h1>
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
