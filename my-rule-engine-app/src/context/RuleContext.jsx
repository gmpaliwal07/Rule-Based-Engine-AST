import React, { createContext, useContext, useState, useEffect } from "react";
import apiService from "../services/apiService";

const RuleContext = createContext();

// Custom hook to use the RuleContext
export const useRuleContext = () => {
  return useContext(RuleContext);
};

const RuleProvider = ({ children }) => {
  const [rules, setRules] = useState([]); // State to hold the list of rules
  const [loading, setLoading] = useState(true); // Loading state for fetching rules

  // Fetch rules from the API on component mount
  useEffect(() => {
    const fetchRules = async () => {
      try {
        const response = await apiService.getRules();
        setRules(response.data.rules);
      } catch (error) {
        console.error("Error fetching rules:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRules();
  }, []);

  // Function to add a new rule to the context
  const addRule = (rule) => {
    setRules((prevRules) => [...prevRules, rule]);
  };

  return (
    <RuleContext.Provider value={{ rules, loading, addRule }}>
      {children}
    </RuleContext.Provider>
  );
};

export default RuleProvider;
