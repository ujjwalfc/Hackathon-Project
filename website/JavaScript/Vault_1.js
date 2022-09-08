async function getTime() {
    var txt;
    if (confirm("Request Approved")) {
        txt = "16 sec";
     } else {
        txt = "Contract Expired";
    }
    document.getElementById("responseExp").innerHTML = txt;
}
  
document.getElementById("timeTillExp-btn").onclick = getTime;

const serverUrl = "https://dcprckkdugvp.usemoralis.com:2053/server";
const appId = "BUZNDC2693Foup35DL8MIZV5mXpApCDoQtdQdCfx";
Moralis.start({ serverUrl, appId });


async function addTime() {
    
    user = await Moralis.authenticate({
        signingMessage: "Providing Proof of Life",
      })
        .then(function (user) {
          console.log("logged in user:", user);
          //console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
          console.log("Cancel the authentication", user);
        })
    
    var txt;
    if (confirm("Increased contract expiry by 30 secs")) {
        txt = "Proof of Life provided";
     } else {
        txt = "Contract Expired";
    }
    document.getElementById("responsePoL").innerHTML = txt;
  }
  
  document.getElementById("PoL-btn").onclick = addTime;
  
  