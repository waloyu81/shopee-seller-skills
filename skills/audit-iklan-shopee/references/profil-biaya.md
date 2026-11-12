# Profil biaya opsional

Isi hanya yang dikonfirmasi pengguna untuk toko ini. Tidak perlu memuat referensi ini untuk audit angka saja. Jangan simpan profil kecuali diminta pengguna dan ada lokasi yang disepakati. Jangan masukkan profil asli ke repositori atau ZIP publik.

```yaml
toko: ""
mata_uang: IDR
zona_waktu: "" # cocokkan dengan akun; jangan mengarang
hpp: [] # produk_id/identitas yang cocok, varian, nominal_unit, sumber, tanggal
biaya_platform: [] # nominal/persen, basis, cap jika ada, produk/program, sumber/tanggal
packing:
  status: belum_diisi # dihitung | nol_dikonfirmasi | belum_diisi | dikecualikan
  nilai: null
  basis: null # per_unit | per_pesanan | per_kelas_paket
biaya_tambahan: [] # komponen, status, nilai, basis, sumber/tanggal
status_penjual: null # sumber/tanggal dan kondisi historis bila tersedia
program_aktif: [] # nama, periode, sumber; kondisi sekarang bukan riwayat otomatis
kategori_biaya: [] # produk, komponen biaya, kategori, periode/sumber
affiliate_produk: [] # produk/varian, ikut/tidak/belum_tahu, tarif, periode, kampanye, sumber
pajak_biaya_iklan:
  status: belum_terverifikasi
  termasuk_dashboard: null
  tarif: null # jangan diisi otomatis
  faktor_biaya: null # jangan diisi sebelum basis pajak dan konsumsi saldo jelas
perlakuan_pph: belum_terverifikasi # pisahkan pemungutan dari biaya operasional
```

Pertanyaan ringkas bila diperlukan: “HPP varian berikut berapa? Packing/biaya tambahan mau dihitung dengan nominal dan basis apa, atau sementara dikecualikan?” Jangan meminta pengaturan yang sudah jelas dari profil/instruksi. Jika tidak dijawab, tetap selesaikan audit angka; impas dapat belum tersedia atau hanya skenario dengan batas yang jelas.

Identitas produk harus berasal dari bukti halaman atau pemetaan yang dikonfirmasi penjual. Tidak semua listing dengan nama mirip punya HPP sama. Komisi affiliate mengikuti pesanan/program relevan, bukan angka default. Anggaran/top-up atau tanggal evaluasi milik toko lain tidak boleh dibawa ke profil ini.

Untuk setiap HPP/biaya, catat juga status verifikasi dan apakah angkanya aktual atau asumsi skenario. Ketiadaan baris komisi bukan pengaturan profil nol permanen. Profil yang diminta untuk disimpan harus berupa berkas di lokasi yang disepakati; jangan gunakan localStorage/sessionStorage, cookie, IndexedDB, atau penyimpanan browser sebagai profil/cache sementara.

Tarif affiliate per produk adalah konfigurasi, bukan bukti seluruh pesanan kena komisi. Hasil laporan konversi dan status pemotongan dicatat sebagai bukti transaksi sementara, bukan mengganti tarif produk dengan nol. Jangan simpan NPWP/NIK, dokumen pajak, atau identitas pembeli dalam profil.
