
const { create_rule, combine_rules, evaluate_rule } = require("../services/ruleService");
const Rule = require("../models/ruleModel");

exports.createRule = async(req, res) => {
  try {
    const { rule_string } = req.body; 
    const ruleAST = create_rule(rule_string); 
    const newRule = new Rule({
      ruleString  : rule_string,
      ruleAST     : ruleAST, 
    }) 
    await newRule.save();
    res.status(201).json({ message: "Rule created successfully", ruleAST }); 
  } catch (error) {
    console.error('Error creating rule:', error);
    res.status(500).json({ error: error.message });
  }
};

exports.combineRules = async (req, res) => {
  try {
    const { rules } = req.body;
    const combinedRule = combine_rules(rules);

    const newCombinedRule = new Rule({
      ruleString: rules.join(" AND "), 
      ruleAST: combinedRule, 
    });
    await newCombinedRule.save();

    res.status(200).json({ message: "Rules combined successfully", combinedRule });
  } catch (error) {
    console.error('Error combining rules:', error);
    res.status(500).json({ error: error.message });
  }
};

exports.evaluateRule = (req, res) => {
  try {
    const { ruleAST, data } = req.body;
    const isMatch = evaluate_rule(ruleAST, data);
    
    res.status(200).json({ message: "Rule evaluated successfully", isMatch });
  } catch (error) {
    console.error('Error evaluating rule:', error);
    res.status(500).json({ error: error.message || "An unexpected error occurred" });
  }
};