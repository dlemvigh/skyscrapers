import React from "react";
import Cell from "./Cell";
import {
  rows, 
  cols
} from "../../Algorithm/Skyscrapers";

const Skyscrapers = ({ values }) => {
  return (
    <table className="Skyscraper-table">
      <tbody>
        { rows.map(row =>
          <tr key={row}>
            { cols.map(col =>
              <td className="Skyscraper-cell Skyscraper-value" key={col}>
                <Cell row={row} col={col} values={values} />
              </td>
            )}
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Skyscrapers;
