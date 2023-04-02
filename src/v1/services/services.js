
export const ApiURL = "https://api-server.eatiz.org/" //"http:localhost:2023/"//
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
        },
        "UpdateUserProfile":{
          "path":"user/update/",
          "method":"PUT"
        },
        "UpdateUserPassword":{
          "path":"user/update/password/",
          "method":"PUT"
        },
        "UpdateProfileImage":{
          "path":"user/update/image/",
          "method":"PUT"
        },
        "GetAssetList":{
          "path":"asset/search",
          "method":"POST"
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