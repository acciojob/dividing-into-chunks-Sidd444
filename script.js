const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
  let ans=[],curr=[],sum=0;
  for(let a of arr){
	  if(sum+a<=n){
		  curr.push(a);
		  sum+=a;
	  }else{
		  ans.push(curr);
		  curr=[a];
		  sum=a;
	  }
  }
  return ans;
} 
const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr,parseInt(n))));
