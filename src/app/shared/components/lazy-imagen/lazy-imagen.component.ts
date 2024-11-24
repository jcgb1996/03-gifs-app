import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-imagen',
  standalone: false,

  templateUrl: './lazy-imagen.component.html',
  styleUrl: './lazy-imagen.component.css'
})
export class LazyImagenComponent implements OnInit {

    @Input()
    public url!: string;

    @Input()
    public alt: string = '';

    public hasLoaded: boolean = false;

    ngOnInit(): void {
        if(!this.url) throw new Error('Url es requerida');
    }

    onLoad(): void{
      console.log('imagen loaded');
      this.hasLoaded = true;
    }


}
