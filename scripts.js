let bar_chart = { uwu:"hi"};

let options = {
  title:"Game Sales 2021",
  titleColor:"#000000",
  fontSize: "16px",
  labels:["god of war", "henlo world"],
  labelColor: "#000000",
  colors: ["#0000FF","#F0F0F0"],
  gap: "30px",
  xAxis: "game",
  yAxis: "units sold",
  yAxisTicks: 9
};
let data = [1,9,8]

//create empty basic container with the divs needed for graph, later functions will target this container

function createContainer(target){

  $(target).add(`
    <div class="bar-charts-container" id="bar-charts-container">
      <div class="y-axis-title">units sold (millions)</div>
      <div class="plot-grid y-plot-line x-plot-line">
        <div class="bar-container">

        </div>
        <div class="tick-container">

        </div>
      </div>
      <div class="rightlabel"></div>
      <div class="labels-container">
        <div class="label">God of War</div>
        <div class="label">Genshin Impact</div>
        <div class="label">Valorant</div>
      </div>
      </div>

  `).appendTo(target)

}

//targets the
function createBars(array, { colors, gap}){

  let sortedArray = [...array].sort((a,b) => a - b)
  let largestItem = sortedArray[ sortedArray.length -1 ]

  array.forEach((item, index) => {

    $(".bar-container").add(`
      <div class="bar" style="height: ${item / largestItem * 100}%; background:${colors[index] || colors[0] || "black"}">
        <p>${array[index]|| ""}</p>
      </div`).appendTo(".bar-container")

  })
  $(":root").css("--number-of-items", array.length - 1)
  $(":root").css("--gap", gap)


}

function createTicks({yAxisTicks}){

  for (let i = 0; i < yAxisTicks ; i++){



    $(".tick-container").add(`<div class='tick'><p class='tick-num'>${yAxisTicks - i}</p></div>`).appendTo(".tick-container")

  }

}



function createTitle({title, fontSize, titleColor}){

  $(`<div class="title" style="font-size: ${fontSize}; color: ${titleColor};">${title}</div>`).prependTo("#bar-charts-container")

}
let root = document.getElementById("root")

createContainer(root)
createBars(data, options)
createTicks(options)
createTitle(options)

//data will be plotted lines

//things we need
// width = depends on how much data
// height is dependant on data
// color, labelcolor, barspacing, x and y axis, title > fontsize and color
//x-axis label, y axis ticks
