let bar_chart = { uwu:"hi"};

let options = {
  title:"Game Sales 2021",
  titleColor:"#FFFFFF",
  fontSize: "16px",
  labels:["god of war"],
  labelColor: "#000000",
  colors: ["#0000FF","#F0F0F0"],
  gap: "30px",
  xAxis: "game",
  yAxis: "units sold",
  yAxisTicks: 10
};
let data = [1,2]

function createContainer(element){

  $(element).add(`
    <div class="title"></div>
    <div class="bar-charts-container" >
      <div class="plot-grid y-plot-line x-plot-line">
        <div class="bar-container">

        </div>
        <div class="tick-container">

        </div>
    </div>
    </div>
  `).appendTo(element)

}

function createBars(array, { colors, gap, labels }){

  let sortedArray = [...array].sort((a,b) => a - b)
  let largestItem = sortedArray[ sortedArray.length -1 ]

  array.forEach((item, index) => {

    $(".bar-container").add(`
      <div class="bar" style="height: ${item / largestItem * 100}%; background:${colors[index] || colors[0] || "black"}">
        <p>${labels[index]|| ""}</p>
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
let element = document.getElementById("root")

createContainer(element)
createBars(data, options)
createTicks(10)





//data will be plotted lines

//things we need
// width = depends on how much data
// height is dependant on data
// color, labelcolor, barspacing, x and y axis, title > fontsize and color
//x-axis label, y axis ticks
