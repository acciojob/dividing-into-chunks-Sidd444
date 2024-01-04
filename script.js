const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
  let ans=[],curr=[],sum=0;
  for(let a of arr){
	  if(sum+a<=n){
		  sum+=a;
		  curr.push(a);
	  }else{
		  ans.push(curr);
		  curr=[a];
		  sum=a;
	  }
  }
  if(curr.length!==0) ans.push(curr);
  return ans;
} 
const n = prompt("Enter n: "); 
alert(JSON.stringify(divide(arr,parseInt(n))));
