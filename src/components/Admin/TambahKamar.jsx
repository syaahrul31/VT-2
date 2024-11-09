import React, { useEffect } from 'react';

function AddKamar() {
  useEffect(() => {
    // Data JSON yang ingin disimpan
    const kamarList = {
      VillaTiara1: [
        {
          kode_kamar: 'VT1-0301',
          tipe_kamar: 'STANDART',
          jumlah_bed: '2 Bed, 4 Orang',
          status: 'kosong',
          harga: 400000,
        },
        {
          kode_kamar: 'VT1-0302',
          tipe_kamar: 'DELUXE',
          jumlah_bed: '2 Bed, 4 Orang',
          status: 'kosong',
          harga: 500000,
        },
        {
          kode_kamar: 'VT1-0203',
          tipe_kamar: 'STANDART',
          jumlah_bed: '2 Bed, 4 Orang',
          status: 'kosong',
          harga: 400000,
        },
        {
          kode_kamar: 'VT1-0204',
          tipe_kamar: 'STANDART',
          jumlah_bed: '2 Bed, 4 Orang',
          status: 'kosong',
          harga: 400000,
        },
        {
          kode_kamar: 'VT1-0205',
          tipe_kamar: 'FAMILY',
          jumlah_bed: '2 Bed, 3 Orang',
          status: 'kosong',
          harga: 450000,
        },
        {
          kode_kamar: 'VT1-0206',
          tipe_kamar: 'FAMILY',
          jumlah_bed: '1 Bed, 2/4 Orang',
          status: 'kosong',
          harga: 450000,
        },
        {
          kode_kamar: 'VT1-0107',
          tipe_kamar: 'STANDART',
          jumlah_bed: '2 Bed, 4 Orang',
          status: 'kosong',
          harga: 400000,
        },
        {
          kode_kamar: 'VT1-0108',
          tipe_kamar: 'STANDART',
          jumlah_bed: '2 Bed, 4 Orang',
          status: 'kosong',
          harga: 400000,
        },
        {
          kode_kamar: 'VT1-0109',
          tipe_kamar: 'STANDART',
          jumlah_bed: '2 Bed, 4 Orang',
          status: 'kosong',
          harga: 400000,
        },
        {
          kode_kamar: 'VT1-0110',
          tipe_kamar: 'STANDART',
          jumlah_bed: '2 Bed, 4 Orang',
          status: 'kosong',
          harga: 400000,
        },
        {
          kode_kamar: 'VT1-0011',
          tipe_kamar: 'STANDART',
          jumlah_bed: '2 Bed, 4 Orang',
          status: 'kosong',
          harga: 400000,
        },
        {
          kode_kamar: 'VT1-0012',
          tipe_kamar: 'STANDART',
          jumlah_bed: '2 Bed, 4 Orang',
          status: 'kosong',
          harga: 400000,
        },
      ],

      VillaTiara2: [
        {
          kode_kamar: 'VT2-0215',
          tipe_kamar: 'STANDART',
          jumlah_bed: '2 Bed, 4 Orang',
          status: 'kosong',
          harga: 450000,
        },
        {
          kode_kamar: 'VT2-0302',
          tipe_kamar: 'STANDART',
          jumlah_bed: '2 Bed, 4 Orang',
          status: 'kosong',
          harga: 450000,
        },
        {
          kode_kamar: 'VT2-0303',
          tipe_kamar: 'STANDART',
          jumlah_bed: '2 Bed, 4 Orang',
          status: 'kosong',
          harga: 450000,
        },
        {
          kode_kamar: 'VT2-0304',
          tipe_kamar: 'STANDART',
          jumlah_bed: '2 Bed, 4 Orang',
          status: 'kosong',
          harga: 450000,
        },
        {
          kode_kamar: 'VT2-0205',
          tipe_kamar: 'STANDART',
          jumlah_bed: '2 Bed, 4 Orang',
          status: 'kosong',
          harga: 450000,
        },
        {
          kode_kamar: 'VT2-0206',
          tipe_kamar: 'STANDART',
          jumlah_bed: '2 Bed, 4 Orang',
          status: 'kosong',
          harga: 450000,
        },
        {
          kode_kamar: 'VT2-0207',
          tipe_kamar: 'STANDART',
          jumlah_bed: '2 Bed, 4 Orang',
          status: 'kosong',
          harga: 450000,
        },
        {
          kode_kamar: 'VT2-0208',
          tipe_kamar: 'STANDART',
          jumlah_bed: '2 Bed, 4 Orang',
          status: 'kosong',
          harga: 450000,
        },
        {
          kode_kamar: 'VT2-0110',
          tipe_kamar: 'STANDART',
          jumlah_bed: '2 Bed, 4 Orang',
          status: 'kosong',
          harga: 450000,
        },
        {
          kode_kamar: 'VT2-0111',
          tipe_kamar: 'STANDART',
          jumlah_bed: '2 Bed, 4 Orang',
          status: 'kosong',
          harga: 450000,
        },
        {
          kode_kamar: 'VT1-0314',
          tipe_kamar: 'DELUXE',
          jumlah_bed: '2 Bed, 4 Orang',
          status: 'kosong',
          harga: 500000,
        },
        {
          kode_kamar: 'VT1-0215',
          tipe_kamar: 'FAMILY',
          jumlah_bed: '2 Bed, 4 Orang',
          status: 'kosong',
          harga: 450000,
        },
      ],
    };

    // Konversi objek JSON ke string
    const jsonData = JSON.stringify(kamarList);

    // Simpan ke local storage dengan kunci "villaData"
    localStorage.setItem('kamarList', jsonData);

    // Verifikasi bahwa data telah disimpan dengan benar
    console.log(
      'Data telah disimpan ke local storage:',
      localStorage.getItem('villaData'),
    );
  }, []); // [] memastikan efek hanya dijalankan sekali saat komponen dimuat

  return (
    <div>
      <h1>Tambah Kamar</h1>
    </div>
  );
}

export default AddKamar;
