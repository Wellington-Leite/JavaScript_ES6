/* Operações em vetores */
const arr = [1,2,3,4,5,6,7,8,9,10];

//map
const newArr = arr.map(function(item, index){
    return item + index;
});
console.log(newArr);

//reduce
const sum = arr.reduce(function(total, next){
    return total + next;
});
console.log(sum);

//filter
const filter = arr.filter(function(item){
    return item % 2 === 0;
});
console.log(filter);

//find
const find = arr.find(function(item){
    return item === 2;
});
console.log(find);