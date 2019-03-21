import React, { Component } from 'react';
import './List.css';

class Accordion extends Component {
    render() {
      return (
        <div className="container">
            <table className="table table-hover">
          <thead>
            <tr>
              <th className="bg-dark head-txt" scope="col">CABLES</th>
              <th className="bg-dark head-txt" scope="col">PART #</th>
             </tr>
          </thead>
          <tbody>
            <tr>
            <td><strong>AUDIO</strong></td>
            </tr>
            <tr>
            <td>SINGLE PAIR</td>

            </tr>
             <tr>
              <th scope="row">Analog Single-Pair Shielded: 22 AWG</th>
            </tr>
            <tr>
              <th scope="row">Analog Single-Pair Shielded: 22 AWG
              <i className="fas fa-fire fa-lg" /> Plenum
              </th>
            </tr>
            <tr>
              <th scope="row">AES/EBU Digital Single-Pair: 24 AWG
              <i class="fas fa-hdd fa-lg" /> Digital
              </th>
            </tr>
            <tr>
              <th scope="row">AES/EBU Digital Single-Pair: 26 AWG
              <i class="fas fa-hdd fa-lg" /> Digital
              </th>
            </tr>
            <td><strong>DUAL PAIR</strong></td>
            <tr>
              <th scope="row">Analog Dual-Pair Shielded: 22 AWG</th>
            </tr>
            </tbody>
          </table>

        </div>


      );
    }
  }
export default Accordion;