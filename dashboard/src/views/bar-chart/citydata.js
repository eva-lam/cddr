var parseData = d3.timeparse();
d3.csv("citydata.csv")
    .row(function(d){
        return{date:ParseDate(d.date),price:Number(d.price)};
    })
    .get(function(error,data){
    
    var height = 400; 
    var width = 600; 

    console.log(data); 
})