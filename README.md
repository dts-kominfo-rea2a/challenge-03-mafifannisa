# Tantangan: JS Fungsi

Sekarang adalah **Waktunya Developer Belanja** !

Kita sebagai developer tentunya ingin membuat belanja lebih terasa "hangat", oleh karena itu kita akan membuat sebuah program untuk me-listing belanjaan yang dimiliki oleh seseorang dan mem-format-nya menjadi lebih manusiawi untuk di-output-kan.

Buatlah dua buah fungsi dengan ketentuan sebagai berikut:
- Fungsi **listBelanjaan**
    - Fungsi ini akan menerima sebuah parameter berupa array of object belanjaan
    - Fungsi ini akan memberikan output berupa listing dari barang belanjaan dikali jumlah kuantitas yang ada dan menghasilkan harga barang belanjaan (contoh dapat dilihat di bawah)
- Fungsi **totalBelanjaan**
    - Fungsi ini akan menerima sebuah parameter berupa array of object belanjaan
    - Fungsi ini akan memberikan output berupa angka total harga dari belanjaan.

Catatan:
- **Diperbolehkan** untuk menambah fungsi, apabila dibutuhkan
- Output untuk masing masing fungsi

Contoh data array of object
```js
[
  {
    id: 'D-10001',
    nama: 'Minyak Goreng Delima',
    harga: 25000,
    kuantitas: 2
  },
  {
    id: 'D-10020',
    nama: 'Beras Mamos',
    harga: 48000,
    kuantitas: 1
  },
  {
    id: 'F-00010',
    nama: 'Larutan Cap Kaki Empat',
    harga: 7500,
    kuantitas: 8
  }
]
```

Contoh output dari setiap fungsi yang diharapkan
```js
// output dari listBelanjaan ketika diinvoke
// berupa array of string
[
  '- Minyak Goreng Delima x 2',
  '- Beras Mamos x 1',
  '- Larutan Cap Kaki Empat x 8'
]

// output dari totalBelanjaan ketika diinvoke
// berupa angka
158000
```

Contoh output dari aplikasi ketika dijalankan
```
Selamat datang customer

Belanjaan Anda adalah:
- Minyak Goreng Delima x 2
- Beras Mamos x 1
- Larutan Cap Kaki Empat x 8

Total belanjaan Anda adalah Rp. 158000
```