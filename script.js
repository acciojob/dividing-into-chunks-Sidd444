const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
  const ans=[];
  let sub=[];
  for(const a of arr){
	  if(sub.reduce((sum,ele)=>sum+el,0)+a<=n) sub.push(a);
	  else{
		  ans.push([...sub]);
		  sub=[a];
	  }
  }
  ans.push([...sub]);
  return ans+sub;
} 
const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr,parseInt(n))));
