                <!-- Begin Page Content -->
                <div class="container-fluid">

                    <!-- Page Heading -->
                    <h1 class="h3 mb-0 text-gray-800" style="margin-bottom: 3rem;">Dashboard</h1>
                    <!-- Illustrations -->
                    <div class="card shadow mb-4" style="margin-top: 1rem;">
                        <div class="card-body">
                            <div class="text-center">
                                <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 25rem;"
                                    src="img/dashboardnew.png" alt="...">
                            </div>
                            <p>Selamat datang <span><?= $data['nama'];?></span> di MyTeams, disini anda login menggunakan akun yang memiliki level admin, admin hanya memiliki wewenang untuk melihat data visualisasi yang ada di web ini maka dari itu manfaatkan kepercayaan kami kepada anda, jangan sia sia kan kepercayaan kami kepada anda, Terimakasih... :)</p>
                        </div>
                    </div>

                     <!-- Project Card Example -->
                     <!-- <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Ideal Teams</h6>
                                </div>
                                <div class="card-body">
                                    <h4 class="small font-weight-bold">Front End <span
                                            class="float-right">50%</span></h4>
                                    <div class="progress mb-4">
                                        <div class="progress-bar bg-danger" role="progressbar" style="width: 50%"
                                            aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 class="small font-weight-bold">Back End <span
                                            class="float-right">70%</span></h4>
                                    <div class="progress mb-4">
                                        <div class="progress-bar bg-primary" role="progressbar" style="width: 70%"
                                            aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div> -->

                    <!-- Project Card Example -->
                    
                    <div class="row">
                        <div class="col-lg">
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Target Keuntungan</h6>
                                </div>
                                <div class="card-body">
                                    <div id="line_chart" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
                <!-- /.container-fluid -->

            <!-- End of Main Content -->

            <!-- Menambahkan library Highcharts -->
<script src="grafik/highcharts/code/highcharts.js"></script>
<script src="grafik/highcharts/code/modules/exporting.js"></script>
<script src="grafik/highcharts/code/modules/export-data.js"></script>

<!-- Script untuk membuat grafik batang -->
<script type="text/javascript">

Highcharts.chart('line_chart', {
    title: {
        text:""
    },
    yAxis: {
        title: {
            text: 'Target keuntungan'
        }
    },
    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2020'
        }
    },
    credits: false,
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },
    series: [{
        name: 'Keuntungan',
        data: [43934, 48656, 65165, 81827, 112143, 142383,
            171533, 165174, 155157, 161454, 154610]
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
</script>

         