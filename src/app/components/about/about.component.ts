import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
downloadFile(){
  const link = document.createElement('a');
  link.href = 'public/Nirmali - Intern SE.pdf'; // Replace with your file path
  link.download = 'https://drive.google.com/file/d/1_IzhGJ-7wpGQ9p0kK3kivgEE3-hUp6iK/view?usp=drivesdk'; // Rename the downloaded file
  link.click();
}
}
