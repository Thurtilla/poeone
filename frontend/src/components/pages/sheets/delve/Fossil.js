export class Fossil {
  constructor(name, mods, icon, special) {
    this.name = name
    this.mods = mods
    this.icon = icon ? require(`${icon}`).default : 'https://stayhipp.com/wp-content/uploads/2020/08/ezgif-1-3752ab32ad69.gif'
    this.special = special ? require(`${special}`).default : ''
  }

  asHtml() {
    return (
        <td className={(this.special === 'wall') ? "fractured-wall" : ''}>
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
    )
  }
}