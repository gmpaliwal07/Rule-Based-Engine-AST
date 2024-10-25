const express = require("express");
const router = express.Router();
const ruleController = require("../controllers/ruleControllers");

// Route to create a new rule
router.post("/create_rule", ruleController.createRule);

// Route to combine multiple rules
router.post("/combine_rule", ruleController.combineRules);

// Route to evaluate a rule against given data
router.post("/evaluate_rule", ruleController.evaluateRule);

module.exports = router;
