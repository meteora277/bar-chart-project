import drawBarChart from "./bar-charts/scripts.js"

$( document ).ready(drawBarChart([1,10,8,7,8,2,3,4,6],{
  title:"Game Sales 2021",
  titleColor:"#000000",
  fontSize: "16px",
  labels:["god of war", "henlo world", "Genshin Impact"],
  labelColor: ["#FF0000"],
  colors: ["#37db67","#cfa3dc", "#5322bd","#9d4579", "#07e0fb", "#3c5fd9", "#71405d", "#e87ad9", "#23edb2"],
  gap: "1%",
  yAxis: "units sold (millions)",
  yAxisTicks: 10
}, document.getElementById("root")))
