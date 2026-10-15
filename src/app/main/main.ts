import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  imports: [FormsModule],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
  title:string ='the lord of the rings'
  description:string = 'cacascascacsacsacacascacasxacfdevfffdvfdv'
  year:number=2001
  rating:number=8.9
  genre:string='სათაგადასავლო'
  URL:string='https://upload.wikimedia.org/wikipedia/en/f/fb/Lord_Rings_Fellowship_Ring.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original'
  officialSite:string='https://www.lotr.com/'


showMessage(){
  alert('ფილმი:'+this.title)
}
}
