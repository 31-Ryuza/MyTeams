 <?php
 
 $id = $_GET['id'];
 $sql = $koneksi->query("delete from users where id = '$id'");

 if ($sql) {
 
 ?>
 
 
 <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
                      <script type="text/javascript">
                            Swal.fire({
							title: 'Berhasil',
							text: "Data berhasil di hapus",
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