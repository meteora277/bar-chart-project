let bar_chart = { uwu:"hi"};

let options = {
  title:"Game Sales 2021",
  titleColor:"#FFFFFF",
  fontSize: "16px",
  labels:["uwu"],
  labelColor: "#000000",
  colors: ["#FFFFFF","#F0F0F0"],
  gap: "10px",
  xAxis: "game",
  yAxis: "units sold",
  yAxisTicks: 10
};
let data = [1,2,3,4,9]


function createBars(array){

  let sortedArray = array.sort((a,b) => a - b)
  let largestItem = sortedArray[ sortedArray.length -1 ]
  array.forEach((item) => {

    $(".bar-container").add(`<div class='bar' style="height: ${item / largestItem * 100}%">uwu</div`).appendTo(".bar-container")

  })

}
createBars(data)

let element = document.getElementById("root")




//data will be plotted lines

//things we need
// width = depends on how much data
// height is dependant on data
// color, labelcolor, barspacing, x and y axis, title > fontsize and color
//x-axis label, y axis ticks
