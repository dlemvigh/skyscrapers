import React from "react";

const Clues = ({ clues, children }) => {
  const sizeInner = clues.length / 4;
  const sizeOuter = sizeInner + 2;
  return (
    <table className="Skyscraper-table">
      <tbody>
        <tr>
          { Array.from({ length: sizeOuter }).map((x,i) => 
            <td className="Skyscraper-cell" key={i}>{i >= 1 && i <= sizeInner && clues[i-1]}</td>
          )}
        </tr>
        { Array.from({length:sizeInner}).map((r,ri) => 
          <tr key={ri}>
            <td className="Skyscraper-cell">{clues[4 * sizeInner - ri - 1]}</td>
            {ri === 0 && <td colSpan={sizeInner} rowSpan={sizeInner}>{children}</td>}
            <td className="Skyscraper-cell">{clues[sizeInner + ri]}</td>
          </tr>
        )}
        <tr>
          { Array.from({ length: sizeOuter }).map((x,i) => 
            <td className="Skyscraper-cell" key={i}>{i >= 1 && i <= sizeInner && clues[3 * sizeInner - i]}</td>
          )}
        </tr>
      </tbody>
    </table>
  )
}

export default Clues;
