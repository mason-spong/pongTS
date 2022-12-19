enum GameStates {
  Menu = "Menu",
  Playing = "Playing",
  GameOver = "GameOver",
}

export enum PlayerSelectOptions {
  One = "One",
  Two = "Two",
}

export enum GameOverMenuOptions {
  Replay = "Replay",
  Menu = "Menu",
}

export class GameStateMachine {
  private _state: GameStates;
  constructor() {
    this._state = GameStates.Menu;
  }

  get state() {
    return this._state;
  }

  signalPlayerSelected(player: PlayerSelectOptions) {}

  signalPointScored(player: PlayerSelectOptions) {}

  signalGameOverMenuSelected(option: GameOverMenuOptions) {}
}
