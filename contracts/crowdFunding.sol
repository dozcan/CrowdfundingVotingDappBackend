pragma solidity ^0.4.17;

contract crowdFunding {

   struct idea{

     uint256 amountNeed;
     string GitHublink;
     address addressIdea;
   }

   uint256 winnerIndex;   // after the vote winner of startUp
   address winnerAddress; // after the vote winnder address of startUp
   idea[] ideaList;
   mapping(address => uint256) investors;      // after every voting operation this storage will be zero for investor balance;
   mapping(address => uint256) investorsTotal; // this will store all investment that investor makes
   address[] investorAddress;
   mapping(address => uint256) voteIdeaList;
   uint totalBalance; // contract balance;

   function setIdea(uint256 _amountNeed,string _GitHublink){

      ideaList.push(idea(_amountNeed,_GitHublink,msg.sender));
   }

   function getTotalBalance()constant returns(uint){
   
      return totalBalance;
   }

   function sendEther()public payable{

      investors[msg.sender] = msg.value;   
      investorsTotal[msg.sender] =  investorsTotal[msg.sender] + msg.value; 
      investorAddress.push(msg.sender);
      totalBalance = totalBalance +  msg.value;
   }
   
   function showInvestorsBalance(address _investorAddres)returns(uint256){

      return investors[_investorAddres];
   }

   function voteStartUp(uint256 _ideaIndex){
      // at the below we are making vote with investment weight then we will add all weight at the final stage
      voteIdeaList[ideaList[_ideaIndex].addressIdea] = voteIdeaList[ideaList[_ideaIndex].addressIdea] + investors[msg.sender]/100; 
      investors[msg.sender] = 0;  // local investment must be zero because he finished his vote;
   }

   function finishVote()public payable{

      uint256 max=0;
      uint256 amountNeeded=0;
      for(uint256 i=0;i<ideaList.length;i++){
            if(voteIdeaList[ideaList[i].addressIdea] > max){
                max = voteIdeaList[ideaList[i].addressIdea];
                winnerIndex = i;
                winnerAddress = ideaList[i].addressIdea;
                amountNeeded  = ideaList[i].amountNeed;
            }
     }  

     winnerAddress.transfer(amountNeeded);   // winner takes it all:) but just it deserved amount(namely amountNeed);
      
     //refund remaining balance to investors according to the weight of remaining balance in the contract;   
     for(uint256 k=0;k<investorAddress.length;k++){
          investorAddress[k].transfer((investorsTotal[investorAddress[k]]/totalBalance) * this.balance);
     }
     
   }

   function winnerStartup()public view returns(uint256 ){
      uint256 max=0;
      uint256 amountNeeded=0;
      for(uint256 i=0;i<ideaList.length;i++){
            if(voteIdeaList[ideaList[i].addressIdea] > max){
                max = voteIdeaList[ideaList[i].addressIdea];
                winnerIndex = i;
                winnerAddress = ideaList[i].addressIdea;
                amountNeeded  = ideaList[i].amountNeed;
            }
     }  

      return winnerAddress.balance;
   }

}
