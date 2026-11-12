# Shopee Seller Skills

Kumpulan skill Bahasa Indonesia untuk membantu seller membaca kondisi toko dan mengerjakan tugas terarah melalui Claude dan browser.

**Balas ulasan dengan pilihan draf atau otomatis untuk ulasan positif. Audit iklan dengan angka, sumber biaya, dan asumsi yang bisa diperiksa.**

[Pilih skill](#pilih-skill) · [Cara pasang](GUIDE.md) · [Contoh hasil](#contoh-hasil) · [Status pengujian](#status-pengujian) · [Lisensi](#lisensi-dan-pemilik)

Status: **beta publik**. Tidak terafiliasi dengan Shopee atau Anthropic. Skill berupa instruksi untuk asisten, bukan integrasi API Shopee atau jaminan hasil bisnis.

## Pilih skill

Pasang satu atau keduanya sesuai kebutuhan. Setiap skill memiliki paket impor dan versi sendiri.

| Skill | Untuk apa | Versi | Paket impor |
|---|---|---|---|
| [Balas Ulasan Shopee](skills/balas-ulasan-shopee/SKILL.md) | Menyiapkan draf, memeriksa keluhan, atau mengirim otomatis khusus ulasan positif sesuai cakupan | 0.2.6 | [Unduh ZIP](packages/balas-ulasan-shopee-public-0.2.6.zip) |
| [Audit Iklan Shopee](skills/audit-iklan-shopee/SKILL.md) | Mencocokkan dashboard dengan rincian dan menghitung estimasi impas dengan status biaya yang jelas | 0.1.3 | [Unduh ZIP](packages/audit-iklan-shopee-public-0.1.3.zip) |

Di halaman berkas ZIP GitHub, gunakan opsi unduh berkas. Jangan unggah ZIP seluruh repositori ke Claude; gunakan paket skill yang dipilih di atas. [Panduan lengkap pemasangan, pembaruan dan penonaktifan](GUIDE.md).

## Mulai menggunakan

Sesudah memasang, buka Seller Centre di Chrome, login sendiri, dan gunakan sesi Claude yang memiliki akses browser. Pastikan toko yang dimaksud benar. Mulai chat baru setelah memperbarui versi skill.

### Balas ulasan — mulai dari draf

> Gunakan balas-ulasan-shopee, mode draf dulu. Baca maksimal 3 ulasan terbaru yang belum dibalas. Sapaan Kak, ramah dan singkat, tanpa tanda tangan. Tampilkan draf; jangan mengirim balasan ulasan atau chat.

Jika ingin otomatis untuk ulasan positif:

> Gunakan balas-ulasan-shopee, mode otomatis untuk ulasan positif. Proses maksimal 3 ulasan terbaru yang belum dibalas. Langsung kirim hanya untuk 4–5 bintang tanpa keluhan atau keraguan konteks; kasus lain buatkan draf. Tanpa tanda tangan dan jangan kirim chat pembeli. Laporkan teks terkirim dan verifikasinya.

**Mode otomatis benar-benar mengirim balasan publik.** Pilihannya cukup sekali per pekerjaan dalam cakupan yang disepakati. Komplain dan kasus meragukan tetap draf. Membuka chat saat memeriksa keluhan bisa menandai pesan terbaca; harus ada pemberitahuan sebelumnya, atau pemeriksaan chat dilewati. Anda boleh meminta “jangan buka chat”.

[Contoh kedua mode dan tes awal](docs/balas-ulasan/contoh-penggunaan.md).

### Audit iklan — baca dan analisis

> Gunakan audit-iklan-shopee. Cek Iklan Produk hari ini, maksimal 20 baris unik termasuk nonaktif. Dashboard saja dulu, tanpa membuka pesanan. Cocokkan total, catat waktu dan kelengkapan halaman. Jangan membuka chat, mengunduh ekspor, menulis penyimpanan browser atau mengubah akun. Laporan ringkas dengan asumsi yang belum pasti.

Untuk impas, penjual memberikan HPP produk/varian; packing dan biaya tambahan opsional. Ketentuan resmi dicocokkan dengan toko, produk, program dan periode, lalu dibandingkan dengan sampel. Affiliate, pajak biaya iklan dan PPh tidak disamakan. Hasil boleh berupa skenario atau belum dapat dihitung jika basisnya belum cukup.

[Panduan audit dan contoh hasil bersyarat](docs/audit-iklan/penggunaan.md).

## Contoh hasil

Contoh fiktif berikut menunjukkan bentuk laporan, bukan hasil toko nyata atau bukti semua kasus telah teruji.

| Permintaan | Hasil yang dapat diperiksa |
|---|---|
| Draf ulasan: 5 bintang tanpa teks | Kode U01 dan draf netral, tanpa klaim bahan/pengiriman yang tidak diketahui; belum dikirim |
| Mode otomatis: 5 bintang dengan keluhan rusak | Tetap draf, bukan otomatis dikirim karena bintangnya tinggi |
| Audit: jumlah baris cocok tetapi baru satu halaman dibaca | “Angka cocok, cakupan belum lengkap”, bukan “semua iklan sudah diperiksa” |
| Impas: HPP diketahui, affiliate dan faktor pajak belum pasti | Kontribusi/impas bersyarat atau belum tersedia; bukan label pasti untung/rugi |

## Kebutuhan dan batas

- Akses skill dan kontrol browser mengikuti akun/lingkungan Claude. Pemasangan ZIP tidak otomatis memasang kontrol browser.
- Tanpa akses browser, asisten dapat membuat draf atau menganalisis teks/tabel yang sudah disamarkan; jangan menganggap akun telah diperiksa.
- Jangan memberikan password, OTP, atau data pembeli ke laporan publik. Verifikasi akun dikerjakan pengguna sendiri.
- Audit iklan tidak menjeda kampanye, menaikkan anggaran, top-up, mengubah pesanan atau membuka chat. Skill ulasan hanya mengirim sesuai mode dan cakupan izinnya.
- Izin wajib browser/platform tetap berlaku. Auto approve tidak menghapus batas skill.
- Utamakan teks terarah dan penggunaan ulang ringkasan. Tidak ada janji jumlah penghematan kuota atau kenaikan penjualan.

## Status pengujian

Pengujian terbatas dilakukan pada satu lingkungan toko dan dilaporkan pengguna melalui keluaran Claude. Itu bukan inspeksi independen seluruh jejak browser, sertifikasi, atau bukti hasil yang sama pada setiap akun/model.

- **Balas Ulasan:** mode draf, persetujuan sebagian, otomatisasi positif, penahanan komplain dan pemberitahuan chat pernah dicoba. Pencocokan ID produk yang berhasil dan seluruh kondisi kegagalan belum teruji menyeluruh. Versi 0.2.6 melengkapi identitas lisensi; alur kerja sama dengan 0.2.5.
- **Audit Iklan:** rekonsiliasi sebagian daftar, status biaya, pencarian konversi, pemisahan pajak, dan pembacaan sumber telah dilaporkan; beberapa sumber diselesaikan melalui prompt lanjutan. [Catatan hasil uji 0.1.2](docs/audit-iklan/hasil-uji.md). Versi 0.1.3 hanya melengkapi identitas lisensi; alur dan helper sama dengan 0.1.2.
- Helper matematika audit telah diuji lokal dengan data fiktif. Pengujian matematika tidak membuktikan tarif, atribusi atau data akun nyata.

## Masukan dan pengembangan

Setelah repositori diterbitkan, gunakan tab Issues untuk masalah atau saran. Sertakan versi skill, model bila diketahui, lingkungan, langkah pemicu, hasil aktual dan harapan. Jangan sertakan chat pembeli, ekspor pesanan, screenshot sensitif, nomor pesanan/resi atau kredensial. [Panduan kontribusi](CONTRIBUTING.md).

Skill baru bisa ditambahkan ke koleksi ini setelah memiliki cakupan, panduan dan uji yang jelas. Saat ini hanya dua skill dalam tabel yang tersedia; tidak ada installer satu perintah atau klaim dukungan plugin lintas aplikasi.

## Lisensi dan pemilik

**Ivan Zulkiflih** · [GitHub waloyu81](https://github.com/waloyu81) · [Permintaan izin lisensi](mailto:iipan.zul27@gmail.com)

Gratis digunakan dan dimodifikasi untuk toko/bisnis. Jasa pemasangan, kustomisasi dan dukungan boleh berbayar untuk pekerjaan nyata. Penjualan ulang skill/versi turunan atau akses berbayar dilarang tanpa izin tertulis. Ketentuan lengkap: [LICENSE koleksi](LICENSE), [lisensi Balas Ulasan](skills/balas-ulasan-shopee/LICENSE), [lisensi Audit Iklan](skills/audit-iklan-shopee/LICENSE).

Ini koleksi source-available dengan lisensi khusus, bukan MIT atau open source OSI. Lisensi belum ditinjau profesional hukum. Sumber dan paket masing-masing skill mempertahankan atribusi serta lisensinya. Tidak ada data toko pribadi pembuat dalam paket publik.
