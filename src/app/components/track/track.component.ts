import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'track',
  template: `
    <div *ngIf="track">
      <h1>{{ track.name }}</h1>

      <p>
        <img src="{{ track.album.images[1].url }}">
      </p>

      <p>
        <audio controls src="{{ track.preview_url }}"></audio>
      </p>

      <p><a href (click)="back()">Back</a></p>
    </div>
  `
})
export class TrackComponent implements OnInit {
  id: string;
  track: Object;

  constructor(
    private route: ActivatedRoute, 
    private spotify: SpotifyService,
    private location: Location) {
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit() {
    this.spotify
      .getTrack(this.id)
      .subscribe((res: any) => this.renderTrack(res));
  }

  back(): void {
    this.location.back();
  }

  renderTrack(res: any): void {
    this.track = res;
  }

}
