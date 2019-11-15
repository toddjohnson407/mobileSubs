import { Component, OnInit } from "@angular/core";
import { Roster } from "./roster";
import { RosterService } from "./roster.service";
import { Player } from "./player/player";
import { FormControl } from "@angular/forms";
 
@Component({
  selector: "ns-roster",
  templateUrl: "./roster.component.html",
  styleUrls: ["./roster.component.css"]
})

export class RosterComponent implements OnInit {

  /** Array of Players */
  players: Array<Player> = [];
  /** Form for adding Players to a Roster */
  rosterForm: Roster;

  title: FormControl;

  // plusIcon = String.fromCharCode(xf067);

  constructor(
    private RosterService: RosterService,
  ) {
    this.title = new FormControl('');
    this.addPlayer();
    this.rosterForm = {
      title: '',
      players: this.players
    }
  }

  ngOnInit(): void {
    console.log('rosterForm', this.rosterForm);
  }

  /** Returns a new FormGroup for a new Player */
  createPlayer = (): Player => ({ name: '', position: '' });

  /** Pushes created Player to FormArray */
  addPlayer = (): any => {
    this.players.push(this.createPlayer());
    console.log('-----------------');
    console.log(this.players);
    console.log(this.rosterForm);
  }

  /** Submits new Roster data */
  createRoster(): void {
    console.log(this.players);
    console.log(this.rosterForm);
  }

}

