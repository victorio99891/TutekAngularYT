import {Component, OnInit} from '@angular/core';
import {HttpJsonService} from '../service/http-json.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {

  constructor(private http: HttpJsonService) {
  }

  selectedFile: File;

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {

    let form = new FormData();
    form.append('file', this.selectedFile);
    this.http.uploadFileIntoServer(form).subscribe();
  }

  ngOnInit() {
  }


}
