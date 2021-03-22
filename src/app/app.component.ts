import { Component } from '@angular/core';

//Html datasını yönettiğimiz yer component. attribute gibi @notasyonu ile yazılıyor.
@Component({
  // süslü parantez = obje.
  selector: 'app-root',
  templateUrl: './app.component.html', // kimin componenti? burada setleniyor.
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'northwind';
  user = 'Hüseyin Akman';  
}
