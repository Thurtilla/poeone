import React from 'react'
import { Link } from 'react-router-dom';
import fossils_delve_node_icon from '../../../../assets/img/fossils_delve_node_icon.png';
import betrayal_icon from '../../../../assets/img/betrayal_icon.png';
import bestiary_icon from '../../../../assets/img/bestiary_icon.png';
import incursion_icon from '../../../../assets/img/incursion_icon.png';
import heist_icon from '../../../../assets/img/heist_icon.png';
//FOSSILS
import sanctified_icon from '../../../../assets/img/fossils/sanctified_icon.png'
import { Button, Col, OverlayTrigger, Row, Table, Tooltip } from 'react-bootstrap'


//CSS
import '../../../../assets/css/delve.min.css'




export default function Topbar() {
    return (
        <>
            <div>
                <div className="boxbox d-flex align-items-center justify-content-center topbar">
                    <Link to="#delvØØØØØ"><figure>
                        <img className="sheet-img" src={fossils_delve_node_icon} />
                        <figcaption className="text-white text-center"> Delve </figcaption>
                    </figure></Link>
                    <Link to="#betrayalØØØØØ"><figure>
                        <img className="sheet-img" src={betrayal_icon} />
                        <figcaption className="text-white text-center"> Betrayal </figcaption>
                    </figure></Link>
                    <Link to="#bestiaryØØØØ"><figure>
                        <img className="sheet-img" src={bestiary_icon} />
                        <figcaption className="text-white text-center"> Bestiary </figcaption>
                    </figure></Link>
                    <Link to="#bestiaryØØØØ"><figure>
                        <img className="sheet-img" src={incursion_icon} />
                        <figcaption className="text-white text-center"> Incursion </figcaption>
                    </figure></Link>
                    <Link to="#bestiaryØØØØ"><figure>
                        <img className="sheet-img" src={heist_icon} />
                        <figcaption className="text-white text-center"> Heist </figcaption>
                    </figure></Link>

                </div>
                <div className="mt-3 container-fluid">
                    <div className="well text-center mb-3">
                        <div>
                            Legend
                    </div>
                        <div>
                            Fossils behind walls will have <span className="fractured-wall">THIS</span> color
                    </div>
                    </div>



                    <Row>
                        <Col lg={{ span: 2, offset: 4 }}>
                            <Table bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th className="text-center">FROZEN HOLLOW</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="fractured-wall">
                                            <div className=" d-flex align-items-center">
                                                <div className="mr-1">
                                            <img src={sanctified_icon} className=" fossil-icon" />
                                                </div>
                                                <span className="">Sanctified fossil</span>


                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Jacob</td>
                                    </tr>
                                    <tr>
                                        <td>Larry the Bird</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col lg={{ span: 2, offset: 0 }}>
                            <Table bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th className="text-center">FROZEN HOLLOW</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="fractured-wall">
                                            <div className=" d-flex align-items-center">
                                                <div className="d-flex justify-content-center align-items-center mr-1">
                                            <img src={sanctified_icon} className=" fossil-icon" />
                                                </div>
                                                <span className="inline-block ">Sanctified fossil</span>


                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Jacob</td>
                                    </tr>
                                    <tr>
                                        <td>Larry the Bird</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </div>
                <h1>kapp</h1>
                <h1>kapp</h1>
                <h1>kapp</h1>
                <h1>kapp</h1>
                <h1>kapp</h1>
                <h1>kapp</h1>
                <h1>kapp</h1>
                <h1>kapp</h1>
                <h1>kapp</h1>
                <h1>kapp</h1>
                <h1>kapp</h1>
                <h1>kapp</h1>
                <h1>kapp</h1>

            </div>
        </>

    )
}
