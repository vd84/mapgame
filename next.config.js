module.exports = {
    publicRuntimeConfig: {
      appId: process.env.APP_ID,
      host: process.env.HOST,
      restAPIKey: process.env.REST_API_ENDPOINT,
    },
    webpackDevMiddleware: config => {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
  
      return config
    },
  };

  