var arr = ['senin','selasa','rabu','kamis'];

// menampilkan array dengan looping
for(let i = 0; i < arr.length; i ++){
    console.log(arr[i]);
}

// menggunakan metode push untuk menambah value dalam array di urutan terakhir
arr.push("jumat",'sabtu');
console.log(arr);

// menggunakan metode pop untuk menghilangkan value dalam array di urutan terakhir
arr.pop();
arr.pop();
console.log(arr);

// menggunakan metode unshift untuk menggeser value ke dalam array di urutan pertama
arr.unshift('sabtu',"minggu");
console.log(arr);

// menggunakan metode shift untuk menggeser value ke luar array di urutan pertama
arr.shift();
console.log(arr);

// menggunakan metode join untuk menampilkan value array
console.log(arr.join());
console.log(arr.join(' - '));

// menggunakan splice 

//menggunakan slice

//menggunakan forEach 
arr.forEach(function (v) {
    console.log(v)
})