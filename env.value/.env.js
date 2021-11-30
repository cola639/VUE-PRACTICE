if (process.env.NODE_ENV === "development") {
  //开发环境
  ENV_CONFIG = require(".env.dev.js");
} else {
  //生产环境
  ENV_CONFIG = require(".env.prod.js");
}

//给环境变量process.uniEnv赋值
if (ENV_CONFIG) {
  process.ENV = {};
  for (let key in ENV_CONFIG) {
    process.ENV[key] = ENV_CONFIG[key];
  }
}
