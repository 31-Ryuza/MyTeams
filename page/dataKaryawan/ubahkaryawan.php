<?php
$id = $_GET['id'];
$sql2 = $koneksi->query("select * from karyawan where id = '$id'");
$tampil = $sql2->fetch_assoc();

$level = $tampil['level'];

?>

<div class="container-fluid">

    <!-- DataTales Example -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Ubah Satuan</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <div class="body">
                    <form method="POST" enctype="multipart/form-data">

                        <label for="">ID</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" name="id" class="form-control" id="id"
                                    value="<?php echo $tampil['id']; ?>" readonly />
                            </div>
                        </div>
                        <label for="">Nama</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" name="nama" value="<?php echo $tampil['nama']; ?>" class="form-control" />
                            </div>
                        </div>

						<label for="">Role</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" name="role" value="<?php echo $tampil['role']; ?>" class="form-control" readonly />
                            </div>
                        </div>

						<label for="">Kelamin</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" name="kelamin" value="<?php echo $tampil['kelamin']; ?>" class="form-control" readonly/>
                            </div>
                        </div>

                        <label for="">Gaji</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" name="gaji" value="<?php echo $tampil['gaji']; ?>" class="form-control" />
                            </div>
                        </div>

                        <input type="submit" name="simpan" value="Simpan" class="btn btn-primary">

                    </form>



                    <?php
							
								if (isset($_POST['simpan'])) {
		
								$id= $_POST['id'];
								$nama= $_POST['nama'];
								$role= $_POST['role'];
								$kelamin= $_POST['kelamin'];
                                $gaji= $_POST['gaji'];
								

								$sql = $koneksi->query("update karyawan set nama='$nama', role='$role', kelamin='$kelamin', gaji='$gaji' where id='$id'"); 
								if ($sql) {
									?>

							<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
							<script type="text/javascript">
									Swal.fire({
									title: 'Berhasil',
									text: "Anda berhasil update data",
									icon: 'success',
									confirmButtonColor: '#3085d6',
									confirmButtonText: 'OK'
									}).then((result) => {
									if (result.isConfirmed) {
										window.location.href = "?page=dataKaryawan";
									}
									})
							</script>

                    <?php
								}
							}
							?>
