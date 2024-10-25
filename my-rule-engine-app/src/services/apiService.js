import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:5000/api/rules",
});

const getRules = async () => {
  const response = await api.get("/"); 
  return response.data; 
};



const createRule = async (data) => {
  return axios.post("http://localhost:5000/api/rules/create_rule", data);
};

const combineRules = async (data) => {
  return axios.post("http://localhost:5000/api/rules/combine_rule", data);
};

const evaluateRule = async (data) => {
  return axios.post("http://localhost:5000/api/rules/evaluate_rule", data);
};


const apiService = {
  createRule,
  getRules,
  combineRules,
  evaluateRule,
};

export default apiService;
