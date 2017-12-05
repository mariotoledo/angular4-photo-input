import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'photo-input',
  templateUrl: './photo-input.component.html',
  styleUrls: ['./photo-input.component.css']
})
export class PhotoInputComponent {

  	isLoading:boolean = false;

    @Input() imageData:string;
    @Output() imageChangeStarted = new EventEmitter<any>();
    @Output() imageChangeEnded = new EventEmitter<any>();
    @Input() disabled: boolean = false;

    constructor() {
    }

    openPhotoSelector() {
        if(!this.isLoading && !this.disabled) {
            const firstInput: any = document.getElementById('photo-input-file');
            firstInput.click();
        }
    }

    onChangePhoto(event) {
        this.imageChangeStarted.emit();
        this.isLoading = true;

        let files = event.srcElement.files;

        if(files && files.length > 0) {
            let image:any = new Image();
            let file:File = files[0];
            let reader:FileReader = new FileReader();
            let vm = this;

            reader.onloadend = function (loadEvent:any) {
                vm.isLoading = false;
                vm.imageData = loadEvent.target.result;
                vm.imageChangeEnded.emit({imageData: vm.imageData, imageSize: file.size});
            };

            reader.readAsDataURL(file);
        } else {
            this.isLoading = false;
            this.imageChangeEnded.emit({imageData: null});
        }       
    }
}
