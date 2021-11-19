'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Books', [
      {
        title: 'First Step 2 Forever',
        authorId: 1,
        genreId: 1,
        summary: `"It's a big, big world
        It's easy to get lost in it..."

        I love those lines in the lyrics. Sometimes I feel like that's what everyone's expecting. My world got very big, very fast, and a lot of people expect me to get lost in it. I grew up in a small town in Canada. I taught myself to sing in front of my bedroom mirror and to play guitar on a hand-me-down. My mom posted my first videos on YouTube. Never in my wildest dreams did I think that I'd sell millions of records, sing for the president of the United States and sell out a massive arena tour. So no, I'm not lost. Not at all. If anything, onstage in front of my fans, I'm home. I'm found. And that's what this book is about: my journey, from singing and busking on the sidewalk in Stratford, Ontario, to performing and showing my appreciation to millions of fans all over the world for making this dream a reality.

        My music and lyrics give a glimpse of what's in my heart, but I think this book is a window into my world. In here are hundreds of pictures of me that no one's ever seen before, and I'll tell you about who I was before I joined forces with Scooter Braun and Usher and got a record deal, and who I've become since I've been blessed with the opportunity to share my music with the world. This is my gift to you, the fans who've supported and been with me on this amazing journey every step of the way.`,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1281579549i/8752457.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'A Shore Thing',
        authorId: 2,
        genreId: 2,
        summary: `It’s a summer to remember . . . at the Jersey Shore.

        Giovanna “Gia” Spumanti and her cousin Isabella “Bella” Rizzoli are going to have the sexiest summer ever. While they couldn’t be more different—pint-size Gia is a carefree, outspoken party girl and Bella is a tall, slender athlete who always holds her tongue—for the next month they’re ready to pouf up their hair, put on their stilettos, and soak up all that Seaside Heights, New Jersey, has to offer: hot guidos, cool clubs, fried Oreos, and lots of tequila.

        So far, Gia’s summer is on fire. Between nearly burning down their rented bungalow, inventing the popular “tan-tags” at the Tantastic Salon where she works, and rescuing a shark on the beach, she becomes a local celebrity overnight. Luckily, she meets the perfect guy to help her keep the flames under control. Firefighter Frank Rossi is exactly her type: big, tan, and Italian. But is he tough enough to handle Gia when things really heat up?

        Bella is more than ready for some fun in the sun. Finally free of her bonehead ex-boyfriend, she left home in Brooklyn with one goal in mind: hooking up with a sexy gorilla for a no-strings-attached summer fling. In no time, she lands a job leading “Beat Up the Beat” dance classes at a local gym, and is scooped up by Beemer-driving, preppy Bender Newberry. Only problem: Bella can’t get her romantic and ripped boss Tony “Trouble” Troublino out of her head. He’s relationship material. Suddenly, Bella’s not sure what she wants.

        The cousins soon realize that for every friend they make on the boardwalk, there are also rivals, slummers, and frenemies who will do anything to ruin their summer—and try their relationship. Before July ends, the bonds of family and friendship will be stretched to the breaking point. Will the haters prevail, or will Gia and Bella find love at the Shore?

        For everyone who loves MTV’s hit reality show, Nicole “Snooki” Polizzi’s sweet, funny, and sexy novel perfectly captures the heat, the energy, the fun, and the drama of Jersey Shore.`,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1294516860i/10031701.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Miles to Go',
        authorId: 3,
        genreId: 1,
        summary: `Three years ago, Miley Cyrus was a virtual unknown. Her life in rural Tennessee was filled with family, friends, school, cheerleading, and the daily tasks of living on a farm. And then came a little show called "Hannah Montana."

        Almost overnight, Miley would rocket to superstardom, becoming a television and singing phenomenon. Quiet days were replaced with sold-out concerts, television appearances, and magazine shoots. But through it all, Miley has remained close to her family and friends and has stayed connected to the Southern roots that made her so strong.

        In Miles to Go, Miley offers an honest, humorous, and often touching story of one girl's coming-of-age--from private moments with her pappy to off-roading with her dad, Billy Ray, to her run-ins with mean girls. Miley talks about suffering through drama and heartbreak and coming out the other end unscathed (relatively). And now for the first time, she will discuss it all-the milestones still left to reach (driver's license! voting!), dreams to live out (travel to Asia! find true love!), and the lessons to be learned (remembernig to enjoy every moment!).

        This is a truly unique look inside the world of one of today's biggest and brightest stars as she tackles looking back and moving forward.`,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1442105085i/6263078.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Confessions of an Heiress',
        authorId: 4,
        genreId: 1,
        summary: `Her name is on everyone's lips, but can she help it if she was born rich and famous? Here's a bird's eye view of the fast, fun world of Paris Hilton, packed with enough photos, advice and inside scoop to help anyone become an heiress and live a privileged life. Socialite, fashion icon, television and movie star, recording artist and just plain celebrity: Twenty-two year old Paris Hilton is the great granddaughter of hotel magnate Conrad Hilton and is estimated to be worth USD30 million.

        The world first became aware of Paris Hilton through a Vanity Fair profile in 2000. Since then, she has graced the pages of countless magazines, newspapers, and tabloids; modeled on the runways of top designers; appeared on television shows as herself ('Saturday Night Live', MTV Music Awards) and as fictional characters (the new Sky One show 'Las Vegas'); had small parts in movies like 'The Cat in the Hat', 'Win a Date with Tad Hamilton' and the upcoming 'The Hillz'; has begun work on an album; and starred in a hit reality series, 'The Simple Life' (shown here on Channel 4). She has been romantically linked with current boyfriend Nick Carter of the Backstreet Boys, Rick Solomon (of the notorious sex tape), and Deryck Whibley of Sum 41.`,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348567636i/87564.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Your Heiress Diary: Confess it All to Me',
        authorId: 4,
        genreId: 1,
        summary: `What is in an heiress's diary? If it's Paris Hilton's diary, it's full of dates, clothes, TV projects, shopping lists, notes for a new album, ideas for new hairstyles and makeup looks, appointments for photo shoots, wedding plans, hopes, and dreams.

        Now you can have your own heiress diary. Let Paris guide you as you write down the details of your own fabulous life: secrets you don't want anyone to know, quotations that inspire you, your must-have shopping list, plans for your ultimate heiress birthday party, guys who are hot and guys who are not, and the acceptance speech you'll need when you reach the pinnacle of heiress success. Life is a fabulous adventure if you live it like an heiress.`,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1326911611i/965672.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Twilight',
        authorId: 5,
        genreId: 3,
        summary: `About three things I was absolutely positive.

        First, Edward was a vampire.

        Second, there was a part of him—and I didn't know how dominant that part might be—that thirsted for my blood.

        And third, I was unconditionally and irrevocably in love with him.

        Deeply seductive and extraordinarily suspenseful, Twilight is a love story with bite.`,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1361039443i/41865.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'New Moon',
        authorId: 5,
        genreId: 3,
        summary: `"I knew we were both in mortal danger. Still, in that instant, I felt well. Whole. I could feel my heart racing in my chest, the blood pulsing hot and fast through my veins again. My lungs filled deep with the sweet scent that came off his skin. It was like there had never been any hole in my chest. I was perfect - not healed, but as if there had never been a wound in the first place."`,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630592760i/49041.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Breaking Dawn',
        authorId: 5,
        genreId: 3,
        summary: `WHEN YOU LOVED THE ONE WHO WAS KILLING YOU, IT LEFT YOU NO OPTIONS. How could you run, how could you fight, when doing so would hurt that beloved one? If your life was all you had to give, how could you not give it? If it was someone you truly loved?

        TO BE IRREVOCABLY IN LOVE WITH A VAMPIRE is both fantasy and nightmare woven into a dangerously heightened reality for Bella Swan. Pulled in one direction by her intense passion for Edward Cullen, and in another by her profound connection to werewolf Jacob Black, a tumultuous year of temptation, loss, and strife have led her to the ultimate turning point. Her imminent choice to either join the dark but seductive world of immortals or to pursue a fully human life has become the thread from which the fates of two tribes hangs.

        NOW THAT BELLA HAS MADE HER DECISION, a startling chain of unprecedented events is about to unfold with potentially devastating, and unfathomable, consequences. Just when the frayed strands of Bella's life - first discovered in Twilight, then scattered and torn in New Moon and Eclipse - seem ready to heal and knit together, could they be destroyed... forever?

        THE ASTONISHING, BREATHLESSLY anticipated conclusion to the Twilight Saga, Breaking Dawn illuminates the secrets and mysteries of this spellbinding romantic epic that has entranced millions.`,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1361039438i/1162543.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Eclipse',
        authorId: 5,
        genreId: 3,
        summary: `"As Seattle is ravaged by a string of mysterious killings and a malicious vampire continues her quest for revenge, Bella once again finds herself surrounded by danger. In the midst of it all, she is forced to choose between her love for Edward and her friendship with Jacob - knowing that her decision has the potential to ignite the ageless struggle between vampire and werewolf. With her graduation quickly approaching, Bella has one more decision to make: life or death. But which is which?

        READERS CAPTIVATED BY Twilight AND New Moon will eagerly devour Eclipse, the much-anticipated third book in Stephenie Meyer's riveting vampire love saga."`,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1361038355i/428263.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Fifty Shades of Grey',
        authorId: 6,
        genreId: 4,
        summary: `When literature student Anastasia Steele goes to interview young entrepreneur Christian Grey, she encounters a man who is beautiful, brilliant, and intimidating. The unworldly, innocent Ana is startled to realize she wants this man and, despite his enigmatic reserve, finds she is desperate to get close to him. Unable to resist Ana’s quiet beauty, wit, and independent spirit, Grey admits he wants her, too—but on his own terms.

        Shocked yet thrilled by Grey’s singular erotic tastes, Ana hesitates. For all the trappings of success—his multinational businesses, his vast wealth, his loving family—Grey is a man tormented by demons and consumed by the need to control. When the couple embarks on a daring, passionately physical affair, Ana discovers Christian Grey’s secrets and explores her own dark desires.`,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327189927i/11477648.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'We Got Zombies On The Lawn Again, Ma',
        authorId: 7,
        genreId: 5,
        summary: `In this humorously irreverent take on zombies, Ax Handel is a present-day nineteen-year-old pizza delivery guy with a short fuse who is determined to take control of his wildly unpredictable life. His comical attempts to make sense of his relationships with his outrageous family members usually end up in disaster. Suddenly, his life changes—possibly for the better—when zombies stumble out of a nearby cemetery. Life has never been easy for Ax and his mother, and they refuse to be scared off by a horde of the dying impaired. Without any help from Ma, whose hard-living, heavy-metal past has left her strangely sympathetic to the plight of the zombies, or his volatile ex-girlfriend, Zenobia, who's certain he's a head case, or even his zoned-out fugitive father, it’s up to Ax to protect his little town of Karbunkle and what little he owns, while getting revenge on some bad-mannered, lumbering stiffs.`,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1440691001i/20578084.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Kissing the Coronavirus',
        authorId: 8,
        genreId: 4,
        summary: `She was supposed to cure the Coronavirus. Instead... she fell in love with it.
        Dr. Alexa Ashingtonford is a part of a crack team of scientists tasked with finding the cure to the devastating Coronavirus. Little did she know she would end up falling in love with it.
        Kissing the Coronavirus is a steamy tale about forbidden love and dark desires come to life.`,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1595188074i/54594933.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Second Wave',
        authorId: 8,
        genreId: 4,
        summary: `It's been 8 months since a shocking lab incident claimed the lives of the world's top scientists tasked with finding the cure to Covid-19.

        Now, with the vaccine programme underway, Dr Kelly Cauldron is working round the clock to ensure the population are immunised against the deadly disease. The only problem is, it's getting in the way of her life.

        When a hunky patient enters her office to be vaccinated, Dr Kelly is horrified to discover he has already received a DOUBLE DOSE. But her horror turns to sexiness, when the man transforms into everything she could ever want - that is, until a familiar face returns to throw the entire vaccination program into turmoil...`,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1607530823i/56232253.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Kardashian Konfidential',
        authorId: 9,
        genreId: 1,
        summary: `Confessions of life as a Kardashian sister--stuffed with family stories, advice, beauty tips and exclusive gorgeous full color photos, personal snapshots and the inside scoop on their life growing up into the gorgeous Dash Dolls "The stars of not one but two #1 reality television shows, and frequent cover girls on all the weekly celebrity magazines, Kourtney, Kim & Khloe Kardashian live large and glamorous lives. But not everything is on the screen--how they really live, get along (and feud) as sisters is the subject of the Kardashians' very first book. "Kardashian Konfidential "is their sisterhood autobiography, full of fun facts about their childhoods (guess who was the ugly duckling?), their beauty and style secrets, the wisdom they learned from their beloved father, and the street smarts they got from their mother that sustain them in life and in business.

        "Kardashian Konfidential "is bursting at the seams with photos, memorabilia, diary entries, datebook pages, and old Valentines the girls sent to each other, as well as many other artifacts put together just for their book. As glamorous, fun and fashionable as the girls themselves, this is the perfect buy-one-for-me-buy-three-for-friends fan's book.`,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1440170543i/8472837.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Hooking Up With Tila Tequila',
        authorId: 10,
        genreId: 1,
        summary: `Web and reality television celebrity Tila Tequila, the "Madonna of MySpace" ("Time") bares her secrets in this provocative and playful guide to love, relationships, sex, fame, and being the life of the party -- just in time to spice things up this holiday season.The ways to celebrity are myriad, but in just two years, Tila Tequila has quite possibly become THE symbol of stardom in today's digital age. With upwards of three million MySpace pals and thanks to MTV's "A Shot at Love with Tila Tequila," the twenty-six-year-old sexy siren has become nothing less than a cultural icon. Tila's taboo-bending lack of inhibition has made her a trailblazer for the times, and there's no signs of slowing down this feisty four-foot-eleven wild child whose combination of sex appeal and accessibility has made her popularity unparalleled.

        "Hooking Up with Tila Tequila" takes an exclusive and entertaining look beyond the virtual pin-up -- past the mischievous glint in her eye and sultry curve of her hip -- to the real-life Tila. In her own outrageously candid words, she tackles a variety of subjects from making it big to getting what you want in bed -- and out of it! Also included are real questions from her millions of fans, and Tila's unique brand of truthful advice, as she says, "Tequila-style." Filled with stunning never-before-seen photographs from Tila's private collection, "Hooking Up with Tila Tequila" delivers the scoop on everything her fans want to know -- and reveals the true story of how a fearless and determined Vietnamese ex-model used the Internet to earn the recognition that most people only dream about.`,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347572785i/4347036.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Da Vinci Code',
        authorId: 11,
        genreId: 6,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/I/91Q5dCjc2KL.jpg',
        summary: `While in Paris, Harvard symbologist Robert Langdon is awakened by a phone call in the dead of the night. The elderly curator of the Louvre has been murdered inside the museum, his body covered in baffling symbols. As Langdon and gifted French cryptologist Sophie Neveu sort through the bizarre riddles, they are stunned to discover a trail of clues hidden in the works of Leonardo da Vinci—clues visible for all to see and yet ingeniously disguised by the painter.
        
        Even more startling, the late curator was involved in the Priory of Sion—a secret society whose members included Sir Isaac Newton, Victor Hugo, and Da Vinci—and he guarded a breathtaking historical secret. Unless Langdon and Neveu can decipher the labyrinthine puzzle—while avoiding the faceless adversary who shadows their every move—the explosive, ancient truth will be lost forever.`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'American Prince',
        authorId: 12,
        genreId: 2,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1487883111i/32734331.jpg',
        summary: `I've been many things. I've been a son and a stepbrother. An Army captain and a Vice President. But only with him am I a prince. His little prince. Only with Maxen and Greer does my world make sense, only between them can I find peace from the demons that haunt me. But men like me aren't made to be happy. We don't deserve it. And I should have known a love as sharp as ours could cut both ways. My name is Embry Moore and I serve at the pleasure of the President of the United States... for now. This is the story of an American Prince.`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Impervious',
        authorId: 13,
        genreId: 3,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1394036728i/20986914.jpg',
        summary: `The residents of Impervious are the remnant—the survivors of the War of Annihilation. And though the city is chockfull of pleasures to tantalize and entertain, a beast lurks in the corners, haunting the residents with its presence.

        The Beast—a mysterious and terminal illness killed off most of Generations One, Two, and Three. And as Gen-Four prepares to take the stage, a provocative, yet questionable, new method to avoid an untimely death incites a cultural rage.
        
        But Fran lives counter-culture, off the grid in true rebel fashion. With a life far from opulent, she scurries through dark tunnels, searching for hot meals with Pete while ditching the holographic security team. To her, it’s a healthy trade-off. Unaccountability means The Council can’t steal her sliver of hope―a belief that she’ll see The Epoch arrive before The Beast can pull her into its fetid embrace.
        
        After losing her mother and then her Rebel mentor, Fran stumbles upon a miraculous discovery that may save the residents of Impervious. That is, if she can outrun The Beast…`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Dianetics: The Modern Science of Mental Health',
        authorId: 14,
        genreId: 7,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1298460184i/179166.jpg',
        summary: `If you've ever felt there was something holding you back in life, you were right. It's called the subconscious, unconscious or reactive mind the hidden part of your mind that stores painful experiences, then uses them against you. Dianetics: The Modern Science of Mental Health, the New York Times and International bestseller, shows you how to get rid of the reactive mind for a happier, healthier life. The revolutionary book everyone must read.`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Handbook for Mortals',
        authorId: 15,
        genreId: 3,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1501565762i/35800325.jpg',
        summary: `Zade Holder has always been a free-spirited young woman, from a long dynasty of tarot-card readers, fortunetellers, and practitioners of magick. Growing up in a small town and never quite fitting in, Zade is determined to forge her own path. She leaves her home in Tennessee to break free from her overprotective mother Dela, the local resident spellcaster and fortuneteller.

        Zade travels to Las Vegas and uses supernatural powers to become part of a premiere magic show led by the infamous magician Charles Spellman. Zade fits right in with his troupe of artists and misfits. After all, when everyone is slightly eccentric, appearing "normal" is much less important.
        
        Behind the scenes of this multimillion-dollar production, Zade finds herself caught in a love triangle with Mac, the show's good-looking but rough-around-the-edges technical director and Jackson, the tall, dark, handsome and charming bandleader.`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Behind the Bell',
        authorId: 16,
        genreId: 1,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1349057755i/6684320.jpg',
        summary: `For the first-time, Diamond presents the inside story of the young cast from Saved by the Bell that the viewing public thought were so lucky . . .Learn the dark, behind-the-scenes story of the cast and crew's extreme lifestyle: sex, drugs, and wild partiesPost-Bell, discover how Diamond used his natural comedic talents to overcome being typecast as a child actor and how he reinvented himself through stand-up comedy and reality TV. Working in Hollywood might represent an American Dream, but for many youngsters it is a true nightmare. Dustin Diamond is best known for his character Samuel Screech Powers in the late '80s and '90s on the long-running American TV teen sitcom Saved by the Bell (SBTB). Diamond's new book gives readers the disheartening story of an ex-child star. Dustin faced serious challenges moving his career beyond his comic role as the smart, funny, and endearing nerd of Bayside High School on the show that made him an audience favorite. Through his eyes, we uncover Hollywood's myths.`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'iDrakula',
        authorId: 17,
        genreId: 5,
        coverPhoto: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320992735i/7724969.jpg',
        summary: `The classic vampire story that started it all gets new life for a generation of connected teens, 18-year-old Jonathan Harker is diagnosed with a rare blood disorder after visiting a Romanian Count. His girlfriend Mina and a pre-med student named Van Helsing team up to investigate the source of the disease. The teenagers discover a horrifying truth: the Count is a vampire. The harrowing events unfold through emails, text messages, web pages, Twitter feeds, and instant messaging-the natural modernization of Bram Stoker's original Dracula, which was written in letters, diary entries, and news clippings.`,
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
    return queryInterface.bulkDelete('Books', null, {});
  }
};
