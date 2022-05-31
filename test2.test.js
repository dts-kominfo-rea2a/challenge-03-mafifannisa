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

describe("Function - totalBelanjaan", () => {
  it("should be a function", async () => {
    expect(typeof totalBelanjaan).toBe("function");
  });

  it("should output right things with original data", async () => {
    expect(typeof totalBelanjaan(dataBelanjaan)).toBe("number");
    expect(totalBelanjaan(dataBelanjaan)).toBe(158000);
  });

  it("should output right things with mockup data", async () => {
    expect(typeof totalBelanjaan(mockBelanjaan)).toBe("number");
    expect(totalBelanjaan(mockBelanjaan)).toBe(389000);
  });
});
