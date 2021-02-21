import React from 'react'

//CSS
import '../../../../assets/css/delve.min.css'
import { Col, Row, Table } from 'react-bootstrap'
import { Fossil } from './Fossil';
import { Biome } from './Biome';
import specialDelveIcon from './img/fossils/special_delve_icon.png'
import fractureWallIcon from './img/fossils/fracture_wall_icon.png'

const fracwall = 'wall'
//Fossils 
const aberrant_fossil = new Fossil('Aberrant Fossil', ['More Chaos modifiers', 'No Lightning modifiers'], './img/fossils/aberrant_icon.png')
const aetheric_fossil = new Fossil('Aetheric Fossil', ['More Caster modifiers', 'Fewer Attack modifiers'], './img/fossils/aetheric_icon.png')
const bloodstained_fossil = new Fossil('Bloodstained Fossil', ['Has a Vaal modifier'], './img/fossils/bloodstained_icon.png')
const bound_fossil = new Fossil('Bound Fossil', ['More Minion, Aura or Curse modifiers'], './img/fossils/bound_icon.png')
const corroded_fossil = new Fossil('Corroded Fossil', ['More Physical Ailment or Chaos Ailment modifiers', 'No Elemental modifiers'], './img/fossils/corroded_icon.png')
const dense_fossil = new Fossil('Dense Fossil', ['More Defence modifiers', 'No Life Modifiers'], './img/fossils/dense_icon.png')
const enchanted_fossil = new Fossil('Enchanted Fossil', ['Has a Labyrinth Enchantment'], './img/fossils/enchanted_icon.png')
const encrusted_fossil = new Fossil('Encrusted Fossil', ['More sockets', 'Can have white sockets'], './img/fossils/encrusted_icon.png', './img/fossils/fracture_wall_icon.png')
const faceted_fossil = new Fossil('Faceted Fossil', ['More Gem modifiers'], './img/fossils/faceted_icon.png')
const fractured_fossil = new Fossil('Fractured Fossil', ['Creates a mirrored copy'], './img/fossils/fractured_icon.png', './img/fossils/special_delve_icon.png')
const frigid_fossil = new Fossil('Frigid Fossil', ['More Cold modifiers', 'No Fire modifiers'], './img/fossils/frigid_icon.png')
const gilded_fossil = new Fossil('Gilded Fossil', ['Item is overvalued by vendors'], './img/fossils/gilded_icon.png', './img/fossils/fracture_wall_icon.png')
const glyphic_fossil = new Fossil('Glyphic Fossil', ['Has a Corrupt Essence modifier'], './img/fossils/glyphic_icon.png', './img/fossils/special_delve_icon.png')
const hollow_fossil = new Fossil('Hollow Fossil', ['Has an Abyssal socket'], './img/fossils/hollow_icon.png')
const jagged_fossil = new Fossil('Jagged Fossil', ['More Physical modifiers', 'No Chaos modifiers'], './img/fossils/jagged_icon.png')
const lucent_fossil = new Fossil('Lucent Fossil', ['More Mana modifiers', 'No Speed modifiers'], './img/fossils/lucent_icon.png', './img/fossils/fracture_wall_icon.png')
const metallic_fossil = new Fossil('Metallic Fossil', ['More Lightning modifiers', 'No Physical modifiers'], './img/fossils/metallic_icon.png')
const perfect_fossil = new Fossil('Perfect Fossil', ['Improved Quality'], './img/fossils/perfect_icon.png')
const prismatic_fossil = new Fossil('Prismatic Fossil', ['More Elemental modifiers', 'No Physical Ailment or Chaos Ailment modifiers'], './img/fossils/prismatic_icon.png')
const pristine_fossil = new Fossil('Pristine Fossil', ['More Life modifiers', 'No Defence modifiers'], './img/fossils/pristine_icon.png')
const sanctified_fossil = new Fossil('Sanctified Fossil', ['Numeric modifier values are lucky.', 'High Level modifiers are more common'], './img/fossils/sanctified_icon.png', './img/fossils/fracture_wall_icon.png')
const scorched_fossil = new Fossil('Scorched Fossil', ['More Fire modifiers', 'No Cold modifiers'], './img/fossils/scorched_icon.png')
const serrated_fossil = new Fossil('Serrated Fossil', ['More Attack modifiers', 'Fewer Caster modifiers'], './img/fossils/serrated_icon.png')
const shuddering_fossil = new Fossil('Shuddering Fossil', ['More Speed modifiers', 'No Mana modifiers'], './img/fossils/shuddering_icon.png')
const tangled_fossil = new Fossil('Tangled Fossil', ['Can have any Fossil modifiers'], './img/fossils/tangled_icon.png', './img/fossils/special_delve_icon.png')


//Biomes
const abyssal_depths = new Biome('Abyssal Depths', [hollow_fossil, aberrant_fossil, bound_fossil, gilded_fossil, lucent_fossil])
const frozen_hollow = new Biome('Frozen Hollow', [sanctified_fossil, prismatic_fossil, serrated_fossil, frigid_fossil, glyphic_fossil, shuddering_fossil])
const fungal_caverns = new Biome('Fungal Caverns', [gilded_fossil, corroded_fossil, perfect_fossil, aberrant_fossil, dense_fossil, tangled_fossil])
const magma_fissure = new Biome('Magma Fissure', [encrusted_fossil, enchanted_fossil, pristine_fossil, prismatic_fossil, scorched_fossil, faceted_fossil])
const mines = new Biome('Mines', [aetheric_fossil, pristine_fossil, serrated_fossil, , metallic_fossil])
const petrified_forest = new Biome('Petrified Forest', [sanctified_fossil, corroded_fossil, jagged_fossil, bound_fossil, bloodstained_fossil])
const sulfur_vents = new Biome('Sulfur Vents', [encrusted_fossil, aetheric_fossil, perfect_fossil, metallic_fossil, fractured_fossil])
const allBiomes = [abyssal_depths, petrified_forest, sulfur_vents, magma_fissure, frozen_hollow, fungal_caverns]



export default function Delve() {

    let imageTest = require('./img/fossils/aberrant_icon.png').default

    let heidu = [hollow_fossil, metallic_fossil]

    return (
        <>
            <div className="mt-3 container-fluid">
                <div className="well text-center mb-3">
                    <div>
                      Fossils that can only be obtained by special nodes, is marked with: <img className="" src={specialDelveIcon} />
                    </div>
                    <div>
                        Fossils that can only be obtained behind fractured walls, is marked with this icon: <img className="fossil-icon" src={fractureWallIcon} />
                    </div>
                </div>



                <Row className='justify-content-xs-center'>
                    <Col xs={0} sm={1} md={1} lg={2}> </Col>
                    <Col xs={12} sm={10} md={10} lg={8}> {/*// Max width veldig viktig at den har det */}

                        <Row className="testWidth justify-content-xs-center">

                            {allBiomes.map(function (biome) {
                                return (
                                    <Col xs={12} md={6} lg={4}>
                                        {biome.asHtml()}
                                    </Col>
                                )
                            })}
                        </Row>

                    </Col>
                    <Col xs={0} sm={1} md={1} lg={2} ></Col>
                </Row>
            </div>
        </>
    )
}
