import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit{

  imgCollection = [
    {
      image: '../assets/6.webp',
      thumbImage: '../assets/6.webp',
      alt: 'Image 1',
      title: 'Image 1'
    }, {
      image: '../assets/8.jpg',
      thumbImage: '../assets/8.jpg',
      title: 'Image 2',
      alt: 'Image 2'
    }, {
      image: '../assets/1.jpg',
      thumbImage: '../assets/1.jpg',
      title: 'Image 3',
      alt: 'Image 3'
    }, {
      image: '../assets/2.jpg',
      thumbImage: '../assets/2.jpg',
      title: 'Image 4',
      alt: 'Image 4'
    }, {
      image: '../assets/3.jpg',
      thumbImage: '../assets/3.jpg',
      title: 'Image 5',
      alt: 'Image 5'
    }, {
      image: '../assets/8.jpg',
      thumbImage: '../assets/8.jpg',
      title: 'Image 6',
      alt: 'Image 6'
    }, {
      image: '../assets/10.webp',
      thumbImage: '../assets/10.webp',
      title: 'Image 6',
      alt: ''
    }, {
      image: '../assets/4.jpg',
      thumbImage: '../assets/4.jpg',
      title: 'Image 6',
      alt: ''
    }, {
      image: '../assets/8.jpg',
      thumbImage: '../assets/8.jpg',
      title: 'Image 6',
      alt: ''
    }, {
      image: '../assets/6.webp',
      thumbImage: '../assets/6.webp',
      title: 'Image 6',
      alt: ''
    }, {
      image: '../assets/4.jpg',
      thumbImage: '../assets/4.jpg',
      title: 'Image 6',
      alt: ''
    }, {
      image: '../assets/4.jpg',
      thumbImage: '../assets/4.jpg',
      title: 'Image 6',
      alt: ''
    }, {
      image: '../assets/4.jpg',
      thumbImage: '../assets/4.jpg',
      title: 'Image 6',
      alt: ''
    }, {
      image: '../assets/4.jpg',
      thumbImage: '../assets/4.jpg',
      title: 'Image 6',
      alt: ''
    }, {
      image: '../assets/4.jpg',
      thumbImage: '../assets/4.jpg',
      title: 'Image 6',
      alt: ''
    }, {
      image: '../assets/4.jpg',
      thumbImage: '../assets/4.jpg',
      title: 'Image 6',
      alt: ''
    }, 
    

  ]

  constructor() {}

  ngOnInit(): void {
    
  }

  }




