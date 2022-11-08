export const fakeUser = {
   _id: '12314142342423',
   username: 'kpcy',
   firstName: 'piyachai',
   lastName: 'kaewchum',
   phone: '0626814488',
   emailType: 'username/password',
   role: 'normal',
   isBanned: false,
   avatar: {
      _id: '1231231312',
      avatarUrl: `https://avatars.dicebear.com/api/bottts/${Math.random() * 100}.svg`,
   },
   notifications: [
      {
         _id: 'noti-12313141dc23412',
         type: 'like',
         detail: 'มีคนมาไลค์กระทู้คุณ',
         isWatched: false,
         createdAt: 'Sun Oct 30 2022 22:25:01 GMT+0700 (Indochina Time)',
         href: '/',
      },
      {
         _id: 'noti-12313awd14123412',
         type: 'comment',
         detail: 'มีคนมาไลค์กระทู้คุณ',
         isWatched: false,
         createdAt: 'Sun Oct 30 2022 22:25:01 GMT+0700 (Indochina Time)',
         href: '/',
      },
      {
         _id: 'noti-12313adwd14123a412',
         type: 'trend',
         detail: 'มีคนมาไลค์กระทู้คุณ',
         isWatched: false,
         createdAt: 'Sun Oct 30 2022 22:25:01 GMT+0700 (Indochina Time)',
         href: '/',
      },
      {
         _id: 'noti-123131awxd4123412',
         type: 'like',
         detail: 'มีคนมาไลค์กระทู้คุณ',
         isWatched: false,
         createdAt: 'Sun Oct 30 2022 22:25:01 GMT+0700 (Indochina Time)',
         href: '/',
      },
   ],
};

export const fakeAuthPayload = {
   user: fakeUser,
   accessToken: 'e4--cv0-sk02394ojknmsiof89ios9023i423890ujiopasdjuioaao89uda9iodjwoaidjaw890dhj',
};
