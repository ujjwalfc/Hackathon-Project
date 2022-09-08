async function getTime() {
    var txt;
    if (confirm("Request Approved")) {
        txt = "Contract Status: Expired!";
     } else {
        txt = "Not Expired";
    }
    document.getElementById("responseExp").innerHTML = txt;
}
  
document.getElementById("expStatus-btn").onclick = getTime;

// const serverUrl = "https://dcprckkdugvp.usemoralis.com:2053/server";
// const appId = "BUZNDC2693Foup35DL8MIZV5mXpApCDoQtdQdCfx";
// Moralis.start({ serverUrl, appId });


async function addTime() {
    
    // user = await Moralis.authenticate({
    //     signingMessage: "Requesting Secret",
    //   })
    //     .then(function (user) {
    //       console.log("logged in user:", user);
    //       //console.log(user.get("ethAddress"));
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //       console.log("Cancel the authentication", user);
    //     })
    
    var txt;
    if (confirm("WARNING: Secret Message Retrieved")) {
        txt = "U2FsdGVkX1+DfemM2WRxFri1ar9R8dl6LOm0jtv9Ps8M2wPtZzAf6E2WC3ApAeEt";
        // https://www.browserling.com/tools/aes-decrypt
     } else {
        txt = "Error";
    }
    document.getElementById("SecretMsg").innerHTML = txt;
  }
  
  document.getElementById("rtvMsg-btn").onclick = addTime;
  
  