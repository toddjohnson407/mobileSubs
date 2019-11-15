import { Component, OnInit } from "@angular/core";
import { Player } from "./player";
import { PlayerService } from "./player.service";

@Component({
  selector: "ns-player",
  moduleId: module.id,
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"]
})

export class PlayerComponent implements OnInit {

  constructor(
    private PlayerService: PlayerService
  ) { }

  ngOnInit(): void {

  }
}

