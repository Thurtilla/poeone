import React from 'react'
import { Link } from 'react-router-dom';
import fossils_delve_node_icon from '../../../../assets/img/fossils_delve_node_icon.png';
import betrayal_icon from '../../../../assets/img/betrayal_icon.png';
import bestiary_icon from '../../../../assets/img/bestiary_icon.png';
import incursion_icon from '../../../../assets/img/incursion_icon.png';
import heist_icon from '../../../../assets/img/heist_icon.png';


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

            </div>
        </>

    )
}
