import { Component, OnInit } from '@angular/core';

export interface Image {
  userId: string
  id: string
  title: string
  completed: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

imageObject = [{
      image: "https://thumbs.dreamstime.com/z/building-materials-store-19319471.jpg",
      thumbImage: "https://thumbs.dreamstime.com/z/building-materials-store-19319471.jpg",
      title: 'Hummingbirds are amazing creatures',
  }, {
      image: 'https://www.umweltbundesamt.de/sites/default/files/medien/377/bilder/bauprodukte_photo5000_fotolia.com_37139765_m.jpg',
      thumbImage: 'https://www.umweltbundesamt.de/sites/default/files/medien/377/bilder/bauprodukte_photo5000_fotolia.com_37139765_m.jpg',
      title: 'Hummingbirds are amazing creatures'
  }, {
      image: 'https://i0.wp.com/www.onlinecivilforum.com/site/wp-content/uploads/2018/12/Storage-of-Construction-Materials-1.jpg?fit=1200%2C630&ssl=1',
      thumbImage: 'https://i0.wp.com/www.onlinecivilforum.com/site/wp-content/uploads/2018/12/Storage-of-Construction-Materials-1.jpg?fit=1200%2C630&ssl=1',
      title: 'Example with title.'
  },{
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZHY3LzwS9pfQeQCKBT4Xrg6JGvtedVmMeqA&usqp=CAU',
      thumbImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZHY3LzwS9pfQeQCKBT4Xrg6JGvtedVmMeqA&usqp=CAU',
      title: 'Hummingbirds are amazing creatures'
  }, {
      image: 'https://totalbm.com/wp-content/uploads/2019/08/Slider-Blocks.jpg',
      thumbImage: 'https://totalbm.com/wp-content/uploads/2019/08/Slider-Blocks.jpg',
      title: 'Hummingbirds are amazing creatures'
  }, {
      image: 'https://www.bricknbolt.com/assets/images/temp/supply-chain-banner_msite.png',
      thumbImage: 'https://www.bricknbolt.com/assets/images/temp/supply-chain-banner_msite.png',
      title: 'Example two with title.'
  }];

  imageObjects = [
      {
        image: 'https://media.istockphoto.com/photos/metal-profiles-and-tubes-different-stainless-steel-products-picture-id646996026?k=20&m=646996026&s=612x612&w=0&h=oL0yGUWY37uEZnhJ7VIRutsa62p847uIUSi3x_9VGn4=',
        title: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
        alt: 'Image Alt 1',
      }, {
        image: 'https://media.istockphoto.com/photos/roof-under-construction-with-stacks-of-roof-tiles-ready-to-fasten-picture-id1184431993?k=20&m=1184431993&s=612x612&w=0&h=Sxv_oSDLpWb9U11fZvzFjfQ5WGE446g1ojERm6LWfT4=',
        title: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
        alt: 'Image Alt 2'
      }, {
        image: 'https://media.istockphoto.com/photos/pile-of-wire-rod-or-coil-for-industrial-usage-picture-id503866878?k=20&m=503866878&s=612x612&w=0&h=oM5DqfOQCN8WyX1XX1G-uwDyvOAqpbjUT8o3KVVULKw=',
        title: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
        alt: 'Image Alt 3'
      }, {
        image: 'https://media.istockphoto.com/photos/stack-of-old-wooden-railway-sleepers-background-pattern-picture-id533048604?k=20&m=533048604&s=612x612&w=0&h=WvaIsAhApwFR-We8xP1NXl3RsIcvRVvkhoUmv6Qw5A4=',
        title: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
        alt: 'Image Alt 4'
      }, {
        image: 'https://media.istockphoto.com/photos/looking-for-the-right-angle-picture-id168356310?b=1&k=20&m=168356310&s=170667a&w=0&h=5IgvqW4V3PFWgMUiFZ2lQOot_L9IRqg9jicbgOQ9Kz0=',
        title: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
      }, {
        image: 'https://images.unsplash.com/photo-1580810734754-711d6c5d55b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVpbGRpbmclMjBtYXRlcmlhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        title: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
        alt: 'Image Alt 5'
      }
  ];
  constructor() {

  }

  ngOnInit(): void {
  }

}
