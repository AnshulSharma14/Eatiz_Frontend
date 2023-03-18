// export const initFbsdk = () => {
//   return new Promise(resolve => {
//     window.fbAsyncInit = function() {
//       window.FB.init({
//         appId: '364840445315067',
//         cookie: true, // enable cookies to allow the server to access the session
//         xfbml: true, // parse social plugins on this page
//         version: 'v2.8' // use graph api version 2.8
//       })
//     }(function (d, s, id) {
//       var js, fjs = d.getElementsByTagName(s)[0]
//       if (d.getElementById(id)) return
//       js = d.createElement(s); js.id = id
//       js.src = '//connect.facebook.net/en_US/all.js'
//       fjs.parentNode.insertBefore(js, fjs)
//     }(document, 'script', 'facebook-jssdk'))
//   })
// }

export function initFacebookSdk() {
  return new Promise(resolve => {
      // wait for facebook sdk to initialize before starting the vue app
      window.fbAsyncInit = function () {
          FB.init({
              appId: import.meta.env.VITE_FACEBOOK_APP_ID,
              cookie: true,
              xfbml: true,
              version: import.meta.env.VITE_FACEBOOK_API_VERSION,//'v8.0'
          });

          // auto authenticate with the api if already logged in with facebook
          FB.getLoginStatus(({ authResponse }) => {
              // if (authResponse) {
              //     accountService.apiAuthenticate(authResponse.accessToken).then(resolve);
              // } else {
                  resolve();
              // }
          });
      };

      // load facebook sdk script
      (function (d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) { return; }
          js = d.createElement(s); js.id = id;
          js.src = "https://connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));    
  });
  
}