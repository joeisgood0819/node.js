// import { sayMyName, sayMyCountry } from "./boy.mjs";

// sayMyName();
// sayMyCountry();
//上面是直接命名導出，聚合導出，重新命名匯出 的使用方式

// import boy from "./boy.mjs";
// boy.sayMyName();
// boy.sayMyCountry();
//上面是預設導出的使用方式

import sayMyName, { sayMyCountry } from "./boy.mjs";
sayMyName(); //預設導出
sayMyCountry(); //直接導出
//上面是混合導出的使用
