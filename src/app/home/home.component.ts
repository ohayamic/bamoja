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

  imageObjects: Array<Object> = [
      {
        image: 'https://via.placeholder.com/600.png/345',
        thumbImage: 'https://via.placeholder.com/1200.png/345',
        title: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
        alt: 'Image Alt 1',
      }, {
        image: 'https://via.placeholder.com/600.png/643',
        thumbImage: 'https://via.placeholder.com/1200.png/643',
        title: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
        alt: 'Image Alt 2'
      }, {
        image: 'https://via.placeholder.com/600.png/8w4',
        thumbImage: 'https://via.placeholder.com/1200.png/8w4',
        title: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
        alt: 'Image Alt 3'
      }, {
        image: 'https://via.placeholder.com/600.png/347',
        thumbImage: 'https://via.placeholder.com/1200.png/347',
        title: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
        alt: 'Image Alt 4'
      }, {
        image: 'https://via.placeholder.com/600.png/953',
        thumbImage: 'https://via.placeholder.com/1200.png/953',
        title: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
        alt: 'Image Alt 5'
      }
  ];
  constructor() {

  }

  ngOnInit(): void {
  }

}
