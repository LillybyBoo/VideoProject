import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {CardModel} from "./card/card-model";
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Video';

  bodyText: string;


  @Output()
  scrollingFinished = new EventEmitter<void>();

  emitted = false;

  @HostListener("window:scroll", [])

  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !this.emitted) {
      this.emitted = true;
      this.scrollingFinished.emit();
    } else if ((window.innerHeight + window.scrollY) < document.body.offsetHeight) {
      this.emitted = false;
    }

  }

  ngOnInit() {
  }


  constructor(private router: Router) {
  }


  posts: CardModel[] = [

    {
      videoUrl: './assets/wow.mp4',
      title: 'First experience',
      description: 'Start of longest journey',
      id: 1,
      poster: './assets/posters/classic.jpg',
      tag: 'classic,vanila'
    },
    {
      videoUrl: './assets/wow-bc.mp4',
      title: 'First addon',
      description: 'Elf or Draenei?',
      id: 2,
      poster: './assets/posters/burcr.jpg',
      tag: 'bc, burning, crusade'
    },
    {
      videoUrl: './assets/wow-lk.mp4',
      title: 'Second addon',
      description: 'Welcome back, your frozy highness!',
      id: 3,
      poster: './assets/posters/lich.jpg',
      tag: 'lich, wotlk'
    },
    {
      videoUrl: './assets/wow-cata.mp4',
      title: 'Third addon',
      description: 'On left wing of Deathwing',
      id: 4,
      poster: './assets/posters/cataclysm.jpg',
      tag: 'cata, cataclysm'
    },
    {
      videoUrl: './assets/wow-panda.mp4',
      title: 'Fourth addon',
      description: 'Se...Nope, just regular panda',
      id: 5,
      poster: './assets/posters/panda.jpg',
      tag: 'panda, myst'
    },
    {
      videoUrl: './assets/wow-wod.mp4',
      title: 'Fifth addon',
      description: 'Bye-bye last Hellscream!',
      id: 6,
      poster: './assets/posters/wod.jpg',
      tag: 'warlords, garrosh'
    },
    {
      videoUrl: './assets/wow-leg.mp4',
      title: 'Sixth addon',
      description: 'Back in the basics',
      id: 7,
      poster: './assets/posters/legion.jpg',
      tag: 'illidan, guldan'
    },
    {
      videoUrl: './assets/wow-bfa.mp4',
      title: 'Seventh addon',
      description: 'Old banshee vs. young lion',
      id: 8,
      poster: './assets/posters/bfa.jpg',
      tag: 'troll, human'
    },

  ]

}
