'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Reviews', [
      {
        reviewHeader: 'Scam',
        reviewBody: 'I skimmed this book belonging to my granddaughter. It\'s a rather superficial glance at a young celebrity who, I discovered for the first time, is a best selling recording star. As you can tell I\'ve never listened to his music. There are a lot of photographs and mostly first person accounts of his experiences. But not much in depth. But then he is only 16 or 17 years old. He has nice things to say about his family, and other celebrity musicians he\'s worked with including Taylor Swift, grieves over the death of Michael Jackson who he greatly admires, and lets us know that his parents were teenagers when he was born, and their marriage didn\'t last very long. However he is a Canadian and Canada has given us many fine musicians including Leonard Cohen, Bruce Cockburn, and Alanis Morrisette, so maybe there hope for this person after the celebrity phase wears off.',
        userId: 3,
        bookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewHeader: 'Bad book',
        reviewBody: 'Is this for real .____.',
        userId: 4,
        bookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewHeader: 'AMAZING!!',
        reviewBody: 'Well... I think this book was literally AMAZING! Not just because I LOVE Justin Bieber, but because this book was written by him in a teenagers perspective! Which I totally LOVED!',
        userId: 2,
        bookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewHeader: 'Worst book of my life',
        reviewBody: "After this, I think I'm morally obligated to promote every one-star book on my shelf to two stars, because it's wrong to put anything on the same level as this f$% thing.",
        userId: 5,
        bookId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewHeader: 'Snooki',
        reviewBody: "It's about what you'd expect from a book written by Snooki.",
        userId: 5,
        bookId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewHeader: 'I only read it as a dare',
        reviewBody: 'They were a lot of interesting anecdotes and personal reflections by this remarkable artist.',
        userId: 2,
        bookId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewHeader: 'Nostalgy',
        reviewBody: 'Nostalgy',
        userId: 3,
        bookId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewHeader: 'My mom bought it for me…',
        reviewBody: "I was really surpised with this book, it was much better than i expected. My mom bought it for me, i didnt really want to read it but i didnt want to hurt her feelings, but it didnt suck. Don't get me wrong, i didnt love it but still, it was good.",
        userId: 5,
        bookId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewHeader: 'The best coffee table book',
        reviewBody: 'the best coffee table book ever. especially if you choose to think about paris hilton as a performance artist, as i do.',
        userId: 6,
        bookId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewHeader: 'I love this book',
        reviewBody: 'I love this book. It\'s as if you\'re having a cup of coffee and chat with Paris herself. She gives you confidence to be yourself with her honesty and care.',
        userId: 2,
        bookId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewHeader: 'fun book?',
        reviewBody: "I know, I know...I thought it was a fun book. Totally silly - I liked looking at the photos and found it to be humorous. I'm smart...and I don't mind reading books that aren't. :)",
        userId: 4,
        bookId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewHeader: 'Horrible',
        reviewBody: "Read it when I was a teenager . Horrible reading ",
        userId: 5,
        bookId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewHeader: 'spoiler alert:',
        reviewBody: "he's a vampire!!!",
        userId: 3,
        bookId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewHeader: 'This is my review',
        reviewBody: "Actual rating: 1.5 stars. Believe it or not, there are actually a few books that are worse than Twilight.",
        userId: 3,
        bookId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewHeader: 'I am in pain…',
        reviewBody: " Make it stop.",
        userId: 6,
        bookId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewHeader: 'This is the worst book on earth.',
        reviewBody: "So guess what? I won't waste your or my time with a review. I hated it. End of story.",
        userId: 2,
        bookId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewHeader: 'Really bad ',
        reviewBody: "Spoil alert: Literally nothing happens.",
        userId: 3,
        bookId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewHeader: 'Team Edward',
        reviewBody: "I do like this more than I dislike it lmao",
        userId: 4,
        bookId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewHeader: 'Uh, wow. So this is IT?!!',
        reviewBody: " The book that the whole world is in utter fascination with?!! I think someone is laughing their way to the bank.",
        userId: 2,
        bookId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewHeader: 'If you want to laugh',
        reviewBody: "The story is told by Ax Handel, a nineteen-year-old with no pretentions or excuses for not having all the answers—or using the “write” words to tell his tale. He simply goes about his business—the business of taking his yard back from zombies while trying to benefit from it. Along the way he takes a ton of grief from his mother and ex-girlfriend, who do their best to keep Ax Handel in check, as if that’s even possible.",
        userId: 4,
        bookId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewHeader: 'Hilarious!',
        reviewBody: "just save yourself and don't read it, it's not worth it i am not talking about this nope",
        userId: 5,
        bookId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewHeader: 'This is the worst book on earth.',
        reviewBody: "Spoil alert: Literally nothing happens.",
        userId: 2,
        bookId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewHeader: '5 stars or 1 star.',
        reviewBody: "Don't get me wrong, this book is awful. Absolutely horrible. But in the best possible way. It is exactly what I wanted it to be.",
        userId: 2,
        bookId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewHeader: '????',
        reviewBody: "This is what happens when I have been drinking and remember I have a Kindle Unlimited subscription. I started blithely walking down the KU garden path until I end up in the dark and shadowy \"weird porn topiaries\" section, where the only thing that comes faster than the flashing lightning are the heroines of these erotic shorts.",
        userId: 3,
        bookId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewHeader: 'Acceptable',
        reviewBody: "Used to love tila before she went crazy. Enjoyed this book at the time.",
        userId: 6,
        bookId: 15,
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
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
