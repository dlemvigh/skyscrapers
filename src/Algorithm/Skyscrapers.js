export const N = 4;

export function cross(A, B) {
    const C = [];
    A = Array.from(A);
    B = Array.from(B);
    for (let a of A) 
        for (let b of B)
            C.push(a + b);
    return C;
}

export const digits = Array.from({ length: N }, (x,i) => String(i + 1));
export const rows = "ABCDEGHJI".substr(0, N).split("");
export const cols = digits;
export const rows_inv = [...rows].reverse();
export const cols_inv = [...cols].reverse();
export const squares = cross(rows, cols);

export const unitlist = [
    ...cols.map(c => cross(rows, c)),
    ...rows.map(r => cross(r, cols_inv)),
    ...cols_inv.map(c => cross(rows_inv, c)),
    ...rows_inv.map(r => cross(r, cols))
];

export const units = {}
squares.forEach(s => {
    units[s] = [];
    unitlist.forEach((u,i) => {
        if (u.indexOf(s) >= 0) {
            units[s].push(i);
        }
    })
});

export const peers = {}
squares.forEach(s => {
    const ps = new Set();
    units[s].forEach(i => {
        const u = unitlist[i];
        u.forEach(s2 => {
            ps.add(s2);
        });
    });
    ps.delete(s);
    peers[s] = Array.from(ps);
});

export function parse_clues(clues) {

}
