import React from 'react';
import './Table.css';
import numeral from 'numeral';

function Table({ countries }) {
    return (
        <div className="table">
            <table>
                <tbody>
                    {countries.map(({ country, cases }) => (
                        <tr>
                            <td>{country}</td>
                            <td><strong>{numeral(cases).format()}</strong></td>
                        </tr>
                    ))} 
                </tbody>
            </table>
        </div>
    )
}

export default Table
