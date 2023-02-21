  <div class="container-fluid">

      <!-- DataTales Example -->
      <div class="card shadow mb-4">
          <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Tambah Satuan Barang</h6>
          </div>
          <div class="card-body">
              <div class="table-responsive">
                  <div class="body">
                      <form method="POST" enctype="multipart/form-data">
                          <label for="">Nama</label>
                          <div class="form-group">
                              <div class="form-line">
                                  <input type="text" name="nama" class="form-control" />
                              </div>
                          </div>
                          <label for="">Role</label>
							 <div class="form-group">
                               <div class="form-line">
                                    <select name="role" class="form-control show-tick">
										 <option value="Fullstack">Fullstack</option>
                                         <option value="Back End">Back End</option>
                                         <option value="Front End">Front End</option>
                                         <option value="PO">PO</option>
                                         <option value="PM">PM</option>
                                         <option value="UI/UX">UI/UX</option>
                                         <option value="QA">QA</option>
                                         <option value="Internship">Internship</option>
                                    </select>
                                </div>
							</div>
                          <label for="">Kelamin</label>
							 <div class="form-group">
                               <div class="form-line">
                                    <select name="kelamin" class="form-control show-tick">
										 <option value="Laki - laki">Laki - laki</option>
                                        <option value="Perempuan">Perempuan</option>
                                    </select>
                                </div>
							</div>
                          <label for="">Gaji</label>
                          <div class="form-group">
                              <div class="form-line">
                                  <input type="text" name="gaji" class="form-control" value="Rp" />
                              </div>
                          </div>
                          <input type="submit" name="simpan" value="Simpan" class="btn btn-primary">
                      </form>
                      <?php
							
							if (isset($_POST['simpan'])) {
								$nama= $_POST['nama'];
								$role= $_POST['role'];
								$kelamin= $_POST['kelamin'];
                                $gaji= $_POST['gaji'];
								$sql = $koneksi->query("insert into karyawan (nama, role, kelamin, gaji) values('$nama', '$role', '$kelamin', '$gaji')");

                                $sql2 = $koneksi->query("select * from tbl_grafik_karyawan where role='$role'");
                                $tampil = $sql2->fetch_assoc();
                                $jumlah = $tampil['jumlah'] + 1 ;
                                $sql3 = $koneksi->query("update tbl_grafik_karyawan set jumlah='$jumlah' where role='$role'");

                                $sql4 = $koneksi->query("select * from tbl_pie_karyawan where kelamin='$kelamin'");
                                $tampil = $sql4->fetch_assoc();
                                $jumlah = $tampil['jumlah'] + 1 ;
                                $sql5 = $koneksi->query("update tbl_pie_karyawan set jumlah='$jumlah' where kelamin='$kelamin'");
								
								if ($sql && $sql3 && $sql5) {
									?>
					<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
                      <script type="text/javascript">
                            Swal.fire({
							title: 'Berhasil',
							text: "Anda berhasil menambahkan data",
							icon: 'success',
							confirmButtonColor: '#3085d6',
							confirmButtonText: 'OK'
							}).then((result) => {
							if (result.isConfirmed) {
								window.location.href = "?page=dataKaryawanAdmin";
							}
							})
                      </script>

                      <?php
								}
								}
							
							
							?>
