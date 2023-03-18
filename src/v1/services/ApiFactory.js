// // import fetch from 'node-fetch';
// import { Services, getAPIUrl, configs } from './services';
// // import { createInstance } from 'stelace'
// import stelace from "./stelace";
// import { ApiURL } from './services';


// // Test environment:
// // Secret API key: seck_test_wakWA41rBTUXs1Y5oNRjeY5o
// // Publishable API key: pubk_test_HZ908JhKNeLWs16Ccl7N46Cc

// // Live environment:
// // Secret API key: seck_live_wakWA41rBTUXs1Y5oNRjeY5o
// // Publishable API key: pubk_live_HZ908JhKNeLWs16Ccl7N46Cc
// export const API = ()=>{

// }

// // export const stelaceAPI = createInstance({ apiKey: 'pubk_test_HZ908JhKNeLWs16Ccl7N46Cc' })


// export const SignupService = async(requestData, cb)=>{

//         let service = Services.SignUpService;

//         const headers = { 
//             "Content-Type": "application/json",
//             // "Authorization":configs.token
//         };
//         fetch(getAPIUrl(service), {
//             headers ,
//             method: service.method,
//             body: JSON.stringify(requestData)  
//         })
//         .then(response => response.json())
//         .then(data => {
//             cb(data);
//         });
// };
// export const ResetPasswordService = async(requestData, cb)=>{

//     let service = Services.ResetPasswordService;

//     const headers = { 
//         "Content-Type": "application/json",
//         // "Authorization":configs.token
//     };
//     fetch(getAPIUrl(service), {
//         headers ,
//         method: service.method,
//         body: JSON.stringify(requestData)  
//     })
//     .then(response => response.json())
//     .then(data => {
//         cb(data);
//     });
// };
// export const createOrganization = async(requestData, cb)=>{
//     //  await stelace.users.create(requestData,(err,org)=>{
//     //         cb(org);
//     //     });
    

//     let service = Services.OrganinsationSaveService;

//     const headers = { 
//         "Content-Type": "application/json",
//         // "Authorization":configs.token
//     };
//     fetch(getAPIUrl(service), {
//         headers ,
//         method: service.method,
//         body: JSON.stringify(requestData)  
//     })
//     .then(response => response.json())
//     .then(data => {
//         cb(data);
//     });

    
// }
// export const UpdateUserService = async(requestData, cb,errCb) =>{
//     console.log("inside update");
//     // let id  = requestData.id;
//     // delete requestData.id;
//     // delete requestData.livemode;
//     // delete requestData.createdDate;
//     // delete requestData.updatedDate;
//     // await stelace.users.update(id,requestData,(err,user)=>{
//     //     cb(user);
//     //     errCb(err);
//     // });
    

//     let service = Services.SaveNotificationConfig;

//     const headers = { 
//         "Content-Type": "application/json",
//         // "Authorization":configs.token
//     };
//     fetch(getAPIUrl(service), {
//         headers ,
//         method: service.method,
//         body: JSON.stringify(requestData)  
//     })
//     .then(response => response.json())
//     .then(data => {
//         cb(data);
//     });
// }


// export const SaveAccoutService = async(requestData, cb,errCb) =>{
//     console.log("inside update");
//     // let id  = requestData.id;
//     // delete requestData.id;
//     // delete requestData.livemode;
//     // delete requestData.createdDate;
//     // delete requestData.updatedDate;
//     // await stelace.users.update(id,requestData,(err,user)=>{
//     //     cb(user);
//     //     errCb(err);
//     // });
    

//     let service = Services.SaveAccountService;

//     const headers = { 
//         "Content-Type": "application/json",
//         // "Authorization":configs.token
//     };
//     fetch(getAPIUrl(service), {
//         headers ,
//         method: service.method,
//         body: JSON.stringify(requestData)  
//     })
//     .then(response => response.json())
//     .then(data => {
//         cb(data);
//     });
// }
// export const getUserDetail= async(id,cb)=>{
//     let service = Services.GetUserDetail;

//     const headers = { 
//         "Content-Type": "application/json",
//         // "Authorization":configs.token
//     };
//     fetch(getAPIUrl(service)+"/"+id, {
//         headers ,
//         method: service.method
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//         cb(data);
//     });
// }
// export const getUserOrgDetail = async(id,cb)=>{
//     let service = Services.GetUserAccountDetail;

//     const headers = { 
//         "Content-Type": "application/json",
//         // "Authorization":configs.token
//     };
//     fetch(getAPIUrl(service)+"/"+id, {
//         headers ,
//         method: service.method
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//         cb(data);
//     });
// }
// export const getUserNotificationConfigDetail= async(id,cb)=>{
//     let service = Services.GetNotificationConfig;

//     const headers = { 
//         "Content-Type": "application/json",
//         // "Authorization":configs.token
//     };
//     fetch(getAPIUrl(service)+"/"+id, {
//         headers ,
//         method: service.method
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//         cb(data);
//     });
// }

// export const getUserAccountDetail= async(id,cb)=>{
//     let service = Services.GetUserAccountDetail;

//     const headers = { 
//         "Content-Type": "application/json",
//         // "Authorization":configs.token
//     };
//     fetch(getAPIUrl(service)+"/"+id, {
//         headers ,
//         method: service.method
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//         cb(data);
//     });
// }
// export const LoginService =  async(requestData, cb)=>{
//     let service = Services.LoginService;

//     const headers = { 
//         "Content-Type": "application/json",
//         // "Authorization":configs.token
//     };
//     fetch(getAPIUrl(service), {
//         headers ,
//         method: service.method,
//         body: JSON.stringify(requestData)  
//     })
//     .then(response => response.json())
//     .then(data => {
//         cb(data);
//     });
// };

// export const logoutService = async(cb)=>{
//     await stelace.auth.logout({},(err,user)=>{
//         cb();
//     });
    
// }

// export const addUserOrg = async(requestData, cb)=>{

//     let url = ApiURL+"public/users/"+requestData.userId+"/organizations/"+requestData.organizationId+"/"+requestData.accountId;

//     const headers = { 
//         "Content-Type": "application/json",
//         "Authorization":configs.token
//     };
//     fetch(url, {
//         headers ,
//         method: "PUT",
//         body: JSON.stringify(requestData.roles) 
//     })
//     .then(response => response.json())
//     .then(data => {
//         cb(data);
//     });


// } 

// export const getUserOrg = async(requestData, cb)=>{

//     let url = ApiURL+"users/"+requestData.userId+"/organizations/"+requestData.organizationId;

//     const headers = { 
//         "Content-Type": "application/json",
//         "Authorization":configs.token
//     };
//     fetch(url, {
//         headers ,
//         method: "PATCH",
       
//     })
//     .then(response => response.json())
//     .then(data => {
//         cb(data);
//     });


// } 

