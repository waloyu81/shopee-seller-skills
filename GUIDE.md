# Pasang dan gunakan

## Pilih paket

| Skill | Versi | Unduh |
|---|---|---|
| Balas Ulasan Shopee | 0.2.6 | [ZIP impor](packages/balas-ulasan-shopee-public-0.2.6.zip) |
| Audit Iklan Shopee | 0.1.3 | [ZIP impor](packages/audit-iklan-shopee-public-0.1.3.zip) |

Pilih berkas di GitHub lalu gunakan opsi unduh. Jangan memakai arsip Code → Download ZIP seluruh repositori sebagai paket impor skill. Anda boleh memasang satu atau kedua skill.

## Pemasangan Claude

1. Aktifkan fitur pembuatan/eksekusi file bila diperlukan pada lingkungan Claude. Pada tampilan yang menyediakan Settings → Capabilities, namanya dapat berupa Code execution and file creation atau Create and edit files.
2. Buka Customize → Skills, pilih penambahan skill dan Upload a skill, lalu unggah paket impor yang dipilih. Nama menu dan izin akun organisasi dapat berbeda. Acuan: [panduan resmi Claude](https://support.claude.com/en/articles/12512180-use-skills-in-claude).
3. Aktifkan skill. Jika nama sama sudah ada, perbarui melalui pilihan penggantian yang tersedia. Nonaktifkan versi pribadi dengan cakupan sama bila instruksinya dapat bertentangan.
4. Gunakan Claude dengan akses browser yang dapat membaca/mengoperasikan Seller Centre, misalnya Claude in Chrome. Login sendiri. Skill bukan pemasang ekstensi dan tidak memberi akses akun otomatis.
5. Mulai chat baru dan minta: “Muat [nama skill yang dipilih] dan kutip baris Versi paket dari SKILL.md. Jangan melakukan tindakan dulu.” Gunakan nama sebenarnya dari tabel, bukan teks dalam kurung. Pastikan versinya sesuai.

Skill lain yang cakupannya berbeda boleh tetap terpasang. Jika versi tidak cocok, periksa versi aktif dan unggahan lalu mulai chat baru; jangan hanya mengandalkan nama ZIP.

## Pilih pekerjaan pertama

Untuk ulasan, mulai mode draf tiga ulasan tanpa kirim. Persetujuan berikutnya harus merujuk kode dan teks yang diperlihatkan. Mode otomatis positif mengizinkan pengiriman publik sesuai cakupan; keluhan tetap draf. [Contoh](docs/balas-ulasan/contoh-penggunaan.md).

Untuk iklan, mulai dashboard saja maksimal 20 baris. Tidak perlu HPP untuk rekonsiliasi angka. Tambahkan satu produk/sampel ketika perlu menghitung impas; biaya dan basis yang belum diketahui tetap diberi label. [Contoh audit](docs/audit-iklan/penggunaan.md).

Tanpa browser, berikan teks/tabel yang sudah disamarkan. Hasilnya analisis/draf, bukan klaim data telah dicek di akun.

## Pembaruan dan penonaktifan

Setiap skill mempunyai versi sendiri. Unduh ZIP versi baru untuk skill yang hendak diganti, unggah melalui pengelolaan skill, periksa baris versi dan mulai chat baru. Pembaruan satu skill tidak mewajibkan penggantian skill lain.

Versi 0.2.6 Balas Ulasan dan 0.1.3 Audit Iklan melengkapi identitas/kontak lisensi dari versi sebelumnya; tidak menambahkan perilaku operasional baru. Paket di repositori ini identik dengan paket rilis individualnya.

Untuk berhenti memakai, nonaktifkan toggle skill di pengelolaan Skills. Jika ingin menghapus, gunakan opsi hapus yang tersedia di aplikasi. Penonaktifan skill tidak menarik kembali balasan yang sudah terkirim atau menutup akun toko.

## Jika terjadi kendala

| Kendala | Langkah |
|---|---|
| Browser meminta izin | Bedakan izin alat dari persetujuan pekerjaan; ikuti kontrol platform, jangan melewati verifikasi. |
| Chat ulasan dilewati | Pemberitahuan sebelum membuka mungkin tidak dapat disampaikan; pengguna dapat memeriksa chat manual. |
| Impas tidak tersedia | Baca input/basis yang belum diketahui; jangan memaksa asumsi nol. |
| Angka cocok tetapi cakupan belum lengkap | Terima sebagai audit parsial atau minta perluasan cakupan dengan sadar akan pembacaannya. |
| Balasan belum terverifikasi | Periksa status ulasan sebelum mencoba kirim ulang agar tidak duplikat. |

Audit tidak perlu terus mengejar semua ketidakpastian. Tutup pekerjaan sesuai cakupan dengan batas hasil yang jelas. Laporkan masalah melalui Issues setelah repositori diterbitkan, tanpa data pembeli. Email pemilik digunakan untuk izin lisensi, bukan pengiriman kredensial atau pesanan asli.
