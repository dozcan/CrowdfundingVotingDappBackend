const {interface, bytecode} =require('./compile.js');
const Web3 = require('web3');
const cors = require('cors');
const ganache = require('ganache-cli');
var web3 = new Web3(ganache.provider());


let accounts = [];
let contractAddress;
let contractInstance;
let accountCreate;

const deployContract = async(provider,interface,bytecode,account) =>{

    contractClone = await new provider.eth.Contract(JSON.parse(interface))
    .deploy({data:'0x' + bytecode})
    .send({
      from:account,
      gas:'1000000'});
      return contractClone;
}

const setIdea = async(contractInstance,amountNeeded,GithubLink,account)=>{
                            
      await contractInstance.methods.setIdea(amountNeeded,GithubLink).
      send({
        from:account,
        gas:'1000000'
      },function (err, result){
          if(!err){              
            console.log(result);   
            hashTransactionOfSetMethod = result;      
          } 
          else{
            hashTransactionOfSetMethod = "";
          }
      });
      return hashTransactionOfSetMethod;
};

const sendEther= async(contractInstance,account,amount)=>{
                            
  await contractInstance.methods.sendEther().
  send({
    from:account,
    value:web3.utils.toWei(amount,"ether"),
    gas:'1000000'
  },function (err, result){
      if(!err){              
        console.log(result);   
        hashTransactionOfSetMethod = result;      
      } 
      else{
        hashTransactionOfSetMethod = "";
      }
  });
  return hashTransactionOfSetMethod;
};

const getTotalBalance = async(contractInstance,account) => {
  var totalBalance = await contractInstance.methods.getTotalBalance().call({from:account});
  return totalBalance;
}

const voteStartUp = async(contractInstance,account,startupIndex)=>{
  
  await contractInstance.methods.voteStartUp(startupIndex).
  send({
    from:account,
    gas:'1000000'
  },function (err, result){
      if(!err){              
        console.log(result);   
        hashTransactionOfSetMethod = result;      
      } 
      else{
        hashTransactionOfSetMethod = "";
      }
  });
  return hashTransactionOfSetMethod;
}

const finishVote = async(contractInstance,account)=>{
  
  await contractInstance.methods.finishVote().
  send({
    from:account,
    gas:'1000000'
  },function (err, result){
      if(!err){              
        console.log(result);   
        hashTransactionOfSetMethod = result;      
      } 
      else{
        hashTransactionOfSetMethod = "";
      }
  });
  return hashTransactionOfSetMethod;
}

const winnerStartup = async(contractInstance,account) => {
  var winnerInformation = await contractInstance.methods.winnerStartup().call({from:account});
  return winnerInformation;
}

const showInvestorsBalance = async(contractInstance,account,address) => {
  var balance = await contractInstance.methods.showInvestorsBalance(address).call({from:account});
  return balance;
}

  
module.exports = {
  deployContract,
  setIdea,
  sendEther,
  getTotalBalance,
  voteStartUp,
  finishVote,
  winnerStartup,
  showInvestorsBalance
}

app.listen(6000,()=>{
  console.log(6000+" port is listening");
});
