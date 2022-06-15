$(document).ready(function(){
  $('.dropdown-menu.dropdown-menu-dark.dropdown-menu-end.dropdown-menu-lg-start a').click(function(){
    $('#selectedGrafica').text($(this).text());
    });
});

$(document).ready(function(){
  $('.dropdown-menu.dropdown-menu-dark.w-99 a').click(function(){
    $('#selectedCripto').text($(this).text());
    });
});

function func(e) {
    if(e.target.value==e.target.getAttribute("min")){
    e.target.value="";
    }
  }
  document.getElementById("costoKW").addEventListener('click', func);
  document.getElementById("costoKW").addEventListener('keyup', function(e){
    e.target.click()})


//Gráfico

var xyValues = [
  { x: 50, y: 7 },
  { x: 60, y: 8 },
  { x: 70, y: 8 },
  { x: 80, y: 9 },
  { x: 90, y: 9 },
  { x: 100, y: 9 },
  { x: 110, y: 10 },
  { x: 120, y: 11 },
  { x: 130, y: 14 },
  { x: 140, y: 14 },
  { x: 150, y: 15 },
]
const ctx = document.getElementById("myChart").getContext("2d")

const myChart = new Chart(ctx, {
  type: "scatter",
  data: {
    datasets: [
      {
        pointRadius: 4,
        pointBackgroundColor: "rgb(0,0,255)",
        data: xyValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      xAxes: [{ ticks: { min: 40, max: 160 } }],
      yAxes: [{ ticks: { min: 6, max: 16 } }],
    },
  },
})

