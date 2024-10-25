import React  from "react";
import apiService from "../services/apiService";

const RuleForm = () => {
  const [ruleString, setRuleString] = React.useState(""); 
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiService.createRule({ rule_string: ruleString });
      setMessage(`Rule created successfully! Rule AST: ${JSON.stringify(response.data.ruleAST)}`);
      setRuleString(""); 
    } catch (error) {
      console.error("Error creating rule:", error);
      setMessage("Failed to create rule. Please try again.");
    }
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold mt-4 font-mono text-text">Create Rule</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
        className = "text-xl h-14 w-1/2 rounded-xl p-4 m-4 border-2 border-[#C9D7DD] font-mono text-text bg-transparent placeholder:text-text"
          placeholder="Enter rule string (e.g., (age > 30 AND department = 'Sales'))"
          value={ruleString}
          onChange={(e) => setRuleString(e.target.value)}
        
          required
        />
        <button type="submit" className="bg-button text-white w-64 p-2 m-4 rounded-xl hover:scale-110 ease-in-out transition-all">
          Create Rule
        </button>
      </form>
      {message && <span className="mt-4 font-mono text-text text-xl">{message}</span>}
    </div>
  );
};

export default RuleForm;
