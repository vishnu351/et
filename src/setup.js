const defaultOptions = {
  //  baseURL: 'https://tslcorpsysdev.corp.tatasteel.com:8182/PWROPT/', //DEV URL
  baseURL: "https://tslcorpsysqa.tatasteel.co.in:8182/pwropt/", //Internet QA
  //  baseURL: 'https://tslcorpsys.tatasteel.co.in:8182/pwropt/', // PRD Internet URL
  // baseURL: 'http://localhost:60874/',
  method: "post",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Max-Age": 300
  }
};

export default defaultOptions;
