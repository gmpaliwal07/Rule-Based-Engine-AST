import React from "react";
import apiService from "../services/apiService";

const EvaluateRule = () => {
  const [ruleAST, setRuleAST] = React.useState(""); 
  const [data, setData] = React.useState(""); 
  const [result, setResult] = React.useState(null); 
  const [message, setMessage] = React.useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const parsedData = JSON.parse(data);
      const response = await apiService.evaluateRule({
        ruleAST: JSON.parse(ruleAST),
        data: parsedData,
      });
      setResult(response.data.isMatch ? "Rule matches the data!" : "Rule does not match the data.");
      setMessage("");
    } catch (error) {
      console.error("Error evaluating rule:", error);
      setMessage("Failed to evaluate rule. Please check your inputs.");
      setResult(null);
    }
  };

  return (
    <div className=" mb-4">
      <h2 className="text-2xl font-bold mt-4 font-mono text-text">Evaluate Rule</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <textarea
          placeholder="Enter rule AST (in JSON format)"
          value={ruleAST}
          onChange={(e) => setRuleAST(e.target.value)}
           className = "text-xl h-14 w-1/2 rounded-xl p-4 m-4 border-2 border-[#C9D7DD] placeholder:text-text font-mono text-text bg-transparent"
          required
        />
        <textarea
          placeholder="Enter data to evaluate (in JSON format)"
          value={data}
          onChange={(e) => setData(e.target.value)}
           className = "text-xl h-14 w-1/2 rounded-xl p-4 m-4 border-2 border-text placeholder:text-text font-mono text-text bg-transparent"
          required
        />
        <button type="submit" className="bg-button text-white w-64 p-2 m-4 rounded-xl hover:scale-110 ease-in-out transition-all">
          Evaluate Rule
        </button>
      </form>
      {message && <span className="mt-4 text-red-500 font-mono text-xl">{message}</span>}
      {result && <span className="mt-4 font-mono text-text text-xl">{result}</span>}
    </div>
  );
};

export default EvaluateRule;
