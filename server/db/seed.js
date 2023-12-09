const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const bcrypt = require('bcrypt');
const SALT_COUNT = 10;

async function main() {
    //seeding category table
    await prisma.category.upsert({
        where: { name: 'Clothing & Jewelry' },
        update: {},
        create: {
            name: 'Clothing & Jewelry'
        }
    });
    await prisma.category.upsert({
        where: { name: 'Toys' },
        update: {},
        create: {
            name: 'Toys'
        }
    });
    await prisma.category.upsert({
        where: { name: 'Collectibles & Art' },
        update: {},
        create: {
            name: 'Collectibles & Art'
        }
    });
    await prisma.category.upsert({
        where: { name: 'Home & Living' },
        update: {},
        create: {
            name: 'Home & Living'
        }
    });

    //seeding product table
    //collectibles & art
    await prisma.product.upsert({
        where: { title: 'Corner Bookmark' },
        update: {image: "https://i.etsystatic.com/42183806/r/il/27351e/5186271600/il_300x300.5186271600_khi0.jpg"},
        create: {
            title: 'Corner Bookmark',
            image: './product_images/collectibles & art/Corner Bookmark.avif',
            description: 'Personalized Hand Embroidered Corner Bookmark | Book Lovers',
            price: 9,
            available: true,
            returnPolicy: true,
            quantity: 5,
            categoryId: 3
        }
    });
    await prisma.product.upsert({
        where: { title: 'Acrylic Bookmark' },
        update: {image: "https://i.etsystatic.com/29999846/r/il/848da9/4877551029/il_300x300.4877551029_8w6l.jpg"},
        create: {
            title: 'Acrylic Bookmark',
            image: './product_images/collectibles & art/Acrylic Bookmark.avif',
            description: 'Personalized Name Acrylic Bookmark | Handmade Floral Bookmark',
            price: 11,
            available: true,
            returnPolicy: true,
            quantity: 9,
            categoryId: 3
        }
        
    });

    // Coaster 
    await prisma.product.upsert({
        where: { title: 'Flower Coaster' },
        update: {image: "https://hayhaycrochet.com/wp-content/uploads/2021/09/IMG_5270_jpg.jpg"},
        create: {
            title: 'Flower Coaster',
            image: './product_images/collectibles & art/Flower Coaster.jpg',
            description: 'Crochet made daisy flower coaster | Handmade Flower Coaster set of 6',
            price: 12,
            available: true,
            returnPolicy: true,
            quantity: 10,
            categoryId: 3
        }

        
    });

    await prisma.product.upsert({
        where: { title: 'Watercolor Painting' },
        update: {image: "https://i.etsystatic.com/30927076/r/il/2f461c/4217697582/il_600x600.4217697582_6yn0.jpg"},
        create: {
            title: 'Watercolor Painting',
            image: './product_images/collectibles & art/Watercolor Painting.webp',
            description: 'Dog Painting Custom From Photo | Pet Portrait Print ',
            price: 80,
            available: true,
            returnPolicy: false,
            quantity: 1,
            categoryId: 3
        }
    });

    //clothing & jewelry
    await prisma.product.upsert({
        where: { title: 'Stethoscope Necklace' },
        update: {image:"https://i.etsystatic.com/15563617/c/1176/934/237/202/il/adb0ad/1535620899/il_340x270.1535620899_lffd.jpg"},
        create: {
            title: 'Stethoscope Necklace',
            image: './product_images/clothing & jewelry/Stethoscope Necklace.avif',
            description: 'Custom Stethoscope Necklace With Name | Healthcare Worker',
            price: 60,
            available: true,
            returnPolicy: true,
            quantity: 10,
            categoryId: 1
        }
    });
    await prisma.product.upsert({
        where: { title: 'Birthstone Necklace' },
        update: {image: "https://i.etsystatic.com/5634743/c/1937/1937/314/688/il/de81c0/3537979898/il_300x300.3537979898_9u4g.jpg"},
        create: {
            title: 'Birthstone Necklace',
            image: './product_images/clothing & jewelry/Birthstone Necklace.avif',
            description: 'Raw Aquamarine Necklace | March Birthstone | Crystal Rough Gemstone',
            price: 31,
            available: true,
            returnPolicy: true,
            quantity: 8,
            categoryId: 1
        }
    });
    await prisma.product.upsert({
        where: { title: 'Personalized Sweater' },
        update: {image: "https://i.etsystatic.com/28504538/r/il/b55b37/5318226455/il_300x300.5318226455_t2jn.jpg"},
        create: {
            title: 'Personalized Sweater',
            image: './product_images/clothing & jewelry/Stethoscope Necklace.avif',
            description: 'Hand Embroidered With Name | Baby and Toddler Chunky Sweater',
            price: 82,
            available: true,
            returnPolicy: false,
            quantity: 3,
            categoryId: 1
        }
    });

    //toys
    await prisma.product.upsert({
        where: { title: 'Crochet Rattle' },
        update: {image: "https://i.etsystatic.com/35391247/r/il/b1d72f/5284649590/il_794xN.5284649590_e2yg.jpg"},
        create: {
            title: 'Crochet Rattle',
            image: './product_images/toys/Crochet Rattle.avif',
            description: 'Custom Wooden Baby Rattle | Crochet Rattle Toy | Teething Ring',
            price: 13,
            available: true,
            returnPolicy: false,
            quantity: 25,
            categoryId: 2
        }
    });
    await prisma.product.upsert({
        where: { title: 'Human Body Puzzle' },
        update: {image: "https://i.etsystatic.com/32753543/r/il/8c72f6/3842617767/il_794xN.3842617767_gft1.jpg"},
        create: {
            title: 'Human Body Puzzle',
            image: './product_images/toys/Human Body Puzzle.avif',
            description: 'Kids Anatomy Puzzle | Montessori Toys | Wooden Human Puzzle ',
            price: 45,
            available: true,
            returnPolicy: true,
            quantity: 105,
            categoryId: 2
        }
    });
    await prisma.product.upsert({
        where: { title: 'Montessori Climber' },
        update: {image: "https://i.etsystatic.com/21222226/r/il/9a8978/4172706705/il_794xN.4172706705_7bc4.jpg"},
        create: {
            title: 'Montessori Climber',
            image: './product_images/toys/Montessori Climber.avif',
            description: 'Climbing Ladder | Indoor Playground | Climbing Arch | Pickler Triangle Set',
            price: 150,
            available: true,
            returnPolicy: true,
            quantity: 55,
            categoryId: 2
        }
    });

    //home & living
    await prisma.product.upsert({
        where: { title: 'Breakfast Lover Candle' },
        update: {image: "https://i.etsystatic.com/17198792/c/980/980/0/154/il/837491/4587060181/il_300x300.4587060181_mf0e.jpg"},
        create: {
            title: 'Breakfast Lover Candle',
            image: './product_images/home & living/Breakfast Lover Candle.webp',
            description: 'Maine Blueberry Waffles Delicious Candle | Realistic Waffles, Blueberries, Syrup',
            price: 15,
            available: true,
            returnPolicy: true,
            quantity: 28,
            categoryId: 4
        }
    });
    await prisma.product.upsert({
        where: { title: 'Goat Milk Soap' },
        update: {image: "https://i.etsystatic.com/5737923/r/il/64e13a/1754790624/il_300x300.1754790624_g6gs.jpg"},
        create: {
            title: 'Goat Milk Soap',
            image: 'capstone/Mindful-App/server/db/product_images/home & living/Goat Milk Soap.webp',
            description: 'Handcrafted Goat Milk Scented Soap | Skin Care | 5 Bars | Self Care',
            price: 22,
            available: true,
            returnPolicy: false,
            quantity: 12,
            categoryId: 4
        }
    });
    await prisma.product.upsert({
        where: { title: 'Aromatherapy Candle' },
        update: {image: "https://i.etsystatic.com/21554180/c/1299/1299/350/475/il/b6b6bf/5351630181/il_300x300.5351630181_37dn.jpg"},
        create: {
            title: 'Aromatherapy Candle',
            image: './product_images/home & living/Sleep & Relaxation Aromatherapy Candle.webp',
            description: '3 Wick Large Aromatherapy Candle | For Sleep, Relaxation & Happiness | Toxin Free',
            price: 35,
            available: true,
            returnPolicy: true,
            quantity: 50,
            categoryId: 4
        }
    });
    await prisma.product.upsert({
        where: { title: 'Sofa Table' },
        update: {},
        create: {
            title: 'Sofa Table',
            image: 'https://i.etsystatic.com/9865605/r/il/dd391d/4583199743/il_794xN.4583199743_tdra.jpg',
            description: 'Wood Sofa Table | Media Stand | Console Stand',
            price: 250,
            available: true,
            returnPolicy: true,
            quantity: 35,
            categoryId: 4
        }
    });

    //seeding users table with a cart and products inside
    //users with no admin permissions
    await prisma.user.upsert({
        where: { username: 'StellaP' },
        update: {},
        create: {
            username: 'StellaP',
            email: 'stellap@gmail.com',
            hashedPassword: 'testuserpassword',
            isAdmin: false,
            cart: {
                create: {
                    items: {
                        create: [
                            {
                                productId: 7,
                                quantity: 2
                            },
                            {
                                productId: 12,
                                quantity: 2
                            }
                        ]
                    }
                }
            }
        }
    });
    await prisma.user.upsert({
        where: { username: 'HenryS' },
        update: {},
        create: {
            username: 'HenryS',
            email: 'henrys@yahoo.com',
            hashedPassword: 'testuserpassword',
            isAdmin: false,
            cart: {
                create: {
                    items: {
                        create: [
                            {
                                productId: 10,
                                quantity: 1
                            },
                            {
                                productId: 3,
                                quantity: 1
                            },
                            {
                                productId: 11,
                                quantity: 1
                            }
                        ]
                    }
                }
            }
        }
    });
    await prisma.user.upsert({
        where: { username: 'Melissa' },
        update: {},
        create: {
            username: 'Melissa',
            email: 'melissa2@gmail.com',
            hashedPassword: 'testuserpassword',
            isAdmin: false,
            cart: {
                create: {
                    items: {
                        create: [
                            {
                                productId: 2,
                                quantity: 5
                            },
                            {
                                productId: 4,
                                quantity: 2
                            },
                            {
                                productId: 8,
                                quantity: 1
                            },
                            {
                                productId: 12,
                                quantity: 1
                            }
                        ]
                    }
                }
            }
        }
    });


    //user with admin permission
    await prisma.user.upsert({
        where: { username: 'secretAdmin' },
        update: {},
        create: {
            username: 'secretAdmin',
            email: 'secretAdmin@secret.com',
            hashedPassword: 'secretAdminPassword',
            isAdmin: true
        }
    });

    //user with admin permission & hashed password
    async function createAdmin() {
       const  hashedPassword = await bcrypt.hash("admin", SALT_COUNT);
        await prisma.user.upsert({
            where: { username: 'Administrator' },
            update: {},
            create: {
                username: 'Administrator',
                email: 'admin@secret.com',
                hashedPassword: hashedPassword,
                isAdmin: true
            }
        });
    }
    createAdmin();

}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (error) => {
        console.error(error)
        await prisma.$disconnect()
        process.exit(1)
    })

