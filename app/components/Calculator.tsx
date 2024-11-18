// "use client";
// import React, { useState } from "react";

// const buttons = [
//   {
//     text: " AC",
//     type: "Clean",
//   },
//   {
//     text: "←",
//     type: "Delete",
//   },
//   {
//     text: " %",
//     type: "Exp",
//   },
//   {
//     text: "/",
//     type: "Exp",
//   },
//   {
//     text: "7",
//     type: "Click",
//   },
//   {
//     text: "8",
//     type: "Click",
//   },
//   {
//     text: "9",
//     type: "Click",
//   },
//   {
//     text: "*",
//     type: "Exp",
//   },
//   {
//     text: "4",
//     type: "Click",
//   },
//   {
//     text: "5",
//     type: "Click",
//   },
//   {
//     text: "6",
//     type: "Click",
//   },
//   {
//     text: "-",
//     type: "Exp",
//   },
//   {
//     text: "1",
//     type: "Click",
//   },
//   {
//     text: "2",
//     type: "Click",
//   },
//   {
//     text: "3",
//     type: "Click",
//   },
//   {
//     text: "+",
//     type: "Exp",
//   },

//   {
//     text: "0",
//     type: "Click",
//   },
//   {
//     text: ".",
//     type: "Click",
//   },
//   {
//     text: "=",
//     type: "Ans",
//   },
// ];

// export default function Calculator() {
//   const [input, setInput] = useState("");

//   const handleButtonClick= (text: string, type: string) => {
//     if (type == "Click") {
//       setInput(input + text);
//     } else if (type == "Clean") {
//       setInput("");
//     } else if (type == "Delete") {
//       setInput(input.slice(0, -1));
//     } else if (type == "Ans") {
//       setInput(eval(input).toString);
//     }
//   };

//   return (
//     <div className="max-w-sm mx-auto mt-10 p-2 bg-black  rounded-sm ">
//       <div className="m-2">
//         <input
//           type="text"
//           value={input}
//           className="block w-full p-4 text-right text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//         ></input>
//       </div>
//       <div className="grid grid-cols-4 gap-2">
//         {buttons.map((item) => (
//           <button
//             className="bg-white m-1 rounded active:bg-yellow-400"
//             key={item.text}
//             onClick={() => handleButtonClick(item.text, item.type)}
//           >
//             {item.text}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }
