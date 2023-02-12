import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    (function ($) {
    var win = navigator.platform.indexOf('Win') > -1;
    if (win && document.querySelector('#sidenav-scrollbar')) {
      var options = {
        damping: '0.5'
      }

      //Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);


    }
  })(jQuery);
  }

}
