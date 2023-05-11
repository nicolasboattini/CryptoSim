//Gráfico
var datos1 = [];
var datos2 = [];
//Utilizamos valores del eje y genéricos
for (var m=0;m<240;m++){
  datos2[m]= NaN;
  datos1[m]= NaN
}

//Creamos el label(valores del eje x)
var labels= []
for (i=0;i<240;i++){
  labels[i]=i-120+' dias';
}

const ctx = document.getElementById("myChart").getContext("2d")
//Creamos el chart, indicando su configuración
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: labels,
    datasets: [{
      label: 'Precio',
      data: datos1,
      fill: true,
      borderColor: 'rgb(87, 35, 100)',
      tension: 0.1
    },{
      label: 'Precio',
      data: datos2,
      fill: true,
      borderColor: 'rgb(138, 54, 210)',
      tension: 0.1
    }],
  },
  options: {
    responsive:true,
    legend: { display: false },
    scales: {

      xAxes: [{ ticks: { maxTicksLimit: 8.1 } }],
      yAxes: [{ ticks: { min: 0 } }],
    },
  },
});

//---------------------------------------------
//Esta función cambia los valores del gráfico
function addData(datos) {
  var data1=[];var data2 = [];
  for (var k=0;k<120;k++){
    data1[k]=datos[k];
    data2[k]= NaN;
  }
  for (var m=120;m<240;m++){
    data1[m]=NaN;
    data2[m]= datos[m];
  }
  myChart.data.datasets[0].data = data1;
  myChart.data.datasets[1].data = data2;
  myChart.update();
}

module.exports = {
  addData
}

