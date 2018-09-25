# CrowdfundingVotingDappBackend<br />

This project includes smart contract, unit test and javascript functions like below; <br />
Technology:nodejs ,web3.js,solidty, ganache-cli,mocha <br />

contracts  => smart contract <br />
test       => test framework mocha functions<br />
compile.js => solidity compiler for abi and bytecode<br />
index.js   => nodejs functions for interacting for web3js library in mocha framework<br />

Directives (sudo chmod -R 777 folder for write modules permission if necessary)<br />
1)npm install node-gyp<br />
2)npm install scrypt<br />
3)npm install web3<br />
2)npm run test<br />

Unit test directives:it has got 12 unit test functions for <br />
  => 2 startUp company for waiting investment and voting<br />
  => 2 investor who send ethereum to contract and then vote for startup<br />
  => you can see balance of investors after and before vote<br />
  => investor makes invest again for vote<br />
  => after finishing voting; you can see winner contract's address balance<br />
 
 scenario:<br />
 test-1 => contract deploying stage<br />
 test-2 => first startUp gets registrated <br />
 test-3 => second startUp gets registrated <br />
 test-4 => contract balance equal to 0 at first step<br />
 test-5 => investor1 send ethereum to contract<br />
 test-6 => contract balance not equal to anymore<br />
 test-7 => investor2 send ethereum to contract <br />
 test-7-a => show investor1 balance after investment but before vote<br />
 test-7-b => show investor2 balance after investment but before vote<br />
 test-8 => investor1 vote for startup1<br />
 test-9 => investor2 vote for startup2<br />
 test-9-a => show investor1 balance after investment after vote<br />
 test-9-b => investor1 send ethereum again to contract for a new vote<br />
 test-9-c => investor1 vote for startup2 = this will change winner not anymore startup1<br />
 test-10 => finish vote<br />
 test-11-a => show startup2 collected(must be nearly lower than 7 due to mining fee) amount which won vote<br />
 
