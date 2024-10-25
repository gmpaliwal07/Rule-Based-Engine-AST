class Node {
  constructor(type, left = null, right = null, value = null) {
      this.type = type; 
      this.left = left; 
      this.right = right; 
      this.value = value; 
  }
}


const create_rule = (rule_string) => {
  
  const ast = parseRuleString(rule_string);
  return ast;
};


const combine_rules = (rules) => {
  const combinedAST = rules.reduce((acc, rule) => {
      const ruleAST = create_rule(rule);
      return combineASTs(acc, ruleAST); 
  }, null);
  return combinedAST;
};


const evaluate_rule = (ruleAST, data) => {
  return evaluateNode(ruleAST, data); 
};


const parseRuleString = (rule_string) => {

  return new Node('operand', { attribute: 'example', operator: '===', value: 'value' });
};


const combineASTs = (ast1, ast2) => {

  return new Node('operator', 'AND', ast1, ast2);
};


const evaluateNode = (node, userData) => {
  if (node.type === "operand") {
      const { attribute, operator, value } = node.value;
      const userValue = userData[attribute];

      switch (operator) {
          case ">": return userValue > value;
          case "<": return userValue < value;
          case "==": return userValue == value;
          case "!=": return userValue != value;
      
          default: return false;
      }
  } else if (node.type === "operator") {
      if (node.left && node.right) {
          if (node.value === "AND") return evaluateNode(node.left, userData) && evaluateNode(node.right, userData);
          if (node.value === "OR") return evaluateNode(node.left, userData) || evaluateNode(node.right, userData);
      }
  }
  return false;
};

module.exports = {
  evaluateNode,
  create_rule,
  combine_rules,
  evaluate_rule,
  Node 
};
