let array = ['a','b','c'];

console.log(array);

array.push('d');

console.log(array);
//배열 접근
console.log(array[1])


//in java
//private String [] StringArray = new String[6];
//private ArrayList<String> arrayListString = new ArrayList<String>;


for(let i =0; i < array.length; i++){
    console.log(array[i])
}
//가장 기본적인 반복문의 표현법
console.log("------------------------")

for(element of array){
    console.log(element);
}
//for ...of의 사용법
console.log("------------------------")
array.map(() => {
    console.log(element);
})
//array.map(function(){})
console.log("------------------------")

