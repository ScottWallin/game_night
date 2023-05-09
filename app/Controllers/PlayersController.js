import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";
import { playersServices } from "../Services/PlayersService.js";
import { Player } from "../Models/Player.js";

function test() {
  let testTemplate = ''
  appState.values.forEach(v => testTemplate += v.TestTemplate)
  setHTML('test', /*html*/`
    <button class="btn btn-success text-white" onclick="test.playersController.test()"> test <button>
  `)
}










export class PlayersController {
  constructor() {
    console.log(appState.players)
    test()
  }
}