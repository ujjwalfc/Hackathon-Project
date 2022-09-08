const serverUrl = "https://dcprckkdugvp.usemoralis.com:2053/server";
const appId = "BUZNDC2693Foup35DL8MIZV5mXpApCDoQtdQdCfx";
Moralis.start({ serverUrl, appId });


/* Authentication code */
async function create() {
    console.log("Login Function");

    // let user = Moralis.User.current();
    // if (!user) {
      user = await Moralis.authenticate({
        signingMessage: "Creating vault",
      })
        .then(function (user) {
          console.log("logged in user:", user);
          //console.log(user.get("ethAddress"));
          window.location.href = "dashboard1.html";
        })
        .catch(function (error) {
          console.log(error);
          console.log("Cancel the authentication", user);
        })
}







// async function create() {

//   window.location.href = "dashboard1.html"
//   }
  
  document.getElementById("Submit-btn").onclick = create;