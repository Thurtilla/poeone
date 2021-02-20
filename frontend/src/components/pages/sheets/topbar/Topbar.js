import React from 'react'
import { Link } from 'react-router-dom';
import fossils_delve_node_icon from '../../../../assets/img/fossils_delve_node_icon.png';
import betrayal_icon from '../../../../assets/img/betrayal_icon.png';
import {Button} from 'react-bootstrap'
export default function Topbar() {
    return (
        <>
        <div className="100vh">
  
            <div className="boxbox d-flex align-items-center justify-content-center topbar">
                <Link to="#delvØØØØØ"><figure>
                    <img className="sheet-img" src={fossils_delve_node_icon} />
                    <figcaption className="text-white text-center"> Delve </figcaption>
                    </figure></Link>
                <Link to="#betrayalØØØØØ"><figure>
                    <img className="sheet-img" src={betrayal_icon} />
                <figcaption className="text-white text-center"> Betrayal </figcaption>
                    </figure></Link>
            </div>
            </div>
        </>

    )
}
