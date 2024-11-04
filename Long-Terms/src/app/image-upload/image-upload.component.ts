import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {

  selectedFile: File | null = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile, this.selectedFile.name);

      this.http.post('YOUR_BACKEND_URL/upload', formData).subscribe(
        (response) => {
          console.log('Image uploaded successfully!', response);
        },
        (error) => {
          console.error('Error uploading image', error);
        }
      );
    } else {
      console.error('No file selected');
    }
  }

}
