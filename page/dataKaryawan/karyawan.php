<!-- Begin Page Content -->
<div class="container-fluid">

    <!-- Page Heading -->
    <h1 class="h3 mb-0 text-gray-800" style="margin-bottom: 3rem;">Data Karyawan</h1>

    <!-- DataTales Example -->
    <div class="card shadow mb-4" style="margin-top: 1rem;">
        <div class="card-header py-3">
            <a href="?page=dataKaryawan&aksi=tambahkaryawan" class="btn btn-primary">Tambah Karyawan</a>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Role</th>
                            <th>Kelamin</th>
                            <th>Gaji</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>


                    <tbody>
                        <?php 
									
									$no = 1;
									$sql = $koneksi->query("select * from karyawan");
									while ($data = $sql->fetch_assoc()) {
										
									?>

                        <tr>
                            <td><?php echo $no++; ?></td>
                            <td><?php echo $data['nama']; ?></td>
                            <td><?php echo $data['role']; ?></td>
                            <td><?php echo $data['kelamin']; ?></td>
                            <td>Rp <?php echo number_format($data['gaji'],2,',','.'); ?></td>
                            <td>
                                <a href="?page=dataKaryawan&aksi=ubahkaryawan&id=<?php echo $data['id']; ?>"
                                    class="btn btn-success">Ubah</a>
                                <a href="?page=dataKaryawan&aksi=hapuskaryawan&id=<?php echo $data['id']; ?>"
                                    class="btn btn-danger">Hapus</a>
                            </td>
                        </tr>
                        <?php }?>

                    </tbody>
                </table>
                </tbody>
                </table>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Perbadingan Role</h6>
                </div>
                <div class="card-body">
                    <div id="column_chart" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
                </div>
            </div>
        </div>
        <div class="col-lg">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Jenis Kelamin</h6>
                </div>
                <div class="card-body">
                    <div id="donat_chart" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
                </div>
            </div>
        </div>
    </div>

</div>
<!-- Menambahkan library Highcharts -->
<script src="grafik/highcharts/code/highcharts.js"></script>
<script src="grafik/highcharts/code/modules/exporting.js"></script>
<script src="grafik/highcharts/code/modules/export-data.js"></script>
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script>
    function alertKonfirmasi($id) {
        <?php
 
        // $id = $_GET['id'];
        $sql = $koneksi->query("delete from karyawan where id = '$id'");

        if ($sql) {
        ?>
            Swal.fire(
                "Yeyy", "Komentar berhasil dikirim", "success"
            );          
        <?php
        }
 
 ?>
        }
</script>
<script>
    <?php
$result = $koneksi->query("select * from tbl_grafik_karyawan ORDER BY jumlah DESC");
$resultPie = $koneksi->query("select * from tbl_pie_karyawan ORDER BY jumlah DESC");
$data = array();
$name = array();
$dataPie = array();
$kelamin = array();
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = array($row['role'], (int)$row['jumlah']);
    $name[] = array($row['role']);
}
while ($row = mysqli_fetch_assoc($resultPie)) {
    $dataPie[] = array($row['kelamin'], (int)$row['jumlah']);
    $kelamin[] = array($row['kelamin']);
}

?>
var chartData = <?php echo json_encode($data); ?>;
var chartName = <?php echo json_encode($name); ?>;
var pieData = <?php echo json_encode($dataPie); ?>;
var kelaminData = <?php echo json_encode($kelamin); ?>;
    Highcharts.chart('column_chart', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        xAxis: {
            categories: chartName
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Jumlah'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr>' +
                '<td style="padding:0"><b>{point.y} Orang</b></td></tr>',
            footerFormat: '</table>',
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
        name: "Role",
        colorByPoint: true,
        data: chartData
    }]
    });

    Highcharts.chart('donat_chart', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            useHTML: true,
            text: `<div class="text-center"><div style="color:#8B9AA8; font-size: 12px; margin-bottom: -0.5em;">Total</div></br><div style="color:#8B9AA8;">Karyawan</div></div>`,
            verticalAlign: 'middle',
            align: 'center',
            y: 20
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                distance: -50,
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 2,
                },
                dataLabels: {
                    enabled: true,
                }
            }
        },
        credits: false,
        loading: {
            buffer: true,
            flag: true,
        },
        series: [{
            name: 'Jumlah',
            innerSize: '60%',
            colorByPoint: true,
            data: pieData
        }]
    });
</script>
