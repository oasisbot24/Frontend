import React from 'react';
type Props = {
  thead : string[]
  tbody : any[][]
  className? : string
}

const Table = ({thead, tbody, className} : Props) => {
  return (
      <table className={"table-auto "+(className != undefined ? className : '')}>
        <thead>
          <tr>
            {thead.map((th, index) => {
              return (<th key={index} className={th === "Control" ? "text-center" : ""}>{th}</th>);
            })}
          </tr>
        </thead>
        <tbody>
          {tbody.map((tr, index_tr) => {
            return (<tr key={index_tr}>
              {tr.map((td, index_td) => {
                return (<td key={index_td}>{td}</td>)
              })}
            </tr>)
          })}
        </tbody>
      </table>
  )
}

export default Table
