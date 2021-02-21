import React from 'react'


//FOSSILS
// import sanctified_icon from '../../../../assets/img/fossils/sanctified_icon.png'
// import prismatic_icon from '../../../../assets/img/fossils/prismatic_icon.png'
// import serrated_icon from '../../../../assets/img/fossils/serrated_icon.png'
// import frigid_icon from '../../../../assets/img/fossils/frigid_icon.png'
// import glyphic_icon from '../../../../assets/img/fossils/glyphic_icon.png'
// import encrusted_icon from '../../../../assets/img/fossils/encrusted_icon.png'
// import aetheric_icon from '../../../../assets/img/fossils/aetheric_icon.png'
// import perfect_icon from  '../../../../assets/img/fossils/perfect_icon.png'
// import metallic_icon from  '../../../../assets/img/fossils/metallic_icon.png'


//CSS
import '../../../../assets/css/delve.min.css'
import { Col, Row, Table } from 'react-bootstrap'
import { Fossil } from './Fossil';
import { Biome } from './Biome';

const fracwall = 'wall'
//Fossils 
const aberrant_fossil = new Fossil('Aberrant Fossil', ['More Chaos modifiers', 'No Lightning modifiers'], './img/fossils/aberrant_icon.png')
const aetheric_fossil = new Fossil('Aetheric Fossil', ['More Caster modifiers', 'Fewer Attack modifiers'], './img/fossils/aetheric_icon.png', 'Can only drop in the Azurite Mine.')
const bloodstained_fossil = new Fossil('Bloodstained Fossil', ['Has a Vaal modifier'], './img/fossils/bloodstained_icon.png')
const bound_fossil = new Fossil('Bound Fossil', ['More Minion, Aura or Curse modifiers'], './img/fossils/bound_icon.png')
const corroded_fossil = new Fossil('Corroded Fossil', ['More Physical Ailment or Chaos Ailment modifiers', 'No Elemental modifiers'], './img/fossils/corroded_icon.png', 'Can only drop in the Azurite Mine.')
const dense_fossil = new Fossil('Dense Fossil', ['More Defence modifiers', 'No Life Modifiers'], './img/fossils/dense_icon.png', 'Can only drop in the Azurite Mine.')
const enchanted_fossil = new Fossil('Enchanted Fossil', ['Has a Labyrinth Enchantment'], './img/fossils/enchanted_icon.png')
const encrusted_fossil = new Fossil('Encrusted Fossil', ['More sockets', 'Can have white sockets'], './img/fossils/encrusted_icon.png')
const faceted_fossil = new Fossil('Faceted Fossil', ['More Gem modifiers'], './img/fossils/faceted_icon.png')
const fractured_fossil = new Fossil('Fractured Fossil', ['Creates a mirrored copy'], './img/fossils/fractured_icon', 'Humid Fissure nodes only')
const frigid_fossil = new Fossil('Frigid Fossil', ['More Cold modifiers', 'No Fire modifiers'], './img/fossils/frigid_icon.png')
const gilded_fossil = new Fossil('Gilded Fossil', ['Item is overvalued by vendors'], './img/fossils/gilded_icon.png', fracwall)
const glyphic_fossil = new Fossil('Glyphic Fossil', ['Has a Corrupt Essence modifier'], './img/fossils/glyphic_icon.png', 'Time-Lost Cavern nodes only')
const hollow_fossil = new Fossil('Hollow Fossil', ['Has an Abyssal socket'], './img/fossils/hollow_icon.png')
const jagged_fossil = new Fossil('Jagged Fossil', ['More Physical modifiers', 'No Chaos modifiers'], './img/fossils/jagged_icon.png')
const lucent_fossil = new Fossil('Lucent Fossil', ['More Mana modifiers', 'No Speed modifiers'], './img/fossils/lucent_icon.png', fracwall)
const metallic_fossil = new Fossil('Metallic Fossil', ['More Lightning modifiers', 'No Physical modifiers'], './img/fossils/metallic_icon.png')
const perfect_fossil = new Fossil('Perfect Fossil', ['Improved Quality'], './img/fossils/perfect_icon.png')
const prismatic_fossil = new Fossil('Prismatic Fossil', ['More Elemental modifiers', 'No Physical Ailment or Chaos Ailment modifiers'], prismatic_icon)
const pristine_fossil = new Fossil('Pristine Fossil', ['More Life modifiers', 'No Defence modifiers'], './img/fossils/pristine_icon.png')
const sanctified_fossil = new Fossil('Sanctified Fossil', ['Numeric modifier values are lucky.', 'High Level modifiers are more common'], sanctified_icon, fracwall)
const scorched_fossil = new Fossil('Scorched Fossil', ['More Fire modifiers', 'No Cold modifiers'], './img/fossils/scorched_icon.png')
const serrated_fossil = new Fossil('Serrated Fossil', ['More Attack modifiers', 'Fewer Caster modifiers'], './img/fossils/serrated_icon.png')
const shuddering_fossil = new Fossil('Shuddering Fossil', ['More Speed modifiers', 'No Mana modifiers'], './img/fossils/shuddering_icon.png')
const tangled_fossil = new Fossil('Tangled Fossil', ['Can have any Fossil modifiers'], './img/fossils/tangled_icon.png', 'Can be dropped from Haunted Tomb node, spawnable only in Fungal Caverns biome')


//Biomes
const abyssal_depths = new Biome('Abyssal Depths', [hollow_fossil, aberrant_fossil, bound_fossil, gilded_fossil, lucent_fossil])
const frozen_hollow = new Biome('Frozen Hollow', [sanctified_fossil, prismatic_fossil, serrated_fossil, frigid_fossil, glyphic_fossil, shuddering_fossil])
const fungal_caverns = new Biome('Fungal Caverns', [gilded_fossil, corroded_fossil, perfect_fossil, aberrant_fossil, dense_fossil, tangled_fossil])
const magma_fissure = new Biome('Magma Fissure', [encrusted_fossil, enchanted_fossil, pristine_fossil, prismatic_fossil, scorched_fossil, faceted_fossil])
const mines = new Biome('Mines', [aetheric_fossil, pristine_fossil, serrated_fossil, ,metallic_fossil])
const petrified_forest = new Biome('Petrified Forest', [sanctified_fossil, corroded_fossil, jagged_fossil, bound_fossil, bloodstained_fossil])
const sulfur_vents = new Biome('Sulfur Vents', [encrusted_fossil, aetheric_fossil, perfect_fossil, metallic_fossil, fractured_fossil])

export default function Delve() {

    console.log(frozen_hollow)
    const fossils = {
        'FROZEN HOLLOW': {
            'Sanctified Fossil': {
                ico: sanctified_icon, mods: [],
                caption: `Numeric modifier values are lucky. <br /> High Level modifiers are more common`
            },
            'Prismatic Fossil': {
                ico: sanctified_icon, mods: [],
                caption: `More Elemental modifiers <br />
                No Physical Ailment or Chaos Ailment modifiers`
            }
        }
    }

    return (
        <>
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
        </>
    )
}
