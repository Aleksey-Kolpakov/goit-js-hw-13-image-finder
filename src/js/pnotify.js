import { alert,error, defaultModules } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import "../../node_modules/@pnotify/core/dist/PNotify.css";
import  "../../node_modules/@pnotify/core/dist/BrightTheme.css";
import { defaults } from '@pnotify/core';
defaults.delay=2000;
defaults.maxTextHeight=null;
defaults.width= "200px";
defaults.addclass= "pnotify-font";
console.log(alert);
const errorMessage=function (){error({
    text: "Мы ничего не нашли"
  });
};
export default errorMessage;