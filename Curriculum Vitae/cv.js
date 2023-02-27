google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['porcentaje', '%'],
  ['Italiano',95],
  ['Frances',90],
  ['Alemán',80],
  ['Inglés',97],
]);

var options = {
  title:'Lo que manejo de cada idioma'
};

var chart = new google.visualization.BarChart(document.getElementById('myChart'));
  chart.draw(data, options);
}


google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart2);
function drawChart2() {
    var data = google.visualization.arrayToDataTable([
      ['porcentaje', 'Tiempo invertido en estos campos'],
      ['Empresas Privadas Nacionales',54.8],
      ['Empresas publicas Nacionales',48.6],
      ['Empresas privadas externas',44.4],
      ['Empresas dedicadas a la administracion de Alimentos',23.9],
      ['Juzgados',14.5]
    ]);
    
    var options = {
      title:'Tiempo invertido en estos campos',
      is3D:true
    };
    
    var chart = new google.visualization.PieChart(document.getElementById('myChart2'));
      chart.draw(data, options);
    }