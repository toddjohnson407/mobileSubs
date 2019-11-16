import { Component, OnInit } from "@angular/core";
import { Game } from "./game";
import { GameService } from "./game.service";

@Component({
  selector: "ns-game",
  moduleId: module.id,
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"]
})

export class GameComponent implements OnInit {

  constructor(
    private GameService: GameService
  ) { }

  ngOnInit(): void {

  }
}

