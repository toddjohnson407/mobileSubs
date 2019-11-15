import { Component, OnInit } from "@angular/core";
import { Roster } from "./roster";
import { RosterService } from "./roster.service";
import { Player } from "./player/player";

@Component({
  selector: "ns-roster",
  moduleId: module.id,
  templateUrl: "./roster.component.html",
  styleUrls: ["./roster.component.css"]
})

export class RosterComponent implements OnInit {

  /** Array of Players */
  players: Array<Player> = [];
  /** Form for adding Players to a Roster */
  rosterForm: Roster;

  constructor(
    private RosterService: RosterService,
  ) {
    this.addPlayer();
    this.rosterForm = {
      title: '',
      players: this.players
    }
  }

  ngOnInit(): void {
    console.log('Module', module.id);
    console.log('rosterForm', this.rosterForm);
    console.log('rosterForm players', this.rosterForm.players);
    console.log('players', this.players);
  }

  /** Returns a new FormGroup for a new Player */
  createPlayer = (): Player => ({ name: '', position: '' });

  /** Pushes created Player to FormArray */
  addPlayer = (): any => this.players.push(this.createPlayer());

  /** Submits new Roster data */
  createRoster(): void {
    console.log(this.players);
    console.log(this.rosterForm);
  }

}

