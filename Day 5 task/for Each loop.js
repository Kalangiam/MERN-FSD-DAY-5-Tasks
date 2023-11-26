//for of loop to iterate from JSON array
var id = [{"name": "kalangiam", "degree":"BE"}];
var foreachloop = function(item,index){
    var result = index + ":" + item;
    console.log(result);

}
id.forEach(foreachloop);
