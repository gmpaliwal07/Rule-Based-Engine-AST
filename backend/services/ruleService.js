const { Node, evaluateNode } = require("./astService");

const parseCondition = (condition) => {
 
  const regex = /(\w+)\s*([!=><]+)\s*(['"]?[\w\s]+['"]?)/;
  const match = condition.match(regex);

  if (match) {
    return new Node("operand", null, null, {
      attribute: match[1],
      operator: match[2],
      value: match[3].replace(/['"]/g, ""), 
    });
  }
  return null;
};

const create_rule = (rule_string) => {
  const operators = [];
  const operands = [];
  let currentCondition = "";
  let i = 0;


  while (i < rule_string.length) {
    const char = rule_string[i];

    if (char === "(") {
  
      let balance = 1;
      let start = i + 1;
      while (balance > 0) {
        i++;
        if (rule_string[i] === "(") balance++;
        if (rule_string[i] === ")") balance--;
      }
      currentCondition = rule_string.slice(start, i);
      operands.push(create_rule(currentCondition.trim())); 
    } else if (char === "A" || char === "O") {
    
      if (currentCondition) {
        operands.push(parseCondition(currentCondition.trim()));
        currentCondition = "";
      }
      operators.push(char === "A" ? "AND" : "OR");
    } else if (char !== " ") {
      currentCondition += char; 
    }
    i++;
  }

  if (currentCondition) {
    operands.push(parseCondition(currentCondition.trim()));
  }

  let root = null;
  for (let j = 0; j < operators.length; j++) {
    const operatorNode = new Node("operator", operands[j], operands[j + 1], operators[j]);
    root = root ? new Node("operator", root, operatorNode, operators[j]) : operatorNode;
    j++; 
  }

  return root;
};

const combine_rules = (rules) => {
  const ruleNodes = rules.map(rule => create_rule(rule));
  let combinedAST = ruleNodes[0];

  for (let i = 1; i < ruleNodes.length; i++) {
    const currentRuleNode = ruleNodes[i];

    combinedAST = new Node("operator", combinedAST, currentRuleNode, "OR");
  }

  return combinedAST;
};

function evaluate_rule(ruleAST, data) {
  return evaluateNode(ruleAST, data);
}

module.exports = { create_rule, combine_rules, evaluate_rule };
