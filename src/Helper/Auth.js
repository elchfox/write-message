import Account from "../modules/Account";

class Auth {
 /* Get users By limit 50 */
 async signin(username,password) {
  let res = await Account.SignIn({username,password})
  return res
 }
 async setLocal(data) {
  localStorage.setItem("userId", data.user._id);
  localStorage.setItem("accessToken", data.token);
  localStorage.setItem("username", data.user.username);
  localStorage.setItem("experationDate", data.exp + Date.now() + "");
  global.userId = data.user._id 
  global.accessToken = data.token 
  global.username = data.user.username 
 }


 async getLocal() {
  global.userId =  await localStorage.getItem("userId");
  global.accessToken =  await localStorage.getItem("accessToken");
  global.username =  await localStorage.getItem("username");
  let experationDate = await localStorage.getItem("experationDate");
  let dateNow = Date.now();

   if(parseInt(experationDate) > dateNow && global.accessToken !== null){
     return true
   }else{
     return false
   }
 }
}

export default new Auth();