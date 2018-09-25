# CrowdfundingVotingDappBackend<br />

This project includes smart contract, unit test and javascript functions like below; <br />
Technology:nodejs ,web3.js,solidty, ganache-cli,mocha

contracts  => smart contract
test       => test framework mocha functions
compile.js => solidity compiler for abi and bytecode
index.js   => nodejs functions for interacting for web3js library in mocha framework

Directives (sudo chmod -R 777 folder for write modules permission if necessary)
1)npm install node-gyp
2)npm install scrypt
3)npm install web3
2)npm run test

Unit test directives:it has got 12 unit test functions for 
  => 2 startUp company for waiting investment and voting
  => 2 investor who send ethereum to contract and then vote for startup
  => you can see balance of investors after and before vote
  => investor makes invest again for vote
  => after finishing voting; you can see winner contract's address balance
 
 scenario:
 test-1 => contract deploying stage
 test-2 => first startUp gets registrated 
 test-3 => second startUp gets registrated 
 test-4 => contract balance equal to 0 at first step
 test-5 => investor1 send ethereum to contract
 test-6 => contract balance not equal to anymore
 test-7 => investor2 send ethereum to contract 
 test-7-a => show investor1 balance after investment but before vote
 test-7-b => show investor2 balance after investment but before vote
 test-8 => investor1 vote for startup1
 test-9 => investor2 vote for startup2
 test-9-a => show investor1 balance after investment after vote
 test-9-b => investor1 send ethereum again to contract for a new vote
 test-9-c => investor1 vote for startup2 = this will change winner not anymore startup1
 test-10 => finish vote
 test-11-a => show startup2 collected(must be nearly lower than 7 due to mining fee) amount which won vote
 
