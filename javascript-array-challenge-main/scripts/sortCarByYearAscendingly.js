function sortCarByYearAscendingly(cars) {
  // Menampilkan array cars sebelum diurutkan
  console.log("Cars sebelum diurutkan:", cars);

  // Clone array untuk menghindari side-effect
  const result = [...cars];

  // Mengurutkan array result berdasarkan tahun secara ascending
  result.sort((a, b) => a.year - b.year);

  // Menampilkan array cars setelah diurutkan
  console.log("Cars setelah diurutkan:", result);

  return result;
}
