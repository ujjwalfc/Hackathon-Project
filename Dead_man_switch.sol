pragma solidity ^0.4.2;

library DMSLibrary {
  struct data {
    address trustees;
    string data; //originally it stores data using uint32 format, but we changed it to string. Though we can build a converter in solidity, it uses more gas.
    bool isValue;
    uint256 expiration_time;
   }
}

contract DMSContract {

  using DMSLibrary for DMSLibrary.data;
  mapping (address => DMSLibrary.data) DMS_data;

  function CreateDMSContract(address trustees, string data) public returns(bool) {
    if( DMS_data[msg.sender].isValue) revert("already exist"); // already exists. This checks whether the sender have previously created a contract accord. to address, revert if true, proceeds if false


    DMS_data[msg.sender].isValue = true;
    DMS_data[msg.sender].trustees = trustees; // address of trustees 
    DMS_data[msg.sender].data = data; //secret
    DMS_data[msg.sender].expiration_time = now+20 ; // now + 3 days (testing ver. = 20 sec)
  }

  function kick() public //PoL button
  {
    if( !DMS_data[msg.sender].isValue) revert("does not exist"); // does not exist. This verifies whether contract exists by checking user's address, false = revert, true = proceed
    
    DMS_data[msg.sender].expiration_time = now + 20 seconds; //PoL button, press to expiration of 3 days (testing ver. 20 secs)
  }


  function getTimeLeft() public view returns(uint256 return_time) { //sender checks time left to expiration
    if( !DMS_data[msg.sender].isValue) revert("does not exist"); // does not exist
    require (now<=DMS_data[msg.sender].expiration_time, "time is up");
    return (DMS_data[msg.sender].expiration_time-now)   ;  //returns how much time left
  }

  function getExpirationTimeFromAddress(address sender) public view returns(uint256) { //trustee/anyone with the sender's address can check the expiration time of the contract by inputing the sender's address
    if( !DMS_data[sender].isValue) revert("does not exist"); // does not exist  //check whether contract exists using the input above

    return DMS_data[sender].expiration_time;   //returns expire timestamp, however it can only display in epoch seconds, have to switch to human readable format using web3/metamask to convert
  }

  function getExpirationTime() public view returns(uint256) { //checks expire date by sender themselves
    if( !DMS_data[msg.sender].isValue) revert("does not exist"); // does not exist

    return DMS_data[msg.sender].expiration_time;  //returns expire timestamp in epoch seconds, further info refer to line 44
  }

  function isAddressExpired(address sender) public view returns (bool) { //for trustee/sender to check whether the contract is expired by inputting the sender's address
    if( !DMS_data[sender].isValue) revert("does not exist"); // does not exist 

    return now >= DMS_data[sender].expiration_time; //returns boolean value, true if expired and vice versa
    
  }

  function getDataFromAddress(address sender) public view returns (string) { //get data(secret) with the sender's address
   
    if( !DMS_data[sender].isValue) revert("does not exist"); // 1st, check whether contract exists by sender's address. If true, proceed. If false, revert. 

    if ((msg.sender != DMS_data[sender].trustees) || !isAddressExpired(sender)) revert("you can't get that"); 

    //This function requires two conditions to be true
    //1. The address belongs to the assigned trustee
    //2. Whether the contract has expired
    //The operation will be reverted even though one of the conditions is true.

    return DMS_data[sender].data; //The data will be released if both conditions are true.
  }

}