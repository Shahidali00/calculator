"use client";
import React, { useState } from "react";

let fstvalue = "";
let secvalue = "";
let thdvalue = 0;
let operator = "";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value: string) => {
    setInput(input + value);
  };

  const handleAns = () => {
    secvalue = input;
    const [_, secondOperand] = secvalue.split(operator);
    const firstValue = Number(fstvalue);
    const secondValue = Number(secondOperand);

    switch (operator) {
      case "+":
        thdvalue = firstValue + secondValue;
        break;
      case "-":
        thdvalue = firstValue - secondValue;
        break;
      case "*":
        thdvalue = firstValue * secondValue;
        break;
      case "/":
        if (secondValue === 0) {
          setInput("Cannot divide by 0");
          return;
        }
        thdvalue = firstValue / secondValue;
        break;
      case "%":
        thdvalue = (firstValue / 100) * secondValue;
        break;
      default:
        setInput("Invalid input");
        return;
    }

    setInput(thdvalue.toString());
  };

  const handleExp = (op: string) => {
    fstvalue = input;
    operator = op;
    setInput(fstvalue + op);
  };

  const handleClear = () => {
    setInput("");
    fstvalue = "";
    secvalue = "";
    thdvalue = 0;
    operator = "";
  };

  const handleBS = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-2 bg-black rounded-sm">
      <div className="m-2">
        <input
          type="text"
          value={input}
          readOnly
          className="block w-full p-4 text-right text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {/* Buttons */}
        <button className="bg-white m-1 rounded active:bg-yellow-400" onClick={handleClear}>
          AC
        </button>
        <button className="bg-white m-1 active:bg-yellow-400" onClick={handleBS}>
          ←
        </button>
        <button className="bg-white m-1 rounded active:bg-yellow-400" onClick={() => handleExp("%")}>
          %
        </button>
        <button className="bg-white m-1 rounded active:bg-yellow-400" onClick={() => handleExp("/")}>
          /
        </button>
        {["7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+"].map((btn) => (
          <button
            key={btn}
            className="bg-white m-1 rounded active:bg-yellow-400"
            onClick={() => (["*", "-", "+", "/"].includes(btn) ? handleExp(btn) : handleClick(btn))}
          >
            {btn}
          </button>
        ))}
        <button className="bg-white m-1 rounded col-span-2 active:bg-yellow-400" onClick={() => handleClick("0")}>
          0
        </button>
        <button className="bg-white m-1 rounded active:bg-yellow-400" onClick={() => handleClick(".")}>
          .
        </button>
        <button className="bg-white m-1 rounded active:bg-yellow-400" onClick={handleAns}>
          =
        </button>
      </div>
    </div>
  );
}
