let arrays=[[1,2,3],[4,5],[6]];

let flattendedArray=arrays.reduce((initialValue,item)=>initialValue.concat(item),[]);
console.log(flattendedArray)