/* import moralis */
//const Moralis = require("moralis/node");

const serverUrl = "https://dcprckkdugvp.usemoralis.com:2053/server";
const appId = "BUZNDC2693Foup35DL8MIZV5mXpApCDoQtdQdCfx";
Moralis.start({ serverUrl, appId });


/* Authentication code */
async function login() {
    console.log("Login Function");

    // let user = Moralis.User.current();
    // if (!user) {
      user = await Moralis.authenticate({
        signingMessage: "Logging into DMS",
      })
        .then(function (user) {
          console.log("logged in user:", user);
          //console.log(user.get("ethAddress"));
          window.location.href = "dashboard.html";
        })
        .catch(function (error) {
          console.log(error);
          console.log("Cancel the authentication", user);
        })
    
}

  document.getElementById("btn-login").onclick = login;













  
// =======
// // import Web3 from "web3";
// // const serverUrl = "https://dcprckkdugvp.usemoralis.com:2053/server";
// // const appId = "BUZNDC2693Foup35DL8MIZV5mXpApCDoQtdQdCfx";
// // Moralis.start({ serverUrl, appId });

// async function login(){
// window.onload=function(){
//         // 1. Create global userWalletAddress variable
// window.userWalletAddress = null;

// // 2. when the browser is ready
// window.onload = async (event) => {

// // 2.1 check if ethereum extension is installed
// if (window.ethereum) {

//     // 3. create web3 instance
//     window.web3 = new Web3(window.ethereum);

// } else {

//     // 4. prompt user to install Metamask
//     alert("Please install MetaMask or any Ethereum Extension Wallet");
// }

// // 5. check if user is already logged in and update the global userWalletAddress variable
// window.userWalletAddress = window.localStorage.getItem("userWalletAddress");

// // 6. show the user dashboard
// // UserDashboard();

// //     //window.open("dashboard.html");
// //     // let user = Moralis.User.current();
// //     //     if (!user) {
// //     //         user = await Moralis.Web3.authenticate();
// //     //     }
// //     //console.log("logged in user:", user);
// // };

// // // }

// // // 1. Web3 login function
// // const loginWithEth = async () => {
// //     // 1.1 check if there is global window.web3 instance
// //     if (window.web3) {
// //       try {
// //         // 2. get the user's ethereum account - prompts metamask to login
// //         const selectedAccount = await window.ethereum
// //           .request({
// //             method: "eth_requestAccounts",
// //           })
// //           .then((accounts) => accounts[0])
// //           .catch(() => {
// //             // 2.1 if the user cancels the login prompt
// //             throw Error("Please select an account");
// //           });
  
// //         // 3. set the global userWalletAddress variable to selected account
// //         window.userWalletAddress = selectedAccount;
  
// //         // 4. store the user's wallet address in local storage
// //         window.localStorage.setItem("userWalletAddress", selectedAccount);
  
// //         // 5. show the user dashboard
// //         UserDashboard();
  
// //       } catch (error) {
// //         alert(error);
// //       }
// //     } else {
// //       alert("wallet not found");
// //     }
// //   };
  
// //   // 6. when the user clicks the login button run the loginWithEth function
// // document.getElementById("login-btn").addEventListener("click", loginWithEth);


// // function to show the user dashboard
// // const UserDashboard = async () => {

// //     // if the user is not logged in - userWalletAddress is null
// //     if (!window.userWalletAddress) {
  
// //       // change the page title
// //       document.title = "Web3 Login";
  
// //       // show the login section
// //       document.querySelector(".login-section").style.display = "flex";
  
// //       // hide the user dashboard section
// //       document.querySelector(".dashboard-section").style.display = "none";
  
// //       // return from the function
// //       return false;
// //     }
  
// //     // change the page title
// //     document.title = "Web3 Dashboard 🤝";
  
//     // hide the login section
//     // document.querySelector(".login-section").style.display = "none";
  
//     // // show the dashboard section
//     // document.querySelector(".dashboard-section").style.display = "flex";
  
//     // show the user's wallet address
//     // showUserWalletAddress();
  
//     // get the user's wallet balance
//     // getWalletBalance();
// //   };
// }

