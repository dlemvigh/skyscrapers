import React from "react";
import {
    N,
} from "../../Algorithm/Skyscrapers";

const digits2x2 = [[1, 2], [3, 4]];
const digits3x3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const digits = N <= 4 ? digits2x2 : digits3x3;

const Cell = ({ row, col, values }) => {
    const name = row + col;
    const value = values[name];

    if (!value) return "";

    if (value.length > 1) {
        const font = N <= 4 ? "0.8rem" : "0.5rem";
        const size = N <= 4 ? "50%" : "33%";
        return (
            <table className="Skyscraper-tiny">
                <tbody>
                    { digits.map((row,i) => 
                        <tr key={i}>
                            { row.map(x => 
                                <td 
                                    key={x}
                                    style={{ width: size, height: size, fontSize: font }}
                                >
                                    {value.indexOf(String(x)) >= 0 ? x : "\u00A0"}
                                </td>
                            )}
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }

    return value;
}

export default Cell;
