import React, { Component } from 'react';
import './List.css';

class List extends Component {
    render() {
      return (
        <div className="container">
          <table className="table table-hover">
            <thead>
              <tr>
                <th className="bg-dark head-tbl" scope="col">CABLES</th>
                <th className="bg-dark head-tbl" scope="col">PART #</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="audio"><strong>AUDIO</strong></td>
                <td className="audio"></td>
              </tr>
              <tr>
                <th scope="row">SINGLE PAIR</th>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Analog Single-Pair Shielded: 22 AWG</th>
                <td>SPA22GS</td>
              </tr>
              <tr>
                <th scope="row">Analog Single-Pair Shielded: 22 AWG Plenum
                <i className="fas fa-fire fa-lg" /> 
                </th>
                <td>SPA22GS-PLEN</td>
              </tr>
              <tr>
                <th scope="row">AES/EBU Digital Single-Pair: 24 AWG
                <i class="fas fa-hdd fa-lg" />
                </th>
                <td>901</td>
              </tr>
              <tr>
                <th scope="row">AES/EBU Digital Single-Pair: 26 AWG
                <i class="fas fa-hdd fa-lg" />
                </th>
                <td>801</td>
              </tr>
              <tr>
                <th scope="row">DUAL PAIR</th>
                <td></td>
              </tr>
            </tbody>
          </table>

        </div>


      );
    }
  }
export default List;