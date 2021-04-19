import React from 'react'
import './header.css';
import Pak from "../pics/pak.png";
import Palm from "../pics/palmtree3.png";



export const Header = () => {

    return (
        <div className="header App flexcol alignitems justify " style={{ marginTop: '2%' }}>

            <table id='title' border="4" bordercolor="#ff0000" style={{ backgroundColor: "white", maxWidth: "80vw", padding: "5%" }}>
                <tbody >
                    <tr>
                        <td align="center" className="padding2">  <h1 style={{ marginBottom: "-3px", fontWeight: "600" }}> Sahar's International Food </h1>

                            <div className="flex justify alignitems " >
                                <img src={Pak} style={{ width: "90px" }} className="padding1 marginright1" alt="header img" />
                                <h1 className="padding1 marginright1" style={{ marginBottom: "-3px", fontWeight: "600" }}>Market</h1>
                                <img src={Palm} style={{ width: "90px" }} alt="header img" />
                            </div>


                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="flexwrap width50 " style={{ marginTop: '1%' }}>
                <hr></hr>
            </div>

            <div style={{ align: 'center' }}>
                <h5>Welcome to our Organic and International Foods Store ☪   </h5>
                <address><a href="https://www.google.com/maps?q=6831+Angola+Rd+Holland,+OH+43528&rlz=1C1CHBF_enUS819US822&um=1&ie=UTF-8&sa=X&ved=2ahUKEwix47j70LPnAhWYK80KHaphCv8Q_AUoAXoECAwQAw" alt="store address"
                    target="_blank" rel="noreferrer">
                    6831 Angola Rd
    Holland, OH 43528</a></address>
            </div>
        </div>
    )
}
