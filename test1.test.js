const { dataBelanjaan, listBelanjaan, totalBelanjaan } = require("./index");

const mockBelanjaan = [
  {
    nama: "Buku",
    harga: 10000,
    kuantitas: 2,
  },
  {
    nama: "Bimoli",
    harga: 49000,
    kuantitas: 1,
  },
  {
    nama: "Notepad",
    harga: 100000,
    kuantitas: 3,
  },
  {
    nama: "Mystery Box",
    harga: 5000,
    kuantitas: 4,
  },
];

describe("Function - listBelanjaan", () => {
  it("should be a function", async () => {
    expect(typeof listBelanjaan).toBe("function");
  });

  it("should output right things with original data", async () => {
    expect(Array.isArray(listBelanjaan(dataBelanjaan))).toBe(true);
    expect(listBelanjaan(dataBelanjaan).length).toBe(dataBelanjaan.length);
    expect(listBelanjaan(dataBelanjaan)[0]).toBe("- Minyak Goreng Delima x 2");
    expect(listBelanjaan(dataBelanjaan)[1]).toBe("- Beras Mamos x 1");
    expect(listBelanjaan(dataBelanjaan)[2]).toBe(
      "- Larutan Cap Kaki Empat x 8"
    );
  });

  it("should output right things with mockup data", async () => {
    expect(Array.isArray(listBelanjaan(mockBelanjaan))).toBe(true);
    expect(listBelanjaan(mockBelanjaan).length).toBe(mockBelanjaan.length);
    expect(listBelanjaan(mockBelanjaan)[0]).toBe("- Buku x 2");
    expect(listBelanjaan(mockBelanjaan)[1]).toBe("- Bimoli x 1");
    expect(listBelanjaan(mockBelanjaan)[2]).toBe("- Notepad x 3");
    expect(listBelanjaan(mockBelanjaan)[3]).toBe("- Mystery Box x 4");
  });
});
