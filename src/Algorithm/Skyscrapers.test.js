import {
    N,
    rows,
    cols,
    digits,
    squares,
    unitlist,
    units,
    peers
} from "./Skyscrapers";

it("correct rows length", () => {
    expect(rows).toHaveLength(N);
});

it("correct cols length", () => {
    expect(cols).toHaveLength(N);
});

it("correct digit length", () => {
    expect(digits).toHaveLength(N);
});

it("correct squares length", () => {
    expect(squares).toHaveLength(N * N);
});

it("correct unitlist length", () => {
    expect(unitlist).toHaveLength(N * 4);
})

it("all units have expected length", () => {
    expect.assertions(N * N);
    squares.forEach(s => expect(units[s]).toHaveLength(4));
});

it("units for A1 to be correct", () => {
    expect(units["A1"]).toEqual([0, 4, 11, 15]);
})

it("units for B3 to be correct", () => {
    expect(units["B3"]).toEqual([2, 5, 9, 14]);
})

it("all peers have expected length", () => {
    expect.assertions(N * N);
    squares.forEach(s => expect(peers[s]).toHaveLength(2 * (N - 1)));
})

it("peers for A1 to be correct", () => {
    expect(peers["A1"].sort()).toEqual(["A2", "A3", "A4", "B1", "C1", "D1"].sort())
})

it("peers for B3 to be correct", () => {
    expect(peers["B3"].sort()).toEqual(["B1", "B2", "B4", "A3", "C3", "D3"].sort())
})