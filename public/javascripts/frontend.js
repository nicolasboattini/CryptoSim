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


    var xyValues = [89,24,65,45,NaN,NaN];
    var xyValues2 = [NaN,NaN,NaN,45,24,46];
    var labels= []
    for (i=0;i<6;i++){
      labels[i]=i-3+' dias';
    }
    const ctx = document.getElementById("myChart").getContext("2d")
    
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        datasets: [
          {
            pointRadius: 4,
            pointBackgroundColor: "rgb(0,0,255)",
            data: xyValues,
          },
        ],
        labels: labels,
        datasets: [{
          label: 'Precio Pasado',
          data: xyValues,
          fill: true,
          borderColor: 'rgb(255, 35, 1)',
          tension: 0.1
        },{
          label: 'Precio Futuro',
          data: xyValues2,
          fill: true,
          borderColor: 'rgb(1, 35, 1)',
          tension: 0.1
        }],
      },
      options: {
        responsive:true,
        legend: { display: false },
        scales: {
          xAxes: [{ ticks: { min: 40, max: 160 } }],
          yAxes: [{ ticks: { min: 6, max: 16 } }],
          xAxes: [{ ticks: { min: -10, max: 120 } }],
          yAxes: [{ ticks: { min: 0, max: 90 } }],
        },
      },
    });