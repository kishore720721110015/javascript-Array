// 1.Array creation and initialization

let arr = [1, 2, 3, 4, 5, 6]
console.log("after creation of array: "+arr);

// 16.new array with given length
let arr13=[];
let num=6;
for(let i=0;i<num;i++)
{
    arr13[i]=prompt("Enter the number");
}
console.log("after initialization of array: "+arr13)

// 2.Add elements in array
let arr1=[1,2,3,4,5,6]
arr1.push(7);
console.log("push operation: "+arr1);
arr1.unshift(0);
console.log("unshift operation: "+arr1);
arr1.shift(0);
console.log("shift operation: "+arr1);
arr1.pop();
console.log("pop operation: "+arr1);

//3. Array searching

// 3.1 indexof
let arr2=[1,2,3,4,5,6,7,8]
console.log("indexof method: "+arr2.indexOf(5));
// 3.2 find()
let arr3=[1,2,3,4,5,6,7,8]
console.log("find method: "+arr3.find((x)=>x==5));
// 3.3 includes
let arr4=[1,2,3,4,5,6,7,8]
console.log("includes method: "+arr4.includes(4));

// 4.Array filter
let arr5=[1,2,3,4,5,6,7,8]
function check(arr5){
    return arr5%5==0;
}
console.log("filter method: "+arr5.filter(check));

// 5.Array sorting

let arr6=[8,7,6,4,5,2,3]
console.log("sort method: "+arr6.sort());

// 5.1 Array reverse
let arr7=[8,7,6,4,5,2,3]
console.log("reverse method: "+arr7.reverse());

// 5.Map
let arr8=[8,7,6,4,5,2,3]
console.log("map method: "+arr8.map((x)=>x+1));

// 7. Array join
let arr9=[8,7,6,4,5,2,3]
console.log("join method: "+arr9.join("-"));
// 7.1 Array spliting
let arr10="8-7-6-4-5-2-3";
console.log("split method: "+arr10.split("-"));

// 10. Array maximum
let arr11=[5,4,8,7,9,5,3,6]
arr11.sort();
console.log("maximum method: "+arr11[arr11.length-1]);
// 10.1 Array minimum
let arr12=[5,4,8,7,9,5,3,6]
arr12.sort();
console.log("minimum method: "+arr12[0]);

// 14.Array merging
let arr14=[5,4,8,7,9,5,3,6]
let arr15=[1,2,3,4,5,6,7,8]
console.log("merge method: "+arr14.concat(arr15));












