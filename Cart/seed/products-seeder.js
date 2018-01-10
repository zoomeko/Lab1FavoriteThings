var Product = require('../modules/product');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shoppingCart');

var products = [
    new Product({
    imagePath: 'https://images-na.ssl-images-amazon.com/images/I/51wAFbJCEwL._SL250_.jpg',
    title: 'python programming book',
    description: 'code for bigginners',
    price: 99.99
}),
    new Product({
        imagePath: 'https://www.packtpub.com/sites/default/files/9781784396992.png',
        title: 'python functional programming book',
        description: 'code for advanced',
        price: 107.99
    }),
   new Product({
    imagePath: 'http://01eba9f59936628a9c10-a672e330d72d3d2e689cb64015c1f8c5.r97.cf2.rackcdn.com/javascript-and-jquery-book-cover.png',
    title: 'Javascript and JQuery',
    description: 'web for advanced',
    price: 149.99
}),

       new Product({
           imagePath: 'https://images-na.ssl-images-amazon.com/images/I/41Z2swEmwaL._SX396_BO1,204,203,200_.jpg',
           title: 'html and css',
           description: 'hmtl for begginners',
           price: 34.99
       }),
           new Product({
               imagePath: 'https://images-na.ssl-images-amazon.com/images/I/514yv2NiNOL._SX405_BO1,204,203,200_.jpg',
               title: 'Networking essentials',
               description: 'intermidiate level',
               price: 40.00
           }),
           new Product({
               imagePath: 'http://01eba9f59936628a9c10-a672e330d72d3d2e689cb64015c1f8c5.r97.cf2.rackcdn.com/javascript-and-jquery-book-cover.png',
               title: 'Javascript and JQuery',
               description: 'code for intermidieate',
               price: 99.99
               }),
           new Product({
               imagePath: 'http://3.bp.blogspot.com/-pvW2rov59z8/VEThkg_p5zI/AAAAAAAAC8o/b_e1rA6_Dww/s1600/Programming%2BWith%2BJava.jpeg',
               title: 'Java programming',
               description: 'code for advanced',
               price: 122.99
                   }),
            new Product({
               imagePath: 'https://images.tandf.co.uk/common/jackets/amazon/978143985/9781439852798.jpg',
               title: 'Computer graphics',
               description: 'designining for advanced',
               price: 100.99
           }),

            new Product({
                imagePath: '    http://ecx.images-amazon.com/images/I/51qWSqxkgJL.jpg',
                title: 'python functional programming book',
                description: 'code for advanced',
                price: 99.99
            })
];
 var done = 0;
for (var i = 0; i < products.length; i++){
    products[i].save(function(err, result) {
        done++;
        if(done === products.length){
            exit();
        }

    });
}
      function exit() {
           mongoose.disconnect();

      }