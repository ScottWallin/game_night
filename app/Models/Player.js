import { generateId } from "../Utils/generateId.js"

export class Player {

  // @param {{id: String, name: String, picture: string}}

  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.picture = data.picture
    this.score = 0
  }


  get TestTemplate() {
    return /*html*/`
    <div class="card m-2 shadow">
    <div class="card-body">
    <h5 class="text-uppercase text-center no-select">
    ${this.name}
    </h5>
    </div>
    <button class="btn btn-success square-top" onclick="app.test.playersController.test('${this.id}')">test</button>
    </div>
    `
  }
}