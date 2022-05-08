import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  templateUrl: './creation-stagiaire.component.html'
})
export class CreationStagiaireComponent implements OnInit {

  constructor(
    private location: Location,
  ) {}

  ngOnInit(): void {
  }

  back() {
    this.location.back();
  }
}
