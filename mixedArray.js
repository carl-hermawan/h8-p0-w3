var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

//contoh output
//["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]

function dataHandling2(array){
  array.splice(1,1,array[1]+" Elsharawy")
  array.splice(2,1,"Provinsi "+array[2])
  array.splice(4,1,"Pria")
  array.splice(5,0,"SMA Internasional Metro")  
  console.log(array)

  var tanggal = array[3].split('/')
  switch (tanggal[1]){
    case '01':
      tanggalKata = 'Januari'
      break;
    case '02':
      tanggalKata = 'Februari'
      break;
    case '03':
      tanggalKata = 'Maret'
      break;
    case '04':
      tanggalKata = 'April'
      break;
    case '05':
      tanggalKata = 'Mei'
      break;
    case '06':
      tanggalKata = 'Juni'
      break;
    case '07':
      tanggalKata = 'Juli'
      break;
    case '08':
      tanggalKata = 'Agustus'
      break;
    case '09':
      tanggalKata = 'September'
      break;
    case '10':
      tanggalKata = 'Oktober'
      break;
    case '11':
      tanggalKata = 'November'
      break;
    case '12':
      tanggalKata = 'Desember'
      break;
  }
  console.log(tanggalKata)

  var tanggalSort = tanggal.concat().sort(function(a,b){ return b-a})
  console.log(tanggalSort)

  var tanggalJoin = tanggal.join('-')
  console.log(tanggalJoin)

  var nama = array[1].slice(0,15)
  console.log(nama)
}
dataHandling2(input)