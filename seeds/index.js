const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            // YOUR USER ID
            author: '667d1cd6c36f91631dddf5af',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)}, ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat minus reiciendis temporibus, eos iure nihil ipsa odio amet quia consequuntur fugiat facere voluptate delectus consectetur illo eaque? Veniam, voluptatem unde.',
            price,
            geometry: {
                type: 'Point',
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,

                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dc2jnmeoc/image/upload/v1720456622/YelpCamp/f3uald6phesskkxezghe.jpg',
                    filename: 'YelpCamp/f3uald6phesskkxezghe',
                },
                {
                    url: 'https://res.cloudinary.com/dc2jnmeoc/image/upload/v1720456622/YelpCamp/phidrfb2yqiyhbohz55c.jpg',
                    filename: 'YelpCamp/phidrfb2yqiyhbohz55c',
                },
                {
                    url: 'https://res.cloudinary.com/dc2jnmeoc/image/upload/v1720456623/YelpCamp/oeuqtzzjsyn0claydjz8.jpg',
                    filename: 'YelpCamp/oeuqtzzjsyn0claydjz8',
                },
                {
                    url: 'https://res.cloudinary.com/dc2jnmeoc/image/upload/v1720456623/YelpCamp/jcqgzirhy6gnoix1phiz.jpg',
                    filename: 'YelpCamp/jcqgzirhy6gnoix1phiz',
                },
                {
                    url: 'https://res.cloudinary.com/dc2jnmeoc/image/upload/v1720456624/YelpCamp/qpgj86yhkhoccikxig38.jpg',
                    filename: 'YelpCamp/qpgj86yhkhoccikxig38',
                },
                {
                    url: 'https://res.cloudinary.com/dc2jnmeoc/image/upload/v1720456625/YelpCamp/bhzgu0gkyyxtdp0uigxw.jpg',
                    filename: 'YelpCamp/bhzgu0gkyyxtdp0uigxw',
                },
                {
                    url: 'https://res.cloudinary.com/dc2jnmeoc/image/upload/v1720456626/YelpCamp/lttpkb9pjf3krobayrf0.jpg',
                    filename: 'YelpCamp/lttpkb9pjf3krobayrf0',
                },
                {
                    url: 'https://res.cloudinary.com/dc2jnmeoc/image/upload/v1720456630/YelpCamp/lh7r6ri0qxstisyyvie2.jpg',
                    filename: 'YelpCamp/lh7r6ri0qxstisyyvie2',
                }
            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})