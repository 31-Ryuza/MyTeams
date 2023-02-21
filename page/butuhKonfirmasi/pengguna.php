




 <!-- Begin Page Content -->
        <div class="container-fluid">
            <!-- Page Heading -->
        <h1 class="h3 mb-0 text-gray-800" style="margin-bottom: 3rem;">Butuh Konfirmasi</h1>

          <!-- DataTales Example -->
          <div class="card shadow mb-4" style="margin-top: 1rem;">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                                        <tr>
											<th>No</th>
											<th>NIK</th>
											<th>Nama</th>
											
											<th>Telepon</th>
											<th>Username</th>
                                            <th>Password</th>
                                            <th>Level</th>
                                            <th>Foto</th>
											<th>Aksi</th>
											
                                        </tr>
										</thead>
										
               
                  <tbody>
                    <?php 
									
									$no = 1;
									$sql = $koneksi->query("select * from users where level = 'default'");
									while ($data = $sql->fetch_assoc()) {
										
									?>
									
                                        <tr>
                                            <td><?php echo $no++; ?></td>
											<td><?php echo $data['nik'] ?></td>
											<td><?php echo $data['nama'] ?></td>
											
											<td><?php echo $data['telepon'] ?></td>
                                            <td><?php echo $data['username'] ?></td>
								
											<td><?php echo $data['password'] ?></td>
											<td><?php echo $data['level'] ?></td>
											<td><img src="img/<?php echo $data['foto'] ?>"width="50" height="50" alt=""> </td>
										
											<td>
											<a href="?page=butuhKonfirmasi&aksi=ubahpengguna&id=<?php echo $data['id'] ?>" class="btn btn-success" >Konfirmasi</i></a>
                      <a onclick="return confirm('Apakah anda yakin akan menghapus data ini?')" href="?page=butuhKonfirmasi&aksi=hapuspengguna&id=<?php echo $data['id'] ?>" class="btn btn-danger" ><i class="fas fa-fw fa-trash-alt"></i></a>
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

        </div>












