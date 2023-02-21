<?php
 
 $id = $_GET['id'];
 $sql = $koneksi->query("update users set level='admin' where id='$id'"); 

 if ($sql) {
 
 ?>
 
 
 <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
                      <script type="text/javascript">
                            Swal.fire({
							title: 'Berhasil',
							text: "User berhasil terkonfirmasi",
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