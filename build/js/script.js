
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    loop: true,
 
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
  });




window.onload= function(){

  last_result([
    {num:40,text:'Occupancy',color:'#009457'},
    {num:20, text:'Assortment', color:'#e81002'},
    {num:20, text:'SSD', color:'#f79c1f'},
    {num:20, text:'Not Achieved', color:'#e3e2e4'}
  ]);

  
  bast_result([
    {num:20,text:'Occupancy',color:'#009457'},
    {num:20, text:'Assortment', color:'#e81002'},
    {num:20, text:'SSD', color:'#f79c1f'},
    {num:40, text:'Not Achieved', color:'#e3e2e4'}
  ]);
 
}


function last_result(label_data = []){
  
  if (label_data.length > 0) {

    var data_dataset_data = [];
    var data_labels = [];

    var content = '';

    label_data.forEach(element => {
        data_dataset_data.push(element.num)
        content += '<div class="chart_info_color_box"><div class="chart_color_box" style="background:'+element.color+'"></div><p class="chart_info">'+element.text+'['+element.num+'/100]</p></div>';
        data_labels.push('Result');
    });

    $('#last_result .chart_info_wrapper').html(content);

    var data = {
      labels: data_labels,
      datasets: [
        {
          data:data_dataset_data ,
          backgroundColor: [
            "#009457",
            "#F79C1F",           
             "#E81002"
          ],
        }]
    };
    var promisedDeliveryChart = new Chart(document.getElementById('myChart'), {
      type: 'doughnut',
      data: data,
      options: {
         responsive: true,
        legend: {
          display: false,
        },
        cutoutPercentage: 80,
      }
    });
    Chart.pluginService.register({
      beforeDraw: function(chart) {
        var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;
        ctx.restore();
        var fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";
        var text = "75%",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    });
  } else {
    $('#last_result .chart_wrapper').html('<p class="last_result_info">1 out of 3 Images of assets is left</p>')
  }
}

function bast_result(label_data = []){
  
  if (label_data.length > 0) {

    var data_dataset_data = [];
    var data_labels = [];

    var content = '';

    label_data.forEach(element => {
        data_dataset_data.push(element.num)
        content += '<div class="chart_info_color_box"><div class="chart_color_box" style="background:'+element.color+'"></div><p class="chart_info">'+element.text+'['+element.num+'/100]</p></div>';
        data_labels.push('Result');
    });

    $('#best_result .chart_info_wrapper').html(content);

    var data = {
      labels: data_labels,
      datasets: [
        {
          data:data_dataset_data ,
          backgroundColor: [
            "#009457",
            "#F79C1F",           
             "#E81002"
          ],
        }]
    };
    var promisedDeliveryChart = new Chart(document.getElementById('myChart2'), {
      type: 'doughnut',
      data: data,
      options: {
         responsive: true,
        legend: {
          display: false,
        },
        cutoutPercentage: 80,
      }
    });
    Chart.pluginService.register({
      beforeDraw: function(chart) {
        var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;
        ctx.restore();
        var fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";
        var text = "75%",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    });
  } else {
    $('#best_result .chart_wrapper').html('<p class="last_result_info">1 out of 3 Images of assets is left</p>')
  }
}