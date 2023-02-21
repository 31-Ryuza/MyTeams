<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
 <?php
 
 $id = $_GET['id'];
 $sql4 = $koneksi->query("select * from karyawan where id = '$id'");
 $tampil = $sql4->fetch_assoc();
 $role = $tampil['role'];
 $kelamin = $tampil['kelamin'];

 $sql = $koneksi->query("delete from karyawan where id = '$id'");

 $sql2 = $koneksi->query("select * from tbl_grafik_karyawan where role='$role'");
 $tampil = $sql2->fetch_assoc();
 $jumlah = $tampil['jumlah'] - 1 ;
 $sql3 = $koneksi->query("update tbl_grafik_karyawan set jumlah='$jumlah' where role='$role'");

 $sql4 = $koneksi->query("select * from tbl_pie_karyawan where kelamin='$kelamin'");
 $tampil = $sql4->fetch_assoc();
 $jumlah = $tampil['jumlah'] - 1 ;
 $sql5 = $koneksi->query("update tbl_pie_karyawan set jumlah='$jumlah' where kelamin='$kelamin'");

 if ($sql && $sql3 && $sql5) {
 
 ?>
	<script type="text/javascript">
	  Swal.fire({
		title: 'Berhasil',
		text: "Anda berhasil menghapus data",
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
 
 ?>