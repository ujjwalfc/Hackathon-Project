import Web3 from "web3";
// const serverUrl = "https://dcprckkdugvp.usemoralis.com:2053/server";
// const appId = "BUZNDC2693Foup35DL8MIZV5mXpApCDoQtdQdCfx";
// Moralis.start({ serverUrl, appId });

async function login(){

        // 1. Create global userWalletAddress variable
    window.userWalletAddress = null;

    // 2. when the browser is ready
    window.onload = async (event) => {

    // 2.1 check if ethereum extension is installed
    if (window.ethereum) {

        // 3. create web3 instance
        window.web3 = new Web3(window.ethereum);

    } else {

        // 4. prompt user to install Metamask
        alert("Please install MetaMask or any Ethereum Extension Wallet");
    }

    // 5. check if user is already logged in and update the global userWalletAddress variable
    window.userWalletAddress = window.localStorage.getItem("userWalletAddress");

    // 6. show the user dashboard
    showUserDashboard();

    //window.open("dashboard.html");
    // let user = Moralis.User.current();
    //     if (!user) {
    //         user = await Moralis.Web3.authenticate();
    //     }
    //console.log("logged in user:", user);
    }

}
