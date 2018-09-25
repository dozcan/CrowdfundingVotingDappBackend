const assert = require('assert'); 
const Web3   = require('web3');
const ganache = require('ganache-cli');
const web3Provider   = new Web3(ganache.provider());
const index = require('../index.js');
const {bytecode,interface} = require('../compile.js');

let accounts;      
let account        
let deployContract; 
let balanceStartup1;
let balanceStartup2;

beforeEach(async()=>{

    accounts = await new web3Provider.eth.getAccounts();

});

describe('contract unit test',()=>{
   
   it('accounts balance list',async() => {

          console.log(await web3Provider.eth.getBalance(accounts[0]));
          console.log(await web3Provider.eth.getBalance(accounts[1]));
          console.log(await web3Provider.eth.getBalance(accounts[2]));
          console.log(await web3Provider.eth.getBalance(accounts[3]));
          console.log(await web3Provider.eth.getBalance(accounts[4]));
   });

   it('test-1 => contract deploying stage',async() =>{
        deployContract = await index.deployContract(web3Provider,interface,bytecode,accounts[0]);
        assert.ok(deployContract.options.address);
   });

   it('test-2 => first startUp gets registrated ',async()=>{
        balanceStartup1 =await web3Provider.eth.getBalance(accounts[1]);
        console.log(balanceStartup1);
        var hash = await index.setIdea(deployContract,"5000000000000000000","http://github.com/startupCompany1",accounts[1]); 
        assert.notEqual(hash,"");
   });
   
   it('test-3 => second startUp gets registrated ',async()=>{
        balanceStartup2 =await web3Provider.eth.getBalance(accounts[2]);
        console.log(balanceStartup2);
        var hash = await index.setIdea(deployContract,"7000000000000000000","http://github.com/startupCompany2",accounts[2]); 
        assert.notEqual(hash,"");
    });

    it('test-4 => contract balance equal to 0 at first step',async()=>{
        var totalBalanceofContractBefore = await index.getTotalBalance(deployContract,accounts[3]);
        assert.equal(totalBalanceofContractBefore,0);
    });

    it('test-5 => investor1 send ethereum to contract ',async()=>{
         var totalBalanceofContractBefore = await index.getTotalBalance(deployContract,accounts[3]);
         await index.sendEther(deployContract,accounts[3],"3");
         var totalBalanceofContractAfter = await index.getTotalBalance(deployContract,accounts[3]);
         assert.notEqual(totalBalanceofContractBefore,totalBalanceofContractAfter);
    });

    it('test-6 => contract balance not equal to anymore',async()=>{
        var totalBalanceofContractBefore = await index.getTotalBalance(deployContract,accounts[3]);
        assert.notEqual(totalBalanceofContractBefore,0);
    });

    it('test-7 => investor2 send ethereum to contract ',async()=>{
        var totalBalanceofContractBefore = await index.getTotalBalance(deployContract,accounts[4]);
        await index.sendEther(deployContract,accounts[4],"2");
        var totalBalanceofContractAfter = await index.getTotalBalance(deployContract,accounts[4]);
        assert.notEqual(totalBalanceofContractBefore,totalBalanceofContractAfter);
 
     });

     it('test-7-a => show investor1 balance after investment but before vote',async()=>{
        var balance = await index.showInvestorsBalance(deployContract,accounts[0],accounts[3]);
        assert.equal(Web3.utils.fromWei(balance),3);
     });

     it('test-7-b => show investor2 balance after investment but before vote',async()=>{
        var balance = await index.showInvestorsBalance(deployContract,accounts[0],accounts[4]);
        assert.equal(Web3.utils.fromWei(balance),2);
     });
     

     it('test-8 => investor1 vote for startup1',async()=>{
        var hash = await index.voteStartUp(deployContract,accounts[3],0);
        assert.notEqual(hash,"");
     });

     it('test-9 => investor2 vote for startup2',async()=>{
        var hash = await index.voteStartUp(deployContract,accounts[4],1);
        assert.notEqual(hash,"");
     }); 

     it('test-9-a => show investor1 balance after investment after vote',async()=>{
        var balance = await index.showInvestorsBalance(deployContract,accounts[0],accounts[3]);
        assert.equal(Web3.utils.fromWei(balance),0);
     });

     it('test-9-b => investor1 send ethereum again to contract for a new vote',async()=>{
        var totalBalanceofContractBefore = await index.getTotalBalance(deployContract,accounts[3]);
        await index.sendEther(deployContract,accounts[3],"7");
        var totalBalanceofContractAfter = await index.getTotalBalance(deployContract,accounts[3]);
        assert.notEqual(totalBalanceofContractBefore,totalBalanceofContractAfter);
     });

     it('test-9-c => investor1 vote for startup2 = this will change winner not anymore startup1',async()=>{
        var hash = await index.voteStartUp(deployContract,accounts[3],1);
        assert.notEqual(hash,"");
     });

     it('test-10 => finish vote',async() =>{
        var hash = await index.finishVote(deployContract,accounts[0]);
        assert.notEqual(hash,"");
     });

     it('test-11-a => show startup2 collected(MUST BE 7) amount which won vote',async() =>{
        var winnerInformation = await index.winnerStartup(deployContract,accounts[0]);
        assert.ok(parseInt(Web3.utils.fromWei(winnerInformation)) - parseInt(Web3.utils.fromWei(balanceStartup2)) < 7 );
     });
});
