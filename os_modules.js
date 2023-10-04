const os = require("os");

//info about user
const user = os.userInfo();
console.log(user);

//motodo retorna el uptime del sistema en sgundos
console.log(`The system up time is ${os.uptime()}`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
