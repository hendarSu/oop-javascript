class Kendaraan {

    _warna;

    constructor(jenis, roda) {
        this.jenis = jenis;
        this.roda = roda;
        this._warna = "red"
    }

    kecepatan() {
        console.log("60 KM");
    }

    static tahunPembuatan() {
        console.log("Tahun 2000");
    }
}

const kendaran = {
    warna: "",
    roda : ""
}

// const mobil = new Kendaraan("Mobil", "4");
// mobil.kecepatan(); // Instance method

const tahun_produksi_mobil = Kendaraan.tahunPembuatan();
Kendaraan._warna = "red";

console.log(Kendaraan._warna)




