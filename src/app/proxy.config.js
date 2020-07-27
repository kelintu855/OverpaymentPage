const PROXY_CONFIG = [
    {
      context: [
        "/api",
        "/auth",
        "/oauth"
      ],
      target: "http://overpaymentapi.local/api/overpayment",
      secure: false
    }
  ];
  
  module.exports = PROXY_CONFIG;