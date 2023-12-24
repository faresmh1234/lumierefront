import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';


import * as $ from 'jquery'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
//   element:any
//   current = location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '');
//   navItemClicked = $('.horizontal-menu .page-navigation >.nav-item');
//  body = $('body');
//     contentWrapper = $('.content-wrapper');
//      scroller = $('.container-scroller');
//      footer = $('.footer');
//      sidebar = $('.sidebar');

  constructor(private loginservice:LoginService,
    private router:Router
    ){}

    signout(){
    localStorage.clear()
  this.router.navigateByUrl("/")
  }
  ngOnInit(): void {
    //   this.addActiveClass(this.element)
    //   $('[data-toggle="horizontal-menu-toggle"]').on("click", function() {
    //   $(".horizontal-menu .bottom-navbar").toggleClass("header-toggled");
    // });
    // $('.nav li a', this.sidebar).each(function() {
    //   var $this = $(this);
    //   this.addActiveClass($this);
    // })

    // $('.horizontal-menu .nav li a').each(function() {
    //   var $this = $(this);
    //   this.addActiveClass($this);
    // })
    //   this.applyStyles();
  }
  //  addActiveClass(element) {
  //     if (this.current === "") {
  //       //for root url
  //       if (element.attr('href').indexOf("index.html") !== -1) {
  //         element.parents('.nav-item').last().addClass('active');
  //         if (element.parents('.sub-menu').length) {
  //           element.closest('.collapse').addClass('show');
  //           element.addClass('active');
  //         }
  //       }
  //     } else {
  //       //for other url
  //       if (element.attr('href').indexOf(this.current) !== -1) {
  //         element.parents('.nav-item').last().addClass('active');
  //         if (element.parents('.sub-menu').length) {
  //           element.closest('.collapse').addClass('show');
  //           element.addClass('active');
  //         }
  //         if (element.parents('.submenu-item').length) {
  //           element.addClass('active');
  //         }
  //       }
  //     }
  //   }

  //   //debut




  //   //Close other submenu in sidebar on opening any

  //   this.sidebar.on('show.bs.collapse', '.collapse', function() {
  //     this.sidebar.find('.collapse.show').collapse('hide');
  //   });


  //   // Change sidebar and content-wrapper height


  //    applyStyles() {
  //     //Applying perfect scrollbar
  //     if (!this.body.hasClass("rtl")) {
  //       if ($('.settings-panel .tab-content .tab-pane.scroll-wrapper').length) {
  //         const settingsPanelScroll = new PerfectScrollbar('.settings-panel .tab-content .tab-pane.scroll-wrapper');
  //       }
  //       if ($('.chats').length) {
  //         const chatsScroll = new PerfectScrollbar('.chats');
  //       }
  //       if (body.hasClass("sidebar-fixed")) {
  //         if($('#sidebar').length) {
  //           var fixedSidebarScroll = new PerfectScrollbar('#sidebar .nav');
  //         }
  //       }
  //     }
  //   }

  //   $('[data-toggle="minimize"]').on("click", function() {
  //     if ((this.body.hasClass('sidebar-toggle-display')) || (this.body.hasClass('sidebar-absolute'))) {
  //       this.body.toggleClass('sidebar-hidden');
  //     } else {
  //       this.body.toggleClass('sidebar-icon-only');
  //     }
  //   });

  //   //checkbox and radios
  //   $(".form-check label,.form-radio label").append('<i class="input-helper"></i>');

  //   //Horizontal menu in mobile
  //   $('[data-toggle="horizontal-menu-toggle"]').on("click", function() {
  //     $(".horizontal-menu .bottom-navbar").toggleClass("header-toggled");
  //   });
  //   // Horizontal menu navigation in mobile menu on click

  //   this.navItemClicked.on("click", function(event) {
  //     if(window.matchMedia('(max-width: 991px)').matches) {
  //       if(!($(this).hasClass('show-submenu'))) {
  //         this.navItemClicked.removeClass('show-submenu');
  //       }
  //       $(this).toggleClass('show-submenu');
  //     }
  //   })

  //   $(window).scroll(function() {
  //     if(window.matchMedia('(min-width: 992px)').matches) {
  //       var header = $('.horizontal-menu');
  //       if ($(window).scrollTop() >= 70) {
  //         $(header).addClass('fixed-on-scroll');
  //       } else {
  //         $(header).removeClass('fixed-on-scroll');
  //       }
  //     }
  //   });
  // });

  // // focus input when clicking on search icon
  // $('#navbar-search-icon').click(function() {
  //   $("#navbar-search-input").focus();
  // });



  //   //fin



}
