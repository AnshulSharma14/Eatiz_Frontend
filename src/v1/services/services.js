
export const ApiURL = "https://api-server.eatiz.org/"
export const Services = {
        "Signup":{
          "path":"auth/signup/",
          "method":"POST"
        },
      
        "SignIn":{
          "path":"auth/login/",
          "method":"POST"
        },
        "ResetPassword":{
          "path":"auth/sendPasswordResetEmail/",
          "method":"POST"
        },  
        "SaveAccountService":{
          "path":"public/account/save",
          "method":"POST"
        },
        "OrganinsationSaveService":{
          "path":"public/organisation/save",
          "method":"POST"
        },
        "SaveNotificationConfig":{
          "path":"public/notification/config/save",
          "method":"POST"
        },
        "GetNotificationConfig":{
          "path":"public/notification/config",
          "method":"GET"
        },
        "GetUserDetail":{
          "path":"public/user",
          "method":"GET"
        },
        "GetUserAccountDetail":{
          "path":"user/detail/",
          "method":"GET"
        }
        
}


export const getAPIUrl = (service) =>{
    return ApiURL+service.path;

}

export const getRequestHeaders = ()=>{
   return {
    headers: {
      'Authorization': 'Bearer ' +  sessionStorage.getItem("accessToken"),
      'Content-Type': 'application/json'
    }
  }
}