import { Component ,ElementRef,ViewChild , AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements AfterViewInit {

  @ViewChild("inputCopyed") inputRef?:ElementRef


  copyText(){
    let text = this.inputRef?.nativeElement.value
    navigator.clipboard.writeText(text)
  }
  ngAfterViewInit(): void {
      
  }
}


