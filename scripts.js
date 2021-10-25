let bar_chart = { uwu:"hi"};

let options = {
  title:"Game Sales 2021",
  titleColor:"#FFFFFF",
  fontSize: "16px",
  labels:["uwu"],
  labelColor: "#000000",
  colors: ["#000000","#F0F0F0"],
  gap: "30px",
  xAxis: "game",
  yAxis: "units sold",
  yAxisTicks: 10
};
let data = [1,2,3,4,9]


function createBars(array, {colors, gap}){

  let sortedArray = [...array].sort((a,b) => a - b)
  let largestItem = sortedArray[ sortedArray.length -1 ]

  array.forEach((item, index) => {

    $(".bar-container").add(`
      <div class="bar" style="height: ${item / largestItem * 100}%; background:${colors[index] || "black"}">
        uwu
      </div`).appendTo(".bar-container")

  })
  $(":root").css("--number-of-items", array.length - 1)
  $(":root").css("--gap", gap)


}

function createTicks(num){

  for (let i = 0; i < num ; i++){

    $(".tick-container").add("<div class='tick'></div>").appendTo(".tick-container")


  }

}

createBars(data, options)
createTicks(10)

let element = document.getElementById("root")




//data will be plotted lines

//things we need
// width = depends on how much data
// height is dependant on data
// color, labelcolor, barspacing, x and y axis, title > fontsize and color
//x-axis label, y axis ticks
