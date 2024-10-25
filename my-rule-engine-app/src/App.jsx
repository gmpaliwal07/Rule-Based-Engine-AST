import RuleForm from "./components/RuleForm";
import EvaluateRule from "./components/EvaluateRule";
import CombineRules from "./components/combineRule";

const App = () => {
  return (
    <div className="min-h-screen w-screen bg-primary p-6"> 
      <h1 className="text-5xl font-mono font-bolder text-text">Rule Engine Application</h1>
      <RuleForm />
      <CombineRules />
      <EvaluateRule />
    </div>
  );
};

export default App;
