# CrowdfundingVotingDappBackend

This project includes smart contract, unit test and javascript functions like below; 
Technology:nodejs ,web3.js,solidty, ganache-cli,mocha

contracts  => smart contract
test       => test framework mocha functions
compile.js => solidity compiler for abi and bytecode
index.js   => nodejs functions for interacting for web3js library in mocha framework

Directives
1)npm install scrypt
2)npm run test

Unit test directives:it has got 12 unit test functions for 
  => 2 startUp company for waiting investment and voting
  => 2 investor who send ethereum to contract and then vote for startup
  => you can see balance of investors after and before vote
  => investor makes invest again for vote
  => after finishing voting; you can see winner contract's address balance
  
