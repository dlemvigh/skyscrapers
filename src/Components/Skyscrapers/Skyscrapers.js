import React from "react";

const Skyscrapers = ({ values }) => {
  const size = values.length / 4;
  return (
    <table className="Skyscraper-table">
      <tbody>
        { values.map(row =>
          <tr>
            { row.map(x =>
              <td className="Skyscraper-cell Skyscraper-value">{x > 0 && x}</td>
            )}
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Skyscrapers;
