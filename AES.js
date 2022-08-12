//<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>

// function encrypt() {
//     var encrypted = CryptoJS.AES.encrypt(
//       document.getElementById("text").value,
//       document.getElementById("password").value
//     ); // automatively add salt or initiallization vector in password that why encrypted value change everytime
//     document.getElementById("EncryptedValue").innerHTML = encrypted;
//     document.getElementById("decrypted").innerHTML = "";
//   }

async function foo() {
  console.log ("Hello")
  window.open("dashboard.html");

  // var encrypted = CryptoJS.AES.encrypt(
  //   document.getElementById("EncryptMsg").value,
  //   document.getElementById("DecryptPasscode").value
  // ); // automatively add salt or initiallization vector in password that why encrypted value change everytime
  // document.getElementById("EncryptedValue").innerHTML = encrypted;
  // // document.getElementById("decrypted").innerHTML = "";
  // alert("Submit button clicked!");
  // return true;
 }



// function decrypt() {
//     var decrypted = CryptoJS.AES.decrypt(
//       document.getElementById("EncryptedValue").innerHTML,
//       document.getElementById("password").value
//     ).toString(CryptoJS.enc.Utf8);
//     document.getElementById("decrypted").innerHTML = decrypted;
//     document.getElementById("EncryptedValue").innerHTML = "";
//   }