import { OverlayTrigger, Tooltip } from "react-bootstrap"

export class Fossil {
  constructor(name, mods, icon, special, specialMod, specialColor) {
    this.name = name
    this.mods = mods
    this.icon = icon ? require(`${icon}`).default : 'https://stayhipp.com/wp-content/uploads/2020/08/ezgif-1-3752ab32ad69.gif'
    this.special = special ? require(`${special}`).default : ''
    this.specialMod = specialMod || ''
    this.specialColor = specialColor
  }
  getName() {
    return this.name
  }

  modsFormatted() {
      return this.mods.map((mod, index) => {
        return (mod.lenght === index + 1) ? mod : (<> {mod} <br /> </>)
      })
  }

  asHtml() {
    return (

      <OverlayTrigger
        placement={'top'}
        delay={{ show: 100, hide: 0 }}
        overlay={
           <Tooltip> 
            {this.modsFormatted()}
            {console.log(this.specialMod + ' ' + this.specialColor)}
            {this.specialMod != '' ? <> <b><span style={{color: this.specialColor}}>{this.specialMod}</span></b></> : null}
        </Tooltip>
        }
      >
        <td key={this.name} className={(this.special === 'wall') ? "fractured-wall" : ''}>
          <div className=" d-flex align-items-center">

            <div className="mr-1">
              <img src={this.icon} className="fossil-icon" />
            </div>
            <span>{this.name}</span>
            {this.special != '' ?
              <div className="ml-2">
                <img src={this.special} className="fossil-icon" />
              </div> : null}


          </div>
        </td>
      </OverlayTrigger>
    )
  }
}