# Menggunakan Audit Iklan Shopee v0.1.3

Mulai dari audit angka; tambahkan audit biaya bila diperlukan. Tidak semua pekerjaan perlu membuka pesanan, affiliate, atau seluruh artikel kebijakan. Skill hanya membaca dan menganalisis. Memilih Auto approve pada browser tidak mengubah batas ini.

## Audit dashboard yang hemat pembacaan

> Gunakan audit-iklan-shopee v0.1.3 untuk Iklan Produk hari ini. Dashboard saja: maksimal 20 baris unik, termasuk nonaktif. Cocokkan biaya dan penjualan ringkasan dengan rincian yang dibaca, hitung ROAS gabungan, serta catat waktu/filter dan kelengkapan halaman. Jangan membuka pesanan atau chat, mengunduh ekspor, menulis penyimpanan browser, atau mengubah akun. Satu tabel dan maksimal tiga catatan.

Hasil yang tepat bisa berupa angka cocok tetapi daftar belum lengkap. Jangan meminta asisten menganggap halaman lain nol hanya agar audit selesai. Jika ID iklan tidak terlihat, asisten perlu menjelaskan dasar pembeda baris dan keterbatasan keunikannya. Perubahan filter melalui antarmuka bisa mengubah tampilan yang ditinggalkan di tab.

Untuk periode lain, sebut tanggal awal/akhir dan zona waktu. Jangan membandingkan snapshot lama dengan angka baru seolah waktu bacanya sama. Hari yang belum berakhir diberi label hari berjalan.

## Audit biaya satu produk

> Lanjutkan pada satu produk yang saya pilih dan maksimal satu sampel pesanan selesai. Periksa ketentuan resmi yang relevan beserta keberlakuannya untuk toko, kategori, program dan tanggal sampel. Gunakan HPP varian yang saya konfirmasi; jika belum ada, tanyakan sekali. Packing/biaya tambahan sementara dikecualikan. Bedakan komisi affiliate produk, konversi, dan pemotongan aktual bila relevan. Pisahkan PPh dan periksa apakah biaya iklan termasuk pajak. Jika dasar impas belum memadai, tampilkan skenario atau belum dapat dihitung. Jangan mengubah akun, membuka chat, mengekspor atau menulis penyimpanan browser.

Pengguna dapat mengganti pilihan biaya opsional, misalnya “packing Rp800 per pesanan, biaya tambahan lain sementara dikecualikan”. Nominal ini hanya contoh, bukan biaya bawaan. HPP jangan disamakan antarvarian tanpa pemetaan yang benar.

Jika sudah ada hasil pembacaan sumber resmi yang relevan dalam pekerjaan, minta asisten menggunakan ringkasannya dan memeriksa bagian yang belum jelas saja. Jangan membuat pengecualian tanpa batas untuk tarif masa depan atau transaksi historis yang sumbernya tidak tersedia.

## Contoh hasil fiktif ketika impas belum pasti

Semua nama dan angka berikut fiktif; bukan tarif resmi atau data toko pembuat.

> Periode: satu hari berjalan. Dibaca 20 dari 80 baris; rekonsiliasi belum lengkap. Ringkasan dan 20 baris sama-sama menunjukkan biaya Rp20.000, penjualan Rp120.000, ROAS 6,00. Kecocokan angka tidak membuktikan 60 baris sisanya nol.

| Sampel | Nominal pendapatan terbaca | Biaya platform aktual | HPP | Status input | Kontribusi/impas |
|---|---:|---:|---:|---|---|
| S01, Produk Contoh ×1 | Rp50.000 | Rp10.000 | Rp30.000 | Basis diskon belum terverifikasi; affiliate tidak ditemukan pada pencarian AMS dan pemotongan final belum terverifikasi; packing/biaya tambahan dikecualikan | Kontribusi skenario Rp10.000; ambang dasar sampel 5,00; ambang final dashboard belum dapat dipastikan |

> Faktor biaya iklan di luar dashboard belum terverifikasi dan sampel belum terbukti mewakili penjualan atribusi. Karena itu ROAS dashboard 6,00 tidak cukup untuk menyatakan iklan untung. Jika hanya ingin melihat sensitivitas matematis dengan D=Rp50.000 dan C=Rp10.000: faktor asumsi 1,00 memberi ambang 5,00; faktor asumsi 1,10 memberi 5,50. Angka faktor itu latihan, bukan bukti tarif atau hak kredit pajak penjual.

Tidak harus ada angka impas final pada setiap laporan. Hasil “belum dapat dipastikan” tetap berguna jika jelas data apa yang belum cocok. Jangan menghapus catatan asumsi untuk membuat kesimpulan lebih tegas.

## Membaca hasil affiliate, pajak dan diskon

- Produk ikut affiliate dengan suatu tarif bukan berarti seluruh pesanan menanggungnya. Pencarian konversi nihil berarti tidak ditemukan dalam cakupan/waktu pencarian, bukan otomatis komisi final nol.
- Biaya iklan dashboard dan pajak top-up tidak selalu sama basisnya. Jangan membebankan seluruh pembelian saldo pada hari konsumsi sebagian.
- PPh yang dipungut dari pencairan disajikan terpisah. Kontribusi operasional, skenario arus kas setelah pemungutan, dan laba bersih bukan istilah yang saling menggantikan.
- Subsidi yang didanai platform bukan otomatis tambahan omzet metrik. Voucher platform juga jangan otomatis diperlakukan sebagai diskon tanggungan penjual. Gunakan bunyi sumber dan definisi masing-masing, serta pertahankan ketidakpastian cashback/refund jika belum dijelaskan.
- Nominal subtotal yang terbaca dan kecocokan potongan tidak otomatis membuktikan perlakuan seluruh diskon. Rekonstruksi matematika bukan pemecahan biaya yang sudah dibaca langsung.

## Kapan berhenti atau meminta data

Tutup pekerjaan setelah cakupan yang disepakati selesai, beserta asumsi dan sumber yang belum pasti. Tidak perlu mengejar seluruh katalog, periode, atau dokumen pajak untuk menghasilkan audit terbatas. Bila HPP wajib belum ada, asisten dapat menyelesaikan rekonsiliasi dan menunda impas. Jangan memasukkan kredensial, data pembeli atau ekspor pesanan ke laporan publik.

Untuk masukan, sebut versi skill, model yang dipakai bila diketahui, lingkungan browser, cakupan, perilaku yang diharapkan dan hasil aktual yang sudah disamarkan. Jejak tindakan lebih kuat daripada klaim asisten sendiri untuk menilai batas baca saja. Skrip yang diblokir tidak perlu dipaksakan melalui cara lain.
