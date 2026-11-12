# Biaya dan ROAS impas

Baca saat menghitung margin/impas, bukan untuk audit dashboard sederhana. Tidak ada tarif Shopee universal dalam referensi ini.

Urutan audit adalah ketentuan resmi yang cocok → konfigurasi toko/produk/periode → sampel penerapan → perhitungan. Detail sumber/pajak di [ketentuan-resmi.md](ketentuan-resmi.md); komisi yang relevan di [affiliate.md](affiliate.md). Jangan memuat affiliate bila komponen itu tidak sedang diperiksa.

## Input dan sampel

Untuk tiap biaya, catat nilai, basis (per unit/per pesanan/persen), sumber, tanggal berlaku, dan apakah sudah termasuk dalam angka penghasilan. Tarif dari sampel lama hanya membuktikan sampel tersebut, bukan otomatis semua kategori/program hari ini. Persentase gabungan hanya sah jika basis tiap biaya sama; perhatikan cap/minimum, diskon dan pembulatan komponen.

HPP mengikuti produk/varian yang cocok dan konfirmasi penjual. Pembacaan pesanan harus terarah, maksimal tiga secara default, tanpa mengunduh atau membuka chat. Jika belum dikonfirmasi, tanyakan HPP produk terkait satu kali secara terkumpul; tetap selesaikan rekonsiliasi dashboard. Jangan memakai penghasilan bersih sebagai pendapatan bruto lalu memotong biaya yang sama lagi.

Untuk sampel, cocokkan harga setelah diskon penjual, qty, biaya aktual, komisi affiliate bila ada, subsidi yang benar diterima, serta refund/penyesuaian relevan. Ketiadaan baris komisi tidak selalu membuktikan biaya final nol; sebut nol hanya jika rincian yang dibaca mendukung. Sampel sebelum tanggal mulai iklan atau tanpa tautan atribusi hanya validasi struktur biaya, bukan penjualan iklan terverifikasi.

Gunakan status eksplisit per input: **terverifikasi**, **nol dikonfirmasi**, **belum terverifikasi**, atau **dikecualikan sesuai pilihan penjual**. Ketiadaan baris affiliate atau Biaya Lainnya Rp0 tidak membuktikan affiliate final nol. Bila bermanfaat, boleh membuat skenario sementara dengan affiliate tidak dikurangkan, tetapi tulis pada tabel “affiliate belum terverifikasi, sementara dikecualikan” dan hasil “skenario bersyarat”, bukan nol aktual. Ini berbeda dari packing yang sengaja dikecualikan penjual. HPP atau biaya platform yang tidak diketahui jangan otomatis diasumsikan nol.

Subtotal dikurangi potongan sama dengan Total Penghasilan memvalidasi kecocokan aritmetika, bukan membuktikan subtotal sudah setelah diskon penjual. Jika tidak ada bukti basis diskon, tampilkan pada baris hitungan “basis diskon subtotal belum terverifikasi”; hitungan boleh memakai subtotal sebagai skenario yang dinyatakan eksplisit. Jangan mengklaim angka itu pendapatan final atau dapat dibandingkan langsung ke dashboard. Hindari hitungan jika subtotal sendiri tidak jelas mencakup barang yang mana.

Jangan menyimpulkan nominal biaya tetap hanya dari dua pesanan dengan qty berbeda, terutama jika tanggal/tarif/program berbeda. Gunakan nominal potongan aktual untuk masing-masing sampel. Untuk menyatakan komponen tetap tertentu terverifikasi, perlu rincian eksplisit atau dasar tarif relevan yang cocok. Dampak qty boleh ditunjukkan melalui contoh terkontrol dengan tarif tetap yang dinyatakan sebagai asumsi, bukan sebagai temuan biaya akun.

Pada pesanan campuran, biaya gabungan dibagi subtotal adalah **rasio efektif sampel**, bukan tarif kategori setiap produk. Jangan menggunakannya kembali sebagai tarif produk tanpa rincian basis per produk. Sumber data per komponen dan perbedaan periode perlu dipertahankan dalam analisis, tidak perlu diulang panjang dalam laporan.

## Packing dan biaya lain opsional

Pilihan per komponen: diisi dan dihitung, nol yang dikonfirmasi, belum diisi, atau dikecualikan atas pilihan penjual. Jangan menetapkan Rp450 atau nominal lain sebagai bawaan. Bila belum diisi, boleh menghitung skenario tanpa komponen itu dengan label eksplisit; jangan mengklaim biaya aktual nol. Jangan bertanya ulang jika pilihan yang berlaku sudah ada. Packing bisa per pesanan/per unit/per kelas paket; biaya lain dan overhead hanya dialokasikan jika basisnya jelas. Ini tidak membolehkan mengabaikan HPP atau biaya platform yang dibebankan.

## Model pesanan

`R = pendapatan barang setelah diskon tanggungan penjual, sebelum biaya yang akan dikurangkan`

`C_operasional = R − HPP total − biaya platform − affiliate tanggungan penjual − packing − biaya variabel lain`

Biaya di sini termasuk pajak layanan yang benar menjadi beban, tidak termasuk PPh yang dipungut sebagai uang muka/kredit/pelunasan pajak penghasilan. Pisahkan PPh aktual dalam rekonsiliasi penghasilan. Jika perlakuan pajak belum jelas, tampilkan kontribusi sebelum PPh, bukan laba bersih setelah pajak. Skenario arus kas sesudah pemungutan boleh dihitung terpisah dengan label dan basis yang jelas. Jangan mengurangkan satu potongan dua kali. Simbol C di bawah berarti kontribusi yang basisnya sudah dinyatakan.

Subsidi hanya dimasukkan jika diterima dan basisnya diketahui. Ongkir pembeli bukan otomatis omzet barang. Refund/batal dan biaya tidak kembali diselaraskan dengan realisasi. Jika menghitung dari penghasilan bersih, sebut biaya yang sudah terpotong dan jangan potong lagi.

F yang dikenakan sekali per pesanan, termasuk biaya proses atau packing bila per pesanan, tidak dikalikan qty. Jika perlu laporan per produk, alokasikan biaya bersama satu kali, misalnya proporsi pendapatan; total alokasi harus sama dengan biaya asli. Saat mix/qty tidak diketahui, asumsi satu unit per pesanan adalah skenario, bukan fakta.

Untuk R>0 dan C>0: `margin kontribusi m = C/R`; ambang dasar sebelum penyesuaian biaya iklan `B_dasar = R/C = 1/m`.

Kontribusi sebelum iklan bukan laba bersih. C nol/negatif berarti tidak ada ruang biaya iklan dalam model ini; tampilkan impas tidak tersedia, bukan angka negatif/nol. R nol berarti tidak cukup dasar menghitung margin/impas.

**Basis dashboard dan biaya iklan:** untuk kumpulan transaksi yang sama, omzet dashboard D, biaya terpakai dashboard A, dan biaya iklan sebenarnya k×A, ambang ROAS dashboard adalah `B_dashboard = k×D/C`. Kondisi impas: C = k×A. Jika basis omzet sama dan tidak ada pajak/biaya tambahan di luar A, k=1 dan D=R, kembali ke R/C. Jangan menganggap k=1 tanpa memeriksa apakah pajak sudah termasuk. Jika basis D atau k belum diketahui, tunda klaim perbandingan final dan tampilkan asumsi skenario. Jangan menebak atribusi, perlakuan diskon, atau hak kredit pajak.

Contoh latihan dengan pajak yang sepenuhnya menjadi biaya di luar dashboard sebesar 10%: k=1,10. Jika D=10.000 dan C=2.500, B_dashboard=4,40, bukan 4,00. Jika pajak sudah termasuk A, faktor tersebut tidak ditambahkan lagi. Ini angka fiktif, bukan tarif berlaku. Proporsikan pajak saldo berbayar ke konsumsi saldo yang terkait; jangan kurangi seluruh pajak pembelian saldo yang belum habis.

Untuk banyak varian/pesanan, ambang dasar gabungan = jumlah omzet sebanding / jumlah C, bukan rata-rata B. Untuk perbandingan dashboard, sesuaikan faktor biaya iklan yang representatif; bila beragam, gunakan total biaya iklan aktual dibanding dashboard yang cocok cakupannya. Satu rata-rata qty tidak cukup jika harga/HPP/mix berbeda. Sampel kecil tidak otomatis mewakili margin seluruh penjualan iklan. Jika hanya rentang skenario tersedia, ROAS di dalam rentang tidak memberi keputusan pasti.

Gabungan bersyarat hanya boleh memakai sampel dengan komposisi biaya/pengecualian yang dinyatakan jelas dan basis pendapatan yang dapat digabungkan. Sebut kode sampel yang masuk. Jika salah satu belum dapat dihitung, tampilkan “gabungan sampel lengkap belum tersedia”; boleh tampilkan gabungan subset dengan label subset, jangan seolah seluruh sampel. Ketidakpastian affiliate/diskon tidak hilang karena dijumlahkan.

Estimasi kontribusi setelah iklan = kontribusi representatif sebelum iklan − biaya iklan aktual termasuk pajak tak terpulihkan yang belum tercakup. Rumus omzet×margin hanya dipakai bila basis omzet dan margin sebanding. Jangan potong iklan atau pajak yang sama dua kali. Penjualan atribusi bukan bukti kenaikan penjualan yang disebabkan iklan. Overhead, refund dan biaya yang belum masuk harus disebut; jangan menyatakan laba bersih.

## Contoh fiktif

Harga Rp10.000/unit, HPP Rp5.000/unit, tarif asumsi 10%, biaya pesanan Rp1.000, packing Rp500/pesanan, tanpa affiliate/biaya lain yang sudah dikonfirmasi. Ini latihan matematika, bukan tarif Shopee.

- Satu unit: C = 10.000 − 5.000 − 1.000 − 1.000 − 500 = 2.500; impas 4,00.
- Dua unit satu pesanan: C = 20.000 − 10.000 − 2.000 − 1.000 − 500 = 6.500; impas sekitar 3,08.
- Dua pesanan satu unit: C total 5.000; omzet 20.000; impas 4,00.

## Helper hitung opsional

Jalankan `node scripts/hitung.cjs` dari folder skill dan kirim JSON melalui stdin. Operasi tanpa akses jaringan/akun:

- `reconcile`: input `summary: {revenue, spend}`, `rows: [{id, revenue, spend}]`, `complete` dan `comparable` boolean. Kedua flag mengikuti bukti halaman, bukan kecocokan angka. Hasil selisih = ringkasan minus jumlah baris. Input harus berupa angka tepat; tampilan dibulatkan/negatif atau kosong perlu analisis terpisah, jangan dipaksa masuk.
- `contribution`: input `revenue, cogs, platformFees, affiliateFees, packing, otherVariableCosts` dalam nominal total pesanan. Untuk biaya persen, hitung nominal dari basis yang benar terlebih dahulu. Semua input wajib numerik, termasuk nol jika dikonfirmasi. Komponen opsional yang dikecualikan boleh dimasukkan nol untuk skenario, tetapi laporan harus mempertahankan status pengecualian; helper tidak memverifikasi sumber/status biaya.
- Affiliate belum terverifikasi hanya boleh dimasukkan nol ke helper sebagai pengecualian skenario berlabel jelas, bukan sebagai biaya nol aktual. Subtotal dengan basis diskon belum terverifikasi juga tetap berstatus skenario di laporan. Helper mengembalikan angka, bukan bukti verifikasi input; pertahankan status tersebut di luar angka keluaran.
- `breakEven`: input `revenue, contribution`. Revenue harus sama basis omzet pembanding; keluaran helper tidak membuktikan kesamaan basis itu.
- `adBreakEven`: input `revenue, contribution, adCostFactor`. Revenue adalah omzet dashboard sebanding; faktor harus eksplisit, positif, dan dibuktikan atau diberi label asumsi. Keluaran `baseRoas` adalah D/C, `roas` adalah k×D/C. Helper tidak menetapkan tarif pajak, basis omzet, atau kelayakan pengkreditan. Operasi `breakEven` lama hanya ambang dasar tanpa penyesuaian biaya iklan, bukan otomatis ambang final dashboard.

Contoh: `{"operation":"breakEven","input":{"revenue":10000,"contribution":2500}}` menghasilkan ROAS 4. Nilai tersebut tidak menjadi target universal.

Helper hanya memeriksa input dan matematika. Kalkulator lain boleh dipakai jika Node tidak tersedia. Status “matched” dari helper memerlukan flag kelengkapan yang ditentukan dengan benar; bukan pengganti inspeksi halaman. Jika data merupakan potongan negatif/adjustment, pertahankan data mentah dan rekonsiliasi sesuai definisinya dengan kalkulator lain; helper ini sengaja menolak input negatif.
