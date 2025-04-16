// setOrigins.js

const handle = (allowedOrigins) => {
    return (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    };
  };
  
  module.exports = handle;
