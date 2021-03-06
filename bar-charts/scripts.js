
//create flex container with the divs needed for graph, later functions will target this container
function createContainer(target){

  $(target).add(`
  <div class="bar-charts-container" id="bar-charts-container">
  <div class="y-axis-title"></div>
  <div class="plot-grid y-plot-line x-plot-line">
  <div class="bar-container">

  </div>
  <div class="tick-container">

  </div>
  </div>
  <div class="rightlabel"></div>
  <div class="labels-container">

  </div>
  </div>

  `).appendTo(target)
}

//targets the createdContainer and creates x and y axis
function createGraph(array, {colors, gap}){

  let sortedArray = [...array].sort((a,b) => a - b)
  let largestItem = sortedArray[ sortedArray.length -1 ]

  array.forEach((item, index) => {

    $(".bar-container").add(`
    <div class="bar" style="height: ${item / largestItem * 100}%; background:${colors[index] || colors[0] || "black"}">
    <p>${array[index]|| ""}</p>
    </div`).appendTo(".bar-container")

  })

  //selects root variables in the css file and modifies the bar width based on how many items are being displayed

  $(":root").css("--number-of-items", array.length - 1)
  $(":root").css("--gap", gap)
}

//creates ticks inside the y axis container
function createTicks({yAxisTicks}){

  for (let i = 0; i < yAxisTicks ; i++){

    $(".tick-container").add(`<div class='tick'><p class='tick-num'></p></div>`).appendTo(".tick-container")

  }

}

//creates a title with passed in arguements
function createTitle({title, fontSize, titleColor}){

  $(`<div class="title" style="font-size: ${fontSize}; color: ${titleColor};">${title}</div>`).prependTo("#bar-charts-container")

}

// creates labels under the x axis based on passed in arguements
function createLabels(data, {labels, labelColor}){

  for (let index = 0; index < data.length; index++){

    $(".label-container").add(`<div class="label" style="color:${labelColor[index] || '#000000'};">${labels[index] || ""}</div>`).appendTo(".labels-container")

  }
  $(":root").css("--number-of-items", labels.length -1)
}

//inserts text into the right label div
function labelRight({yAxis}){

  $(".y-axis-title").html(`${yAxis}`)

}

export default function drawBarChart(data,options,element){

  //appends the stylesheet used for the graph
  $("head").append(`<link rel="stylesheet" href="./bar-charts/style.css">`)

  createContainer(element)
  createGraph(data, options)
  createLabels(data, options)
  createTicks(options)
  createTitle(options)
  labelRight(options)
}
