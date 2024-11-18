"use client";
import { log } from "console";
import { split } from "postcss/lib/list";
import React, { useState } from "react";

var fstvalue = "";
var secvalue = "";
var thdvalue = 0;
var operator = "";

export default function Calculator() {
  const [input, setInput] = useState("");


  const handleClick = (value: any) => {
    setInput(input + value);
  };

  const handleAns = () => {
    secvalue = input;
    switch (operator) {
      case "+":
        var splitsecvalue = secvalue.split("+");
        thdvalue = Number(fstvalue) + Number(splitsecvalue[1]);
        setInput(thdvalue.toString());
        break;
        
      case "-":
        var splitsecvalue = secvalue.split("-");
        thdvalue = Number(fstvalue) - Number(splitsecvalue[1]);
        setInput(thdvalue.toString());
        break;

      case "*":
        var splitsecvalue = secvalue.split("*");
        thdvalue = Number(fstvalue) * Number(splitsecvalue[1]);
        setInput(thdvalue.toString());
        break;

      case "/":
        var splitsecvalue = secvalue.split("/");
        if(Number(splitsecvalue[1]) == 0){
          setInput("Cannot divide by 0");
          break;
        }
        thdvalue = Number(fstvalue) / Number(splitsecvalue[1]);
        setInput(thdvalue.toString());
        break;

      case "%":
        var splitsecvalue = secvalue.split("%");
        thdvalue = (Number(fstvalue)/100) * Number(splitsecvalue[1]);
        setInput(thdvalue.toString());
        break;

      default:
      setInput("invalid input")
        break;
    }
  };

  const handleExp = (op: string) => {
    fstvalue = input;
    operator = op;
    switch (op) {
      case "+":
        setInput(fstvalue + "+");
        break;

      case "-":
        setInput(fstvalue + "-");
        break;

      case "*":
        setInput(fstvalue + "*");
        break;

      case "/":
        setInput(fstvalue + "/");
        break;

      case "%":
        setInput(fstvalue + "%");
        break;

      default:
        break;
    }
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBS = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className=" max-w-sm mx-auto mt-10 p-2 bg-black rounded-sm ">
      <div className="m-2">
        <input
          type="text"
          value={input}
          className="block w-full p-4 text-right text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></input>
      </div>
      <div className="grid grid-cols-4 gap-2">

        <button
          className="bg-white m-1 rounded active:bg-yellow-400"
          onClick={handleClear}
        >
          AC
        </button>
        <button
          className="bg-white m-1 active:bg-yellow-400"
          onClick={handleBS}
        >
          ←
        </button>
        <button
          className="bg-white m-1 rounded active:bg-yellow-400"
          onClick={() => handleExp("%")}
        >
          %
        </button>
        <button
          className="bg-white m-1 rounded active:bg-yellow-400"
          onClick={() => handleExp("/")}
        >
          /
        </button>
        <button
          className="bg-white m-1 rounded active:bg-yellow-400"
          onClick={() => handleClick("7")}
        >
          7
        </button>
        <button
          className="bg-white m-1 rounded active:bg-yellow-400"
          onClick={() => handleClick("8")}
        >
          8
        </button>
        <button
          className="bg-white m-1 rounded active:bg-yellow-400"
          onClick={() => handleClick("9")}
        >
          9
        </button>
        <button
          className="bg-white m-1 rounded active:bg-yellow-400"
          onClick={() => handleExp("*")}
        >
          X
        </button>
        <button
          className="bg-white m-1 rounded active:bg-yellow-400"
          onClick={() => handleClick("4")}
        >
          4
        </button>
        <button
          className="bg-white m-1 rounded active:bg-yellow-400"
          onClick={() => handleClick("5")}
        >
          5
        </button>
        <button
          className="bg-white m-1 rounded active:bg-yellow-400"
          onClick={() => handleClick("6")}
        >
          6
        </button>
        <button
          className="bg-white m-1 rounded active:bg-yellow-400"
          onClick={() => handleExp("-")}
        >
          -
        </button>
        <button
          className="bg-white m-1 rounded active:bg-yellow-400"
          onClick={() => handleClick("1")}
        >
          1
        </button>
        <button
          className="bg-white m-1 rounded active:bg-yellow-400"
          onClick={() => handleClick("2")}
        >
          2
        </button>
        <button
          className="bg-white m-1 rounded active:bg-yellow-400"
          onClick={() => handleClick("3")}
        >
          3
        </button>
        <button
          className="bg-white m-1 rounded active:bg-yellow-400"
          onClick={() => handleExp("+")}
        >
          +
        </button>
        <button
          className="bg-white m-1 rounded col-span-2 active:bg-yellow-400"
          onClick={() => handleClick("0")}
        >
          0
        </button>
        <button
          className="bg-white m-1 rounded active:bg-yellow-400"
          onClick={() => handleClick(".")}
        >
          .
        </button>
        <button
          className="bg-white m-1 rounded active:bg-yellow-400"
          onClick={handleAns}
        >
          =
        </button>
      </div>
    </div>
  );
}
