import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";
import { playersServices } from "../Services/PlayersService.js";
import { Player } from "../Models/Player.js";

function test() {
  let testTemplate = ''
  appState.players.forEach(v => testTemplate += v.TestTemplate)
  setHTML('test', testTemplate)
}










export class PlayersController {
  constructor() {
    console.log(appState.players)
    test()
  }
}