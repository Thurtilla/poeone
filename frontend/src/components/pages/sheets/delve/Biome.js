import { Col, Row, Table } from 'react-bootstrap'

export class Biome {
    constructor(name, fossils) {
      this.name = name
      this.fossils = fossils
    } 

    asHtml () {
     return (

      <Table bordered hover variant="dark">
      <thead>
      <tr>
          <th className="text-center">{this.name}</th>
      </tr>
      </thead>
      <tbody>
       {this.fossils.map(function(fossil) {
        return (
          <tr>
            {fossil.asHtml() }
            </tr>
         )
      })}
      </tbody>
      </Table>
     )  
    }
}