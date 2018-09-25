# CrowdfundingVotingDappBackend<br />

This project includes smart contract, unit test and javascript functions like below; <br />
Technology:nodejs ,web3.js,solidty, ganache-cli,mocha <br />

contracts  => smart contract <br />
test       => test framework mocha functions<br />
compile.js => solidity compiler for abi and bytecode<br />
index.js   => nodejs functions for interacting for web3js library in mocha framework<br />

Directives <br />

1)sudo chmod -R 777 CrowdfundingVotingDappBackend<br />
2)npm install node-gyp <br />
3)sudo chmod -R 777 CrowdfundingVotingDappBackend<br />
4)npm install scrypt<br />
5)npm install web3<br />
6)npm run test<br />

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
 
 TEST RESULTS </br>
 
 6000 port is listening
  contract unit test
100000000000000000000
100000000000000000000
100000000000000000000
100000000000000000000
100000000000000000000
    ✓ accounts balance list
(node:4857) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 data listeners added. Use emitter.setMaxListeners() to increase limit
    ✓ test-1 => contract deploying stage (125ms)
100000000000000000000
0xe745ff704e923c96972b33e34ec10f8b52d41640a7531151779f55fc3a9f2333
    ✓ test-2 => first startUp gets registrated  (169ms)
100000000000000000000
0x54e6a80a6c626f435c95c80564d2a37a1782cdbcd23ce8ec5b33c9bed4b3cec2
    ✓ test-3 => second startUp gets registrated  (178ms)
    ✓ test-4 => contract balance equal to 0 at first step (65ms)
0x68a9400d09d1687cd4fcdc07db2b3c6604f68ae69853cb201ebe2d6595146b5b
    ✓ test-5 => investor1 send ethereum to contract  (181ms)
    ✓ test-6 => contract balance not equal to anymore (38ms)
0xcd939ba75efef347846e0a28e2d22d40420e01c95ce37b4ba53a935e377de266
    ✓ test-7 => investor2 send ethereum to contract  (172ms)
    ✓ test-7-a => show investor1 balance after investment but before vote (79ms)
    ✓ test-7-b => show investor2 balance after investment but before vote (39ms)
0x01edcf95c120f18b760a721f7a4333ea93ddaa8efc14f9e3ec8d74c3e58083ac
    ✓ test-8 => investor1 vote for startup1 (114ms)
0xd90efc81eeae1a747eede886ba3d42ddbb1a4f1055d58c14c13fc4be7e4ec49a
    ✓ test-9 => investor2 vote for startup2 (161ms)
    ✓ test-9-a => show investor1 balance after investment after vote (60ms)
0xcdc791584d557c0582bbff6ec41f6b9f199f0d901eb7ffadf58c1c1e4aaea070
    ✓ test-9-b => investor1 send ethereum again to contract for a new vote (171ms)
0xb14a80cac66fe0af667839655db92e1f86a2762866338c26d517b58d4e2fbb4f
    ✓ test-9-c => investor1 vote for startup2 = this will change winner not anymore startup1 (125ms)
0x923a9148934bd532a8438eecf5acc98475d9fc6a1855350ed63a4076f27f4262
    ✓ test-10 => finish vote (243ms)
    ✓ test-11-a => show startup2 collected(MUST BE 7) amount which won vote (169ms)


  17 passing (2s)


 
 
