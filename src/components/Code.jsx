// import React, { useState } from "react";
// import axios from "axios";

// const Code = () => {
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");
//   const [generate, setGenerate] = useState(false);

//   const API_KEY = "AIzaSyB9glRlSnAVKojqsTYj-Rz3yWvsC6TNF2I";
//   const link = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;

//   async function fetchData(e) {
//     e.preventDefault(); // Prevent form submission
//     setGenerate(true); // Set generate state to true (for loading indicator)
//     setAnswer("Loading..."); // Show loading message

//     try {
//       const res = await axios({
//         url: link,
//         method: "post",
//         data: {
//           content: [{ parts: [{ text: question }] }],
//         },
//       });

//       // Log the entire response to inspect the structure
//       console.log("API Response:", res.data);

//       // Check if the response has the expected structure
//       if (res.data && res.data.candidates && res.data.candidates.length > 0) {
//         const resultText = res.data.candidates[0].content.parts[0].texts;
//         if (resultText) {
//           setAnswer(resultText); // Set answer if found
//         } else {
//           setAnswer("No text found in the response.");
//         }
//       } else {
//         setAnswer("No candidates found in the response.");
//       }
//     } catch (error) {
//       console.error("API Error:", error);
//       setAnswer("Something went wrong. Please check the console for details.");
//     } finally {
//       setGenerate(false); // Reset loading state
//     }
//   }

//   return (
//     <div>
//       <form onSubmit={fetchData}>
//         <p className="text-center text-bg-dark">Gemini AI Bot</p>
//         <input
//           type="text"
//           name="text"
//           placeholder="Enter your query here"
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)} // Bind input to state
//         />
//         <button type="submit" disabled={generate}>
//           {generate ? "Generating..." : "Submit"}
//         </button>
//       </form>

//       {/* Display the answer in a textarea */}
//       <textarea
//         className="text-center p-4 mt-4"
//         value={answer} // Bind textarea value to answer state
//         readOnly // Make it read-only if you don't want the user to edit
//         rows="6" // Optional: Set a fixed number of rows for the textarea
//       ></textarea>
//     </div>
//   );
// };

// export default Code;
