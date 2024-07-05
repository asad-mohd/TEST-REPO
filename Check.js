import data from "../TEST-REPO/Submodule-repo/code.js"

function Con() {
  const value= data.fun
  const obj= data.obj
  console.log(value);
  console.log(obj);
}
Con();


function Con1() {
  console.log("hello i am main repo second func");
}
Con1();
