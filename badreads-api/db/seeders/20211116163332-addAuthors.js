'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Authors', [
      {
        name: 'Justin Bieber',
        biography: "Justin Drew Bieber is a Canadian pop-R&B singer. Bieber was discovered in 2008 by Scooter Braun, who happened across Bieber's videos on YouTube and later became his manager. Braun arranged for him to meet with Usher in Atlanta, Georgia, and Bieber was soon signed to Raymond Braun Media Group (RBMG), a joint venture between Braun and Usher, and then to a recording contract with Island Records offered by L.A. Reid.",
        photo: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/6B59/production/_113018472_getty_1.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nicole "Snooki" Polizzi',
        biography: "A native of Poughkeepsie, NY, Nicole 'Snooki' Polizzi is a reality television hit who comes from a close-knit Italian family. Fun, outgoing, spontaneous, loving and loud are just a few words that describe this veterinary tech major, whose hobbies include cheerleading, shopping, tanning, working out, and of course always looking good. Nicole appeared on MTV's reality show Is She Really Going Out With Him? but broke into the spotlight with her trademark poof on MTV's Jersey Shore in December 2009. She helped make Jersey Shore one of the highest rated shows in MTV history, which drew in 5.8 million viewers. Nicole has appeared on almost every major talkshow, as well as a few award shows, and is regularly covered by TMZ, The New York Post's Page Six, Perez Hilton, Entertainment Tonight, and Access Hollywood.",
        photo: 'https://i2-prod.mirror.co.uk/incoming/article21644587.ece/ALTERNATES/n310p/1_Luxy-Entertainment-Complex-Presents-Snooki-Jersery-Shores-Nicole-Polizzi.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Miley Cyrus, Hilary Liftin (co-written)',
        biography: "Miley Ray Cyrus (born Destiny Hope Cyrus), better known by her stage name Hannah Montana, is an American teen actress, singer, songwriter and author. Cyrus is known for starring as Miley Stewart 'Hannah Montana' in the television series Hannah Montana on the Disney Channel. Cyrus became an overnight sensation after Hannah Montana debuted in March 2006. Following the success of the show, in October 2006, a soundtrack CD was released that included tracks from the show. As of December 2007, she worked on a movie spin-off of Hannah Montana, titled Hannah Montana: The Movie.",
        photo: 'https://media.distractify.com/brand-img/MpwROYNlj/1024x536/hannah-montana-1616618209532.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Paris Hilton',
        biography: "Paris Whitney Hilton is an American celebutante, singer, actress, model, and businesswoman. She is best-known through the television series The Simple Life. She has appeared in several minor film roles, most notably in the horror film House of Wax in 2005. In 2004 she published a tongue-in-cheek autobiography. In 2006, she released her debut album Paris. Hilton's career pursuits include singing, modeling, acting, writing, and television. As a result of several legal incidents, Hilton served a widely publicized sentence in an L.A. County jail facility in 2007. The world first became aware of Paris Hilton through a Vanity Fair profile in 2000. Since then, she has graced the pages of countless magazines, newspapers, and tabloids; modeled on the runways of top designers; appeared on television shows as herself ('Saturday Night Live', MTV Music Awards) and as fictional characters (the new Sky One show 'Las Vegas'); had small parts in movies like 'The Cat in the Hat', 'Win a Date with Tad Hamilton' and the upcoming 'The Hillz'; has begun work on an album; and starred in a hit reality series, 'The Simple Life' (shown here on Channel 4). She has been romantically linked with current boyfriend Nick Carter of the Backstreet Boys, Rick Solomon (of the notorious sex tape), and Deryck Whibley of Sum 41.",
        photo: 'https://img.koreatimes.co.kr/upload/newsV2/images/202111/f1ccdeebd381424291a917b0957a77c9.jpg/dims/resize/740/optimize',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Stephenie Meyer',
        biography: "Paris Whitney Hilton is an American celebutante, singer, actress, model, and businesswoman. She is best-known through the television series The Simple Life. She has appeared in several minor film roles, most notably in the horror film House of Wax in 2005. In 2004 she published a tongue-in-cheek autobiography. In 2006, she released her debut album Paris. Hilton's career pursuits include singing, modeling, acting, writing, and television. As a result of several legal incidents, Hilton served a widely publicized sentence in an L.A. County jail facility in 2007. The world first became aware of Paris Hilton through a Vanity Fair profile in 2000. Since then, she has graced the pages of countless magazines, newspapers, and tabloids; modeled on the runways of top designers; appeared on television shows as herself ('Saturday Night Live', MTV Music Awards) and as fictional characters (the new Sky One show 'Las Vegas'); had small parts in movies like 'The Cat in the Hat', 'Win a Date with Tad Hamilton' and the upcoming 'The Hillz'; has begun work on an album; and starred in a hit reality series, 'The Simple Life' (shown here on Channel 4). She has been romantically linked with current boyfriend Nick Carter of the Backstreet Boys, Rick Solomon (of the notorious sex tape), and Deryck Whibley of Sum 41.",
        photo: 'https://images.gr-assets.com/authors/1596739281p8/941441.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'E.L. James',
        biography: "Erika Mitchell (born 7 March 1963), known by her pen name E. L. James, is a British author. She wrote the best-selling erotic romance trilogy Fifty Shades of Grey, Fifty Shades Darker, and Fifty Shades Freed, along with the companion novels Grey: Fifty Shades of Grey as Told by Christian, Darker: Fifty Shades Darker as Told by Christian, and Freed: Fifty Shades Freed as Told by Christian. Prior to this, she wrote the Twilight fan fiction \"Master of the Universe\" that served the basis for the Fifty Shades trilogy under the web name Snowqueens Icedragon. In 2019, her first book to not be a part of the Fifty Shades trilogy, The Mister, was published, to negative critical reception.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/E._L._James_-_2019_%28cropped%29.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Donnie Smith',
        biography: "Donnie Smith is a former writing teacher with degrees in education and history from the University of North Dakota who recently published his first book, We Got Zombies On The Lawn Again, Ma (CreateSpace, November 2013). It's the first in his three-book series, a humorously irreverent take on zombies starring the indomitable Ax Handel. Donnie began as a storyteller by swapping dark and funny tales with inmates in the facility where he worked as a correctional officer over twenty years ago, and today utilizes versions of those stories in his writing.",
        photo: 'https://images.gr-assets.com/authors/1391211309p8/7801640.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'M.J. Edwards',
        biography: "No info available",
        photo: 'https://nypost.com/wp-content/uploads/sites/2/2020/09/200924-coronavirus-romeo-juliet-italy.jpg?quality=80&strip=all&w=1024',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kourtney Kardashian, Kim Kardashian West, Khloé Kardashian',
        biography: "Kourtney Mary Kardashian was born in Los Angeles and is the oldest child of late attorney Robert Kardashian and Kris Jenner (née Houghton) and is the sister of Kim, Khloé and Rob Kardashian. She is of Armenian descent (father) and Dutch-Scottish American (mother) descent. Robert Kardashian, best known for being O. J. Simpson’s lawyer during his murder trial, died on September 30, 2003. Her mother divorced Robert Kardashian in 1989 and married former Olympian Bruce Jenner in 1991. Kardashian attended the Roman Catholic all-girls school Marymount High School. Following graduation, she left California to move to Dallas where she attended Southern Methodist University for two years. She then moved to Tucson, Arizona, and attended the University of Arizona, graduating with a degree in Theatre Arts and a minor in Spanish. Her classmates included Nicole Richie and Luke Walton. Kardashian became the stepsister of three stepbrothers, (from oldest to youngest) Burt Jenner, Brandon Jenner and Brody Jenner, and stepsister Casey Jenner, after her mother Kris married Bruce Jenner. She also has two half-sisters, Kendall and Kylie Jenner. Kardashian has a son, Mason Dash Disick, who was born December 14, 2009. with her boyfriend Scott Disick.",
        photo: 'https://images.gr-assets.com/authors/1282436675p8/4088992.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tila Tequila, Sarah Tomlinson',
        biography: "Tila Nguyễn, better known by her stage names Tila Tequila and Miss Tila, is a Singaporean-born singer, rapper, model, and television personality. She is known for her appearances in the men's magazines Stuff, Maxim, Penthouse, her role as host of the Fuse TV show featuring performance striptease, Pants-Off Dance-Off and her position as the most popular artist on MySpace (according to page views) circa April 2006. She was raised in Houston, Texas, and now lives in Los Angeles, California. Her MTV reality show A Shot at Love with Tila Tequila aired for two seasons.",
        photo: 'https://images.gr-assets.com/authors/1281974349p8/1823273.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Authors', null, {});
  }
};
