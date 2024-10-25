import React from "react";
import apiService from "../services/apiService";

const CombineRules = () => {
  const [rules, setRules] = React.useState(""); // Input for combining rules
  const [combinedAST, setCombinedAST] = React.useState(null); // To store the combined AST
  const [message, setMessage] = React.useState(""); // Feedback message after combining rules

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiService.combineRules({ rules: rules.split(',') });
      setCombinedAST(response.data.combinedRule);
      setMessage("Rules combined successfully!");
      setRules(""); // Clear input after submission
    } catch (error) {
      console.error("Error combining rules:", error);
      setMessage("Failed to combine rules. Please try again.");
    }
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold mt-4 font-mono text-text">Combine Rules</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          placeholder="Enter rule strings separated by commas (e.g., rule1, rule2)"
          value={rules}
          onChange={(e) => setRules(e.target.value)}
          className = "text-xl h-14 w-1/2 rounded-xl p-4 m-4 border-2  placeholder:text-text border-[#C9D7DD] font-mono text-text bg-transparent"
          required
        />
        <button type="submit" className="bg-button text-white w-64 p-2 m-4 rounded-xl hover:scale-110 ease-in-out transition-all">
          Combine Rules
        </button>
      </form>
      {message && <span className="mt-4 font-mono text-text text-xl">{message}</span>}
      {combinedAST && (
        <div className="font-mono text-text text-xl mt-4">
          <h3>Combined AST:</h3>
          <pre>{JSON.stringify(combinedAST, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CombineRules;
