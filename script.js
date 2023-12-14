const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
  const ans=[];
  let sub=[];
  sub.push(arr[0]);
  for(let i=1;i<arr.length;i++){
	  let sum=0;
	  for(let j=0;j<sub.length;j++) sum+=sub[j];
	  if(sum+arr[i]>n){
		  ans.push(sub);
		  sub=[arr[i]];
	  }else sub.push(arr[i]);
  }
  ans.push(sub);
  return ans;
}
const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
