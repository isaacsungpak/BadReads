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
        photo: 'https://img.buzzfeed.com/buzzfeed-static/static/2021-07/30/23/campaign_images/796d17338878/justin-bieber-pleaded-with-fans-to-stop-waiting-o-2-4732-1627688019-23_dblbig.jpg?resize=1200:*',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nicole "Snooki" Polizzi',
        biography: "A native of Poughkeepsie, NY, Nicole 'Snooki' Polizzi is a reality television hit who comes from a close-knit Italian family. Fun, outgoing, spontaneous, loving and loud are just a few words that describe this veterinary tech major, whose hobbies include cheerleading, shopping, tanning, working out, and of course always looking good. Nicole appeared on MTV's reality show Is She Really Going Out With Him? but broke into the spotlight with her trademark poof on MTV's Jersey Shore in December 2009. She helped make Jersey Shore one of the highest rated shows in MTV history, which drew in 5.8 million viewers. Nicole has appeared on almost every major talkshow, as well as a few award shows, and is regularly covered by TMZ, The New York Post's Page Six, Perez Hilton, Entertainment Tonight, and Access Hollywood.",
        photo: 'https://i0.heartyhosting.com/starmagazine.com/wp-content/uploads/2020/02/Nicole-snooki-polizzi-twerks-pole-dances-strip-club-video-8.jpg?fit=1430%2C980&ssl=1&resize=1430%2C980',
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
        biography: `Stephenie Meyer is the author of the bestselling Twilight series, The Host, and The Chemist. Twilight was one of 2005's most talked about novels and within weeks of its release the book debuted at #5 on The New York Times bestseller list. Among its many accolades, Twilight was named an "ALA Top Ten Books for Young Adults," an Amazon.com "Best Book of the Decade So Far," and a Publishers Weekly Best Book of the Year.
        Meyer graduated from Brigham Young University with a degree in English Literature. She lives in Arizona with her husband and three sons.`,
        photo: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgwOTkzMDU3NDQ4MDExMTEy/gettyimages-492372624.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'E.L. James',
        biography: "Erika Mitchell (born 7 March 1963), known by her pen name E. L. James, is a British author. She wrote the best-selling erotic romance trilogy Fifty Shades of Grey, Fifty Shades Darker, and Fifty Shades Freed, along with the companion novels Grey: Fifty Shades of Grey as Told by Christian, Darker: Fifty Shades Darker as Told by Christian, and Freed: Fifty Shades Freed as Told by Christian. Prior to this, she wrote the Twilight fan fiction \"Master of the Universe\" that served the basis for the Fifty Shades trilogy under the web name Snowqueens Icedragon. In 2019, her first book to not be a part of the Fifty Shades trilogy, The Mister, was published, to negative critical reception.",
        photo: 'https://pyxis.nymag.com/v1/imgs/84b/6e6/1376283baafe7506151e62f42859751754-29-el-james.rsquare.w330.jpg',
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
        photo: 'https://media.allure.com/photos/5db8635bdd40650009108a72/master/pass/kourtney-kardashian-lede.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tila Tequila, Sarah Tomlinson',
        biography: "Tila Nguyễn, better known by her stage names Tila Tequila and Miss Tila, is a Singaporean-born singer, rapper, model, and television personality. She is known for her appearances in the men's magazines Stuff, Maxim, Penthouse, her role as host of the Fuse TV show featuring performance striptease, Pants-Off Dance-Off and her position as the most popular artist on MySpace (according to page views) circa April 2006. She was raised in Houston, Texas, and now lives in Los Angeles, California. Her MTV reality show A Shot at Love with Tila Tequila aired for two seasons.",
        photo: 'https://www.nickiswift.com/img/gallery/the-real-reason-you-dont-hear-from-tila-tequila-anymore/intro-1522787294.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dan Brown',
        biography: "Dan Brown is the author of numerous #1 bestselling novels, including The Da Vinci Code, which has become one of the best selling novels of all time as well as the subject of intellectual debate among readers and scholars. Brown’s novels are published in 52 languages.",
        photo: 'http://images.firstpost.com/wp-content/uploads/2014/11/Dan-Brown-AFP.jpg?impolicy=website&width=1200&height=800',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sierra Simone',
        biography: "Sierra is a voracious reader of all things including the smuttiest smut, young adult, piles of non-fiction for research, and everything Bill Bryson.",
        photo: 'https://images.gr-assets.com/authors/1547613931p5/7369992.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Heather Letto',
        biography: "Heather considers herself but a worker in the field with a desire to share truth through the art of good story.",
        photo: 'https://images.gr-assets.com/authors/1450675756p5/4611478.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'L. Ron Hubbard',
        biography: "With 19 New York Times bestsellers and more than 350 million copies of his works in circulation, L. Ron Hubbard is among the most enduring and widely read authors of our time. As a leading light of American Pulp Fiction through the 1930s and '40s, he is further among the most influential authors of the modern age. Indeed, from Ray Bradbury to Stephen King, there is scarcely a master of imaginative tales who has not paid tribute to L. Ron Hubbard. Then too, of course, there is all L. Ron Hubbard represents as the Founder of Dianetics and Scientology and thus the only major religion born in the 20th century. While, as such, he presents the culmination of science and spiritual technology as embodied in the religion of Scientology.",
        photo: 'https://files.ondemandhosting.info/data/www.scientologynews.org/files/l-ron-hubbard-portrait_0.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lani Sarem',
        biography: "Lani Sarem basically grew up in the entertainment industry. She began acting at age three and continued to act and perform through her early years. Lani began writing scripts when she was eleven. Over the years she has become a jack-of-all-trades in the entertainment business. She became a rock n’ roll gypsy at fifteen and started touring with bands and working on festivals. She’s toured with everyone from Ryan Adams to Gnarls Barkley. She also became one of the youngest female managers in the business and managed bands like the Plain White T's, 100 Monkeys and Blues Traveler. Lani has appeared in films like Mall Cop 2, Jason Bourne, and Trailer Park Shark. Handbook for Mortals is a debut novel of a series of books, which are also being made into feature films. ",
        photo: 'https://media.npr.org/assets/img/2017/08/25/gettyimages-837509132_wide-55200263ba58c877764e0c85ee8cb156cc76d280-s800-c85.webp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dustin Diamond',
        biography: "Dustin Neil Diamond (January 7, 1977 – February 1, 2021) was an American actor, director, stand-up comedian, musician, and occasional professional wrestler, best known for his role as Samuel \"Screech\" Powers throughout the Saved by the Bell franchise. In 2009, Diamond published an inside story of the show's cast and crew, from his point of view, titled Behind the Bell. The book paints an unflattering portrait of many of Diamond's colleagues and their allegedly sordid backstage behavior. Some of these claims have been repudiated by Diamond's colleagues and questioned by critics.[ Diamond later commented on the book's content in a December 2013 appearance on an Oprah: Where Are They Now? segment on the OWN Network in which he stated that the book was ghost written by an author who simply interviewed him and compiled the book from his answers. He claimed that many parts of the book, such as allegations of teen sex and drug use, were fabricated from very minor statements he made during the interviews.",
        photo: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2021%2F01%2F14%2FGettyImages-531812712.jpg&q=85',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bekka Black',
        biography: "After a childhood often spent without electricy and running water, Bekka escaped the beautiful wilderness of Talkeetna, Alaska for indoor plumbing and 24/7 electricity in Berlin, Germany. Used to the cushy lifestyle, she discovered the Internet in college and has been wasting time on it ever since (when not frittering away her time on her iPhone). Somehow, she manages to write novels, including the award-winning Hannah Vogel mystery series set, in all places, 1930s Berlin, and The Blood Gospel series (with James Rollins). She lives in Berlin with her husband, son, two cats, and too many geckoes to count. iDrakula is her first cell phone novel.",
        photo: 'https://images.gr-assets.com/authors/1241820978p8/2525338.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
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
