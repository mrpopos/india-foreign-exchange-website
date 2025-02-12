import type { ISpecificCateDataItem } from './types'

export const cateData = [
  {
    id: 1,
    name: 'faq',
    title: 'User Guide',
    categories: [
      {
        id: 28,
        name: 'trading',
        title: 'Trading platform',
        url_alias: 'trading-platform',
      },
      {
        id: 22,
        name: 'profile',
        title: 'Profile',
        url_alias: 'profile',
      },
      {
        id: 1145,
        name: 'account-types',
        title: 'Account types',
        url_alias: 'account-types',
      },
      {
        id: 23,
        name: 'payment',
        title: 'Deposits',
        url_alias: 'deposits',
      },
      {
        id: 30,
        name: 'payouts',
        title: 'Withdrawals',
        url_alias: 'withdrawals',
      },
      {
        id: 32,
        name: 'statuses',
        title: 'Statuses',
        url_alias: 'statuses',
      },
      {
        id: 29,
        name: 'verification',
        title: 'Verification',
        url_alias: 'verification',
      },
      {
        id: 37,
        name: 'market-place',
        title: 'Market and platform extensions',
        url_alias: 'market-and-platform-extensions',
      },
      {
        id: 1715,
        name: 'custom-strategies',
        title: 'Custom strategies',
        url_alias: 'custom-strategies',
      },
    ],
  },
  // {
  //   id: 2,
  //   name: 'education',
  //   title: 'Trading Tutorials',
  //   categories: [
  //     {
  //       id: 1725,
  //       name: 'how-to-start-trading',
  //       title: 'How to start trading',
  //       url_alias: 'how-to-start-trading',
  //     },
  //     {
  //       id: 17,
  //       name: 'trade-guide',
  //       title: 'Fixed Time guide',
  //       url_alias: 'fixed-time-guide',
  //     },
  //     {
  //       id: 21,
  //       name: 'o-strategy',
  //       title: 'Fixed Time strategies',
  //       url_alias: 'fixed-time-strategies',
  //     },
  //     {
  //       id: 19,
  //       name: 'forex-guide',
  //       title: 'Forex guide',
  //       url_alias: 'forex-guide',
  //     },
  //     {
  //       id: 33,
  //       name: 'fx-strategy',
  //       title: 'Forex strategies',
  //       url_alias: 'forex-strategies',
  //     },
  //     {
  //       id: 38,
  //       name: 'spt',
  //       title: 'Stocks guide',
  //       url_alias: 'stocks-guide',
  //     },
  //     {
  //       id: 1755,
  //       name: 'risk-money-managment',
  //       title: 'Risk & money management',
  //       url_alias: 'risk--money-management',
  //     },
  //     {
  //       id: 34,
  //       name: 'using-fundamental-analysis',
  //       title: 'Fundamental analysis',
  //       url_alias: 'fundamental-analysis',
  //     },
  //     {
  //       id: 5,
  //       name: 'using-technical-analysis',
  //       title: 'Technical analysis',
  //       url_alias: 'technical-analysis',
  //     },
  //     {
  //       id: 24,
  //       name: 'charts',
  //       title: 'Сhart',
  //       url_alias: '%D1%81hart',
  //     },
  //     {
  //       id: 11,
  //       name: 'candlestick',
  //       title: 'Japanese candlesticks',
  //       url_alias: 'japanese-candlesticks',
  //     },
  //     {
  //       id: 26,
  //       name: 'drawing',
  //       title: 'Drawing tools',
  //       url_alias: 'drawing-tools',
  //     },
  //     {
  //       id: 20,
  //       name: 'o-indicator',
  //       title: 'Indicators',
  //       url_alias: 'indicators',
  //     },
  //     {
  //       id: 25,
  //       name: 'o-oscillator',
  //       title: 'Oscillators',
  //       url_alias: 'oscillators',
  //     },
  //   ],
  // },
  {
    id: 5,
    name: 'payment',
    title: 'Payment Methods',
    categories: [
      // {
      //   id: 45,
      //   name: 'neteller',
      //   title: 'Neteller',
      //   url_alias: 'neteller',
      // },
      // {
      //   id: 55,
      //   name: 'skrill',
      //   title: 'Skrill',
      //   url_alias: 'skrill',
      // },
      // {
      //   id: 65,
      //   name: 'perfect-money',
      //   title: 'Perfect Money',
      //   url_alias: 'perfect-money',
      // },
      // {
      //   id: 95,
      //   name: 'unionpay',
      //   title: 'UnionPay',
      //   url_alias: 'unionpay',
      // },
      {
        id: 105,
        name: 'tether',
        title: 'Tether',
        url_alias: 'tether',
      },
      // {
      //   id: 115,
      //   name: 'advcash',
      //   title: 'ADVcash ',
      //   url_alias: 'advcash-',
      // },
      // {
      //   id: 125,
      //   name: 'bank-cards',
      //   title: 'Bank Cards',
      //   url_alias: 'bank-cards',
      // },
      // {
      //   id: 1575,
      //   name: 'binance-pay',
      //   title: 'Binance Pay',
      //   url_alias: 'binance-pay',
      // },
    ],
  },
]

export const specificCateData: { [key: string]: ISpecificCateDataItem[] } = {
  trading: [
    {
      id: 164,
      name: 'about-the-trading-platform',
      title: 'About the trading platform',
      first_playlist_id: 895,
      category_id: 28,
      category_name: 'trading',
      category_caption: 'Trading platform',
      category_url_alias: 'trading',
      playlists: [
        {
          id: 895,
          name: 'what-is-a-trading-platform',
          lang_id: 9634,
          title: 'What is a trading platform?',
          is_has_video: false,
          url_alias: 'what-is-a-trading-platform',
        },
        {
          id: 1194,
          name: 'why-should-i-choose-olymp-trade',
          lang_id: 10427,
          title: 'Why Should I Choose Olymptrade?',
          is_has_video: false,
          url_alias: 'why-should-i-choose-olymp-trade',
        },
        {
          id: 903,
          name: 'what-is-a-time-frame',
          lang_id: 9642,
          title: 'What is a time frame?',
          is_has_video: false,
          url_alias: 'what-is-a-time-frame',
        },
        {
          id: 896,
          name: 'do-i-need-to-install-any-trading-software-on-my-pc',
          lang_id: 9635,
          title: 'Do I Need to Install Any Trading Software on My PC?',
          is_has_video: false,
          url_alias: 'do-i-need-to-install-any-trading-software-on-my-pc',
        },
        {
          id: 1199,
          name: 'can-i-use-robots-when-trading-on-the-platform',
          lang_id: 10462,
          title: 'Can I use robots when trading on the platform?',
          is_has_video: false,
          url_alias: 'can-i-use-robots-when-trading-on-the-platform',
        },
        {
          id: 900,
          name: 'what-should-i-do-if-a-system-error-occurs-when-loading-the-platform',
          lang_id: 9639,
          title: 'What Should I Do If a System Error Occurs When Loading the Platform?',
          is_has_video: false,
          url_alias: 'what-should-i-do-if-a-system-error-occurs-when-loading-the-platform',
        },
        {
          id: 3944,
          name: 'the-platform-doesnt-load',
          lang_id: 17715,
          title: 'The Platform Doesn’t Load',
          is_has_video: false,
          url_alias: 'the-platform-doesnt-load',
        },
      ],
    },
    {
      id: 253,
      name: 'trades',
      title: 'Trades',
      first_playlist_id: 899,
      category_id: 28,
      category_name: 'trading',
      category_caption: 'Trading platform',
      category_url_alias: 'trading',
      playlists: [
        {
          id: 899,
          name: 'why-doesnt-a-trade-open-instantly',
          lang_id: 9638,
          title: "Why doesn't a trade open instantly?",
          is_has_video: false,
          url_alias: 'why-doesnt-a-trade-open-instantly',
        },
        {
          id: 897,
          name: 'how-can-i-view-the-history-of-my-trades',
          lang_id: 9636,
          title: 'How Can I View the History of My Trades?',
          is_has_video: false,
          url_alias: 'how-can-i-view-the-history-of-my-trades',
        },
        {
          id: 3887,
          name: 'selecting-the-trading-conditions',
          lang_id: 17625,
          title: 'Selecting the Trading Conditions',
          is_has_video: false,
          url_alias: 'selecting-the-trading-conditions',
        },
      ],
    },
    {
      id: 254,
      name: 'trading-time',
      title: 'Trading time',
      first_playlist_id: 1385,
      category_id: 28,
      category_name: 'trading',
      category_caption: 'Trading platform',
      category_url_alias: 'trading',
      playlists: [
        {
          id: 1385,
          name: 'trading-and-quote-sessions',
          lang_id: 12420,
          title: 'Trading and Quote Sessions',
          is_has_video: false,
          url_alias: 'trading-and-quote-sessions',
        },
        {
          id: 901,
          name: 'what-is-the-most-active-time-of-day-for-trading-on-forex',
          lang_id: 9640,
          title: 'What is the most active time of day for trading on Forex?',
          is_has_video: false,
          url_alias: 'what-is-the-most-active-time-of-day-for-trading-on-forex',
        },
      ],
    },
    {
      id: 280,
      name: 'charts',
      title: 'Charts',
      first_playlist_id: 5309,
      category_id: 28,
      category_name: 'trading',
      category_caption: 'Trading platform',
      category_url_alias: 'trading',
      playlists: [
        {
          id: 5309,
          name: 'time-frames',
          lang_id: 19485,
          title: 'Time Frames',
          is_has_video: false,
          url_alias: 'time-frames',
        },
        {
          id: 5312,
          name: 'managing-trades',
          lang_id: 19514,
          title: 'Managing Trades',
          is_has_video: false,
          url_alias: 'managing-trades',
        },
        {
          id: 5315,
          name: 'the-chart-zoom-in-and-zoom-out',
          lang_id: 19529,
          title: 'The Chart: Zoom In and Zoom Out',
          is_has_video: false,
          url_alias: 'the-chart-zoom-in-and-zoom-out',
        },
        {
          id: 5317,
          name: 'historical-data',
          lang_id: 19543,
          title: 'Historical Data',
          is_has_video: false,
          url_alias: 'historical-data',
        },
        {
          id: 5318,
          name: 'quotes-refresh-rate',
          lang_id: 19556,
          title: 'Quotes Refresh Rate',
          is_has_video: false,
          url_alias: 'quotes-refresh-rate',
        },
      ],
    },
    {
      id: 301,
      name: 'custom-price-notification',
      title: 'Custom Price Notification',
      first_playlist_id: 6859,
      category_id: 28,
      category_name: 'trading',
      category_caption: 'Trading platform',
      category_url_alias: 'trading',
      playlists: [
        {
          id: 6859,
          name: 'what-is-it',
          lang_id: 22461,
          title: 'What is it?',
          is_has_video: false,
          url_alias: 'what-is-it',
        },
        {
          id: 6860,
          name: 'how-does-it-work',
          lang_id: 22462,
          title: 'How does it work?',
          is_has_video: false,
          url_alias: 'how-does-it-work',
        },
        {
          id: 6861,
          name: 'notification-types',
          lang_id: 22463,
          title: 'Notification Types',
          is_has_video: false,
          url_alias: 'notification-types',
        },
        {
          id: 6862,
          name: 'availability-and-duration',
          lang_id: 22464,
          title: 'Availability and Duration',
          is_has_video: false,
          url_alias: 'availability-and-duration',
        },
      ],
    },
    {
      id: 307,
      name: 'trading-limits',
      title: 'Trading Limits',
      first_playlist_id: 7058,
      category_id: 28,
      category_name: 'trading',
      category_caption: 'Trading platform',
      category_url_alias: 'trading',
      playlists: [
        {
          id: 7058,
          name: 'what-are-trading-limits',
          lang_id: 22961,
          title: 'What are trading limits?',
          is_has_video: false,
          url_alias: 'what-are-trading-limits',
        },
        {
          id: 7059,
          name: 'how-do-trading-limits-work',
          lang_id: 22962,
          title: 'How do trading limits work?',
          is_has_video: false,
          url_alias: 'how-do-trading-limits-work',
        },
        {
          id: 7060,
          name: 'is-it-possible-to-cancel-limits',
          lang_id: 22963,
          title: 'Is it possible to cancel limits?',
          is_has_video: false,
          url_alias: 'is-it-possible-to-cancel-limits',
        },
      ],
    },
    {
      id: 4685,
      name: 'browser-notifications',
      title: 'Browser Notifications',
      first_playlist_id: 19865,
      category_id: 28,
      category_name: 'trading',
      category_caption: 'Trading platform',
      category_url_alias: 'trading',
      playlists: [
        {
          id: 19865,
          name: 'how-to-enable-browser-notifications',
          lang_id: 1465025,
          title: 'How to Enable Browser Notifications?',
          is_has_video: false,
          url_alias: 'how-to-enable-browser-notifications',
        },
        {
          id: 19875,
          name: 'macos-system',
          lang_id: 1467405,
          title: 'macOS system',
          is_has_video: false,
          url_alias: 'macos-system',
        },
        {
          id: 19885,
          name: 'windows-system',
          lang_id: 1469425,
          title: 'Windows system',
          is_has_video: false,
          url_alias: 'windows-system',
        },
        {
          id: 19895,
          name: 'chrome-desktop',
          lang_id: 1471285,
          title: 'Chrome (Desktop)',
          is_has_video: false,
          url_alias: 'chrome-desktop',
        },
        {
          id: 19905,
          name: 'chrome-android',
          lang_id: 1473885,
          title: 'Chrome (Android)',
          is_has_video: false,
          url_alias: 'chrome-android',
        },
        {
          id: 19915,
          name: 'firefox',
          lang_id: 1475935,
          title: 'Firefox',
          is_has_video: false,
          url_alias: 'firefox',
        },
        {
          id: 19925,
          name: 'microsoft-edge',
          lang_id: 1477905,
          title: 'Microsoft Edge',
          is_has_video: false,
          url_alias: 'microsoft-edge',
        },
        {
          id: 19935,
          name: 'opera',
          lang_id: 1480025,
          title: 'Opera',
          is_has_video: false,
          url_alias: 'opera',
        },
      ],
    },
    {
      id: 4995,
      name: 'webgl',
      title: 'Enabling WebGL',
      first_playlist_id: 20255,
      category_id: 28,
      category_name: 'trading',
      category_caption: 'Trading platform',
      category_url_alias: 'trading',
      playlists: [
        {
          id: 20255,
          name: 'what-is-webgl',
          lang_id: 1577735,
          title: 'What is WebGL?',
          is_has_video: false,
          url_alias: 'what-is-webgl',
        },
        {
          id: 20325,
          name: 'webgl-google-chrome',
          lang_id: 1578365,
          title: 'Google Chrome',
          is_has_video: false,
          url_alias: 'webgl-google-chrome',
        },
        {
          id: 20335,
          name: 'webgl-edge',
          lang_id: 1579055,
          title: 'Edge',
          is_has_video: false,
          url_alias: 'webgl-edge',
        },
        {
          id: 20345,
          name: 'webgl-firefox',
          lang_id: 1579345,
          title: 'Firefox',
          is_has_video: false,
          url_alias: 'webgl-firefox',
        },
        {
          id: 20355,
          name: 'webgl-opera',
          lang_id: 1579805,
          title: 'Opera',
          is_has_video: false,
          url_alias: 'webgl-opera',
        },
        {
          id: 20365,
          name: 'webgl-safari',
          lang_id: 1580535,
          title: 'Safari',
          is_has_video: false,
          url_alias: 'webgl-safari',
        },
      ],
    },
  ],
  profile: [
    {
      id: 122,
      name: 'account-security',
      title: 'Account security',
      first_playlist_id: 592,
      category_id: 22,
      category_name: 'profile',
      category_caption: 'Profile',
      category_url_alias: 'profile',
      playlists: [
        {
          id: 592,
          name: 'what-is-two-factor-authentication',
          lang_id: 5880,
          title: 'What is two-factor authentication?',
          is_has_video: false,
          url_alias: 'what-is-two-factor-authentication',
        },
        {
          id: 1095,
          name: 'two-factor-authentication-via-sms',
          lang_id: 10185,
          title: 'Two-factor authentication via Facebook',
          is_has_video: false,
          url_alias: 'two-factor-authentication-via-sms',
        },
        {
          id: 1096,
          name: 'two-factor-authentication-via-google',
          lang_id: 10200,
          title: 'Two-factor authentication via Google',
          is_has_video: false,
          url_alias: 'two-factor-authentication-via-google',
        },
        {
          id: 591,
          name: 'strong-password',
          lang_id: 5861,
          title: 'Strong password',
          is_has_video: false,
          url_alias: 'strong-password',
        },
        {
          id: 3958,
          name: 'email-and-phone-number-confirmation',
          lang_id: 17754,
          title: 'Email and Phone Number Confirmation',
          is_has_video: false,
          url_alias: 'email-and-phone-number-confirmation',
        },
        {
          id: 7311,
          name: 'archiving-an-account',
          lang_id: 23286,
          title: 'Archiving an Account',
          is_has_video: false,
          url_alias: 'archiving-an-account',
        },
      ],
    },
    {
      id: 124,
      name: 'how-to-amend-your-personal-information',
      title: 'How to amend your personal information',
      first_playlist_id: 600,
      category_id: 22,
      category_name: 'profile',
      category_caption: 'Profile',
      category_url_alias: 'profile',
      playlists: [
        {
          id: 600,
          name: 'how-can-i-change-my-email',
          lang_id: 6032,
          title: 'How Can I Change My Email',
          is_has_video: false,
          url_alias: 'how-can-i-change-my-email',
        },
        {
          id: 601,
          name: 'how-can-i-change-my-phone-number',
          lang_id: 6051,
          title: 'How Can I Change My Phone Number',
          is_has_video: false,
          url_alias: 'how-can-i-change-my-phone-number',
        },
        {
          id: 603,
          name: 'how-can-i-change-the-password',
          lang_id: 6089,
          title: 'How Can I Change the Password',
          is_has_video: false,
          url_alias: 'how-can-i-change-the-password',
        },
        {
          id: 604,
          name: 'how-to-delete-an-account',
          lang_id: 6108,
          title: 'How to Delete an Account',
          is_has_video: false,
          url_alias: 'how-to-delete-an-account',
        },
      ],
    },
    {
      id: 125,
      name: 'problems-logging-in-to-the-platform',
      title: 'Problems logging in to the platform',
      first_playlist_id: 605,
      category_id: 22,
      category_name: 'profile',
      category_caption: 'Profile',
      category_url_alias: 'profile',
      playlists: [
        {
          id: 605,
          name: 'incorrect-password',
          lang_id: 6127,
          title: 'Incorrect password',
          is_has_video: false,
          url_alias: 'incorrect-password',
        },
        {
          id: 606,
          name: 'the-user-already-exists-or-has-not-been-found',
          lang_id: 6146,
          title: 'The User Already Exists or Has Not Been Found',
          is_has_video: false,
          url_alias: 'the-user-already-exists-or-has-not-been-found',
        },
      ],
    },
    {
      id: 2285,
      name: 'reasons-why-account-is-blocked',
      title: 'Reasons Why Account Is Blocked',
      first_playlist_id: 15425,
      category_id: 22,
      category_name: 'profile',
      category_caption: 'Profile',
      category_url_alias: 'profile',
      playlists: [
        {
          id: 15425,
          name: 'account-blocked-due-to-age',
          lang_id: 587685,
          title: 'Account blocked Due to Age',
          is_has_video: false,
          url_alias: 'account-blocked-due-to-age',
        },
        {
          id: 15445,
          name: 'account-blocked-because-of-too-many-accounts',
          lang_id: 588535,
          title: 'Account blocked Because of Too Many Accounts',
          is_has_video: false,
          url_alias: 'account-blocked-because-of-too-many-accounts',
        },
        {
          id: 15465,
          name: 'account-blocked-due-to-country',
          lang_id: 588755,
          title: 'Account blocked Due to Country',
          is_has_video: false,
          url_alias: 'account-blocked-due-to-country',
        },
        {
          id: 15645,
          name: 'unauthorized-access-attempt',
          lang_id: 592035,
          title: 'Account blocked due to unauthorized Access Attempt ',
          is_has_video: false,
          url_alias: 'unauthorized-access-attempt',
        },
        {
          id: 15675,
          name: 'what-to-look-out-for-if-your-account-was-blocked',
          lang_id: 594725,
          title: 'What to look out for if your account was blocked',
          is_has_video: false,
          url_alias: 'what-to-look-out-for-if-your-account-was-blocked',
        },
      ],
    },
    {
      id: 312,
      name: 'cybersecurity',
      title: 'Cybersecurity',
      first_playlist_id: 9125,
      category_id: 22,
      category_name: 'profile',
      category_caption: 'Profile',
      category_url_alias: 'profile',
      playlists: [
        {
          id: 9125,
          name: 'what-is-cybersecurity',
          lang_id: 25410,
          title: 'What is cybersecurity?',
          is_has_video: false,
          url_alias: 'what-is-cybersecurity',
        },
        {
          id: 9126,
          name: 'types-of-trading-scams',
          lang_id: 25411,
          title: 'Types of Trading Scams',
          is_has_video: false,
          url_alias: 'types-of-trading-scams',
        },
        {
          id: 9127,
          name: 'basic-cybersecurity-rules',
          lang_id: 25412,
          title: 'Basic Cybersecurity Rules',
          is_has_video: false,
          url_alias: 'basic-cybersecurity-rules',
        },
        {
          id: 9128,
          name: 'how-olymp-trade-protects-you-from-scams',
          lang_id: 25413,
          title: 'How Olymptrade Protects You from Scams',
          is_has_video: false,
          url_alias: 'how-olymp-trade-protects-you-from-scams',
        },
      ],
    },
    {
      id: 287,
      name: 'segregated-account',
      title: 'Segregated Account',
      first_playlist_id: 5895,
      category_id: 22,
      category_name: 'profile',
      category_caption: 'Profile',
      category_url_alias: 'profile',
      playlists: [
        {
          id: 5895,
          name: 'what-is-a-segregated-account',
          lang_id: 20688,
          title: 'What Is a Segregated Account?',
          is_has_video: false,
          url_alias: 'what-is-a-segregated-account',
        },
        {
          id: 5896,
          name: 'advantages-of-a-segregate-account',
          lang_id: 20689,
          title: 'Advantages of a Segregate Account',
          is_has_video: false,
          url_alias: 'advantages-of-a-segregate-account',
        },
      ],
    },
  ],
  'account-types': [
    {
      id: 3605,
      name: 'demo-accounts-1',
      title: 'Demo Accounts',
      first_playlist_id: 902,
      category_id: 1145,
      category_name: 'account-types',
      category_caption: 'Account types',
      category_url_alias: 'account-types',
      playlists: [
        {
          id: 902,
          name: 'what-is-a-demo-account',
          lang_id: 9641,
          title: 'What Is a Demo Account?',
          is_has_video: true,
          url_alias: 'what-is-a-demo-account',
        },
        {
          id: 22175,
          name: 'limitations-of-demo-trading',
          lang_id: 1730475,
          title: 'Limitations of demo trading',
          is_has_video: false,
          url_alias: 'limitations-of-demo-trading',
        },
        {
          id: 22185,
          name: 'live-trading-tips',
          lang_id: 1734355,
          title: 'Live trading tips',
          is_has_video: false,
          url_alias: 'live-trading-tips',
        },
        {
          id: 22195,
          name: 'are-you-ready-to-trade-on-a-live-account',
          lang_id: 1738775,
          title: 'Are you ready to trade on a live account?',
          is_has_video: true,
          url_alias: 'are-you-ready-to-trade-on-a-live-account',
        },
      ],
    },
    {
      id: 3715,
      name: 'traders-id',
      title: "Trading accounts and Trader's ID",
      first_playlist_id: 17715,
      category_id: 1145,
      category_name: 'account-types',
      category_caption: 'Account types',
      category_url_alias: 'account-types',
      playlists: [
        {
          id: 17715,
          name: 'what-is-traders-id',
          lang_id: 1016685,
          title: "What is a Trader's ID?",
          is_has_video: false,
          url_alias: 'what-is-traders-id',
        },
        {
          id: 17725,
          name: 'what-is-a-trading-account',
          lang_id: 1018515,
          title: 'What is a trading account?',
          is_has_video: false,
          url_alias: 'what-is-a-trading-account',
        },
        {
          id: 17735,
          name: 'how-to-choose-a-currency',
          lang_id: 1020345,
          title: 'How to Choose a Currency',
          is_has_video: false,
          url_alias: 'how-to-choose-a-currency',
        },
        {
          id: 17745,
          name: 'change-the-currency1',
          lang_id: 1022195,
          title: 'Can I change the currency of a trading account?',
          is_has_video: false,
          url_alias: 'change-the-currency1',
        },
        {
          id: 17755,
          name: 'how-to-deposit-traders-account',
          lang_id: 1024335,
          title: 'How to deposit funds to your trading account',
          is_has_video: true,
          url_alias: 'how-to-deposit-traders-account',
        },
        {
          id: 17765,
          name: 'withdraw-funds-traders-account',
          lang_id: 1026145,
          title: 'How to withdraw funds from an account?',
          is_has_video: true,
          url_alias: 'withdraw-funds-traders-account',
        },
      ],
    },
    {
      id: 1615,
      name: 'usdt-account',
      title: 'USDT Accounts',
      first_playlist_id: 14125,
      category_id: 1145,
      category_name: 'account-types',
      category_caption: 'Account types',
      category_url_alias: 'account-types',
      playlists: [
        {
          id: 14125,
          name: 'what-is-a-usdt-account',
          lang_id: 409965,
          title: 'What Is a USDT Account?',
          is_has_video: false,
          url_alias: 'what-is-a-usdt-account',
        },
        {
          id: 14135,
          name: 'what-is-cryptocurrency',
          lang_id: 410505,
          title: 'What Is Cryptocurrency?',
          is_has_video: false,
          url_alias: 'what-is-cryptocurrency',
        },
        {
          id: 14145,
          name: 'what-are-stablecoins',
          lang_id: 410775,
          title: 'What Are Stablecoins?',
          is_has_video: false,
          url_alias: 'what-are-stablecoins',
        },
        {
          id: 14155,
          name: 'usdt-protocols',
          lang_id: 411145,
          title: 'What USDT Protocols Are Available on Olymptrade?',
          is_has_video: false,
          url_alias: 'usdt-protocols',
        },
        {
          id: 17535,
          name: 'crypto-exchange',
          lang_id: 971795,
          title: 'How Do I Make an Account on a Crypto Exchange?',
          is_has_video: false,
          url_alias: 'crypto-exchange',
        },
        {
          id: 18035,
          name: 'crypto-wallet',
          lang_id: 1087615,
          title: 'How Do I Create a Crypto Wallet?',
          is_has_video: false,
          url_alias: 'crypto-wallet',
        },
        {
          id: 17545,
          name: 'deposit-funds-usdt',
          lang_id: 973755,
          title: 'How Do I Deposit Funds to a USDT Account?',
          is_has_video: true,
          url_alias: 'deposit-funds-usdt',
        },
        {
          id: 17555,
          name: 'withdraw-usdt',
          lang_id: 976095,
          title: 'How Do I Withdraw Funds from a USDT Account?',
          is_has_video: true,
          url_alias: 'withdraw-usdt',
        },
        {
          id: 17565,
          name: 'transaction-processing-time',
          lang_id: 978125,
          title: 'How Long Will It Take to Process My USDT Deposit/Withdrawal? ',
          is_has_video: false,
          url_alias: 'transaction-processing-time',
        },
        {
          id: 14165,
          name: 'minimum-deposit-amount',
          lang_id: 411505,
          title: 'Minimum Deposit Amount',
          is_has_video: false,
          url_alias: 'minimum-deposit-amount',
        },
        {
          id: 14175,
          name: 'minimum-withdrawal-amount',
          lang_id: 411875,
          title: 'Minimum Withdrawal Amount',
          is_has_video: false,
          url_alias: 'minimum-withdrawal-amount',
        },
        {
          id: 14195,
          name: 'maximum-withdrawal-amount',
          lang_id: 412705,
          title: 'Maximum Withdrawal Amount',
          is_has_video: false,
          url_alias: 'maximum-withdrawal-amount',
        },
        {
          id: 14185,
          name: 'maximum-deposit-amount',
          lang_id: 412225,
          title: 'Maximum Deposit Amount',
          is_has_video: false,
          url_alias: 'maximum-deposit-amount',
        },
      ],
    },
    {
      id: 282,
      name: 'multi-accounts-what-is-it-and-how-to-manage-them',
      title: 'Multi-Accounts: What Is It and How to Manage Them',
      first_playlist_id: 5476,
      category_id: 1145,
      category_name: 'account-types',
      category_caption: 'Account types',
      category_url_alias: 'account-types',
      playlists: [
        {
          id: 5476,
          name: 'what-are-multi-accounts',
          lang_id: 20211,
          title: 'What are multi accounts?',
          is_has_video: false,
          url_alias: 'what-are-multi-accounts',
        },
        {
          id: 5840,
          name: 'how-to-create-a-trading-account-in-multi-accounts',
          lang_id: 20625,
          title: 'How to Create a Trading Account in Multi-Accounts',
          is_has_video: false,
          url_alias: 'how-to-create-a-trading-account-in-multi-accounts',
        },
        {
          id: 5841,
          name: 'how-to-sort-and-rename-your-live-accounts',
          lang_id: 20626,
          title: 'How to Sort and Rename Your Live Accounts',
          is_has_video: false,
          url_alias: 'how-to-sort-and-rename-your-live-accounts',
        },
        {
          id: 5478,
          name: 'how-to-deposit-money-to-your-accounts',
          lang_id: 20215,
          title: 'How to Deposit Money to Your Accounts',
          is_has_video: true,
          url_alias: 'how-to-deposit-money-to-your-accounts',
        },
        {
          id: 5477,
          name: 'how-to-transfer-money-between-accounts',
          lang_id: 20213,
          title: 'How to Transfer Money between Accounts',
          is_has_video: false,
          url_alias: 'how-to-transfer-money-between-accounts',
        },
        {
          id: 5479,
          name: 'how-to-withdraw-money-from-your-accounts',
          lang_id: 20217,
          title: 'How to Withdraw Money from Your Accounts',
          is_has_video: false,
          url_alias: 'how-to-withdraw-money-from-your-accounts',
        },
        {
          id: 5842,
          name: 'how-to-archive-your-account',
          lang_id: 20627,
          title: 'How to Archive Your Account',
          is_has_video: false,
          url_alias: 'how-to-archive-your-account',
        },
      ],
    },
  ],
  payment: [
    {
      id: 130,
      name: 'making-a-deposit',
      title: 'Making a deposit',
      first_playlist_id: 23125,
      category_id: 23,
      category_name: 'payment',
      category_caption: 'Deposits',
      category_url_alias: 'payment',
      playlists: [
        {
          id: 23125,
          name: 'deposit-methods',
          lang_id: 2031745,
          title: 'Deposit methods',
          is_has_video: false,
          url_alias: 'deposit-methods',
        },
        {
          id: 23135,
          name: 'how-to-deposit-with-a-bank-card',
          lang_id: 2034925,
          title: 'How to deposit with a bank card',
          is_has_video: true,
          url_alias: 'how-to-deposit-with-a-bank-card',
        },
        {
          id: 23145,
          name: 'how-to-deposit-with-crypto',
          lang_id: 2037575,
          title: 'How to deposit with crypto',
          is_has_video: false,
          url_alias: 'how-to-deposit-with-crypto',
        },
        {
          id: 23155,
          name: 'how-to-deposit-with-an-e-payment-system',
          lang_id: 2040585,
          title: 'How to deposit with an e-payment system ',
          is_has_video: false,
          url_alias: 'how-to-deposit-with-an-e-payment-system',
        },
        {
          id: 23195,
          name: 'deposit-times',
          lang_id: 2043595,
          title: 'Deposit times',
          is_has_video: false,
          url_alias: 'deposit-times',
        },
      ],
    },
    {
      id: 171,
      name: 'fees-and-commissions',
      title: 'Fees and commissions',
      first_playlist_id: 954,
      category_id: 23,
      category_name: 'payment',
      category_caption: 'Deposits',
      category_url_alias: 'payment',
      playlists: [
        {
          id: 954,
          name: 'brokerage-fees',
          lang_id: 9940,
          title: 'Brokerage fees',
          is_has_video: false,
          url_alias: 'brokerage-fees',
        },
        {
          id: 955,
          name: 'deposit-fee',
          lang_id: 9954,
          title: 'Deposit fee',
          is_has_video: false,
          url_alias: 'deposit-fee',
        },
      ],
    },
  ],
  payouts: [
    {
      id: 187,
      name: 'request-for-withdrawal',
      title: 'Making a withdrawal',
      first_playlist_id: 635,
      category_id: 30,
      category_name: 'payouts',
      category_caption: 'Withdrawals',
      category_url_alias: 'payouts',
      playlists: [
        {
          id: 635,
          name: 'how-do-i-withdraw-funds',
          lang_id: 6583,
          title: 'Withdrawal methods',
          is_has_video: false,
          url_alias: 'how-do-i-withdraw-funds',
        },
        {
          id: 638,
          name: 'how-to-withdraw-to-a-bank-card',
          lang_id: 6640,
          title: 'How to withdraw to a bank card',
          is_has_video: true,
          url_alias: 'how-to-withdraw-to-a-bank-card',
        },
        {
          id: 932,
          name: 'how-to-withdraw-in-crypto',
          lang_id: 9843,
          title: 'How to withdraw in crypto',
          is_has_video: false,
          url_alias: 'how-to-withdraw-in-crypto',
        },
        {
          id: 938,
          name: 'how-to-withdraw-to-an-e-payment-system',
          lang_id: 9901,
          title: 'How to withdraw to an e-payment system',
          is_has_video: false,
          url_alias: 'how-to-withdraw-to-an-e-payment-system',
        },
        {
          id: 23225,
          name: 'required-documents-for-withdrawals',
          lang_id: 2080855,
          title: 'Required documents for withdrawals',
          is_has_video: false,
          url_alias: 'required-documents-for-withdrawals',
        },
      ],
    },
    {
      id: 5365,
      name: 'withdrawal-limits-and-fees',
      title: 'Withdrawal limits and fees\t',
      first_playlist_id: 23245,
      category_id: 30,
      category_name: 'payouts',
      category_caption: 'Withdrawals',
      category_url_alias: 'payouts',
      playlists: [
        {
          id: 23245,
          name: 'minimum-and-maximum-withdrawal-limits',
          lang_id: 2081655,
          title: 'Minimum and maximum withdrawal limits',
          is_has_video: false,
          url_alias: 'minimum-and-maximum-withdrawal-limits',
        },
        {
          id: 23265,
          name: 'withdrawal-fee',
          lang_id: 2082435,
          title: 'Withdrawal fees',
          is_has_video: false,
          url_alias: 'withdrawal-fee',
        },
      ],
    },
    {
      id: 188,
      name: 'processing-time-for-withdrawals',
      title: 'Withdrawal processing times',
      first_playlist_id: 636,
      category_id: 30,
      category_name: 'payouts',
      category_caption: 'Withdrawals',
      category_url_alias: 'payouts',
      playlists: [
        {
          id: 636,
          name: 'how-long-do-withdrawal-requests-take',
          lang_id: 6602,
          title: 'Withdrawal time frame',
          is_has_video: false,
          url_alias: 'how-long-do-withdrawal-requests-take',
        },
        {
          id: 637,
          name: 'why-do-you-credit-deposits-immediately-but-take-more-time-to-process-withdrawals',
          lang_id: 6621,
          title: 'Why withdrawals take longer than deposits',
          is_has_video: false,
          url_alias:
            'why-do-you-credit-deposits-immediately-but-take-more-time-to-process-withdrawals',
        },
        {
          id: 23275,
          name: 'how-to-track-your-withdrawals-with-an-arn',
          lang_id: 2085185,
          title: 'How to track your withdrawals with an ARN',
          is_has_video: false,
          url_alias: 'how-to-track-your-withdrawals-with-an-arn',
        },
      ],
    },
    {
      id: 5375,
      name: 'troubleshooting-withdrawal',
      title: 'Troubleshooting',
      first_playlist_id: 23295,
      category_id: 30,
      category_name: 'payouts',
      category_caption: 'Withdrawals',
      category_url_alias: 'payouts',
      playlists: [
        {
          id: 23295,
          name: 'reasons-for-canceled-withdrawal-requests',
          lang_id: 2085525,
          title: 'Reasons for canceled withdrawal requests',
          is_has_video: false,
          url_alias: 'reasons-for-canceled-withdrawal-requests',
        },
        {
          id: 23305,
          name: 'withdrawal-status-done-but-money-not-received',
          lang_id: 2086285,
          title: 'Withdrawal status "Done" but money not received',
          is_has_video: false,
          url_alias: 'withdrawal-status-done-but-money-not-received',
        },
        {
          id: 23315,
          name: 'receiving-your-withdrawal-in-parts',
          lang_id: 2086975,
          title: 'Receiving your withdrawal in parts',
          is_has_video: false,
          url_alias: 'receiving-your-withdrawal-in-parts',
        },
      ],
    },
    {
      id: 189,
      name: 'deposit-and-withdrawal-sources',
      title: 'Deposit and withdrawal sources',
      first_playlist_id: 639,
      category_id: 30,
      category_name: 'payouts',
      category_caption: 'Withdrawals',
      category_url_alias: 'payouts',
      playlists: [
        {
          id: 639,
          name: 'how-do-i-withdraw-funds-to-two-payment-methods',
          lang_id: 6659,
          title: 'Withdrawing to multiple payment methods',
          is_has_video: false,
          url_alias: 'how-do-i-withdraw-funds-to-two-payment-methods',
        },
        {
          id: 640,
          name: 'how-do-i-remove-the-payment-method',
          lang_id: 6678,
          title: 'How to remove a payment method from your account',
          is_has_video: false,
          url_alias: 'how-do-i-remove-the-payment-method',
        },
        {
          id: 937,
          name: 'what-should-i-do-if-my-carde-wallet-is-no-longer-active',
          lang_id: 9887,
          title: 'What to do if your card or e-wallet is inactive',
          is_has_video: false,
          url_alias: 'what-should-i-do-if-my-carde-wallet-is-no-longer-active',
        },
        {
          id: 23325,
          name: 'e-wallet-as-a-solution-for-bank-transfer-limits',
          lang_id: 2089655,
          title: 'E-wallet as a solution for bank transfer limits',
          is_has_video: false,
          url_alias: 'e-wallet-as-a-solution-for-bank-transfer-limits',
        },
      ],
    },
  ],
  statuses: [
    {
      id: 208,
      name: 'about-statuses',
      title: 'About Statuses',
      first_playlist_id: 1216,
      category_id: 32,
      category_name: 'statuses',
      category_caption: 'Statuses',
      category_url_alias: 'statuses',
      playlists: [
        {
          id: 1216,
          name: 'what-are-statuses',
          lang_id: 10600,
          title: 'What are statuses?',
          is_has_video: true,
          url_alias: 'what-are-statuses',
        },
        {
          id: 1217,
          name: 'the-perks-of-the-starter-status',
          lang_id: 10615,
          title: 'The Perks of the Starter Status',
          is_has_video: true,
          url_alias: 'the-perks-of-the-starter-status',
        },
        {
          id: 1218,
          name: 'advantages-of-the-advanced-status',
          lang_id: 10632,
          title: 'Advantages of the Advanced Status on FTT',
          is_has_video: true,
          url_alias: 'advantages-of-the-advanced-status',
        },
        {
          id: 9865,
          name: 'advanced-status-forex',
          lang_id: 26815,
          title: 'Advantages of the Advanced Status on Forex',
          is_has_video: true,
          url_alias: 'advanced-status-forex',
        },
        {
          id: 1219,
          name: 'advantages-of-expert-status',
          lang_id: 10648,
          title: 'Advantages of Expert Status on FTT',
          is_has_video: false,
          url_alias: 'advantages-of-expert-status',
        },
        {
          id: 9895,
          name: 'Advantages-of-Expert-Status-on-Forex',
          lang_id: 27875,
          title: 'Advantages of Expert Status on Forex',
          is_has_video: false,
          url_alias: 'advantages-of-expert-status-on-forex',
        },
      ],
    },
    {
      id: 209,
      name: 'how-do-i-get-a-new-status',
      title: 'How do I get a new status?',
      first_playlist_id: 1220,
      category_id: 32,
      category_name: 'statuses',
      category_caption: 'Statuses',
      category_url_alias: 'statuses',
      playlists: [
        {
          id: 1220,
          name: 'how-do-i-get-a-new-status',
          lang_id: 10664,
          title: 'How do I get a new status?',
          is_has_video: false,
          url_alias: 'how-do-i-get-a-new-status',
        },
        {
          id: 1221,
          name: 'what-are-experience-points-xp',
          lang_id: 10680,
          title: 'What are experience points (XP)?',
          is_has_video: false,
          url_alias: 'what-are-experience-points-xp',
        },
        {
          id: 9207,
          name: 'how-to-subscribe-to-statuses',
          lang_id: 25540,
          title: 'How To Subscribe to Statuses',
          is_has_video: false,
          url_alias: 'how-to-subscribe-to-statuses',
        },
      ],
    },
    {
      id: 210,
      name: 'traders-way',
      title: "Trader's Way",
      first_playlist_id: 1222,
      category_id: 32,
      category_name: 'statuses',
      category_caption: 'Statuses',
      category_url_alias: 'statuses',
      playlists: [
        {
          id: 1222,
          name: 'what-is-traders-way-about',
          lang_id: 10696,
          title: 'What Is Trader’s Way About',
          is_has_video: true,
          url_alias: 'what-is-traders-way-about',
        },
        {
          id: 1223,
          name: 'why-is-it-so-important-to-complete-tasks',
          lang_id: 10712,
          title: 'Why is it so important to complete tasks?',
          is_has_video: false,
          url_alias: 'why-is-it-so-important-to-complete-tasks',
        },
        {
          id: 1225,
          name: 'how-do-i-get-more-experience-points',
          lang_id: 10744,
          title: 'How do I get more experience points?',
          is_has_video: false,
          url_alias: 'how-do-i-get-more-experience-points',
        },
        {
          id: 1224,
          name: 'what-are-achievments',
          lang_id: 10728,
          title: 'What are achievements?',
          is_has_video: false,
          url_alias: 'what-are-achievments',
        },
      ],
    },
    {
      id: 128,
      name: 'risk-free-trades',
      title: 'Risk-Free Trades',
      first_playlist_id: 623,
      category_id: 32,
      category_name: 'statuses',
      category_caption: 'Statuses',
      category_url_alias: 'statuses',
      playlists: [
        {
          id: 623,
          name: 'what-is-a-risk-free-trade',
          lang_id: 6412,
          title: 'What is a risk-free trade?',
          is_has_video: false,
          url_alias: 'what-is-a-risk-free-trade',
        },
        {
          id: 624,
          name: 'how-do-i-get-a-risk-free-trade',
          lang_id: 6431,
          title: 'How can I get a risk-free trade?',
          is_has_video: false,
          url_alias: 'how-do-i-get-a-risk-free-trade',
        },
        {
          id: 625,
          name: 'how-risk-free-trades-work',
          lang_id: 6450,
          title: 'How Risk-Free Trades Work',
          is_has_video: false,
          url_alias: 'how-risk-free-trades-work',
        },
      ],
    },
    {
      id: 177,
      name: 'status-extension-and-upgrade',
      title: 'Status Extension and Upgrade',
      first_playlist_id: 1226,
      category_id: 32,
      category_name: 'statuses',
      category_caption: 'Statuses',
      category_url_alias: 'statuses',
      playlists: [
        {
          id: 1226,
          name: 'how-long-does-a-status-last',
          lang_id: 10760,
          title: 'How long does a status last?',
          is_has_video: false,
          url_alias: 'how-long-does-a-status-last',
        },
        {
          id: 1230,
          name: 'how-do-i-extend-my-status-level',
          lang_id: 10779,
          title: 'How do I extend my status level?',
          is_has_video: false,
          url_alias: 'how-do-i-extend-my-status-level',
        },
        {
          id: 1231,
          name: 'when-and-how-is-the-status-upgraded',
          lang_id: 10795,
          title: 'When and how is the status upgraded?',
          is_has_video: false,
          url_alias: 'when-and-how-is-the-status-upgraded',
        },
        {
          id: 20485,
          name: 'how-can-i-keep-my-status',
          lang_id: 1593415,
          title: 'How can I keep my status if I don’t have enough XP?',
          is_has_video: false,
          url_alias: 'how-can-i-keep-my-status',
        },
      ],
    },
  ],
  verification: [
    {
      id: 283,
      name: 'verification-process',
      title: 'General Information',
      first_playlist_id: 5723,
      category_id: 29,
      category_name: 'verification',
      category_caption: 'Verification',
      category_url_alias: 'verification',
      playlists: [
        {
          id: 5723,
          name: 'what-is-verification',
          lang_id: 20506,
          title: 'What is Verification?',
          is_has_video: false,
          url_alias: 'what-is-verification',
        },
        {
          id: 5724,
          name: 'voluntary-and-mandatory-verification',
          lang_id: 20507,
          title: 'Voluntary and Mandatory Verification',
          is_has_video: false,
          url_alias: 'voluntary-and-mandatory-verification',
        },
        {
          id: 5732,
          name: 'verification-timeframe',
          lang_id: 20515,
          title: 'Verification Timeframe',
          is_has_video: false,
          url_alias: 'verification-timeframe',
        },
        {
          id: 5734,
          name: 're-verification',
          lang_id: 20517,
          title: 'Re-Verification',
          is_has_video: false,
          url_alias: 're-verification',
        },
      ],
    },
    {
      id: 288,
      name: 'verification-documents',
      title: 'Verification Steps',
      first_playlist_id: 5727,
      category_id: 29,
      category_name: 'verification',
      category_caption: 'Verification',
      category_url_alias: 'verification',
      playlists: [
        {
          id: 5727,
          name: 'general-list-of-documents',
          lang_id: 20510,
          title: 'General List of Documents',
          is_has_video: false,
          url_alias: 'general-list-of-documents',
        },
        {
          id: 5728,
          name: 'id',
          lang_id: 20511,
          title: 'ID',
          is_has_video: false,
          url_alias: 'id',
        },
        {
          id: 6110,
          name: '3d-selfie',
          lang_id: 21069,
          title: '3D Selfie',
          is_has_video: false,
          url_alias: '3d-selfie',
        },
        {
          id: 6111,
          name: 'residence-verification',
          lang_id: 21070,
          title: 'Residence',
          is_has_video: false,
          url_alias: 'residence-verification',
        },
        {
          id: 6112,
          name: 'payment-method-verification',
          lang_id: 21071,
          title: 'Payment Method',
          is_has_video: false,
          url_alias: 'payment-method-verification',
        },
      ],
    },
    {
      id: 289,
      name: 'challenges-you-may-encounter',
      title: 'Potential Challenges',
      first_playlist_id: 5729,
      category_id: 29,
      category_name: 'verification',
      category_caption: 'Verification',
      category_url_alias: 'verification',
      playlists: [
        {
          id: 5729,
          name: 'the-bank-card-is-blocked',
          lang_id: 20512,
          title: 'The bank card is blocked',
          is_has_video: false,
          url_alias: 'the-bank-card-is-blocked',
        },
        {
          id: 6007,
          name: 'the-bank-card-is-not-personalized',
          lang_id: 20966,
          title: 'The bank card is not personalized',
          is_has_video: false,
          url_alias: 'the-bank-card-is-not-personalized',
        },
        {
          id: 17235,
          name: 'e-wallet-belongs-to-someone-else',
          lang_id: 899935,
          title: 'The bank card or e-wallet belongs to someone else',
          is_has_video: false,
          url_alias: 'e-wallet-belongs-to-someone-else',
        },
      ],
    },
  ],
  'market-place': [
    {
      id: 248,
      name: 'market-general-concepts',
      title: 'Market: General Concepts',
      first_playlist_id: 1935,
      category_id: 37,
      category_name: 'market-place',
      category_caption: 'Market and platform extensions',
      category_url_alias: 'market-place',
      playlists: [
        {
          id: 1935,
          name: 'what-is-the-market',
          lang_id: 14437,
          title: 'What is the market?',
          is_has_video: false,
          url_alias: 'what-is-the-market',
        },
        {
          id: 1936,
          name: 'what-is-an-extension',
          lang_id: 14438,
          title: 'What is an extension?',
          is_has_video: false,
          url_alias: 'what-is-an-extension',
        },
      ],
    },
    {
      id: 310,
      name: 'trading-signals',
      title: 'Trading Signals',
      first_playlist_id: 9905,
      category_id: 37,
      category_name: 'market-place',
      category_caption: 'Market and platform extensions',
      category_url_alias: 'market-place',
      playlists: [
        {
          id: 9905,
          name: 'what-is-a-trading-signal',
          lang_id: 114375,
          title: 'What is a trading signal?',
          is_has_video: true,
          url_alias: 'what-is-a-trading-signal',
        },
        {
          id: 9915,
          name: 'how-do-you-use-trading-signals',
          lang_id: 116075,
          title: 'How do you use trading signals?',
          is_has_video: false,
          url_alias: 'how-do-you-use-trading-signals',
        },
        {
          id: 9925,
          name: 'What-is-a-scalping-trade',
          lang_id: 116605,
          title: 'What is a scalping trade?',
          is_has_video: false,
          url_alias: 'what-is-a-scalping-trade',
        },
        {
          id: 9945,
          name: 'What-is-an-intraday-trade',
          lang_id: 117015,
          title: 'What is an intraday trade?',
          is_has_video: false,
          url_alias: 'what-is-an-intraday-trade',
        },
        {
          id: 9955,
          name: 'What-is-a-swing-trade',
          lang_id: 117545,
          title: 'What is a swing trade?',
          is_has_video: false,
          url_alias: 'what-is-a-swing-trade',
        },
        {
          id: 9965,
          name: 'How-is-a-signal-formed',
          lang_id: 117945,
          title: 'How is a signal formed?',
          is_has_video: false,
          url_alias: 'how-is-a-signal-formed',
        },
        {
          id: 9975,
          name: 'how-can-i-get-more-signals',
          lang_id: 118345,
          title: 'How can I get more signals?',
          is_has_video: false,
          url_alias: 'how-can-i-get-more-signals',
        },
        {
          id: 9985,
          name: 'Can-I-trust-trading-signals',
          lang_id: 118615,
          title: 'Can I trust trading signals?',
          is_has_video: false,
          url_alias: 'can-i-trust-trading-signals',
        },
        {
          id: 9995,
          name: 'What-is-the-ticking-timer-in-the-signal',
          lang_id: 119145,
          title: 'What is the ticking timer in the signal?',
          is_has_video: false,
          url_alias: 'what-is-the-ticking-timer-in-the-signal',
        },
        {
          id: 10005,
          name: 'Why-is-there-no-new-signal',
          lang_id: 119545,
          title: 'Why is there no new signal?',
          is_has_video: false,
          url_alias: 'why-is-there-no-new-signal',
        },
        {
          id: 10015,
          name: 'How-long-do-I-have-to-wait-for-a-new-signal',
          lang_id: 119945,
          title: 'How long do I have to wait for a new signal?',
          is_has_video: false,
          url_alias: 'how-long-do-i-have-to-wait-for-a-new-signal',
        },
        {
          id: 10025,
          name: 'On-which-trading-modes-can-I-find-signals',
          lang_id: 120345,
          title: 'On which trading modes can I find signals?',
          is_has_video: false,
          url_alias: 'on-which-trading-modes-can-i-find-signals',
        },
        {
          id: 11015,
          name: 'How-can-I-get-notifications-about-new-signals',
          lang_id: 131585,
          title: 'How can I get notifications about new signals?',
          is_has_video: false,
          url_alias: 'how-can-i-get-notifications-about-new-signals',
        },
      ],
    },
    {
      id: 311,
      name: 'market-advisers',
      title: 'Market Advisers',
      first_playlist_id: 8897,
      category_id: 37,
      category_name: 'market-place',
      category_caption: 'Market and platform extensions',
      category_url_alias: 'market-place',
      playlists: [
        {
          id: 8897,
          name: 'what-are-advisers',
          lang_id: 25108,
          title: 'What are Advisers?',
          is_has_video: false,
          url_alias: 'what-are-advisers',
        },
        {
          id: 8898,
          name: 'macd-adviser',
          lang_id: 25121,
          title: 'MACD Adviser',
          is_has_video: false,
          url_alias: 'macd-adviser',
        },
        {
          id: 8899,
          name: 'predator-adviser',
          lang_id: 25134,
          title: 'Predator Adviser',
          is_has_video: false,
          url_alias: 'predator-adviser',
        },
        {
          id: 8916,
          name: 'sliding-on-averages-adviser',
          lang_id: 25165,
          title: 'Sliding on Averages Adviser',
          is_has_video: false,
          url_alias: 'sliding-on-averages-adviser',
        },
        {
          id: 8917,
          name: 'when-to-use-advisers',
          lang_id: 25178,
          title: 'When to Use Advisers?',
          is_has_video: false,
          url_alias: 'when-to-use-advisers',
        },
        {
          id: 8918,
          name: 'how-can-you-get-advisers',
          lang_id: 25191,
          title: 'How Can You Get Advisers?',
          is_has_video: false,
          url_alias: 'how-can-you-get-advisers',
        },
      ],
    },
    {
      id: 249,
      name: 'subscription',
      title: 'Subscription',
      first_playlist_id: 1937,
      category_id: 37,
      category_name: 'market-place',
      category_caption: 'Market and platform extensions',
      category_url_alias: 'market-place',
      playlists: [
        {
          id: 1937,
          name: 'how-to-subscribe',
          lang_id: 14439,
          title: 'How to Subscribe',
          is_has_video: false,
          url_alias: 'how-to-subscribe',
        },
        {
          id: 1938,
          name: 'can-i-buy-subscription-with-my-profits-from-trading',
          lang_id: 14440,
          title: 'Can I Buy Subscription With My Profits from Trading?',
          is_has_video: false,
          url_alias: 'can-i-buy-subscription-with-my-profits-from-trading',
        },
      ],
    },
    {
      id: 250,
      name: 'dealing-with-the-extensions-you-have-purchased',
      title: 'Dealing with the Extensions You Have Purchased',
      first_playlist_id: 1940,
      category_id: 37,
      category_name: 'market-place',
      category_caption: 'Market and platform extensions',
      category_url_alias: 'market-place',
      playlists: [
        {
          id: 1940,
          name: 'where-can-i-find-the-extensions-i-have-purchased',
          lang_id: 14442,
          title: 'Where can I find the extensions i have purchased?',
          is_has_video: false,
          url_alias: 'where-can-i-find-the-extensions-i-have-purchased',
        },
        {
          id: 1941,
          name: 'i-have-recieved-an-extension-for-the-xp-ive-earned-on-my-traders-way-where-can-i-find-it',
          lang_id: 14443,
          title:
            "I have recieved an extension for the XP I've earned on my Trader's Way. Where can i find it?",
          is_has_video: false,
          url_alias:
            'i-have-recieved-an-extension-for-the-xp-ive-earned-on-my-traders-way-where-can-i-find-it',
        },
        {
          id: 1942,
          name: 'if-you-update-the-extension-will-i-have-to-pay-for-it-again',
          lang_id: 14444,
          title: 'If you update the extension, will I have to pay for it again?',
          is_has_video: false,
          url_alias: 'if-you-update-the-extension-will-i-have-to-pay-for-it-again',
        },
        {
          id: 1943,
          name: 'can-i-use-the-extension-on-all-platform-versions',
          lang_id: 14445,
          title: 'Can I use the extension on all platform versions?',
          is_has_video: false,
          url_alias: 'can-i-use-the-extension-on-all-platform-versions',
        },
      ],
    },
    {
      id: 251,
      name: 'subscription-management',
      title: 'Subscription Management',
      first_playlist_id: 5014,
      category_id: 37,
      category_name: 'market-place',
      category_caption: 'Market and platform extensions',
      category_url_alias: 'market-place',
      playlists: [
        {
          id: 5014,
          name: 'how-do-i-disable-auto-renewal',
          lang_id: 18964,
          title: 'How do I disable auto-renewal?',
          is_has_video: false,
          url_alias: 'how-do-i-disable-auto-renewal',
        },
        {
          id: 1945,
          name: 'can-i-return-my-funds',
          lang_id: 14447,
          title: 'Can I return my funds?',
          is_has_video: false,
          url_alias: 'can-i-return-my-funds',
        },
        {
          id: 1946,
          name: 'how-much-will-i-get-as-a-refund-when-i-unsubscribe',
          lang_id: 14448,
          title: 'How much will i get as a refund when i unsubscribe?',
          is_has_video: false,
          url_alias: 'how-much-will-i-get-as-a-refund-when-i-unsubscribe',
        },
        {
          id: 1947,
          name: 'how-do-i-apply-to-get-a-refund',
          lang_id: 14449,
          title: 'How do I apply to get a refund?',
          is_has_video: false,
          url_alias: 'how-do-i-apply-to-get-a-refund',
        },
      ],
    },
    {
      id: 252,
      name: 'problem-solving',
      title: 'Problem Solving',
      first_playlist_id: 1948,
      category_id: 37,
      category_name: 'market-place',
      category_caption: 'Market and platform extensions',
      category_url_alias: 'market-place',
      playlists: [
        {
          id: 1948,
          name: 'what-if-i-fail-to-pay-for-an-extension',
          lang_id: 14450,
          title: 'What if I fail to pay for an extension?',
          is_has_video: false,
          url_alias: 'what-if-i-fail-to-pay-for-an-extension',
        },
        {
          id: 1949,
          name: 'i-still-have-questions-about-how-market-works',
          lang_id: 14451,
          title: 'I Still Have Questions About How Market Works',
          is_has_video: false,
          url_alias: 'i-still-have-questions-about-how-market-works',
        },
      ],
    },
  ],
  'custom-strategies': [
    {
      id: 5105,
      name: 'creating-strategies',
      title: 'Creating Strategies',
      first_playlist_id: 20885,
      category_id: 1715,
      category_name: 'custom-strategies',
      category_caption: 'Custom strategies',
      category_url_alias: 'custom-strategies',
      playlists: [
        {
          id: 20885,
          name: 'how-to-create',
          lang_id: 1611205,
          title: 'How do I create my own strategy?',
          is_has_video: false,
          url_alias: 'how-to-create',
        },
        {
          id: 20895,
          name: 'how-to-name',
          lang_id: 1614005,
          title: 'How do I name my strategy?',
          is_has_video: false,
          url_alias: 'how-to-name',
        },
        {
          id: 20905,
          name: 'where-find',
          lang_id: 1614285,
          title: 'Where can I find my created strategies?',
          is_has_video: false,
          url_alias: 'where-find',
        },
        {
          id: 20915,
          name: 'can-i-alter',
          lang_id: 1614625,
          title: 'Can I alter my strategy?',
          is_has_video: false,
          url_alias: 'can-i-alter',
        },
        {
          id: 20925,
          name: 'can-i-delete',
          lang_id: 1615085,
          title: 'Can I delete my strategy?',
          is_has_video: false,
          url_alias: 'can-i-delete',
        },
      ],
    },
  ],
  tether: [
    {
      id: 565,
      name: 'using-tether-as-a-payment-method',
      title: 'Using Tether as a Payment Method',
      first_playlist_id: 11195,
      category_id: 105,
      category_name: 'tether',
      category_caption: 'Tether',
      category_url_alias: 'tether',
      playlists: [
        {
          id: 11195,
          name: 'what-is-tether',
          lang_id: 138635,
          title: 'What is Tether?',
          is_has_video: false,
          url_alias: 'what-is-tether',
        },
      ],
    },
    {
      id: 575,
      name: 'making_a_deposit6',
      title: 'Making a Deposit',
      first_playlist_id: 11205,
      category_id: 105,
      category_name: 'tether',
      category_caption: 'Tether',
      category_url_alias: 'tether',
      playlists: [
        {
          id: 11205,
          name: 'how-do-i-fund-my-account6',
          lang_id: 138905,
          title: 'How do I fund my account?',
          is_has_video: false,
          url_alias: 'how-do-i-fund-my-account6',
        },
        {
          id: 11215,
          name: 'when_will_the_funds_be_credited6',
          lang_id: 139175,
          title: 'When will the funds be credited?',
          is_has_video: false,
          url_alias: 'when_will_the_funds_be_credited6',
        },
      ],
    },
    {
      id: 585,
      name: 'withdrawing_funds6',
      title: 'Withdrawing Funds',
      first_playlist_id: 11225,
      category_id: 105,
      category_name: 'tether',
      category_caption: 'Tether',
      category_url_alias: 'tether',
      playlists: [
        {
          id: 11225,
          name: 'how_to_withdraw_funds6',
          lang_id: 139835,
          title: 'How to Withdraw Funds',
          is_has_video: false,
          url_alias: 'how_to_withdraw_funds6',
        },
        {
          id: 11235,
          name: 'timeline-for-withdrawal6',
          lang_id: 140235,
          title: 'Timeline for Withdrawal',
          is_has_video: false,
          url_alias: 'timeline-for-withdrawal6',
        },
        {
          id: 13305,
          name: 'imortant6',
          lang_id: 355175,
          title: 'Important',
          is_has_video: false,
          url_alias: 'imortant6',
        },
      ],
    },
    {
      id: 1675,
      name: 'avoid-common-mistakes6',
      title: 'Avoid Common Mistakes ',
      first_playlist_id: 14225,
      category_id: 105,
      category_name: 'tether',
      category_caption: 'Tether',
      category_url_alias: 'tether',
      playlists: [
        {
          id: 14225,
          name: 'mistakes-tether',
          lang_id: 418595,
          title: 'Avoid Common Mistakes: Tether',
          is_has_video: false,
          url_alias: 'mistakes-tether',
        },
      ],
    },
  ],
}

export const articleData = [
  {
    id: 895,
    name: 'what-is-a-trading-platform',
    title: 'What is a trading platform?',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 164,
    url_alias: 'what-is-a-trading-platform',
    atoms: [
      {
        id: 241495,
        type: 'paragraph',
        value: {
          text: 'It is an online platform where traders track the quotes of different kinds of assets and make trades using the services provided by a broker.',
        },
      },
      {
        id: 245175,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/platform3.7be27f85654d185224c8efda46ca2252.png',
            width: 1424,
            height: 750,
          },
        },
      },
    ],
    next_playlist: {
      id: 1194,
      bundle_id: 164,
      name: 'why-should-i-choose-olymp-trade',
      title: 'Why сhoose Olymptrade?',
      url_alias: 'why-%D1%81hoose-olymptrade',
    },
  },
  {
    id: 1194,
    name: 'why-should-i-choose-olymp-trade',
    title: 'Why сhoose Olymptrade?',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 164,
    url_alias: 'why-%D1%81hoose-olymptrade',
    atoms: [
      {
        id: 241588,
        type: 'paragraph',
        value: {
          text: 'Convenience is at the core of Olymptrade’s design. With features tailored to meet our users’ needs, it’s no surprise that millions of traders around the world choose Olymptrade for their trading journey. Here are some of their reasons:',
        },
      },
      {
        id: 241589,
        type: 'paragraph',
        value: {
          text: 'Ease of use and functionality',
        },
      },
      {
        id: 241590,
        type: 'paragraph',
        value: {
          text: 'Intuitive interface. Quick access to market data, seamless navigation, and a clean design make Olymptrade the perfect choice for beginners and pros alike.',
        },
      },
      {
        id: 241591,
        type: 'paragraph',
        value: {
          text: 'Comprehensive analytical and charting tools. Make smarter trading decisions with Trade Analytics, providing personalized recommendations and real-time market data. Visualize market trends with advanced charting tools to spot trading opportunities that boost your balance sheet.',
        },
      },
      {
        id: 241592,
        type: 'paragraph',
        value: {
          text: 'Top trading conditions',
        },
      },
      {
        id: 241593,
        type: 'paragraph',
        value: {
          text: 'A wide range of assets. Choose from over 250 trading assets, including local and 24/7 options, with up to 93% profitability rates.',
        },
      },
      {
        id: 265355,
        type: 'paragraph',
        value: {
          text: 'Rewards for active users. Olymptrade’s loyalty program, Trader’s Way, lets users earn experience points by trading on their live account. With these points, you can upgrade your status to Advanced or Expert to unlock perks like exclusive indicators, analyst consultations and higher profitability.',
        },
      },
      {
        id: 265365,
        type: 'paragraph',
        value: {
          text: 'Easy start',
        },
      },
      {
        id: 265375,
        type: 'paragraph',
        value: {
          text: 'Low barrier to entry. With a minimum deposit of just $10 and trades starting from as little as $1, getting started is easier than ever.',
        },
      },
      {
        id: 265385,
        type: 'paragraph',
        value: {
          text: 'Risk-free practice. Get a demo account with an unlimited, replenishable balance to backtest your strategies without risking real funds.',
        },
      },
      {
        id: 265395,
        type: 'paragraph',
        value: {
          text: 'Transparency and reliability',
        },
      },
      {
        id: 265405,
        type: 'paragraph',
        value: {
          text: 'Verified fairness. Olymptrade delivers reliable results for every trade. Independent auditor VerifyMyTrade ensures that every trade is executed in line with industry standards.',
        },
      },
      {
        id: 265415,
        type: 'paragraph',
        value: {
          text: 'Security guarantees',
        },
      },
      {
        id: 265425,
        type: 'paragraph',
        value: {
          text: 'Regulation. Olymptrade is licensed and regulated by the Mauritius Financial Services Commission and Vanuatu Financial Services Commission, both of which are part of the International Organization of Securities Commissions (IOSCO).',
        },
      },
      {
        id: 265435,
        type: 'paragraph',
        value: {
          text: 'Insurance. Traders are insured up to €20,000 on their deposits by the Financial Commission. Olymptrade follows the highest standards to ensure the security of each user’s funds.',
        },
      },
      {
        id: 265445,
        type: 'paragraph',
        value: {
          text: 'Fast, hassle-free withdrawals',
        },
      },
      {
        id: 265455,
        type: 'paragraph',
        value: {
          text: 'Quick processing times. 95% of withdrawal requests are processed within a day, and 60% of those are processed within an hour. Get your funds when you need them.',
        },
      },
      {
        id: 265465,
        type: 'paragraph',
        value: {
          text: 'No hidden fees. Enjoy easy, fee-free deposits and withdrawals in your local currency.',
        },
      },
      {
        id: 265475,
        type: 'paragraph',
        value: {
          text: 'Top-notch support and guidance',
        },
      },
      {
        id: 265485,
        type: 'paragraph',
        value: {
          text: '24/7 customer support. Our dedicated team is available around the clock in 14 languages to help you with any questions you may have.',
        },
      },
      {
        id: 265495,
        type: 'paragraph',
        value: {
          text: 'Personalized coaching. Get expert advice from our Trading Coaches to advance your skills and improve your strategy.',
        },
      },
      {
        id: 265505,
        type: 'paragraph',
        value: {
          text: 'Olymptrade is continuously improving based on user feedback. As a broker that cares about its traders, we create a seamless and supportive environment that aims for your success.',
        },
      },
    ],
    next_playlist: {
      id: 903,
      bundle_id: 164,
      name: 'what-is-a-time-frame',
      title: 'What is a time frame?',
      url_alias: 'what-is-a-time-frame',
    },
  },
  {
    id: 903,
    name: 'what-is-a-time-frame',
    title: 'What is a time frame?',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 164,
    url_alias: 'what-is-a-time-frame',
    atoms: [
      {
        id: 241508,
        type: 'paragraph',
        value: {
          text: 'It is a trading platform’s “price scale” for a certain period. If you select a 10-minute time frame on a line chart, you will see the part of the price chart showing the price movement for the last 10 minutes. If you select a 5-minute time frame on a Japanese candlestick chart, each candlestick will be showing the price dynamics for this period. If the quotes have gone up, the candle will be green. A candle will be red if the asset price has gone down.',
        },
      },
      {
        id: 241509,
        type: 'paragraph',
        value: {
          text: 'You can choose the following time frames on the platform: 15 seconds, 1, 5, 15, and 30 minutes, 1 or 4 hours, 1 or 7 days, and 1 month.',
        },
      },
      {
        id: 243865,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/3.69fda6a489c3fb00f9e610d57541a42b.png',
            width: 1424,
            height: 960,
          },
        },
      },
    ],
    next_playlist: {
      id: 896,
      bundle_id: 164,
      name: 'do-i-need-to-install-any-trading-software-on-my-pc',
      title: 'Do I Need to Install Any Trading Software on My PC?',
      url_alias: 'do-i-need-to-install-any-trading-software-on-my-pc',
    },
  },
  {
    id: 896,
    name: 'do-i-need-to-install-any-trading-software-on-my-pc',
    title: 'Do I Need to Install Any Trading Software on My PC?',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 164,
    url_alias: 'do-i-need-to-install-any-trading-software-on-my-pc',
    atoms: [
      {
        id: 241496,
        type: 'paragraph',
        value: {
          text: 'You can trade on our online platform in the web version right after you create an account. There is no need to install new software, although free mobile and desktop apps are available to all traders.',
        },
      },
    ],
    next_playlist: {
      id: 1199,
      bundle_id: 164,
      name: 'can-i-use-robots-when-trading-on-the-platform',
      title: 'Can I use robots when trading on the platform?',
      url_alias: 'can-i-use-robots-when-trading-on-the-platform',
    },
  },
  {
    id: 1199,
    name: 'can-i-use-robots-when-trading-on-the-platform',
    title: 'Can I use robots when trading on the platform?',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 164,
    url_alias: 'can-i-use-robots-when-trading-on-the-platform',
    atoms: [
      {
        id: 241595,
        type: 'paragraph',
        value: {
          text: 'Trading robots are allowed unless this software is used to cause damage to the platform and violate the principle of honesty in transaction execution. For details, see Clause 8.3 of the Service Agreement.',
        },
      },
    ],
    next_playlist: {
      id: 900,
      bundle_id: 164,
      name: 'what-should-i-do-if-a-system-error-occurs-when-loading-the-platform',
      title: 'What Should I Do If a System Error Occurs When Loading the Platform?',
      url_alias: 'what-should-i-do-if-a-system-error-occurs-when-loading-the-platform',
    },
  },
  {
    id: 900,
    name: 'what-should-i-do-if-a-system-error-occurs-when-loading-the-platform',
    title: 'What Should I Do If a System Error Occurs When Loading the Platform?',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 164,
    url_alias: 'what-should-i-do-if-a-system-error-occurs-when-loading-the-platform',
    atoms: [
      {
        id: 241499,
        type: 'paragraph',
        value: {
          text: 'When system errors occurs, we recommend clearing your cache and cookies. You should also make sure you are using the latest version of the web browser. If you take these actions but the error still occurs, contact our support team.',
        },
      },
    ],
    next_playlist: {
      id: 3944,
      bundle_id: 164,
      name: 'the-platform-doesnt-load',
      title: 'The Platform Doesn’t Load',
      url_alias: 'the-platform-doesn%E2%80%99t-load',
    },
  },
  {
    id: 3944,
    name: 'the-platform-doesnt-load',
    title: 'The Platform Doesn’t Load',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 164,
    url_alias: 'the-platform-doesn%E2%80%99t-load',
    atoms: [
      {
        id: 242000,
        type: 'paragraph',
        value: {
          text: 'Try opening it in some other browser. We recommend using the latest Google Chrome.',
        },
      },
      {
        id: 242001,
        type: 'paragraph',
        value: {
          text: 'The system will not let you log in to the trading platform if your location is blacklisted.',
        },
      },
      {
        id: 242002,
        type: 'paragraph',
        value: {
          text: 'Perhaps, there is an unexpected technical problem. Our support consultants will help you solve it.',
        },
      },
    ],
    next_playlist: {
      id: 899,
      bundle_id: 253,
      name: 'why-doesnt-a-trade-open-instantly',
      title: "Why doesn't a trade open instantly?",
      url_alias: 'why-doesn%27t-a-trade-open-instantly',
    },
  },
  {
    id: 899,
    name: 'why-doesnt-a-trade-open-instantly',
    title: "Why doesn't a trade open instantly?",
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 253,
    url_alias: 'why-doesn%27t-a-trade-open-instantly',
    atoms: [
      {
        id: 241498,
        type: 'paragraph',
        value: {
          text: "It takes a few seconds to receive data from the liquidity providers' servers. In general, the process of opening a trade may take up to 5 seconds.",
        },
      },
    ],
    next_playlist: {
      id: 897,
      bundle_id: 253,
      name: 'how-can-i-view-the-history-of-my-trades',
      title: 'How Can I View the History of My Trades?',
      url_alias: 'how-can-i-view-the-history-of-my-trades',
    },
  },
  {
    id: 897,
    name: 'how-can-i-view-the-history-of-my-trades',
    title: 'How Can I View the History of My Trades?',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 253,
    url_alias: 'how-can-i-view-the-history-of-my-trades',
    atoms: [
      {
        id: 241497,
        type: 'paragraph',
        value: {
          text: "All information about your recent trades is available in the “Trades” section. There you can see all trades made on the account you're currently using.",
        },
      },
      {
        id: 243955,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/tradesot.ed43b86c04635967dd6b5c7738391638.png',
            width: 1424,
            height: 1150,
          },
        },
      },
    ],
    next_playlist: {
      id: 3887,
      bundle_id: 253,
      name: 'selecting-the-trading-conditions',
      title: 'Selecting the Trading Conditions',
      url_alias: 'selecting-the-trading-conditions',
    },
  },
  {
    id: 3887,
    name: 'selecting-the-trading-conditions',
    title: 'Selecting the Trading Conditions',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 253,
    url_alias: 'selecting-the-trading-conditions',
    atoms: [
      {
        id: 241997,
        type: 'paragraph',
        value: {
          text: 'There is a Trading Conditions menu next to the asset chart. To open a trade, you need to select:',
        },
      },
      {
        id: 241998,
        type: 'paragraph',
        value: {
          text: '• The trade amount. The amount of potential profit depends on the chosen value.',
        },
      },
      {
        id: 241999,
        type: 'paragraph',
        value: {
          text: '• The trade duration. You can set the exact time when the trade closes (for example, 12:55) or just set the trade duration (for example, 12 minutes).',
        },
      },
      {
        id: 243895,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/selectingconditionsot.ef1da5751fb300356dad3af9e2b90e3d.png',
            width: 1424,
            height: 1481,
          },
        },
      },
    ],
    next_playlist: {
      id: 1385,
      bundle_id: 254,
      name: 'trading-and-quote-sessions',
      title: 'Trading and Quote Sessions',
      url_alias: 'trading-and-quote-sessions',
    },
  },
  {
    id: 1385,
    name: 'trading-and-quote-sessions',
    title: 'Trading and Quote Sessions',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 254,
    url_alias: 'trading-and-quote-sessions',
    atoms: [
      {
        id: 241707,
        type: 'paragraph',
        value: {
          text: 'A quote session is a period when the platform receives and transmits quotes. However, one can make trades within a slightly shorter trading session, which is part of a quote session.',
        },
      },
      {
        id: 241708,
        type: 'paragraph',
        value: {
          text: 'As a rule, a quote session starts 5-10 minutes earlier and ends 5-10 minutes later than the trading session. This is meant to protect traders from the risk of high volatility at the beginning and the end of the quote session.',
        },
      },
      {
        id: 241709,
        type: 'paragraph',
        value: {
          text: 'For example, a quote session for Apple shares starts at 13:30 GMT (US Summer Time) and ends at 20:00. A trading session for Apple shares starts with a five-minute delay, i.e. at 13:35. And it ends at 19:55, which is 5 minutes before the quote session ends.',
        },
      },
    ],
    next_playlist: {
      id: 901,
      bundle_id: 254,
      name: 'what-is-the-most-active-time-of-day-for-trading-on-forex',
      title: 'What is the most active time of day for trading on Forex?',
      url_alias: 'what-is-the-most-active-time-of-day-for-trading-on-forex',
    },
  },
  {
    id: 901,
    name: 'what-is-the-most-active-time-of-day-for-trading-on-forex',
    title: 'What is the most active time of day for trading on Forex?',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 254,
    url_alias: 'what-is-the-most-active-time-of-day-for-trading-on-forex',
    atoms: [
      {
        id: 241500,
        type: 'paragraph',
        value: {
          text: 'Trading activity depends on the working hours of major exchanges and increases at the time of important news releases. The most active trading sessions are European and North American ones. The European session begins at around 6:00 UTC and closes at 15:00 UTC. The North American trading session spans from 13:00 UTC until 22:00 UTC.',
        },
      },
      {
        id: 241501,
        type: 'paragraph',
        value: {
          text: 'Please note that some currency pairs and assets are available for trading for a limited period of time. The trading hours for each asset are specified in the “Trading Conditions” tab of the “Asset” menu.',
        },
      },
    ],
    next_playlist: {
      id: 5309,
      bundle_id: 280,
      name: 'time-frames',
      title: 'Time Frames',
      url_alias: 'time-frames',
    },
  },
  {
    id: 5309,
    name: 'time-frames',
    title: 'Time Frames',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 280,
    url_alias: 'time-frames',
    atoms: [
      {
        id: 242120,
        type: 'paragraph',
        value: {
          text: 'A time frame is the main parameter of the chart, which helps to better understand what is happening in the market. It means the time interval covered by each candle or bar on the Japanese candlestick, bar, and Heiken Ashi charts. For example, if you monitor a Japanese candlestick chart and set a 1-minute time frame, each candle will represent the price dynamics in 1 minute. If you analyze a line chart, the time frame shows the period of time displayed in the chart window.',
        },
      },
      {
        id: 242121,
        type: 'paragraph',
        value: {
          text: 'You can set the time frame you need in the time frame selection menu. Several time frames can be used with the Japanese candlestick, bar, and Heiken Ashi charts: 15 seconds, 1 minute, 5 minutes, 10 minutes, 15 minutes, 30 minutes, 1 hour, 4 hours, 1 day, 7 days, 1 month. You can change periods on the line chart by zooming using the "+" (plus) and "-" (minus) buttons.',
        },
      },
      {
        id: 242122,
        type: 'paragraph',
        value: {
          text: 'Short-term traders tend to use short periods of up to 1 hour. Long-term investors analyze charts on 4-hour and higher time frames when making their forecasts.',
        },
      },
    ],
    next_playlist: {
      id: 5312,
      bundle_id: 280,
      name: 'managing-trades',
      title: 'Managing Trades',
      url_alias: 'managing-trades',
    },
  },
  {
    id: 5312,
    name: 'managing-trades',
    title: 'Managing Trades',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 280,
    url_alias: 'managing-trades',
    atoms: [
      {
        id: 242125,
        type: 'paragraph',
        value: {
          text: 'Following these guidelines will make it convenient for you to manage trades when you are simultaneously trading two assets.',
        },
      },
      {
        id: 242126,
        type: 'paragraph',
        value: {
          text: "1. First, all active trades and orders are marked on the chart. You can close trades without visiting the trades menu. Just click on your trade's icon and close it at the current result.",
        },
      },
      {
        id: 242127,
        type: 'paragraph',
        value: {
          text: '2. Secondly, you can drag the Take Profit and Stop Loss levels right on the chart. This makes it a lot easier to manage the positions.',
        },
      },
      {
        id: 242128,
        type: 'paragraph',
        value: {
          text: '3. Third, all positions are grouped by trading modes in the trades menu. Let\'s say you have opened 10 trades in FTT mode. In this case, you will see one tab with 10 FTT trades grouped separately according to their trading mode in the "Trades" menu. You can expand the tab with the grouped trades by clicking on it. After this, you can adjust the parameters of any position or close it.',
        },
      },
    ],
    next_playlist: {
      id: 5315,
      bundle_id: 280,
      name: 'the-chart-zoom-in-and-zoom-out',
      title: 'The Chart: Zoom In and Zoom Out',
      url_alias: 'the-chart:-zoom-in-and-zoom-out',
    },
  },
  {
    id: 5315,
    name: 'the-chart-zoom-in-and-zoom-out',
    title: 'The Chart: Zoom In and Zoom Out',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 280,
    url_alias: 'the-chart:-zoom-in-and-zoom-out',
    atoms: [
      {
        id: 242129,
        type: 'paragraph',
        value: {
          text: 'You can see buttons with "+" (plus) and "-" (minus) icons at the bottom of the chart. They are designed for scaling (zooming) the chart. Click "plus" to zoom in the chart, and click "minus" to zooms out the chart and get information about the price trend over a longer period.',
        },
      },
      {
        id: 243975,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/zoom5.cbb7f575be55781a3942f723157b6048.png',
            width: 1424,
            height: 798,
          },
        },
      },
    ],
    next_playlist: {
      id: 5317,
      bundle_id: 280,
      name: 'historical-data',
      title: 'Historical Data',
      url_alias: 'historical-data',
    },
  },
  {
    id: 5317,
    name: 'historical-data',
    title: 'Historical Data',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 280,
    url_alias: 'historical-data',
    atoms: [
      {
        id: 242130,
        type: 'paragraph',
        value: {
          text: 'The chart is one of the most effective ways to visualize the asset price movement in the past. Charts help you easily determine the current and past trends.',
        },
      },
      {
        id: 242131,
        type: 'paragraph',
        value: {
          text: 'The trading platform enables you to view trading history over the past few years. To do it, click on the chart window. Then just hold down the left mouse button and move the cursor to the right. Repeat the steps above as many times as necessary to find the needed time interval. The timeline is located below the chart.',
        },
      },
      {
        id: 242132,
        type: 'paragraph',
        value: {
          text: 'For some assets, you can track the trend back to 1996 on a 1-month time frame.',
        },
      },
    ],
    next_playlist: {
      id: 5318,
      bundle_id: 280,
      name: 'quotes-refresh-rate',
      title: 'Quotes Refresh Rate',
      url_alias: 'quotes-refresh-rate',
    },
  },
  {
    id: 5318,
    name: 'quotes-refresh-rate',
    title: 'Quotes Refresh Rate',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 280,
    url_alias: 'quotes-refresh-rate',
    atoms: [
      {
        id: 242133,
        type: 'paragraph',
        value: {
          text: 'The trading platform transmits real-time market prices. As a rule, up to 4 quotes are received per second.',
        },
      },
    ],
    next_playlist: {
      id: 6859,
      bundle_id: 301,
      name: 'what-is-it',
      title: 'What is it?',
      url_alias: 'what-is-it',
    },
  },
  {
    id: 6859,
    name: 'what-is-it',
    title: 'What is it?',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 301,
    url_alias: 'what-is-it',
    atoms: [
      {
        id: 242369,
        type: 'paragraph',
        value: {
          text: 'You can now create a new notification that appears when the chart hits a specified price quote.',
        },
      },
    ],
    next_playlist: {
      id: 6860,
      bundle_id: 301,
      name: 'how-does-it-work',
      title: 'How does it work?',
      url_alias: 'how-does-it-work',
    },
  },
  {
    id: 6860,
    name: 'how-does-it-work',
    title: 'How does it work?',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 301,
    url_alias: 'how-does-it-work',
    atoms: [
      {
        id: 242370,
        type: 'paragraph',
        value: {
          text: 'To set up a custom notification for an asset, you need to:',
        },
      },
      {
        id: 242371,
        type: 'paragraph',
        value: {
          text: '1. Hover over a price quote to the right of the chart until a bell icon appears;',
        },
      },
      {
        id: 242372,
        type: 'paragraph',
        value: {
          text: '2. Click on the bell to set up a notification;',
        },
      },
      {
        id: 242373,
        type: 'paragraph',
        value: {
          text: '3. Once the price hits the selected quote a notification will appear;',
        },
      },
      {
        id: 242374,
        type: 'paragraph',
        value: {
          text: '4. Click on the notification to start trading on the asset and trading mode it was set up for.',
        },
      },
      {
        id: 242375,
        type: 'paragraph',
        value: {
          text: 'You can always delete or edit the notification by either dragging the bell to a different price level or off the screen.',
        },
      },
      {
        id: 245195,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/notification3.74ecf2dc1a8b8688de86b93cb1243d0d.png',
            width: 1424,
            height: 750,
          },
        },
      },
    ],
    next_playlist: {
      id: 6861,
      bundle_id: 301,
      name: 'notification-types',
      title: 'Notification Types',
      url_alias: 'notification-types',
    },
  },
  {
    id: 6861,
    name: 'notification-types',
    title: 'Notification Types',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 301,
    url_alias: 'notification-types',
    atoms: [
      {
        id: 242376,
        type: 'paragraph',
        value: {
          text: 'The type of the notification depends on the platform the trader is using:',
        },
      },
      {
        id: 242377,
        type: 'paragraph',
        value: {
          text: '• If the trader is currently using Olymptrade, they will receive an in-app notification (a message right on the platform);',
        },
      },
      {
        id: 242378,
        type: 'paragraph',
        value: {
          text: '• If browser notifications are enabled and the trader is on another tab, then the notice will appear in the active tab;',
        },
      },
      {
        id: 242379,
        type: 'paragraph',
        value: {
          text: '• For our mobile users who allow push notifications, a push will be sent both to their phone and to the browser;',
        },
      },
      {
        id: 242380,
        type: 'paragraph',
        value: {
          text: '• If push notifications are disabled for either the browser or the app, the notification will only show up within the currently open tab or app.',
        },
      },
    ],
    next_playlist: {
      id: 6862,
      bundle_id: 301,
      name: 'availability-and-duration',
      title: 'Availability and Duration',
      url_alias: 'availability-and-duration',
    },
  },
  {
    id: 6862,
    name: 'availability-and-duration',
    title: 'Availability and Duration',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 301,
    url_alias: 'availability-and-duration',
    atoms: [
      {
        id: 242381,
        type: 'paragraph',
        value: {
          text: 'This feature is available for both Desktop and Mobile users of the Olymptrade platform.',
        },
      },
      {
        id: 242382,
        type: 'paragraph',
        value: {
          text: "Take note: notifications expire 24 hours after creation, so don't forget to renew them if you plan on using them for a longer period.",
        },
      },
    ],
    next_playlist: {
      id: 7058,
      bundle_id: 307,
      name: 'what-are-trading-limits',
      title: 'What are trading limits?',
      url_alias: 'what-are-trading-limits',
    },
  },
  {
    id: 7058,
    name: 'what-are-trading-limits',
    title: 'What are trading limits?',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 307,
    url_alias: 'what-are-trading-limits',
    atoms: [
      {
        id: 242450,
        type: 'paragraph',
        value: {
          text: 'Trading limits are a risk-management system operating on Olymptrade. When markets are volatile it may be challenging for our liquidity providers and us to hold the situation up, thus the system helps us limit the amount of investment that traders can use to open a position.',
        },
      },
    ],
    next_playlist: {
      id: 7059,
      bundle_id: 307,
      name: 'how-do-trading-limits-work',
      title: 'How do trading limits work?',
      url_alias: 'how-do-trading-limits-work',
    },
  },
  {
    id: 7059,
    name: 'how-do-trading-limits-work',
    title: 'How do trading limits work?',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 307,
    url_alias: 'how-do-trading-limits-work',
    atoms: [
      {
        id: 242451,
        type: 'paragraph',
        value: {
          text: "When the system sets a limit up your account you may find certain new deals can't be executed. There are several types of limits on our platform:",
        },
      },
      {
        id: 242452,
        type: 'paragraph',
        value: {
          text: '• Volume — limits the total amount you can invest in an asset or group of assets.',
        },
      },
      {
        id: 242453,
        type: 'paragraph',
        value: {
          text: '• Number of open trades — pretty straightforward, limits how many open trades you can have at the time.',
        },
      },
      {
        id: 242454,
        type: 'paragraph',
        value: {
          text: "• Open position limit — this soft limit changes according to the volume of your currently open trades and doesn't expire.",
        },
      },
    ],
    next_playlist: {
      id: 7060,
      bundle_id: 307,
      name: 'is-it-possible-to-cancel-limits',
      title: 'Is it possible to cancel limits?',
      url_alias: 'is-it-possible-to-cancel-limits',
    },
  },
  {
    id: 7060,
    name: 'is-it-possible-to-cancel-limits',
    title: 'Is it possible to cancel limits?',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 307,
    url_alias: 'is-it-possible-to-cancel-limits',
    atoms: [
      {
        id: 242455,
        type: 'paragraph',
        value: {
          text: "Once you face a limit there's no special way to cancel it. Normally our algorithms do that automatically so you may not even notice the limit. However, you can speed up getting rid of limits by doing any of these actions:",
        },
      },
      {
        id: 242456,
        type: 'paragraph',
        value: {
          text: '• Change preferred trade time;',
        },
      },
      {
        id: 242457,
        type: 'paragraph',
        value: {
          text: '• Trade other assets for a while;',
        },
      },
      {
        id: 242458,
        type: 'paragraph',
        value: {
          text: '• Reduce investments.',
        },
      },
    ],
    next_playlist: {
      id: 19865,
      bundle_id: 4685,
      name: 'how-to-enable-browser-notifications',
      title: 'How to Enable Browser Notifications?',
      url_alias: 'how-to-enable-browser-notifications',
    },
  },
  {
    id: 19865,
    name: 'how-to-enable-browser-notifications',
    title: 'How to Enable Browser Notifications?',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 4685,
    url_alias: 'how-to-enable-browser-notifications',
    atoms: [
      {
        id: 247245,
        type: 'paragraph',
        value: {
          text: 'Browser notifications are a convenient way to find out about trade results, price alerts, and more, but they may be blocked or disabled on your device. To enable these notifications, make sure that they’re enabled on your operating system as well as in your browser. Once you’ve enabled them for your OS and browser, you can enable them on Olymptrade. To do so, just open your profile menu > Settings > Notifications, and switch the “Push Notifications” toggle to on.\n\n',
        },
      },
      {
        id: 247255,
        type: 'paragraph',
        value: {
          text: 'How you enable browser notifications depends on your browser and OS. You can find specific instructions explaining how to enable them in the following articles. If you encounter any issues, please contact Support.',
        },
      },
    ],
    next_playlist: {
      id: 19875,
      bundle_id: 4685,
      name: 'macos-system',
      title: 'macOS system',
      url_alias: 'macos-system',
    },
  },
  {
    id: 19875,
    name: 'macos-system',
    title: 'macOS system',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 4685,
    url_alias: 'macos-system',
    atoms: [
      {
        id: 247265,
        type: 'paragraph',
        value: {
          text: '1. Go to the Apple menu and select “System Preferences” > “Notifications”.\n',
        },
      },
      {
        id: 247275,
        type: 'paragraph',
        value: {
          text: '2. Select your browser from the left column.',
        },
      },
      {
        id: 247285,
        type: 'paragraph',
        value: {
          text: '\n3. Make sure that the “Allow Notifications” toggle at the top of the page is enabled, and customize how you would like to see your notifications.',
        },
      },
    ],
    next_playlist: {
      id: 19885,
      bundle_id: 4685,
      name: 'windows-system',
      title: 'Windows system',
      url_alias: 'windows-system',
    },
  },
  {
    id: 19885,
    name: 'windows-system',
    title: 'Windows system',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 4685,
    url_alias: 'windows-system',
    atoms: [
      {
        id: 247295,
        type: 'paragraph',
        value: {
          text: '1. Go to the “Start” menu and open “Settings”.\n',
        },
      },
      {
        id: 247305,
        type: 'paragraph',
        value: {
          text: '2. Click “Notifications & actions”.',
        },
      },
      {
        id: 247315,
        type: 'paragraph',
        value: {
          text: '\n3. Under “Notifications”, make sure that the toggle is set to “On” for “Get notifications from apps and other senders”.',
        },
      },
      {
        id: 247325,
        type: 'paragraph',
        value: {
          text: '4. Scroll down to the “Get notifications from these senders” section and make sure that the toggle for your browser is set to “On”.',
        },
      },
    ],
    next_playlist: {
      id: 19895,
      bundle_id: 4685,
      name: 'chrome-desktop',
      title: 'Chrome (Desktop)',
      url_alias: 'chrome-desktop',
    },
  },
  {
    id: 19895,
    name: 'chrome-desktop',
    title: 'Chrome (Desktop)',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 4685,
    url_alias: 'chrome-desktop',
    atoms: [
      {
        id: 247335,
        type: 'paragraph',
        value: {
          text: '1. Click the three dots menu in the upper right corner and select “Settings”.',
        },
      },
      {
        id: 247345,
        type: 'paragraph',
        value: {
          text: '2. In the “Privacy and security section” in the left menu, select “Site Settings”.',
        },
      },
      {
        id: 247355,
        type: 'paragraph',
        value: {
          text: '3. Under “Permissions”, click “Notifications”.',
        },
      },
      {
        id: 247365,
        type: 'paragraph',
        value: {
          text: '4. Under “Default behavior”, select “Sites can ask to send notifications”.',
        },
      },
      {
        id: 247375,
        type: 'paragraph',
        value: {
          text: '\n5. If Olymptrade is under the “Not allowed to send notifications” section, click the three dots icon next to it, and select “Allow”.',
        },
      },
    ],
    next_playlist: {
      id: 19905,
      bundle_id: 4685,
      name: 'chrome-android',
      title: 'Chrome (Android)',
      url_alias: 'chrome-android',
    },
  },
  {
    id: 19905,
    name: 'chrome-android',
    title: 'Chrome (Android)',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 4685,
    url_alias: 'chrome-android',
    atoms: [
      {
        id: 247385,
        type: 'paragraph',
        value: {
          text: '1. Tap the three dots menu in the upper right corner and select “Settings”.\n',
        },
      },
      {
        id: 247395,
        type: 'paragraph',
        value: {
          text: '2. Tap “Notifications” and make sure that the “Show notifications” and “Browser” toggles are switched on.',
        },
      },
      {
        id: 247405,
        type: 'paragraph',
        value: {
          text: '3. Tap the back arrow, scroll down, and select “Site settings” > “Notifications”.',
        },
      },
      {
        id: 247415,
        type: 'paragraph',
        value: {
          text: '4. Make sure that the “Notifications” toggle at the top is switched on.',
        },
      },
      {
        id: 247425,
        type: 'paragraph',
        value: {
          text: '\n5. If Olymptrade is in the list of websites in the “Blocked” section, tap it, and switch the “Show notifications” toggle on',
        },
      },
    ],
    next_playlist: {
      id: 19915,
      bundle_id: 4685,
      name: 'firefox',
      title: 'Firefox',
      url_alias: 'firefox',
    },
  },
  {
    id: 19915,
    name: 'firefox',
    title: 'Firefox',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 4685,
    url_alias: 'firefox',
    atoms: [
      {
        id: 247435,
        type: 'paragraph',
        value: {
          text: '1. Click the hamburger button in the upper right corner and select “Settings”.\n',
        },
      },
      {
        id: 247445,
        type: 'paragraph',
        value: {
          text: '2. Select “Privacy & Security” in the left menu.',
        },
      },
      {
        id: 247455,
        type: 'paragraph',
        value: {
          text: '\n3. Scroll down to “Permissions” and select “Settings…” next to “Notifications”.',
        },
      },
      {
        id: 247465,
        type: 'paragraph',
        value: {
          text: '\n4. Websites that have requested permission to send browser notifications will appear in the list. Find Olymptrade and select “Allow” in the drop-down menu next to it.',
        },
      },
      {
        id: 247475,
        type: 'paragraph',
        value: {
          text: '5. Click “Save Changes” at the bottom of the window.',
        },
      },
      {
        id: 247485,
        type: 'paragraph',
        value: {
          text: '6. For the changes to take effect, you may need to restart Firefox.',
        },
      },
    ],
    next_playlist: {
      id: 19925,
      bundle_id: 4685,
      name: 'microsoft-edge',
      title: 'Microsoft Edge',
      url_alias: 'microsoft-edge',
    },
  },
  {
    id: 19925,
    name: 'microsoft-edge',
    title: 'Microsoft Edge',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 4685,
    url_alias: 'microsoft-edge',
    atoms: [
      {
        id: 247495,
        type: 'paragraph',
        value: {
          text: '1. Press the three dots menu in the upper right corner and select “Settings”.',
        },
      },
      {
        id: 247505,
        type: 'paragraph',
        value: {
          text: '2. Press the hamburger menu in the upper left corner and select “Cookies and site permissions”.',
        },
      },
      {
        id: 247515,
        type: 'paragraph',
        value: {
          text: '3. Scroll down to “Site permissions” > “All permissions” > “Notifications”.',
        },
      },
      {
        id: 247525,
        type: 'paragraph',
        value: {
          text: '4. Make sure the “Ask before sending” toggle is switched on.',
        },
      },
      {
        id: 247535,
        type: 'paragraph',
        value: {
          text: '\n5. If Olymptrade is in the “Block” section, click the three dots menu to the right of it, and select “Allow”.',
        },
      },
    ],
    next_playlist: {
      id: 19935,
      bundle_id: 4685,
      name: 'opera',
      title: 'Opera',
      url_alias: 'opera',
    },
  },
  {
    id: 19935,
    name: 'opera',
    title: 'Opera',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 4685,
    url_alias: 'opera',
    atoms: [
      {
        id: 247545,
        type: 'paragraph',
        value: {
          text: '1. Press the Settings gear icon on the left side of the browser window.\n',
        },
      },
      {
        id: 247555,
        type: 'paragraph',
        value: {
          text: '2. Scroll down to “Privacy and security”.',
        },
      },
      {
        id: 247565,
        type: 'paragraph',
        value: {
          text: '3. Select “Site Settings” > “Notifications”.',
        },
      },
      {
        id: 247575,
        type: 'paragraph',
        value: {
          text: '4. Go to the “Default behavior” section and select “Sites can ask to send notifications”.',
        },
      },
      {
        id: 247585,
        type: 'paragraph',
        value: {
          text: '5. If Olymptrade is under the “Not allowed to send notifications” section, click the three dots icon next to it, and select “Allow”.',
        },
      },
    ],
    next_playlist: {
      id: 20255,
      bundle_id: 4995,
      name: 'what-is-webgl',
      title: 'What is WebGL?',
      url_alias: 'what-is-webgl',
    },
  },
  {
    id: 20255,
    name: 'what-is-webgl',
    title: 'What is WebGL?',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 4995,
    url_alias: 'what-is-webgl',
    atoms: [
      {
        id: 248705,
        type: 'paragraph',
        value: {
          text: 'WebGL is a technology that helps graphical elements run correctly in a web browser. For instance, in Olymptrade it is necessary for the chart to run properly.',
        },
      },
      {
        id: 248715,
        type: 'paragraph',
        value: {
          text: 'WebGL is enabled by default in some browsers. In other cases, it needs to be enabled manually. If you don\'t have it enabled, you will get an error message saying "WebGL Disabled".',
        },
      },
      {
        id: 248725,
        type: 'paragraph',
        value: {
          text: "Below, you'll find instructions on how to enable WebGL on different browsers.",
        },
      },
    ],
    next_playlist: {
      id: 20325,
      bundle_id: 4995,
      name: 'webgl-google-chrome',
      title: 'Google Chrome',
      url_alias: 'google-chrome',
    },
  },
  {
    id: 20325,
    name: 'webgl-google-chrome',
    title: 'Google Chrome',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 4995,
    url_alias: 'google-chrome',
    atoms: [
      {
        id: 248735,
        type: 'paragraph',
        value: {
          text: 'The latest versions of Google Chrome come with WebGL enabled by default.',
        },
      },
      {
        id: 248745,
        type: 'paragraph',
        value: {
          text: "To see what version of browser you're using, click the three dots menu at the top right of the browser and click Help. You can find information about your browser version in About Google Chrome. If there is a more recent version, you should update to it.",
        },
      },
      {
        id: 248755,
        type: 'paragraph',
        value: {
          text: "If this didn't solve the problem, try following these steps:",
        },
      },
      {
        id: 248765,
        type: 'paragraph',
        value: {
          text: '1. Go to system settings by entering chrome://settings/system into the address bar and pressing Enter.',
        },
      },
      {
        id: 248775,
        type: 'paragraph',
        value: {
          text: '2. Enable Use hardware acceleration when available.',
        },
      },
      {
        id: 248785,
        type: 'paragraph',
        value: {
          text: '3. Click the Relaunch button that appears to apply the settings. ',
        },
      },
      {
        id: 248795,
        type: 'paragraph',
        value: {
          text: 'You can also open system settings by clicking the three dots menu at the top right of the browser, going to Settings and selecting System.',
        },
      },
    ],
    next_playlist: {
      id: 20335,
      bundle_id: 4995,
      name: 'webgl-edge',
      title: 'Edge',
      url_alias: 'edge',
    },
  },
  {
    id: 20335,
    name: 'webgl-edge',
    title: 'Edge',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 4995,
    url_alias: 'edge',
    atoms: [
      {
        id: 248815,
        type: 'paragraph',
        value: {
          text: '1. Go to system settings by entering edge://settings/system into the address bar and pressing Enter.',
        },
      },
      {
        id: 248825,
        type: 'paragraph',
        value: {
          text: '2. Enable Use hardware acceleration when available.',
        },
      },
      {
        id: 248835,
        type: 'paragraph',
        value: {
          text: '3. Click the Relaunch button that appears to apply the settings. ',
        },
      },
      {
        id: 248845,
        type: 'paragraph',
        value: {
          text: 'You can also open system settings by clicking the three dots menu at the top right of the browser, going to Settings and selecting System.',
        },
      },
    ],
    next_playlist: {
      id: 20345,
      bundle_id: 4995,
      name: 'webgl-firefox',
      title: 'Firefox',
      url_alias: 'firefox',
    },
  },
  {
    id: 20345,
    name: 'webgl-firefox',
    title: 'Firefox',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 4995,
    url_alias: 'firefox',
    atoms: [
      {
        id: 248855,
        type: 'paragraph',
        value: {
          text: '1. Enter about:config into the address bar.',
        },
      },
      {
        id: 248865,
        type: 'paragraph',
        value: {
          text: '2. Find webgl.disabled with the search bar.',
        },
      },
      {
        id: 248875,
        type: 'paragraph',
        value: {
          text: '3. Choose false value for the setting.',
        },
      },
    ],
    next_playlist: {
      id: 20355,
      bundle_id: 4995,
      name: 'webgl-opera',
      title: 'Opera',
      url_alias: 'opera',
    },
  },
  {
    id: 20355,
    name: 'webgl-opera',
    title: 'Opera',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 4995,
    url_alias: 'opera',
    atoms: [
      {
        id: 248885,
        type: 'paragraph',
        value: {
          text: '1. Open the menu at the top right of the browser and go to full browser settings.',
        },
      },
      {
        id: 248895,
        type: 'paragraph',
        value: {
          text: '2. Go to System.',
        },
      },
      {
        id: 248905,
        type: 'paragraph',
        value: {
          text: '3. Enable Use hardware acceleration when available.',
        },
      },
      {
        id: 248915,
        type: 'paragraph',
        value: {
          text: '4. Click the Relaunch button that appears to apply the settings. ',
        },
      },
    ],
    next_playlist: {
      id: 20365,
      bundle_id: 4995,
      name: 'webgl-safari',
      title: 'Safari',
      url_alias: 'safari',
    },
  },
  {
    id: 20365,
    name: 'webgl-safari',
    title: 'Safari',
    meta: null,
    category_id: 28,
    category_name: 'trading',
    category_title: 'Trading platform',
    category_url_alias: 'trading-platform',
    bundle_id: 4995,
    url_alias: 'safari',
    atoms: [
      {
        id: 248925,
        type: 'paragraph',
        value: {
          text: '1. Go to Develop in the menu bar.',
        },
      },
      {
        id: 248935,
        type: 'paragraph',
        value: {
          text: '2. Open Experimental Features.',
        },
      },
      {
        id: 248945,
        type: 'paragraph',
        value: {
          text: "3. Find WebGL in the list. Click it if it doesn't have a check mark by it. ",
        },
      },
      {
        id: 248955,
        type: 'paragraph',
        value: {
          text: 'If there is no Develop tab in the menu bar, you can add it by doing the following:',
        },
      },
      {
        id: 248965,
        type: 'paragraph',
        value: {
          text: '1. Open Preferences in the Safari menu.',
        },
      },
      {
        id: 248975,
        type: 'paragraph',
        value: {
          text: '2. Go to the Advanced section.',
        },
      },
      {
        id: 248985,
        type: 'paragraph',
        value: {
          text: '3. Enable Show Develop menu in menu bar.',
        },
      },
    ],
    next_playlist: null,
  },
  {
    id: 592,
    name: 'what-is-two-factor-authentication',
    title: 'What is two-factor authentication?',
    meta: null,
    category_id: 22,
    category_name: 'profile',
    category_title: 'Profile',
    category_url_alias: 'profile',
    bundle_id: 122,
    url_alias: 'what-is-two-factor-authentication',
    atoms: [
      {
        id: 240946,
        type: 'paragraph',
        value: {
          text: 'Two-factor authentication (2FA) is a way to add an extra layer of security to your trading account. The two factors that protect your account are your password and a unique code that you can receive through Facebook Messenger or Google Authenticator whenever you need to log in.',
        },
      },
      {
        id: 240947,
        type: 'paragraph',
        value: {
          text: 'To enhance your account security, we recommend that you enable two-factor authentication.',
        },
      },
    ],
    next_playlist: {
      id: 1095,
      bundle_id: 122,
      name: 'two-factor-authentication-via-sms',
      title: 'Two-factor authentication via Facebook',
      url_alias: 'two-factor-authentication-via-facebook',
    },
  },
  {
    id: 1095,
    name: 'two-factor-authentication-via-sms',
    title: 'Two-factor authentication via Facebook',
    meta: null,
    category_id: 22,
    category_name: 'profile',
    category_title: 'Profile',
    category_url_alias: 'profile',
    bundle_id: 122,
    url_alias: 'two-factor-authentication-via-facebook',
    atoms: [
      {
        id: 241535,
        type: 'paragraph',
        value: {
          text: 'Here’s how to set up two-factor authentication via Facebook Messenger:',
        },
      },
      {
        id: 241536,
        type: 'paragraph',
        value: {
          text: '1. Install the Facebook Messenger app on your device and sign in to it. If you don’t have a Facebook account, you will need to create one. If you are trading on a computer, you just have to make sure that you’re signed into your Facebook account.',
        },
      },
      {
        id: 241537,
        type: 'paragraph',
        value: {
          text: '2. Go to your Olymptrade profile settings.',
        },
      },
      {
        id: 241538,
        type: 'paragraph',
        value: {
          text: '3. Select Two-factor authentication in the Security section.',
        },
      },
      {
        id: 241539,
        type: 'paragraph',
        value: {
          text: '4. Select Facebook Messenger as your authentication method.',
        },
      },
      {
        id: 241540,
        type: 'paragraph',
        value: {
          text: '5. Press Add Security Bot, and you’ll be transferred to Facebook Messenger. ',
        },
      },
      {
        id: 241541,
        type: 'paragraph',
        value: {
          text: '6. Press Get started at the bottom of the chat, and the bot will send you a code. ',
        },
      },
      {
        id: 241542,
        type: 'paragraph',
        value: {
          text: '7. Copy this code, return to the Olymptrade app, paste it into the Code field, and press Confirm.',
        },
      },
      {
        id: 250025,
        type: 'paragraph',
        value: {
          text: 'Every time you log in to your account, you need to follow this process and enter the one-time code it generates. ',
        },
      },
      {
        id: 250035,
        type: 'paragraph',
        value: {
          text: 'You can disable authentication via Facebook Messenger or switch to Google Authenticator at any time.',
        },
      },
    ],
    next_playlist: {
      id: 1096,
      bundle_id: 122,
      name: 'two-factor-authentication-via-google',
      title: 'Two-factor authentication via Google',
      url_alias: 'two-factor-authentication-via-google',
    },
  },
  {
    id: 1096,
    name: 'two-factor-authentication-via-google',
    title: 'Two-factor authentication via Google',
    meta: null,
    category_id: 22,
    category_name: 'profile',
    category_title: 'Profile',
    category_url_alias: 'profile',
    bundle_id: 122,
    url_alias: 'two-factor-authentication-via-google',
    atoms: [
      {
        id: 241543,
        type: 'paragraph',
        value: {
          text: 'Here’s how to set up two-factor authentication via Google Authenticator:',
        },
      },
      {
        id: 241544,
        type: 'paragraph',
        value: {
          text: '1. Install the Google Authenticator app on your device. Use your email to sign in to it.',
        },
      },
      {
        id: 241545,
        type: 'paragraph',
        value: {
          text: '2. Go to your Olymptrade profile settings.',
        },
      },
      {
        id: 241546,
        type: 'paragraph',
        value: {
          text: '3. Select Two-factor authentication in the Security section.',
        },
      },
      {
        id: 241547,
        type: 'paragraph',
        value: {
          text: '4. Select Google Authenticator as your authentication method.',
        },
      },
      {
        id: 241548,
        type: 'paragraph',
        value: {
          text: '5. Scan the QR code or use the provided code to link Google Authenticator to your Olymptrade account.',
        },
      },
      {
        id: 241549,
        type: 'paragraph',
        value: {
          text: 'Every time you log in to your account, you need to open the Google Authenticator app and enter the 6-digit one-time code it generates. ',
        },
      },
      {
        id: 241550,
        type: 'paragraph',
        value: {
          text: 'You can disable authentication via Google Authenticator or switch to Facebook Messenger authentication at any time.',
        },
      },
    ],
    next_playlist: {
      id: 591,
      bundle_id: 122,
      name: 'strong-password',
      title: 'Strong password',
      url_alias: 'strong-password',
    },
  },
  {
    id: 591,
    name: 'strong-password',
    title: 'Strong password',
    meta: null,
    category_id: 22,
    category_name: 'profile',
    category_title: 'Profile',
    category_url_alias: 'profile',
    bundle_id: 122,
    url_alias: 'strong-password',
    atoms: [
      {
        id: 240942,
        type: 'paragraph',
        value: {
          text: '1. Create a strong password that contains uppercase, lowercase letters, and numbers.',
        },
      },
      {
        id: 240943,
        type: 'paragraph',
        value: {
          text: '2. Do not use the same password for different websites.',
        },
      },
      {
        id: 240944,
        type: 'paragraph',
        value: {
          text: '3. And remember: the weaker the password, the easier it is to hack into your account.',
        },
      },
      {
        id: 240945,
        type: 'paragraph',
        value: {
          text: 'For example, it will take 12 years to crack the “hfEZ3+gBI” password, while one only needs 2 minutes to crack the “09021993” password (date of birth.)',
        },
      },
    ],
    next_playlist: {
      id: 3958,
      bundle_id: 122,
      name: 'email-and-phone-number-confirmation',
      title: 'Email and Phone Number Confirmation',
      url_alias: 'email-and-phone-number-confirmation',
    },
  },
  {
    id: 3958,
    name: 'email-and-phone-number-confirmation',
    title: 'Email and Phone Number Confirmation',
    meta: null,
    category_id: 22,
    category_name: 'profile',
    category_title: 'Profile',
    category_url_alias: 'profile',
    bundle_id: 122,
    url_alias: 'email-and-phone-number-confirmation',
    atoms: [
      {
        id: 242003,
        type: 'paragraph',
        value: {
          text: 'We recommend that you confirm your email and phone number. It will enhance the security level of your account.',
        },
      },
      {
        id: 242004,
        type: 'paragraph',
        value: {
          text: 'To do it, go to the Profile settings. Make sure the email specified in the Email field is the one linked to your account. If there is a mistake in it, contact the support team and change the email. If the data is correct, click on this field and select “Continue”.',
        },
      },
      {
        id: 242005,
        type: 'paragraph',
        value: {
          text: 'You will receive a confirmation code at the email address you have specified. Enter it.',
        },
      },
      {
        id: 242006,
        type: 'paragraph',
        value: {
          text: 'To confirm your mobile phone, enter it in your Profile settings. After this, you will receive a confirmation code via an SMS text message, which you will need to enter in your profile.',
        },
      },
      {
        id: 246695,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/frame4.58d28ecd3f3c1eab5bb8542943a80a0f.png',
            width: 1424,
            height: 1496,
          },
        },
      },
      {
        id: 246705,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/personalsettingscorect.5d0f90a69b84cf0a9108b9c773d85128.png',
            width: 1490,
            height: 1442,
          },
        },
      },
      {
        id: 246715,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/confirmadress2correct.aefcb2a27e1c3d8cbd7cff620c947566.png',
            width: 1490,
            height: 1442,
          },
        },
      },
      {
        id: 246725,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/confirmadresscorrect.5892640d68599935757d767e4d3f7b58.png',
            width: 1490,
            height: 1442,
          },
        },
      },
      {
        id: 246735,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/confirmnumbercorrect.9ab3afd3b2513a24f85d44fa37f3eb56.png',
            width: 1490,
            height: 1442,
          },
        },
      },
    ],
    next_playlist: {
      id: 7311,
      bundle_id: 122,
      name: 'archiving-an-account',
      title: 'Archiving an Account',
      url_alias: 'archiving-an-account',
    },
  },
  {
    id: 7311,
    name: 'archiving-an-account',
    title: 'Archiving an Account',
    meta: null,
    category_id: 22,
    category_name: 'profile',
    category_title: 'Profile',
    category_url_alias: 'profile',
    bundle_id: 122,
    url_alias: 'archiving-an-account',
    atoms: [
      {
        id: 242460,
        type: 'paragraph',
        value: {
          text: 'A trading account can be archived only if all 3 of the following conditions are met:',
        },
      },
      {
        id: 242461,
        type: 'paragraph',
        value: {
          text: '1. There is more than one Real trading account.',
        },
      },
      {
        id: 242462,
        type: 'paragraph',
        value: {
          text: '2. There are no funds remaining on the account balance.',
        },
      },
      {
        id: 242463,
        type: 'paragraph',
        value: {
          text: '3. There are no active trades associated with the account.',
        },
      },
    ],
    next_playlist: {
      id: 600,
      bundle_id: 124,
      name: 'how-can-i-change-my-email',
      title: 'How Can I Change My Email',
      url_alias: 'how-can-i-change-my-email',
    },
  },
  {
    id: 600,
    name: 'how-can-i-change-my-email',
    title: 'How Can I Change My Email',
    meta: null,
    category_id: 22,
    category_name: 'profile',
    category_title: 'Profile',
    category_url_alias: 'profile',
    bundle_id: 124,
    url_alias: 'how-can-i-change-my-email',
    atoms: [
      {
        id: 240949,
        type: 'paragraph',
        value: {
          text: 'To update your email, please contact the support team.',
        },
      },
      {
        id: 246815,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/supportcorrect.74712cfee8bf22c06acc6e9d081ec24c.png',
            width: 1490,
            height: 1248,
          },
        },
      },
      {
        id: 240950,
        type: 'paragraph',
        value: {
          text: 'We change the data through a consultant to protect traders’ accounts from fraudsters.',
        },
      },
      {
        id: 240951,
        type: 'paragraph',
        value: {
          text: 'You cannot change your email yourself through the user account.',
        },
      },
    ],
    next_playlist: {
      id: 601,
      bundle_id: 124,
      name: 'how-can-i-change-my-phone-number',
      title: 'How Can I Change My Phone Number',
      url_alias: 'how-can-i-change-my-phone-number',
    },
  },
  {
    id: 601,
    name: 'how-can-i-change-my-phone-number',
    title: 'How Can I Change My Phone Number',
    meta: null,
    category_id: 22,
    category_name: 'profile',
    category_title: 'Profile',
    category_url_alias: 'profile',
    bundle_id: 124,
    url_alias: 'how-can-i-change-my-phone-number',
    atoms: [
      {
        id: 240952,
        type: 'paragraph',
        value: {
          text: 'If you haven’t confirmed your phone number, you can edit it in your user account.',
        },
      },
      {
        id: 240953,
        type: 'paragraph',
        value: {
          text: 'If you have confirmed your phone number, please contact the support team.',
        },
      },
      {
        id: 246825,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/supportcorrect.74712cfee8bf22c06acc6e9d081ec24c.png',
            width: 1490,
            height: 1248,
          },
        },
      },
    ],
    next_playlist: {
      id: 603,
      bundle_id: 124,
      name: 'how-can-i-change-the-password',
      title: 'How Can I Change the Password',
      url_alias: 'how-can-i-change-the-password',
    },
  },
  {
    id: 603,
    name: 'how-can-i-change-the-password',
    title: 'How Can I Change the Password',
    meta: null,
    category_id: 22,
    category_name: 'profile',
    category_title: 'Profile',
    category_url_alias: 'profile',
    bundle_id: 124,
    url_alias: 'how-can-i-change-the-password',
    atoms: [
      {
        id: 240958,
        type: 'paragraph',
        value: {
          text: '1. First, you need to sign out of your account.',
        },
      },
      {
        id: 240959,
        type: 'paragraph',
        value: {
          text: '2. Then click on the login form.',
        },
      },
      {
        id: 240960,
        type: 'paragraph',
        value: {
          text: '3. Click on “Change my password”.',
        },
      },
      {
        id: 240961,
        type: 'paragraph',
        value: {
          text: '4. In window, you will see the email that is linked to your account. Click “Reset”.',
        },
      },
      {
        id: 240962,
        type: 'paragraph',
        value: {
          text: '5. You will receive an email containing your password reset link.',
        },
      },
    ],
    next_playlist: {
      id: 604,
      bundle_id: 124,
      name: 'how-to-delete-an-account',
      title: 'How to Delete an Account',
      url_alias: 'how-to-delete-an-account',
    },
  },
  {
    id: 604,
    name: 'how-to-delete-an-account',
    title: 'How to Delete an Account',
    meta: null,
    category_id: 22,
    category_name: 'profile',
    category_title: 'Profile',
    category_url_alias: 'profile',
    bundle_id: 124,
    url_alias: 'how-to-delete-an-account',
    atoms: [
      {
        id: 240964,
        type: 'paragraph',
        value: {
          text: 'If you want to delete your account, please contact our Support team.',
        },
      },
    ],
    next_playlist: {
      id: 605,
      bundle_id: 125,
      name: 'incorrect-password',
      title: 'Incorrect password',
      url_alias: 'incorrect-password',
    },
  },
  {
    id: 605,
    name: 'incorrect-password',
    title: 'Incorrect password',
    meta: null,
    category_id: 22,
    category_name: 'profile',
    category_title: 'Profile',
    category_url_alias: 'profile',
    bundle_id: 125,
    url_alias: 'incorrect-password',
    atoms: [
      {
        id: 240965,
        type: 'paragraph',
        value: {
          text: '1. First of all, make sure you haven’t mistyped your password.',
        },
      },
      {
        id: 240966,
        type: 'paragraph',
        value: {
          text: '2. Check your keyboard to make sure the caps lock key is turned off.',
        },
      },
      {
        id: 240967,
        type: 'paragraph',
        value: {
          text: '3. Try typing your password in a text editor, then copy and paste it in the field.',
        },
      },
      {
        id: 240968,
        type: 'paragraph',
        value: {
          text: '4. If you are still having trouble getting into your account, you have to reset your password.',
        },
      },
      {
        id: 240969,
        type: 'paragraph',
        value: {
          text: '5. Open the login form and click on “Reset the password”. Enter the email that is linked to your account and select “Reset”. You will receive a randomly generated password by email. Use it to sign in.',
        },
      },
    ],
    next_playlist: {
      id: 606,
      bundle_id: 125,
      name: 'the-user-already-exists-or-has-not-been-found',
      title: 'The User Already Exists or Has Not Been Found',
      url_alias: 'the-user-already-exists-or-has-not-been-found',
    },
  },
  {
    id: 606,
    name: 'the-user-already-exists-or-has-not-been-found',
    title: 'The User Already Exists or Has Not Been Found',
    meta: null,
    category_id: 22,
    category_name: 'profile',
    category_title: 'Profile',
    category_url_alias: 'profile',
    bundle_id: 125,
    url_alias: 'the-user-already-exists-or-has-not-been-found',
    atoms: [
      {
        id: 240970,
        type: 'paragraph',
        value: {
          text: 'If you receive such a notification, please do the following:',
        },
      },
      {
        id: 240971,
        type: 'paragraph',
        value: {
          text: '1. Make sure you are using the login information you selected when creating the account. For example, if you signed up with Facebook, you should select this method when signing in.',
        },
      },
      {
        id: 240972,
        type: 'paragraph',
        value: {
          text: '2. If you first signed up with your email, you should select this method when you sign in.',
        },
      },
      {
        id: 240973,
        type: 'paragraph',
        value: {
          text: '3. If you have tried all this but still fail to sign in, contact our support team.',
        },
      },
      {
        id: 240974,
        type: 'paragraph',
        value: {
          text: '4. A consultant will check whether there is an account linked to this email.',
        },
      },
      {
        id: 240975,
        type: 'paragraph',
        value: {
          text: '5. Maybe you have entered a wrong email when creating the account.',
        },
      },
    ],
    next_playlist: {
      id: 15425,
      bundle_id: 2285,
      name: 'account-blocked-due-to-age',
      title: 'Account blocked Due to Age',
      url_alias: 'account-blocked-due-to-age',
    },
  },
  {
    id: 15425,
    name: 'account-blocked-due-to-age',
    title: 'Account blocked Due to Age',
    meta: null,
    category_id: 22,
    category_name: 'profile',
    category_title: 'Profile',
    category_url_alias: 'profile',
    bundle_id: 2285,
    url_alias: 'account-blocked-due-to-age',
    atoms: [
      {
        id: 243217,
        type: 'paragraph',
        value: {
          text: 'If you are not of legal age to trade in your country you cannot trade on Olymptrade. Most countries require that trader be 18 or older to access financial markets.',
        },
      },
    ],
    next_playlist: {
      id: 15445,
      bundle_id: 2285,
      name: 'account-blocked-because-of-too-many-accounts',
      title: 'Account blocked Because of Too Many Accounts',
      url_alias: 'account-blocked-because-of-too-many-accounts',
    },
  },
  {
    id: 15445,
    name: 'account-blocked-because-of-too-many-accounts',
    title: 'Account blocked Because of Too Many Accounts',
    meta: null,
    category_id: 22,
    category_name: 'profile',
    category_title: 'Profile',
    category_url_alias: 'profile',
    bundle_id: 2285,
    url_alias: 'account-blocked-because-of-too-many-accounts',
    atoms: [
      {
        id: 243218,
        type: 'paragraph',
        value: {
          text: 'Please note that if you have several accounts and the suspicious activity was resolved - your accounts could still be blocked. If your activity was determined as suspicious you will get an e-mail with a warning. If your account was blocked, you will receive an e-mail with the further information.',
        },
      },
    ],
    next_playlist: {
      id: 15465,
      bundle_id: 2285,
      name: 'account-blocked-due-to-country',
      title: 'Account blocked Due to Country',
      url_alias: 'account-blocked-due-to-country',
    },
  },
  {
    id: 15465,
    name: 'account-blocked-due-to-country',
    title: 'Account blocked Due to Country',
    meta: null,
    category_id: 22,
    category_name: 'profile',
    category_title: 'Profile',
    category_url_alias: 'profile',
    bundle_id: 2285,
    url_alias: 'account-blocked-due-to-country',
    atoms: [
      {
        id: 243219,
        type: 'paragraph',
        value: {
          text: 'Also, known as trading outside our jurisdiction. For example, you cannot trade in the EU, the USA, Canada, Japan, & the UK. - Any activity on your account from these countries may lead to blocking. \n',
        },
      },
      {
        id: 243220,
        type: 'paragraph',
        value: {
          text: '\nPlease check if Olymptrade is available in your region. You can find this information in the User Agreement.',
        },
      },
    ],
    next_playlist: {
      id: 15645,
      bundle_id: 2285,
      name: 'unauthorized-access-attempt',
      title: 'Account blocked due to unauthorized Access Attempt ',
      url_alias: 'account-blocked-due-to-unauthorized-access-attempt-',
    },
  },
  {
    id: 15645,
    name: 'unauthorized-access-attempt',
    title: 'Account blocked due to unauthorized Access Attempt ',
    meta: null,
    category_id: 22,
    category_name: 'profile',
    category_title: 'Profile',
    category_url_alias: 'profile',
    bundle_id: 2285,
    url_alias: 'account-blocked-due-to-unauthorized-access-attempt-',
    atoms: [
      {
        id: 243221,
        type: 'paragraph',
        value: {
          text: 'If your account is suspected of being hacked it can be blocked to stop unwanted access.\n',
        },
      },
      {
        id: 243222,
        type: 'paragraph',
        value: {
          text: 'If you find that your account has been hacked, report it to our Support staff. Specialists will find out who entered your account, when it was accessed, what actions they performed, and begin working to fix problems.',
        },
      },
      {
        id: 243223,
        type: 'paragraph',
        value: {
          text: '\n\nYour account will be locked through the verification period to follow. To regain access to your account you recomplete the verification process.',
        },
      },
      {
        id: 243224,
        type: 'paragraph',
        value: {
          text: '\nThe results of the investigation and instructions for verification will be sent to you by email. ',
        },
      },
    ],
    next_playlist: {
      id: 15675,
      bundle_id: 2285,
      name: 'what-to-look-out-for-if-your-account-was-blocked',
      title: 'What to look out for if your account was blocked',
      url_alias: 'what-to-look-out-for-if-your-account-was-blocked',
    },
  },
  {
    id: 15675,
    name: 'what-to-look-out-for-if-your-account-was-blocked',
    title: 'What to look out for if your account was blocked',
    meta: null,
    category_id: 22,
    category_name: 'profile',
    category_title: 'Profile',
    category_url_alias: 'profile',
    bundle_id: 2285,
    url_alias: 'what-to-look-out-for-if-your-account-was-blocked',
    atoms: [
      {
        id: 243225,
        type: 'paragraph',
        value: {
          text: 'After blocking an account, Olymptrade always sends an information e-mail to the user’s registered email address.\n\n\n',
        },
      },
      {
        id: 243226,
        type: 'paragraph',
        value: {
          text: 'If you find that your account is blocked: ',
        },
      },
      {
        id: 243227,
        type: 'paragraph',
        value: {
          text: '\n1. Open your e-mail associated with your account - There should be an email explaining the reasons your account was blocked and your next steps. Follow the instructions. ',
        },
      },
      {
        id: 243228,
        type: 'paragraph',
        value: {
          text: '2. If there is no e-mail, please contact Support.',
        },
      },
    ],
    next_playlist: {
      id: 9125,
      bundle_id: 312,
      name: 'what-is-cybersecurity',
      title: 'What is cybersecurity?',
      url_alias: 'what-is-cybersecurity',
    },
  },
  {
    id: 9125,
    name: 'what-is-cybersecurity',
    title: 'What is cybersecurity?',
    meta: null,
    category_id: 22,
    category_name: 'profile',
    category_title: 'Profile',
    category_url_alias: 'profile',
    bundle_id: 312,
    url_alias: 'what-is-cybersecurity',
    atoms: [
      {
        id: 242504,
        type: 'paragraph',
        value: {
          text: 'Cybersecurity is a set of rules and practices for protecting your software and data from cyberattacks. Such attacks may be aimed at stealing your money, exposing or destroying your sensitive information, and so on.',
        },
      },
      {
        id: 242505,
        type: 'paragraph',
        value: {
          text: 'For online traders, cybersecurity is one of the top priorities. If you want to keep your funds and financial data safe, follow the basic rules of cybersecurity hygiene.',
        },
      },
    ],
    next_playlist: {
      id: 9126,
      bundle_id: 312,
      name: 'types-of-trading-scams',
      title: 'Types of Trading Scams',
      url_alias: 'types-of-trading-scams',
    },
  },
  {
    id: 9126,
    name: 'types-of-trading-scams',
    title: 'Types of Trading Scams',
    meta: null,
    category_id: 22,
    category_name: 'profile',
    category_title: 'Profile',
    category_url_alias: 'profile',
    bundle_id: 312,
    url_alias: 'types-of-trading-scams',
    atoms: [
      {
        id: 242506,
        type: 'paragraph',
        value: {
          text: 'There are many kinds of trading scams. Some of them are designed especially for Olymptrade customers. Below are some examples.',
        },
      },
      {
        id: 242507,
        type: 'paragraph',
        value: {
          text: 'Fake Olymptrade Representatives',
        },
      },
      {
        id: 242508,
        type: 'paragraph',
        value: {
          text: "A person contacts you online stating that he or she is an Olymptrade employee. Normally, such scammers ask users to provide their documents/personal data or share their account login and password. Fake representatives may say they need it to verify your account. Also, they may promise to credit your account with a big bonus or help you make money using the platform's vulnerability.",
        },
      },
      {
        id: 242509,
        type: 'paragraph',
        value: {
          text: 'Fake Olymptrade Websites',
        },
      },
      {
        id: 242510,
        type: 'paragraph',
        value: {
          text: 'Scammers create fake websites imitating Olymptrade’s official resources. On these websites, they offer you to enter your login and password or fund your account to get a huge bonus. By doing so, you lose access to your real account and your money.',
        },
      },
      {
        id: 242511,
        type: 'paragraph',
        value: {
          text: 'Fake Olymptrade Apps',
        },
      },
      {
        id: 242512,
        type: 'paragraph',
        value: {
          text: 'Fake apps work the same way as the fake websites. They may resemble the original but often come with unrealistic promises such as trading bots with guaranteed profits, win-win strategies and signals, and so on. Some of these apps can make their way to the Google and Apple stores.',
        },
      },
      {
        id: 242513,
        type: 'paragraph',
        value: {
          text: 'Phishing or Popups',
        },
      },
      {
        id: 242514,
        type: 'paragraph',
        value: {
          text: 'An attacker sends you an email or a message designed to look like a legitimate request from Olymptrade. The message contains a link you must follow to confirm your password or get a big bonus. This malicious link leads to a fake Olymptrade website where you enter your account data or make a deposit.',
        },
      },
    ],
    next_playlist: {
      id: 9127,
      bundle_id: 312,
      name: 'basic-cybersecurity-rules',
      title: 'Basic Cybersecurity Rules',
      url_alias: 'basic-cybersecurity-rules',
    },
  },
  {
    id: 9127,
    name: 'basic-cybersecurity-rules',
    title: 'Basic Cybersecurity Rules',
    meta: null,
    category_id: 22,
    category_name: 'profile',
    category_title: 'Profile',
    category_url_alias: 'profile',
    bundle_id: 312,
    url_alias: 'basic-cybersecurity-rules',
    atoms: [
      {
        id: 242515,
        type: 'paragraph',
        value: {
          text: 'To avoid being scammed, follow these 5 simple rules:',
        },
      },
      {
        id: 242516,
        type: 'paragraph',
        value: {
          text: '• Never give your money or access to your trading account to strangers regardless of what they promise you. Remember that scammers will say anything to cheat you out of your money.',
        },
      },
      {
        id: 242517,
        type: 'paragraph',
        value: {
          text: '• Don’t allow anyone to manage your trading account and funds for you. Even if this person is your friend, it’s still risky to give them full control over your money. Besides, it’s against Olymptrade’s rules.',
        },
      },
      {
        id: 242518,
        type: 'paragraph',
        value: {
          text: '• If you share your PC or mobile device with other people, remember to log out of your trading account every time you pass the device to another person or leave it unattended. Never let the browser save your password.',
        },
      },
      {
        id: 242519,
        type: 'paragraph',
        value: {
          text: '• Avoid people who approach you with unrealistic promises of guaranteed profits, quick multiple returns for small investments, incredible bonuses and giveaways, fail-proof strategies, or private information that can make you rich overnight. Ask yourself why they will share this stuff with you instead of using it for themselves.',
        },
      },
      {
        id: 242520,
        type: 'paragraph',
        value: {
          text: '• Before entering your account details on a trading platform, make sure it’s authentic. Double check the domain name for any subtle changes scammers use to make you believe the website is legit.',
        },
      },
    ],
    next_playlist: {
      id: 9128,
      bundle_id: 312,
      name: 'how-olymp-trade-protects-you-from-scams',
      title: 'How Olymptrade Protects You from Scams',
      url_alias: 'how-olymptrade-protects-you-from-scams',
    },
  },
  {
    id: 9128,
    name: 'how-olymp-trade-protects-you-from-scams',
    title: 'How Olymptrade Protects You from Scams',
    meta: null,
    category_id: 22,
    category_name: 'profile',
    category_title: 'Profile',
    category_url_alias: 'profile',
    bundle_id: 312,
    url_alias: 'how-olymptrade-protects-you-from-scams',
    atoms: [
      {
        id: 242521,
        type: 'paragraph',
        value: {
          text: '• Olymptrade does not allow its clients to use third parties for managing their accounts. We do it to protect account holders from fraud and scams.',
        },
      },
      {
        id: 242522,
        type: 'paragraph',
        value: {
          text: '• Deposits and withdrawals can only be done by the account holder. Olymptrade complies with Know Your Customer (KYC) rules and matches deposit and withdrawal sources to the actual account.',
        },
      },
      {
        id: 242523,
        type: 'paragraph',
        value: {
          text: '• Olymptrade’s employees and official affiliates will never ask you to give them access to your account. They will never require your sensitive info in a personal message or contact you privately offering a special bonus or treatment. All the info about the company’s offers and promo events is openly available on Olymptrade’s website www.olymptrade.com or in its official social media communities.',
        },
      },
      {
        id: 242524,
        type: 'paragraph',
        value: {
          text: '• Olymptrade’s customer service is always ready to resolve your issues or concerns. If anyone sends you an offer or request on behalf of Olymptrade, please contact our customer service department immediately.',
        },
      },
    ],
    next_playlist: {
      id: 5895,
      bundle_id: 287,
      name: 'what-is-a-segregated-account',
      title: 'What Is a Segregated Account?',
      url_alias: 'what-is-a-segregated-account',
    },
  },
  {
    id: 5895,
    name: 'what-is-a-segregated-account',
    title: 'What Is a Segregated Account?',
    meta: null,
    category_id: 22,
    category_name: 'profile',
    category_title: 'Profile',
    category_url_alias: 'profile',
    bundle_id: 287,
    url_alias: 'what-is-a-segregated-account',
    atoms: [
      {
        id: 242245,
        type: 'paragraph',
        value: {
          text: 'When you deposit funds onto the platform, they are transferred directly to a segregated account. A segregated account is essentially an account that belongs to our company but is separate from the account that stores its operational funds.',
        },
      },
      {
        id: 242246,
        type: 'paragraph',
        value: {
          text: 'We use only our own working capital to support our activities such as product development and maintenance, hedging, as well as business and innovative activities.',
        },
      },
    ],
    next_playlist: {
      id: 5896,
      bundle_id: 287,
      name: 'advantages-of-a-segregate-account',
      title: 'Advantages of a Segregate Account',
      url_alias: 'advantages-of-a-segregate-account',
    },
  },
  {
    id: 5896,
    name: 'advantages-of-a-segregate-account',
    title: 'Advantages of a Segregate Account',
    meta: null,
    category_id: 22,
    category_name: 'profile',
    category_title: 'Profile',
    category_url_alias: 'profile',
    bundle_id: 287,
    url_alias: 'advantages-of-a-segregate-account',
    atoms: [
      {
        id: 242247,
        type: 'paragraph',
        value: {
          text: 'Using a segregated account to store our clients’ funds, we maximize transparency, provide the platform users with uninterrupted access to their funds, and protect them from possible risks. Although this is unlikely to happen, if the company went bankrupt, your money would be 100% safe and can be refunded.',
        },
      },
    ],
    next_playlist: null,
  },
  {
    id: 902,
    name: 'what-is-a-demo-account',
    title: 'What Is a Demo Account?',
    meta: null,
    category_id: 1145,
    category_name: 'account-types',
    category_title: 'Account types',
    category_url_alias: 'account-types',
    bundle_id: 3605,
    url_alias: 'what-is-a-demo-account',
    atoms: [
      {
        id: 241502,
        type: 'paragraph',
        value: {
          text: 'A demo account is a type of account that allows you to practice trading without any risks. It functions as a replica of a live account, with the only difference being that you trade with virtual funds, so on demo, you can practice trading and test tools and strategies for as long as you want — safely and for free.',
        },
      },
      {
        id: 241503,
        type: 'paragraph',
        value: {
          text: 'Benefits of a demo account',
        },
      },
      {
        id: 241504,
        type: 'paragraph',
        value: {
          text: 'With a demo account, you can:',
        },
      },
      {
        id: 241506,
        type: 'paragraph',
        value: {
          text: '1. Get acquainted with the platform interface.',
        },
      },
      {
        id: 257485,
        type: 'paragraph',
        value: {
          text: '2. Practice opening and closing trades.',
        },
      },
      {
        id: 257495,
        type: 'paragraph',
        value: {
          text: '3. Figure out what trade amounts to choose.',
        },
      },
      {
        id: 257505,
        type: 'paragraph',
        value: {
          text: '4. Learn to analyze price charts and make informed trading decisions.',
        },
      },
      {
        id: 257515,
        type: 'paragraph',
        value: {
          text: '5. Get a feel for market volatility, trading hours and different timeframes.',
        },
      },
      {
        id: 257525,
        type: 'paragraph',
        value: {
          text: '6. Test and refine your trading strategies.',
        },
      },
      {
        id: 257535,
        type: 'paragraph',
        value: {
          text: 'How to get started',
        },
      },
      {
        id: 257545,
        type: 'paragraph',
        value: {
          text: 'To get a demo account, complete the registration process on Olymptrade. Once you’re logged in, choose your demo account from the menu located in the top right of your screen, as shown in the picture below.',
        },
      },
      {
        id: 257565,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/demo-accounts/1.bda6d22ab7c834e21f4232a0891243fe.png',
            width: 1424,
            height: 970,
          },
        },
      },
      {
        id: 257575,
        type: 'paragraph',
        value: {
          text: 'Tip: On your demo account, make the same trades with the virtual money as you would with real money on a live account. This way, your learning experience on the demo account will be more helpful when you transition to live trading.',
        },
      },
      {
        id: 257585,
        type: 'paragraph',
        value: {
          text: 'Desktop',
        },
      },
      {
        id: 257595,
        type: 'video',
        value: {
          url: 'https://youtube.com/embed/uPj9vJ0ayTI',
        },
      },
      {
        id: 257605,
        type: 'paragraph',
        value: {
          text: 'Mobile',
        },
      },
      {
        id: 257635,
        type: 'video',
        value: {
          url: 'https://youtube.com/embed/uDFfMRFTM1s',
        },
      },
      {
        id: 257625,
        type: 'paragraph',
        value: {
          text: 'Next, we’ll discuss the limitations of a demo account. ',
        },
      },
    ],
    next_playlist: {
      id: 22175,
      bundle_id: 3605,
      name: 'limitations-of-demo-trading',
      title: 'Limitations of demo trading',
      url_alias: 'limitations-of-demo-trading',
    },
  },
  {
    id: 22175,
    name: 'limitations-of-demo-trading',
    title: 'Limitations of demo trading',
    meta: null,
    category_id: 1145,
    category_name: 'account-types',
    category_title: 'Account types',
    category_url_alias: 'account-types',
    bundle_id: 3605,
    url_alias: 'limitations-of-demo-trading',
    atoms: [
      {
        id: 257645,
        type: 'paragraph',
        value: {
          text: 'A demo account is a useful tool that you can use to practice trading with real market data, but without any risks. That said, it’s important to acknowledge the limitations of demo trading.',
        },
      },
      {
        id: 257655,
        type: 'paragraph',
        value: {
          text: '1. No impact on your finances',
        },
      },
      {
        id: 257665,
        type: 'paragraph',
        value: {
          text: 'With a demo account, you trade with virtual money, so any gains or losses you experience have no effect on your actual finances.',
        },
      },
      {
        id: 257675,
        type: 'paragraph',
        value: {
          text: '2. Different approach to trade amounts',
        },
      },
      {
        id: 257685,
        type: 'paragraph',
        value: {
          text: 'On a demo account, you have unlimited virtual funds to practice trading. It’s nice to have a safe trading playground, but relying on it for too long may influence your decision-making, and you’ll end up acting differently than you would on a live account.',
        },
      },
      {
        id: 257695,
        type: 'paragraph',
        value: {
          text: 'For instance, opening trades worth thousands of dollars on a demo account while planning to trade with only ten dollars on a live account renders the training experience on the demo effectively useless.',
        },
      },
      {
        id: 257705,
        type: 'paragraph',
        value: {
          text: '3. No emotional involvement',
        },
      },
      {
        id: 257715,
        type: 'paragraph',
        value: {
          text: 'Trading on a demo account won’t evoke the same emotional responses as live trading. After a bad trade on a demo account, you will probably feel little or no stress. On a live account, losing actual money feels completely different.',
        },
      },
      {
        id: 257725,
        type: 'paragraph',
        value: {
          text: '4. Complacency',
        },
      },
      {
        id: 257735,
        type: 'paragraph',
        value: {
          text: 'Having a solid routine is important for success, but if you stay on a demo account too long, you may get stuck in the same patterns. Without a certain degree of innovation and critical thinking, transitioning to a live account may prove challenging.',
        },
      },
      {
        id: 257745,
        type: 'paragraph',
        value: {
          text: '5. Fear',
        },
      },
      {
        id: 257755,
        type: 'paragraph',
        value: {
          text: 'The longer you remain in the safety of a demo account, the harder it may be to switch to real trading for fear of losing real money.',
        },
      },
      {
        id: 257765,
        type: 'paragraph',
        value: {
          text: 'To overcome these limitations, try trading on a live account with a small deposit. This way, you’ll limit your risks and get real trading experience at the same time. The minimum deposit is only $10, so you can open ten trades worth $1 each and get the feel for live trading.',
        },
      },
      {
        id: 257775,
        type: 'paragraph',
        value: {
          text: 'For ‌tips on live account trading, proceed to the next lesson.',
        },
      },
    ],
    next_playlist: {
      id: 22185,
      bundle_id: 3605,
      name: 'live-trading-tips',
      title: 'Live trading tips',
      url_alias: 'live-trading-tips',
    },
  },
  {
    id: 22185,
    name: 'live-trading-tips',
    title: 'Live trading tips',
    meta: null,
    category_id: 1145,
    category_name: 'account-types',
    category_title: 'Account types',
    category_url_alias: 'account-types',
    bundle_id: 3605,
    url_alias: 'live-trading-tips',
    atoms: [
      {
        id: 257785,
        type: 'paragraph',
        value: {
          text: 'While a demo account allows you to trade with virtual money, trading with your own real funds on a live account is a different experience.',
        },
      },
      {
        id: 257795,
        type: 'paragraph',
        value: {
          text: 'Here are some tips to help you start trading live and avoid common mistakes.',
        },
      },
      {
        id: 257805,
        type: 'paragraph',
        value: {
          text: '1. Start small',
        },
      },
      {
        id: 257815,
        type: 'paragraph',
        value: {
          text: 'Start with small amounts to get used to trading with real money. When you see progress, gradually increase your trade size. This will help you ‌manage risks and minimize potential losses.',
        },
      },
      {
        id: 257825,
        type: 'paragraph',
        value: {
          text: 'The minimum deposit on Olymptrade is $10. To calculate your trading budget, determine the amount of money you intend to spend on your trade. Then, divide this amount by the percentage of your account balance that you can afford to lose if your trade goes wrong.',
        },
      },
      {
        id: 257835,
        type: 'paragraph',
        value: {
          text: 'For example, if you intend to invest $5 in a trade and are willing to risk 5% of your account balance, you’ll need a deposit of $100 ($5/0.05).',
        },
      },
      {
        id: 257845,
        type: 'paragraph',
        value: {
          text: '2. Have enough reasons for making a trade',
        },
      },
      {
        id: 257855,
        type: 'paragraph',
        value: {
          text: 'Even if you don’t use a particular strategy, make sure to base your decisions on several signals. For example, if the price of the asset you intend to trade rose above a particular level, that alone is not enough to rush into an Up trade. Instead, break down the situation and ask yourself:',
        },
      },
      {
        id: 257865,
        type: 'paragraph',
        value: {
          text: '- Has the price rebounded from the support level?',
        },
      },
      {
        id: 257875,
        type: 'paragraph',
        value: {
          text: '- Has the candlestick formed the hammer pattern, which typically precedes price growth?',
        },
      },
      {
        id: 257885,
        type: 'paragraph',
        value: {
          text: '- Does your technical indicator also confirm an ascending trend?',
        },
      },
      {
        id: 257895,
        type: 'paragraph',
        value: {
          text: 'If the answer to these three questions is yes, it may indeed be the right time to open an Up trade.',
        },
      },
      {
        id: 257915,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/demo-accounts/2.38c90c0ed9af242bb6c492b95c659017.png',
            width: 1424,
            height: 970,
          },
        },
      },
      {
        id: 257905,
        type: 'paragraph',
        value: {
          text: '3. Consider the bigger picture',
        },
      },
      {
        id: 257925,
        type: 'paragraph',
        value: {
          text: 'To better understand the chart of the asset you want to trade, take a look at larger timeframes. That way, you’ll be able to identify long-term trends and make better trading decisions.',
        },
      },
      {
        id: 257935,
        type: 'paragraph',
        value: {
          text: 'For example, if you see an asset’s price rapidly moving up within 30 minutes, check how it looks in a one-hour timeframe. You may find that the price will soon meet significant resistance and probably reverse downwards.',
        },
      },
      {
        id: 257945,
        type: 'paragraph',
        value: {
          text: 'You also need to keep an eye on the economic news. What’s the reason behind the price growth? Has something huge happened, or is the price growth being influenced by minor news whose impact is likely ro reverse?',
        },
      },
      {
        id: 257955,
        type: 'paragraph',
        value: {
          text: '4. Manage risk and avoid overtrading',
        },
      },
      {
        id: 257965,
        type: 'paragraph',
        value: {
          text: 'To keep risks under control, don’t spend more than 10% of your deposit on a single trade. In the Forex mode, use Stop Loss and Take Profit. And don’t forget to take breaks during your trading sessions! It’ll help reduce stress and maintain clarity for better trading decisions.',
        },
      },
      {
        id: 257975,
        type: 'paragraph',
        value: {
          text: '5. Analyze your outcomes',
        },
      },
      {
        id: 257985,
        type: 'paragraph',
        value: {
          text: 'Keep a trading journal to track your performance and identify areas of improvement. Make records of all your trades, including the reasons for entering and exiting each trade, as well as their results. This can help refine your strategy and improve your performance over time.',
        },
      },
      {
        id: 257995,
        type: 'paragraph',
        value: {
          text: 'Evolve as a trader by combining your best practices with expert advice. Attend trading webinars, read books and articles, exchange experiences with fellow traders in our community.',
        },
      },
      {
        id: 258005,
        type: 'paragraph',
        value: {
          text: 'Follow these tips to increase your chances of growing your live trading account over time.',
        },
      },
      {
        id: 258015,
        type: 'paragraph',
        value: {
          text: 'In the next lesson, we’ll introduce a test that will determine whether you are ready to transition to live trading.',
        },
      },
    ],
    next_playlist: {
      id: 22195,
      bundle_id: 3605,
      name: 'are-you-ready-to-trade-on-a-live-account',
      title: 'Are you ready to trade on a live account?',
      url_alias: 'are-you-ready-to-trade-on-a-live-account',
    },
  },
  {
    id: 22195,
    name: 'are-you-ready-to-trade-on-a-live-account',
    title: 'Are you ready to trade on a live account?',
    meta: null,
    category_id: 1145,
    category_name: 'account-types',
    category_title: 'Account types',
    category_url_alias: 'account-types',
    bundle_id: 3605,
    url_alias: 'are-you-ready-to-trade-on-a-live-account',
    atoms: [
      {
        id: 258025,
        type: 'paragraph',
        value: {
          text: 'This test will help assess whether you’re ready to switch to live trading.',
        },
      },
      {
        id: 258035,
        type: 'paragraph',
        value: {
          text: 'Answer these questions and count the number of "yes" responses:',
        },
      },
      {
        id: 258045,
        type: 'paragraph',
        value: {
          text: '1. Do you feel confident using Olymptrade?',
        },
      },
      {
        id: 258055,
        type: 'paragraph',
        value: {
          text: '2. Have you executed five or more trades on a demo account?',
        },
      },
      {
        id: 258065,
        type: 'paragraph',
        value: {
          text: '3. Do you have a trading strategy that you have tested on a demo account and are satisfied with its performance?',
        },
      },
      {
        id: 258075,
        type: 'paragraph',
        value: {
          text: '4. Can you afford to spend $10 or more on trading?',
        },
      },
      {
        id: 258085,
        type: 'paragraph',
        value: {
          text: '5. Have you figured out how much money you will spend on ‌each trade?',
        },
      },
      {
        id: 258095,
        type: 'paragraph',
        value: {
          text: '6. Are you aware that trading is risky?',
        },
      },
      {
        id: 258105,
        type: 'paragraph',
        value: {
          text: '7. Do you understand that trading is not a get-rich-quick scheme?',
        },
      },
      {
        id: 258115,
        type: 'paragraph',
        value: {
          text: '8. Are you capable of managing your emotions and maintaining discipline?',
        },
      },
      {
        id: 258125,
        type: 'paragraph',
        value: {
          text: '9. Are you excited about learning how to trade with real money?',
        },
      },
      {
        id: 258135,
        type: 'paragraph',
        value: {
          text: '10. Are you willing to attend trading webinars, read trading articles, practice with a demo account, and invest time and effort in your trading education?',
        },
      },
      {
        id: 258145,
        type: 'paragraph',
        value: {
          text: 'Five “yes” or more',
        },
      },
      {
        id: 258155,
        type: 'paragraph',
        value: {
          text: 'Congratulations! You’re ready to transition to live trading. To make a deposit, click the Payments button at the top of your screen. Then, select Deposit from the list and follow the instructions.',
        },
      },
      {
        id: 258165,
        type: 'paragraph',
        value: {
          text: 'Remember that even with the minimum $10 deposit you can open ten trades worth $1 each. Seize this opportunity to practice real trading.',
        },
      },
      {
        id: 258175,
        type: 'paragraph',
        value: {
          text: 'Four “yes” or fewer',
        },
      },
      {
        id: 258185,
        type: 'paragraph',
        value: {
          text: 'You should continue practicing on a demo account. Focus on making ‌trades of the same amount you would make on a live account. Explore the assets you are trading and analyze the risks. Set a deadline and take this test again. Persistence and practice will lead you to success.',
        },
      },
      {
        id: 258195,
        type: 'video',
        value: {
          url: 'https://youtube.com/embed/vM155wolD_4',
        },
      },
    ],
    next_playlist: {
      id: 17715,
      bundle_id: 3715,
      name: 'what-is-traders-id',
      title: "What is a Trader's ID?",
      url_alias: 'what-is-a-trader%27s-id',
    },
  },
  {
    id: 17715,
    name: 'what-is-traders-id',
    title: "What is a Trader's ID?",
    meta: null,
    category_id: 1145,
    category_name: 'account-types',
    category_title: 'Account types',
    category_url_alias: 'account-types',
    bundle_id: 3715,
    url_alias: 'what-is-a-trader%27s-id',
    atoms: [
      {
        id: 243692,
        type: 'paragraph',
        value: {
          text: "When you register on the platform, you get a Trader's ID. It's your unique identification number issued by Olymptrade. You can find it in the Profile section.",
        },
      },
      {
        id: 244095,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/3000.e112d9d6c95fc3ac07ad8f76067dd3c7.png',
            width: 1424,
            height: 1490,
          },
        },
      },
    ],
    next_playlist: {
      id: 17725,
      bundle_id: 3715,
      name: 'what-is-a-trading-account',
      title: 'What is a trading account?',
      url_alias: 'what-is-a-trading-account',
    },
  },
  {
    id: 17725,
    name: 'what-is-a-trading-account',
    title: 'What is a trading account?',
    meta: null,
    category_id: 1145,
    category_name: 'account-types',
    category_title: 'Account types',
    category_url_alias: 'account-types',
    bundle_id: 3715,
    url_alias: 'what-is-a-trading-account',
    atoms: [
      {
        id: 243693,
        type: 'paragraph',
        value: {
          text: "It's an account you use for trading or holding a certain currency. \n",
        },
      },
      {
        id: 243694,
        type: 'paragraph',
        value: {
          text: "\nYou can link multiple trading accounts in different currencies to your Trader's ID. See the list of available currencies to choose the one you need.",
        },
      },
    ],
    next_playlist: {
      id: 17735,
      bundle_id: 3715,
      name: 'how-to-choose-a-currency',
      title: 'How to Choose a Currency',
      url_alias: 'how-to-choose-a-currency',
    },
  },
  {
    id: 17735,
    name: 'how-to-choose-a-currency',
    title: 'How to Choose a Currency',
    meta: null,
    category_id: 1145,
    category_name: 'account-types',
    category_title: 'Account types',
    category_url_alias: 'account-types',
    bundle_id: 3715,
    url_alias: 'how-to-choose-a-currency',
    atoms: [
      {
        id: 243695,
        type: 'paragraph',
        value: {
          text: 'When you register on the platform, you automatically get trading accounts in several popular currencies.\n',
        },
      },
      {
        id: 243696,
        type: 'paragraph',
        value: {
          text: 'Also, you can create additional accounts in the currencies of your choice.',
        },
      },
    ],
    next_playlist: {
      id: 17745,
      bundle_id: 3715,
      name: 'change-the-currency1',
      title: 'Can I change the currency of a trading account?',
      url_alias: 'can-i-change-the-currency-of-a-trading-account',
    },
  },
  {
    id: 17745,
    name: 'change-the-currency1',
    title: 'Can I change the currency of a trading account?',
    meta: null,
    category_id: 1145,
    category_name: 'account-types',
    category_title: 'Account types',
    category_url_alias: 'account-types',
    bundle_id: 3715,
    url_alias: 'can-i-change-the-currency-of-a-trading-account',
    atoms: [
      {
        id: 243697,
        type: 'paragraph',
        value: {
          text: "You cannot change your account's currency. Instead, you have two options:\n",
        },
      },
      {
        id: 243698,
        type: 'paragraph',
        value: {
          text: '\n1. To add a new account in the currency of your choice and archive the old one.',
        },
      },
      {
        id: 243699,
        type: 'paragraph',
        value: {
          text: '2. To create another account (see Multi-currency accounts for details).',
        },
      },
      {
        id: 243700,
        type: 'paragraph',
        value: {
          text: 'Please note that: \n',
        },
      },
      {
        id: 243701,
        type: 'paragraph',
        value: {
          text: '\nIf you have only one trading account, you cannot archive it before adding a new one. You need to keep at least one trading account active at all times.',
        },
      },
      {
        id: 243702,
        type: 'paragraph',
        value: {
          text: '\nIf an archived account receives funds, it becomes active automatically. It may happen if you send money to one of your accounts and then archive it before the money arrives.',
        },
      },
      {
        id: 244115,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/addaccot.11da6b28713237d426dc0b6b2439da6f.png',
            width: 1424,
            height: 1150,
          },
        },
      },
    ],
    next_playlist: {
      id: 17755,
      bundle_id: 3715,
      name: 'how-to-deposit-traders-account',
      title: 'How to deposit funds to your trading account',
      url_alias: 'how-to-deposit-funds-to-your-trading-account',
    },
  },
  {
    id: 17755,
    name: 'how-to-deposit-traders-account',
    title: 'How to deposit funds to your trading account',
    meta: null,
    category_id: 1145,
    category_name: 'account-types',
    category_title: 'Account types',
    category_url_alias: 'account-types',
    bundle_id: 3715,
    url_alias: 'how-to-deposit-funds-to-your-trading-account',
    atoms: [
      {
        id: 243703,
        type: 'paragraph',
        value: {
          text: 'To fund your account:\n\n',
        },
      },
      {
        id: 243704,
        type: 'paragraph',
        value: {
          text: '\n1. Choose the account you want to fund from the list.',
        },
      },
      {
        id: 243705,
        type: 'paragraph',
        value: {
          text: '2. Click Payments → Deposit.',
        },
      },
      {
        id: 243706,
        type: 'paragraph',
        value: {
          text: '3. Enter the deposit amount.',
        },
      },
      {
        id: 243707,
        type: 'paragraph',
        value: {
          text: '4. Choose one of the available payment methods from the drop-down list.',
        },
      },
      {
        id: 243708,
        type: 'paragraph',
        value: {
          text: '5. Complete the process following the system instructions.',
        },
      },
      {
        id: 244185,
        type: 'video',
        value: {
          url: 'https://www.youtube.com/embed/If__hW2wYhE',
        },
      },
    ],
    next_playlist: {
      id: 17765,
      bundle_id: 3715,
      name: 'withdraw-funds-traders-account',
      title: 'How to withdraw funds from an account?',
      url_alias: 'how-to-withdraw-funds-from-an-account',
    },
  },
  {
    id: 17765,
    name: 'withdraw-funds-traders-account',
    title: 'How to withdraw funds from an account?',
    meta: null,
    category_id: 1145,
    category_name: 'account-types',
    category_title: 'Account types',
    category_url_alias: 'account-types',
    bundle_id: 3715,
    url_alias: 'how-to-withdraw-funds-from-an-account',
    atoms: [
      {
        id: 243709,
        type: 'paragraph',
        value: {
          text: 'To withdraw funds:\n\n',
        },
      },
      {
        id: 243710,
        type: 'paragraph',
        value: {
          text: '1. Choose the account for withdrawal.',
        },
      },
      {
        id: 243711,
        type: 'paragraph',
        value: {
          text: '2. Click Payments → Withdraw.',
        },
      },
      {
        id: 243712,
        type: 'paragraph',
        value: {
          text: '3. Enter the amount you want to withdraw.',
        },
      },
      {
        id: 243713,
        type: 'paragraph',
        value: {
          text: '\n4. Complete the process following the system instructions. Note that you can only withdraw funds through the same payment method you used to deposit them. ',
        },
      },
      {
        id: 246765,
        type: 'paragraph',
        value: {
          text: 'Desktop',
        },
      },
      {
        id: 246745,
        type: 'video',
        value: {
          url: 'https://youtube.com/embed/c0iP1xlyG88',
        },
      },
      {
        id: 246775,
        type: 'paragraph',
        value: {
          text: 'Mobile device',
        },
      },
      {
        id: 246755,
        type: 'video',
        value: {
          url: 'https://youtube.com/embed/CDNMsCyxigM',
        },
      },
    ],
    next_playlist: {
      id: 14125,
      bundle_id: 1615,
      name: 'what-is-a-usdt-account',
      title: 'What Is a USDT Account?',
      url_alias: 'what-is-a-usdt-account',
    },
  },
  {
    id: 14125,
    name: 'what-is-a-usdt-account',
    title: 'What Is a USDT Account?',
    meta: null,
    category_id: 1145,
    category_name: 'account-types',
    category_title: 'Account types',
    category_url_alias: 'account-types',
    bundle_id: 1615,
    url_alias: 'what-is-a-usdt-account',
    atoms: [
      {
        id: 243062,
        type: 'paragraph',
        value: {
          text: 'A USDT account is a type of currency account on Olymptrade. It allows you to make deposits and withdrawals using USDT cryptocurrency.\n\n',
        },
      },
      {
        id: 244145,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/usdtaccot.3d1153bb6c849c1af100d74b2e7744e2.png',
            width: 1424,
            height: 1296,
          },
        },
      },
    ],
    next_playlist: {
      id: 14135,
      bundle_id: 1615,
      name: 'what-is-cryptocurrency',
      title: 'What Is Cryptocurrency?',
      url_alias: 'what-is-cryptocurrency',
    },
  },
  {
    id: 14135,
    name: 'what-is-cryptocurrency',
    title: 'What Is Cryptocurrency?',
    meta: null,
    category_id: 1145,
    category_name: 'account-types',
    category_title: 'Account types',
    category_url_alias: 'account-types',
    bundle_id: 1615,
    url_alias: 'what-is-cryptocurrency',
    atoms: [
      {
        id: 243063,
        type: 'paragraph',
        value: {
          text: 'It’s a cryptographically-secured asset issued by a decentralized blockchain network. Crypto transactions are fast, private, cost-effective, borderless, and secure.\n\n',
        },
      },
      {
        id: 243064,
        type: 'paragraph',
        value: {
          text: 'Unlike fiat money, crypto assets are not regulated or backed by any central authority like a government. The value of a cryptocurrency depends on its native blockchain, use cases, public acceptance, institutional interest, and other factors that affect supply and demand.',
        },
      },
      {
        id: 243065,
        type: 'paragraph',
        value: {
          text: 'As a result, most cryptos are highly volatile, meaning their price may change rapidly and often unpredictably. However, this behavior does not apply to stablecoins including Tether (USDT).',
        },
      },
    ],
    next_playlist: {
      id: 14145,
      bundle_id: 1615,
      name: 'what-are-stablecoins',
      title: 'What Are Stablecoins?',
      url_alias: 'what-are-stablecoins',
    },
  },
  {
    id: 14145,
    name: 'what-are-stablecoins',
    title: 'What Are Stablecoins?',
    meta: null,
    category_id: 1145,
    category_name: 'account-types',
    category_title: 'Account types',
    category_url_alias: 'account-types',
    bundle_id: 1615,
    url_alias: 'what-are-stablecoins',
    atoms: [
      {
        id: 243066,
        type: 'paragraph',
        value: {
          text: 'A stablecoin is a special type of cryptocurrency whose value is linked to a fiat currency or commodity. Unlike other cryptos, stablecoins have low volatility, thus combining the best of both worlds.',
        },
      },
      {
        id: 243067,
        type: 'paragraph',
        value: {
          text: '\nUSDT (Tether) has its value pegged to USD at a 1:1 ratio. 1 USDT = 1 USD.',
        },
      },
      {
        id: 243068,
        type: 'paragraph',
        value: {
          text: '\nUSDT is issued on multiple blockchain networks, including Bitcoin and Ethereum. ',
        },
      },
    ],
    next_playlist: {
      id: 14155,
      bundle_id: 1615,
      name: 'usdt-protocols',
      title: 'What USDT Protocols Are Available on Olymptrade?',
      url_alias: 'what-usdt-protocols-are-available-on-olymptrade',
    },
  },
  {
    id: 14155,
    name: 'usdt-protocols',
    title: 'What USDT Protocols Are Available on Olymptrade?',
    meta: null,
    category_id: 1145,
    category_name: 'account-types',
    category_title: 'Account types',
    category_url_alias: 'account-types',
    bundle_id: 1615,
    url_alias: 'what-usdt-protocols-are-available-on-olymptrade',
    atoms: [
      {
        id: 243069,
        type: 'paragraph',
        value: {
          text: 'You can deposit/withdraw USDT (Tether) based on the following 4 protocols:\n',
        },
      },
      {
        id: 243070,
        type: 'paragraph',
        value: {
          text: '•‎ TRC20 (USDT issued on TRON)',
        },
      },
      {
        id: 243071,
        type: 'paragraph',
        value: {
          text: '•‎ ERC20 (USDT issued on Ethereum)',
        },
      },
      {
        id: 243072,
        type: 'paragraph',
        value: {
          text: '•‎ Binance (USDT issued on Binance)',
        },
      },
      {
        id: 243073,
        type: 'paragraph',
        value: {
          text: '•‎ Omni (USDT issued via the Omni Layer of the Bitcoin blockchain)',
        },
      },
      {
        id: 244165,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/protocolot.ade7531345f8fb892be52a40fc6070ff.png',
            width: 1424,
            height: 1296,
          },
        },
      },
    ],
    next_playlist: {
      id: 17535,
      bundle_id: 1615,
      name: 'crypto-exchange',
      title: 'How Do I Make an Account on a Crypto Exchange?',
      url_alias: 'how-do-i-make-an-account-on-a-crypto-exchange',
    },
  },
  {
    id: 17535,
    name: 'crypto-exchange',
    title: 'How Do I Make an Account on a Crypto Exchange?',
    meta: null,
    category_id: 1145,
    category_name: 'account-types',
    category_title: 'Account types',
    category_url_alias: 'account-types',
    bundle_id: 1615,
    url_alias: 'how-do-i-make-an-account-on-a-crypto-exchange',
    atoms: [
      {
        id: 243639,
        type: 'paragraph',
        value: {
          text: 'To deposit and withdraw USDT, create an account on a reliable exchange that supports USDT (TRC20), USDT (ERC20), USDT (Binance), or USDT (Omni). The most popular ones are Binance, Kraken, BitFinex, Coinmama, WazirX. Normally, the process looks like this: \n\n',
        },
      },
      {
        id: 243640,
        type: 'paragraph',
        value: {
          text: '1. Provide your email, create a password, and complete the verification procedure following the system instructions. ',
        },
      },
      {
        id: 243641,
        type: 'paragraph',
        value: {
          text: '2. Download the exchange’s mobile app and log into your account.',
        },
      },
      {
        id: 243642,
        type: 'paragraph',
        value: {
          text: '3. Using the mobile/desktop app, find USDT on the list of available wallets. Enter the USDT wallet and choose the network (e.g., Tron).',
        },
      },
      {
        id: 243643,
        type: 'paragraph',
        value: {
          text: '\n4. Click Deposit to see your USDT wallet’s address that looks like a long string of random characters. You will need it to send money to your wallet.',
        },
      },
      {
        id: 243644,
        type: 'paragraph',
        value: {
          text: '5. Deposit funds using a credit card, a bank transfer, or another payment method available for your country.',
        },
      },
      {
        id: 243645,
        type: 'paragraph',
        value: {
          text: '\nBasically, the process resembles a typical currency exchange. It should be easy if you have some experience with e-payment systems.',
        },
      },
    ],
    next_playlist: {
      id: 18035,
      bundle_id: 1615,
      name: 'crypto-wallet',
      title: 'How Do I Create a Crypto Wallet?',
      url_alias: 'how-do-i-create-a-crypto-wallet',
    },
  },
  {
    id: 18035,
    name: 'crypto-wallet',
    title: 'How Do I Create a Crypto Wallet?',
    meta: null,
    category_id: 1145,
    category_name: 'account-types',
    category_title: 'Account types',
    category_url_alias: 'account-types',
    bundle_id: 1615,
    url_alias: 'how-do-i-create-a-crypto-wallet',
    atoms: [
      {
        id: 243754,
        type: 'paragraph',
        value: {
          text: 'To buy, send, and receive USDT in the simplest way possible, you need a non-custodial crypto wallet like Trust Wallet, Coinbase Wallet, Exodus, or any other crypto wallet of your choice. \n\n',
        },
      },
      {
        id: 243755,
        type: 'paragraph',
        value: {
          text: 'Normally, the process looks like this:',
        },
      },
      {
        id: 243756,
        type: 'paragraph',
        value: {
          text: '1. Download and open the wallet app of your choice.',
        },
      },
      {
        id: 243757,
        type: 'paragraph',
        value: {
          text: '2. Create a new wallet and take all the recommended measures to keep it secure. Back up the recovery phrase that lets you restore access to your funds.\n',
        },
      },
      {
        id: 243758,
        type: 'paragraph',
        value: {
          text: '3. On the main screen, click on Buy and find USDT on the list of available coins. Click on the USDT based on the preferred network (e.g., Tron).',
        },
      },
      {
        id: 243759,
        type: 'paragraph',
        value: {
          text: '\n4. Depending on the purchase amount, your transaction will be processed by a certain third-party provider. You will need to enter your bank card details.',
        },
      },
      {
        id: 243760,
        type: 'paragraph',
        value: {
          text: '5. Confirm the payment. When it’s processed, the balance of your wallet will change.',
        },
      },
      {
        id: 243761,
        type: 'paragraph',
        value: {
          text: 'The process should be easy if you have some experience with e-payment systems. Now, you can deposit USDT to your Olymptrade account.',
        },
      },
    ],
    next_playlist: {
      id: 17545,
      bundle_id: 1615,
      name: 'deposit-funds-usdt',
      title: 'How Do I Deposit Funds to a USDT Account?',
      url_alias: 'how-do-i-deposit-funds-to-a-usdt-account',
    },
  },
  {
    id: 17545,
    name: 'deposit-funds-usdt',
    title: 'How Do I Deposit Funds to a USDT Account?',
    meta: null,
    category_id: 1145,
    category_name: 'account-types',
    category_title: 'Account types',
    category_url_alias: 'account-types',
    bundle_id: 1615,
    url_alias: 'how-do-i-deposit-funds-to-a-usdt-account',
    atoms: [
      {
        id: 243646,
        type: 'paragraph',
        value: {
          text: '1. Go to the Payments → Deposit → Payment Method. Select USDT (TRC20), USDT (ERC20), USDT (Binance), or USDT (Omni) from the list of available protocols. \n',
        },
      },
      {
        id: 243647,
        type: 'paragraph',
        value: {
          text: '2. Specify the amount you want to deposit. Click Confirm to be redirected to the payment system page.',
        },
      },
      {
        id: 243648,
        type: 'paragraph',
        value: {
          text: '\n3. Go to your USDT wallet to send the specified amount to the provided deposit address. Another option is to scan the QR code. The transaction fee charged by your wallet depends on the protocol you use. ',
        },
      },
      {
        id: 243649,
        type: 'paragraph',
        value: {
          text: '\nIMPORTANT: Depositing non-USDT tokens to the provided address will result in your funds being lost.',
        },
      },
      {
        id: 243845,
        type: 'video',
        value: {
          url: 'https://youtube.com/embed/eLKA3w_CQD4',
        },
      },
    ],
    next_playlist: {
      id: 17555,
      bundle_id: 1615,
      name: 'withdraw-usdt',
      title: 'How Do I Withdraw Funds from a USDT Account?',
      url_alias: 'how-do-i-withdraw-funds-from-a-usdt-account',
    },
  },
  {
    id: 17555,
    name: 'withdraw-usdt',
    title: 'How Do I Withdraw Funds from a USDT Account?',
    meta: null,
    category_id: 1145,
    category_name: 'account-types',
    category_title: 'Account types',
    category_url_alias: 'account-types',
    bundle_id: 1615,
    url_alias: 'how-do-i-withdraw-funds-from-a-usdt-account',
    atoms: [
      {
        id: 243650,
        type: 'paragraph',
        value: {
          text: '1. Go to Payments → Withdraw. ',
        },
      },
      {
        id: 243651,
        type: 'paragraph',
        value: {
          text: '\n2. Specify the amount you want to withdraw. Withdrawals are processed by the same system you used for depositing funds. ',
        },
      },
      {
        id: 243652,
        type: 'paragraph',
        value: {
          text: '3. Enter the receiving address generated by your matching USDT wallet. ',
        },
      },
      {
        id: 243653,
        type: 'paragraph',
        value: {
          text: 'The fee Olymptrade will charge you for a withdrawal depends on the protocol you use:',
        },
      },
      {
        id: 243654,
        type: 'paragraph',
        value: {
          text: '•‎ USDT (TRC20) ㅡ 1 USDT',
        },
      },
      {
        id: 243655,
        type: 'paragraph',
        value: {
          text: '•‎ USDT (ERC20) ㅡ 25 USDT',
        },
      },
      {
        id: 243656,
        type: 'paragraph',
        value: {
          text: '•‎ USDT (Binance) ㅡ 1 USDT + 1%',
        },
      },
      {
        id: 243657,
        type: 'paragraph',
        value: {
          text: '•‎ USDT (Omni) ㅡ 10 USDT',
        },
      },
      {
        id: 244175,
        type: 'video',
        value: {
          url: 'https://youtube.com/embed/wl08t63HRJk',
        },
      },
    ],
    next_playlist: {
      id: 17565,
      bundle_id: 1615,
      name: 'transaction-processing-time',
      title: 'How Long Will It Take to Process My USDT Deposit/Withdrawal? ',
      url_alias: 'how-long-will-it-take-to-process-my-usdt-depositwithdrawal-',
    },
  },
  {
    id: 17565,
    name: 'transaction-processing-time',
    title: 'How Long Will It Take to Process My USDT Deposit/Withdrawal? ',
    meta: null,
    category_id: 1145,
    category_name: 'account-types',
    category_title: 'Account types',
    category_url_alias: 'account-types',
    bundle_id: 1615,
    url_alias: 'how-long-will-it-take-to-process-my-usdt-depositwithdrawal-',
    atoms: [
      {
        id: 243658,
        type: 'paragraph',
        value: {
          text: 'Transaction processing time may vary depending on the blockchain load. \nNormally, it takes up to 15 minutes. If your transaction is not processed within 24 hours, please create a task for Support.',
        },
      },
    ],
    next_playlist: {
      id: 14165,
      bundle_id: 1615,
      name: 'minimum-deposit-amount',
      title: 'Minimum Deposit Amount',
      url_alias: 'minimum-deposit-amount',
    },
  },
  {
    id: 14165,
    name: 'minimum-deposit-amount',
    title: 'Minimum Deposit Amount',
    meta: null,
    category_id: 1145,
    category_name: 'account-types',
    category_title: 'Account types',
    category_url_alias: 'account-types',
    bundle_id: 1615,
    url_alias: 'minimum-deposit-amount',
    atoms: [
      {
        id: 243074,
        type: 'paragraph',
        value: {
          text: 'The minimum deposit amount for a USDT account is ₮5.',
        },
      },
    ],
    next_playlist: {
      id: 14175,
      bundle_id: 1615,
      name: 'minimum-withdrawal-amount',
      title: 'Minimum Withdrawal Amount',
      url_alias: 'minimum-withdrawal-amount',
    },
  },
  {
    id: 14175,
    name: 'minimum-withdrawal-amount',
    title: 'Minimum Withdrawal Amount',
    meta: null,
    category_id: 1145,
    category_name: 'account-types',
    category_title: 'Account types',
    category_url_alias: 'account-types',
    bundle_id: 1615,
    url_alias: 'minimum-withdrawal-amount',
    atoms: [
      {
        id: 243075,
        type: 'paragraph',
        value: {
          text: 'The minimum withdrawal amount for a USDT account is ₮5.',
        },
      },
    ],
    next_playlist: {
      id: 14195,
      bundle_id: 1615,
      name: 'maximum-withdrawal-amount',
      title: 'Maximum Withdrawal Amount',
      url_alias: 'maximum-withdrawal-amount',
    },
  },
  {
    id: 14195,
    name: 'maximum-withdrawal-amount',
    title: 'Maximum Withdrawal Amount',
    meta: null,
    category_id: 1145,
    category_name: 'account-types',
    category_title: 'Account types',
    category_url_alias: 'account-types',
    bundle_id: 1615,
    url_alias: 'maximum-withdrawal-amount',
    atoms: [
      {
        id: 243077,
        type: 'paragraph',
        value: {
          text: 'The maximum withdrawal amount for a USDT account is ₮1000 000.',
        },
      },
    ],
    next_playlist: {
      id: 14185,
      bundle_id: 1615,
      name: 'maximum-deposit-amount',
      title: 'Maximum Deposit Amount',
      url_alias: 'maximum-deposit-amount',
    },
  },
  {
    id: 14185,
    name: 'maximum-deposit-amount',
    title: 'Maximum Deposit Amount',
    meta: null,
    category_id: 1145,
    category_name: 'account-types',
    category_title: 'Account types',
    category_url_alias: 'account-types',
    bundle_id: 1615,
    url_alias: 'maximum-deposit-amount',
    atoms: [
      {
        id: 243076,
        type: 'paragraph',
        value: {
          text: 'The maximum deposit amount for a USDT account is ₮1000 000.',
        },
      },
    ],
    next_playlist: {
      id: 5476,
      bundle_id: 282,
      name: 'what-are-multi-accounts',
      title: 'What are multi accounts?',
      url_alias: 'what-are-multi-accounts',
    },
  },
  {
    id: 5476,
    name: 'what-are-multi-accounts',
    title: 'What are multi accounts?',
    meta: null,
    category_id: 1145,
    category_name: 'account-types',
    category_title: 'Account types',
    category_url_alias: 'account-types',
    bundle_id: 282,
    url_alias: 'what-are-multi-accounts',
    atoms: [
      {
        id: 242144,
        type: 'paragraph',
        value: {
          text: "Multi-Accounts is a feature that allows traders to have up to 5 interconnected live accounts on Olymptrade. During the creation of your account, you'll be able to choose among available currencies, like USD, EUR, or some local currencies.",
        },
      },
      {
        id: 242145,
        type: 'paragraph',
        value: {
          text: 'You will have a full control over those accounts, so you are free to decide on how to use them. One could become a place where you keep the profits from your trades, another can be dedicated to a specific mode or strategy. You can also rename these accounts and archive them.',
        },
      },
      {
        id: 242146,
        type: 'paragraph',
        value: {
          text: 'Please note that account in Multi-Accounts are not equal to your Trading Account (Trader ID). You can only have one Trading Account (Trader ID), but up to 5 different live accounts connected to it to store your money.',
        },
      },
      {
        id: 244685,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/multiaccot.106af7f3d23791f8ea577917db14c20b.png',
            width: 1424,
            height: 1533,
          },
        },
      },
    ],
    next_playlist: {
      id: 5840,
      bundle_id: 282,
      name: 'how-to-create-a-trading-account-in-multi-accounts',
      title: 'How to Create a Trading Account in Multi-Accounts',
      url_alias: 'how-to-create-a-trading-account-in-multi-accounts',
    },
  },
  {
    id: 5840,
    name: 'how-to-create-a-trading-account-in-multi-accounts',
    title: 'How to Create a Trading Account in Multi-Accounts',
    meta: null,
    category_id: 1145,
    category_name: 'account-types',
    category_title: 'Account types',
    category_url_alias: 'account-types',
    bundle_id: 282,
    url_alias: 'how-to-create-a-trading-account-in-multi-accounts',
    atoms: [
      {
        id: 242228,
        type: 'paragraph',
        value: {
          text: 'To create another live account, you need to:',
        },
      },
      {
        id: 242229,
        type: 'paragraph',
        value: {
          text: '1. Go to the "Accounts" menu;',
        },
      },
      {
        id: 242230,
        type: 'paragraph',
        value: {
          text: '2. Click on the "+" button;',
        },
      },
      {
        id: 242231,
        type: 'paragraph',
        value: {
          text: '3. Choose the currency;',
        },
      },
      {
        id: 242232,
        type: 'paragraph',
        value: {
          text: "4. Write the new account's name.",
        },
      },
      {
        id: 242233,
        type: 'paragraph',
        value: {
          text: "That's it, you've got a new account.",
        },
      },
      {
        id: 244695,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/newacc.8eea2234f0756d1926f83397ede170a5.png',
            width: 1424,
            height: 1492,
          },
        },
      },
      {
        id: 244705,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/newacc2.6ee7c55964b8325324cd012eb0619c7c.png',
            width: 1424,
            height: 1492,
          },
        },
      },
      {
        id: 244725,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/newacc3.e2583b1aa605f5f7d3c05c88d213a286.png',
            width: 1424,
            height: 1492,
          },
        },
      },
    ],
    next_playlist: {
      id: 5841,
      bundle_id: 282,
      name: 'how-to-sort-and-rename-your-live-accounts',
      title: 'How to Sort and Rename Your Live Accounts',
      url_alias: 'how-to-sort-and-rename-your-live-accounts',
    },
  },
  {
    id: 5841,
    name: 'how-to-sort-and-rename-your-live-accounts',
    title: 'How to Sort and Rename Your Live Accounts',
    meta: null,
    category_id: 1145,
    category_name: 'account-types',
    category_title: 'Account types',
    category_url_alias: 'account-types',
    bundle_id: 282,
    url_alias: 'how-to-sort-and-rename-your-live-accounts',
    atoms: [
      {
        id: 242234,
        type: 'paragraph',
        value: {
          text: 'You can always rename your live account, even after its creation. To do that, you need to go to the "Accounts" menu, click on the button with three dots, and then choose a "Rename\'" option. After that, you can enter any name within the limit of 20 symbols.',
        },
      },
      {
        id: 242235,
        type: 'paragraph',
        value: {
          text: 'Accounts are sorted chronologically in ascending order: the older ones are placed higher on the list than the newly created ones.',
        },
      },
      {
        id: 244755,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/rename.bf7e86bfd360f33a36939d87d2b8b88c.png',
            width: 1424,
            height: 1492,
          },
        },
      },
    ],
    next_playlist: {
      id: 5478,
      bundle_id: 282,
      name: 'how-to-deposit-money-to-your-accounts',
      title: 'How to Deposit Money to Your Accounts',
      url_alias: 'how-to-deposit-money-to-your-accounts',
    },
  },
  {
    id: 5478,
    name: 'how-to-deposit-money-to-your-accounts',
    title: 'How to Deposit Money to Your Accounts',
    meta: null,
    category_id: 1145,
    category_name: 'account-types',
    category_title: 'Account types',
    category_url_alias: 'account-types',
    bundle_id: 282,
    url_alias: 'how-to-deposit-money-to-your-accounts',
    atoms: [
      {
        id: 242149,
        type: 'paragraph',
        value: {
          text: 'To deposit funds, you need to click on the live account that you want to top up (in the "Accounts" menu), pick the "Deposit" option, and then choose the amount and the method of payment.',
        },
      },
      {
        id: 244825,
        type: 'video',
        value: {
          url: 'https://www.youtube.com/embed/If__hW2wYhE',
        },
      },
    ],
    next_playlist: {
      id: 5477,
      bundle_id: 282,
      name: 'how-to-transfer-money-between-accounts',
      title: 'How to Transfer Money between Accounts',
      url_alias: 'how-to-transfer-money-between-accounts',
    },
  },
  {
    id: 5477,
    name: 'how-to-transfer-money-between-accounts',
    title: 'How to Transfer Money between Accounts',
    meta: null,
    category_id: 1145,
    category_name: 'account-types',
    category_title: 'Account types',
    category_url_alias: 'account-types',
    bundle_id: 282,
    url_alias: 'how-to-transfer-money-between-accounts',
    atoms: [
      {
        id: 242147,
        type: 'paragraph',
        value: {
          text: 'As multi-accounts are interconnected, it is possible to transfer funds between them as you please.',
        },
      },
      {
        id: 242148,
        type: 'paragraph',
        value: {
          text: 'To do that, you need to go to the "Transfer" tab in the "Accounts" menu, then choose the sender and the recipient, and fill in the desired amount. All that is left is to click a "Transfer" button.',
        },
      },
      {
        id: 244835,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/transfer.a167a7889965ef0e5ee05451a33b409b.png',
            width: 1424,
            height: 1492,
          },
        },
      },
      {
        id: 244845,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/transfer2.ecbe290ac80ea6b1e0bb3c9c7a3ae3c2.png',
            width: 1424,
            height: 1492,
          },
        },
      },
    ],
    next_playlist: {
      id: 5479,
      bundle_id: 282,
      name: 'how-to-withdraw-money-from-your-accounts',
      title: 'How to Withdraw Money from Your Accounts',
      url_alias: 'how-to-withdraw-money-from-your-accounts',
    },
  },
  {
    id: 5479,
    name: 'how-to-withdraw-money-from-your-accounts',
    title: 'How to Withdraw Money from Your Accounts',
    meta: null,
    category_id: 1145,
    category_name: 'account-types',
    category_title: 'Account types',
    category_url_alias: 'account-types',
    bundle_id: 282,
    url_alias: 'how-to-withdraw-money-from-your-accounts',
    atoms: [
      {
        id: 242150,
        type: 'paragraph',
        value: {
          text: 'Withdrawal is just as easy to accomplish as depositing. You need to go to the "Accounts" menu, choose the one you wish to withdraw from, and then fill in the desired amount. Money will be transferred to your bank card or e-wallet within days.',
        },
      },
    ],
    next_playlist: {
      id: 5842,
      bundle_id: 282,
      name: 'how-to-archive-your-account',
      title: 'How to Archive Your Account',
      url_alias: 'how-to-archive-your-account',
    },
  },
  {
    id: 5842,
    name: 'how-to-archive-your-account',
    title: 'How to Archive Your Account',
    meta: null,
    category_id: 1145,
    category_name: 'account-types',
    category_title: 'Account types',
    category_url_alias: 'account-types',
    bundle_id: 282,
    url_alias: 'how-to-archive-your-account',
    atoms: [
      {
        id: 242236,
        type: 'paragraph',
        value: {
          text: 'If you wish to archive one of your live accounts, please ensure that it satisfies the following criteria:',
        },
      },
      {
        id: 242237,
        type: 'paragraph',
        value: {
          text: '• It contains no funds.',
        },
      },
      {
        id: 242238,
        type: 'paragraph',
        value: {
          text: '• There are no open trades with money on this account.',
        },
      },
      {
        id: 242239,
        type: 'paragraph',
        value: {
          text: '• It is not the last live account.',
        },
      },
      {
        id: 242240,
        type: 'paragraph',
        value: {
          text: 'If everything is in order, you will be able to archive it.',
        },
      },
      {
        id: 242241,
        type: 'paragraph',
        value: {
          text: "You still the ability to look through that account's history even after archivation, as the trade history and financial history are available via the user's Profile.",
        },
      },
      {
        id: 242242,
        type: 'paragraph',
        value: {
          text: 'Please note that an account cannot be recovered once archived. ',
        },
      },
    ],
    next_playlist: null,
  },
  {
    id: 23125,
    name: 'deposit-methods',
    title: 'Deposit methods',
    meta: null,
    category_id: 23,
    category_name: 'payment',
    category_title: 'Deposits',
    category_url_alias: 'deposits',
    bundle_id: 130,
    url_alias: 'deposit-methods',
    atoms: [
      {
        id: 264165,
        type: 'paragraph',
        value: {
          text: 'On Olymptrade, you can deposit funds using a bank card, cryptocurrency or e-payment system.',
        },
      },
      {
        id: 264175,
        type: 'paragraph',
        value: {
          text: 'The payment methods available are based on their popularity in your region so you get easy and secure transactions.',
        },
      },
    ],
    next_playlist: {
      id: 23135,
      bundle_id: 130,
      name: 'how-to-deposit-with-a-bank-card',
      title: 'How to deposit with a bank card',
      url_alias: 'how-to-deposit-with-a-bank-card',
    },
  },
  {
    id: 23135,
    name: 'how-to-deposit-with-a-bank-card',
    title: 'How to deposit with a bank card',
    meta: null,
    category_id: 23,
    category_name: 'payment',
    category_title: 'Deposits',
    category_url_alias: 'deposits',
    bundle_id: 130,
    url_alias: 'how-to-deposit-with-a-bank-card',
    atoms: [
      {
        id: 264185,
        type: 'paragraph',
        value: {
          text: '1. Press the Payments button and select Deposit.',
        },
      },
      {
        id: 264195,
        type: 'paragraph',
        value: {
          text: '2. Enter the deposit amount, choose Bank cards as your payment method and press Next.',
        },
      },
      {
        id: 264205,
        type: 'paragraph',
        value: {
          text: '3. Press Confirm to proceed.',
        },
      },
      {
        id: 264215,
        type: 'paragraph',
        value: {
          text: '4. Enter your bank card details and press Pay USD XX. You can save these details for future deposits.',
        },
      },
      {
        id: 264225,
        type: 'paragraph',
        value: {
          text: 'Once the funds reach your Olymptrade account, your balance will be updated.',
        },
      },
      {
        id: 264235,
        type: 'paragraph',
        value: {
          text: 'Your payment details are always secure and cannot be accessed by third parties.',
        },
      },
      {
        id: 264245,
        type: 'video',
        value: {
          url: 'https://youtube.com/embed/8GQnmmxe-_s',
        },
      },
    ],
    next_playlist: {
      id: 23145,
      bundle_id: 130,
      name: 'how-to-deposit-with-crypto',
      title: 'How to deposit with crypto',
      url_alias: 'how-to-deposit-with-crypto',
    },
  },
  {
    id: 23145,
    name: 'how-to-deposit-with-crypto',
    title: 'How to deposit with crypto',
    meta: null,
    category_id: 23,
    category_name: 'payment',
    category_title: 'Deposits',
    category_url_alias: 'deposits',
    bundle_id: 130,
    url_alias: 'how-to-deposit-with-crypto',
    atoms: [
      {
        id: 264255,
        type: 'paragraph',
        value: {
          text: 'Crypto deposits offer a fast and secure way to fund your Olymptrade account. Below is a step-by-step guide for depositing in USDT, but you can also use other popular coins like BTC, ETH and SOL.',
        },
      },
      {
        id: 264265,
        type: 'paragraph',
        value: {
          text: 'If you’re new to crypto, scroll down for info on setting up a wallet, buying cryptocurrency and other pre-deposit steps.',
        },
      },
      {
        id: 264275,
        type: 'paragraph',
        value: {
          text: 'How to deposit with USDT',
        },
      },
      {
        id: 264285,
        type: 'paragraph',
        value: {
          text: '1. Go to Payments → Deposit → Payment Method.',
        },
      },
      {
        id: 264295,
        type: 'paragraph',
        value: {
          text: '2. Select USDT and choose your preferred network protocol (TRC20, ERC20, or BSC BEP20).',
        },
      },
      {
        id: 264305,
        type: 'paragraph',
        value: {
          text: '3. Enter the amount of USDT you want to deposit, then press Confirm to proceed.',
        },
      },
      {
        id: 264315,
        type: 'paragraph',
        value: {
          text: '4. Press Show me the address to display a unique QR code and wallet address.',
        },
      },
      {
        id: 264325,
        type: 'paragraph',
        value: {
          text: '5. Open your USDT wallet, select Send, and either scan the QR code or paste the wallet address to send the funds. Ensure you’re using the correct network protocol to avoid errors.',
        },
      },
      {
        id: 264335,
        type: 'paragraph',
        value: {
          text: '6. Once the transfer is confirmed on the blockchain, your Olymptrade balance will be updated.',
        },
      },
      {
        id: 264345,
        type: 'paragraph',
        value: {
          text: 'Important:',
        },
      },
      {
        id: 264355,
        type: 'paragraph',
        value: {
          text: '• Only use USDT on supported network protocols. Depositing non-USDT tokens to the provided address could result in losing your funds.',
        },
      },
      {
        id: 264365,
        type: 'paragraph',
        value: {
          text: '• Pay attention to network fees. Network fees vary by protocol. For instance, TRC20 tends to have lower fees than ERC20.',
        },
      },
      {
        id: 264375,
        type: 'paragraph',
        value: {
          text: '• You can use cryptocurrency to fund both USDT and USD accounts.',
        },
      },
      {
        id: 264385,
        type: 'paragraph',
        value: {
          text: '• Send the entire deposit amount in one transaction to avoid errors or partial losses.',
        },
      },
      {
        id: 264395,
        type: 'paragraph',
        value: {
          text: 'Setting up a crypto wallet and buying USDT',
        },
      },
      {
        id: 264405,
        type: 'paragraph',
        value: {
          text: 'New to crypto? Follow these steps to get a secure wallet for your digital assets:',
        },
      },
      {
        id: 264415,
        type: 'paragraph',
        value: {
          text: '1. Download a reliable wallet app like Trust Wallet, Coinbase Wallet or Exodus from their official websites or app store pages.',
        },
      },
      {
        id: 264425,
        type: 'paragraph',
        value: {
          text: '2. Follow the prompts to create a new wallet, set a strong password and save the recovery phrase — a unique set of words you’ll need if you lose access to your wallet.',
        },
      },
      {
        id: 264435,
        type: 'paragraph',
        value: {
          text: '3. Create an account on a trusted exchange like Binance, Kraken or Coinbase. Complete the registration and verification process, which usually requires your personal information and ID verification.',
        },
      },
      {
        id: 264445,
        type: 'paragraph',
        value: {
          text: '4. In the Buy or Trade section of the exchange, purchase USDT using one of the available payment methods.',
        },
      },
      {
        id: 264455,
        type: 'paragraph',
        value: {
          text: '5. Open your crypto wallet, find the Receive option for USDT to get your wallet address. Copy this address, return to the exchange, and select Withdraw or Send to transfer USDT to your wallet.',
        },
      },
      {
        id: 264465,
        type: 'paragraph',
        value: {
          text: 'Here’s a tip',
        },
      },
      {
        id: 264475,
        type: 'paragraph',
        value: {
          text: 'With Trust Wallet, you can buy USDT directly using a credit or debit card via integrated services — no need to go through a centralized exchange.',
        },
      },
      {
        id: 264485,
        type: 'paragraph',
        value: {
          text: 'For more details, check out our Account types → USDT Account section.',
        },
      },
    ],
    next_playlist: {
      id: 23155,
      bundle_id: 130,
      name: 'how-to-deposit-with-an-e-payment-system',
      title: 'How to deposit with an e-payment system ',
      url_alias: 'how-to-deposit-with-an-e-payment-system-',
    },
  },
  {
    id: 23155,
    name: 'how-to-deposit-with-an-e-payment-system',
    title: 'How to deposit with an e-payment system ',
    meta: null,
    category_id: 23,
    category_name: 'payment',
    category_title: 'Deposits',
    category_url_alias: 'deposits',
    bundle_id: 130,
    url_alias: 'how-to-deposit-with-an-e-payment-system-',
    atoms: [
      {
        id: 264495,
        type: 'paragraph',
        value: {
          text: '1. Press the Payments button and select Deposit.',
        },
      },
      {
        id: 264505,
        type: 'paragraph',
        value: {
          text: '2. Specify a deposit amount, choose your preferred e-payment system and press Next.',
        },
      },
      {
        id: 264515,
        type: 'paragraph',
        value: {
          text: '3. Press Confirm to proceed.',
        },
      },
      {
        id: 264525,
        type: 'paragraph',
        value: {
          text: '4. Enter the required details, then complete the remaining steps on the e-payment system’s page. These steps may differ between payment systems, but the overall process is the same.',
        },
      },
      {
        id: 264535,
        type: 'paragraph',
        value: {
          text: '5. Once the funds reach your Olymptrade account, your balance will be updated.',
        },
      },
    ],
    next_playlist: {
      id: 23195,
      bundle_id: 130,
      name: 'deposit-times',
      title: 'Deposit times',
      url_alias: 'deposit-times',
    },
  },
  {
    id: 23195,
    name: 'deposit-times',
    title: 'Deposit times',
    meta: null,
    category_id: 23,
    category_name: 'payment',
    category_title: 'Deposits',
    category_url_alias: 'deposits',
    bundle_id: 130,
    url_alias: 'deposit-times',
    atoms: [
      {
        id: 264665,
        type: 'paragraph',
        value: {
          text: 'Funds typically arrive in Olymptrade accounts almost instantly.',
        },
      },
      {
        id: 264675,
        type: 'paragraph',
        value: {
          text: 'If your deposit hasn’t arrived immediately to your account, please wait for about an hour and keep checking periodically afterwards. If the issue persists, contact our Support team.',
        },
      },
    ],
    next_playlist: {
      id: 954,
      bundle_id: 171,
      name: 'brokerage-fees',
      title: 'Brokerage fees',
      url_alias: 'brokerage-fees',
    },
  },
  {
    id: 954,
    name: 'brokerage-fees',
    title: 'Brokerage fees',
    meta: null,
    category_id: 23,
    category_name: 'payment',
    category_title: 'Deposits',
    category_url_alias: 'deposits',
    bundle_id: 171,
    url_alias: 'brokerage-fees',
    atoms: [
      {
        id: 241530,
        type: 'paragraph',
        value: {
          text: 'If you haven’t made any trades on your live account and/or haven’t deposited or withdrawn funds within 180 days, a $10 inactivity fee (or equivalent in the account currency) will be charged monthly. This is outlined in our Non-Trading Regulations and KYC/AML Policy.',
        },
      },
      {
        id: 241531,
        type: 'paragraph',
        value: {
          text: 'If your account balance is lower than the inactivity fee, only the available balance will be charged. ',
        },
      },
      {
        id: 241532,
        type: 'paragraph',
        value: {
          text: 'No fee will be charged to accounts with a balance of zero, so your account will not accumulate debt.',
        },
      },
      {
        id: 241533,
        type: 'paragraph',
        value: {
          text: 'You can view your inactivity fee history in the Transactions section of your account.',
        },
      },
    ],
    next_playlist: {
      id: 955,
      bundle_id: 171,
      name: 'deposit-fee',
      title: 'Deposit fee',
      url_alias: 'deposit-fee',
    },
  },
  {
    id: 955,
    name: 'deposit-fee',
    title: 'Deposit fee',
    meta: null,
    category_id: 23,
    category_name: 'payment',
    category_title: 'Deposits',
    category_url_alias: 'deposits',
    bundle_id: 171,
    url_alias: 'deposit-fee',
    atoms: [
      {
        id: 241534,
        type: 'paragraph',
        value: {
          text: 'Olymptrade covers all deposit fees, so you can fund your account without any extra costs from our end.',
        },
      },
      {
        id: 264715,
        type: 'paragraph',
        value: {
          text: 'However, certain payment providers or wallets, like cryptocurrency wallets, may charge their own fees. We recommend checking these fees with your provider to avoid unexpected charges.',
        },
      },
    ],
    next_playlist: null,
  },
  {
    id: 635,
    name: 'how-do-i-withdraw-funds',
    title: 'Withdrawal methods',
    meta: null,
    category_id: 30,
    category_name: 'payouts',
    category_title: 'Withdrawals',
    category_url_alias: 'withdrawals',
    bundle_id: 187,
    url_alias: 'withdrawal-methods',
    atoms: [
      {
        id: 241021,
        type: 'paragraph',
        value: {
          text: 'On Olymptrade, you can withdraw funds using the same payment method you used to deposit them.',
        },
      },
      {
        id: 241022,
        type: 'paragraph',
        value: {
          text: 'Our platform supports a range of secure options to withdraw your funds through crypto, bank cards or popular e-payment systems.',
        },
      },
      {
        id: 241023,
        type: 'paragraph',
        value: {
          text: 'If you made a deposit using more than one payment method, the amount you can withdraw will be proportional to the amount deposited with each method.',
        },
      },
      {
        id: 241024,
        type: 'paragraph',
        value: {
          text: 'Example:',
        },
      },
      {
        id: 241025,
        type: 'paragraph',
        value: {
          text: 'You deposited $40 with a bank card and $100 using an e-wallet. After earning $160 in profit, your total balance is now $300.',
        },
      },
      {
        id: 264725,
        type: 'paragraph',
        value: {
          text: "Here's how you can withdraw your funds:",
        },
      },
      {
        id: 264735,
        type: 'paragraph',
        value: {
          text: '• $40 goes back to your bank card.',
        },
      },
      {
        id: 265335,
        type: 'paragraph',
        value: {
          text: '• $100 returns to your e-wallet.',
        },
      },
      {
        id: 265345,
        type: 'paragraph',
        value: {
          text: '• $160 profit can be withdrawn using either of these methods.',
        },
      },
    ],
    next_playlist: {
      id: 638,
      bundle_id: 187,
      name: 'how-to-withdraw-to-a-bank-card',
      title: 'How to withdraw to a bank card',
      url_alias: 'how-to-withdraw-to-a-bank-card',
    },
  },
  {
    id: 638,
    name: 'how-to-withdraw-to-a-bank-card',
    title: 'How to withdraw to a bank card',
    meta: null,
    category_id: 30,
    category_name: 'payouts',
    category_title: 'Withdrawals',
    category_url_alias: 'withdrawals',
    bundle_id: 187,
    url_alias: 'how-to-withdraw-to-a-bank-card',
    atoms: [
      {
        id: 241033,
        type: 'paragraph',
        value: {
          text: '1. Go to Payments → Withdraw.',
        },
      },
      {
        id: 241034,
        type: 'paragraph',
        value: {
          text: '2. Choose a bank card as your payment method.',
        },
      },
      {
        id: 264745,
        type: 'paragraph',
        value: {
          text: '3. Enter the required details.',
        },
      },
      {
        id: 264755,
        type: 'paragraph',
        value: {
          text: "4. Indicate an amount of $10 or more that you'd like to withdraw.",
        },
      },
      {
        id: 264765,
        type: 'paragraph',
        value: {
          text: '5. Wait for your request to be processed.',
        },
      },
      {
        id: 264775,
        type: 'video',
        value: {
          url: 'https://www.youtube.com/embed/oOI1dZH5fOo',
        },
      },
    ],
    next_playlist: {
      id: 932,
      bundle_id: 187,
      name: 'how-to-withdraw-in-crypto',
      title: 'How to withdraw in crypto',
      url_alias: 'how-to-withdraw-in-crypto',
    },
  },
  {
    id: 932,
    name: 'how-to-withdraw-in-crypto',
    title: 'How to withdraw in crypto',
    meta: null,
    category_id: 30,
    category_name: 'payouts',
    category_title: 'Withdrawals',
    category_url_alias: 'withdrawals',
    bundle_id: 187,
    url_alias: 'how-to-withdraw-in-crypto',
    atoms: [
      {
        id: 241516,
        type: 'paragraph',
        value: {
          text: 'To withdraw funds in crypto, you’ll need a valid USDT wallet address that matches the protocol you used when depositing funds.',
        },
      },
      {
        id: 241517,
        type: 'paragraph',
        value: {
          text: '1. Go to Payments → Withdraw.',
        },
      },
      {
        id: 264785,
        type: 'paragraph',
        value: {
          text: '2. Choose USDT as your withdrawal method and enter your USDT wallet address.',
        },
      },
      {
        id: 264795,
        type: 'paragraph',
        value: {
          text: '3. Enter the amount you want to withdraw. The withdrawal fee depends on the protocol used. ',
        },
      },
      {
        id: 264805,
        type: 'paragraph',
        value: {
          text: '4. Press Withdraw to submit your request. ',
        },
      },
      {
        id: 264815,
        type: 'paragraph',
        value: {
          text: 'Withdrawals are usually processed within an hour, though this may vary depending on blockchain traffic.',
        },
      },
      {
        id: 264825,
        type: 'paragraph',
        value: {
          text: 'Withdrawal limits:',
        },
      },
      {
        id: 264835,
        type: 'paragraph',
        value: {
          text: 'Min: ₮5',
        },
      },
      {
        id: 264845,
        type: 'paragraph',
        value: {
          text: 'Max: ₮1,000,000',
        },
      },
    ],
    next_playlist: {
      id: 938,
      bundle_id: 187,
      name: 'how-to-withdraw-to-an-e-payment-system',
      title: 'How to withdraw to an e-payment system',
      url_alias: 'how-to-withdraw-to-an-e-payment-system',
    },
  },
  {
    id: 938,
    name: 'how-to-withdraw-to-an-e-payment-system',
    title: 'How to withdraw to an e-payment system',
    meta: null,
    category_id: 30,
    category_name: 'payouts',
    category_title: 'Withdrawals',
    category_url_alias: 'withdrawals',
    bundle_id: 187,
    url_alias: 'how-to-withdraw-to-an-e-payment-system',
    atoms: [
      {
        id: 241524,
        type: 'paragraph',
        value: {
          text: '1. Go to Payments → Withdraw.',
        },
      },
      {
        id: 264855,
        type: 'paragraph',
        value: {
          text: '2. Select your preferred e-payment system as a payment method.',
        },
      },
      {
        id: 264865,
        type: 'paragraph',
        value: {
          text: '3. Enter the amount you want to withdraw.',
        },
      },
      {
        id: 264875,
        type: 'paragraph',
        value: {
          text: '4. Fill in the required e-payment account details.',
        },
      },
      {
        id: 264885,
        type: 'paragraph',
        value: {
          text: '5. Press Withdraw to submit your request.',
        },
      },
      {
        id: 264895,
        type: 'paragraph',
        value: {
          text: 'Withdrawals using an e-payment system are usually processed within 24 hours. ',
        },
      },
      {
        id: 264905,
        type: 'paragraph',
        value: {
          text: "You can check the current status of your withdrawal request in the Transactions → Withdraw section. We'll notify you by email as soon as the status of your request changes.",
        },
      },
    ],
    next_playlist: {
      id: 23225,
      bundle_id: 187,
      name: 'required-documents-for-withdrawals',
      title: 'Required documents for withdrawals',
      url_alias: 'required-documents-for-withdrawals',
    },
  },
  {
    id: 23225,
    name: 'required-documents-for-withdrawals',
    title: 'Required documents for withdrawals',
    meta: null,
    category_id: 30,
    category_name: 'payouts',
    category_title: 'Withdrawals',
    category_url_alias: 'withdrawals',
    bundle_id: 187,
    url_alias: 'required-documents-for-withdrawals',
    atoms: [
      {
        id: 264915,
        type: 'paragraph',
        value: {
          text: "On Olymptrade, you don't need to provide any documents in advance.",
        },
      },
      {
        id: 264925,
        type: 'paragraph',
        value: {
          text: 'In some cases, we might request documents to verify your account before processing a withdrawal request. Verification ensures the security of your funds and safeguards your account against unauthorized access. For more information about this important procedure, check out the Verification section.',
        },
      },
      {
        id: 264935,
        type: 'paragraph',
        value: {
          text: "If you need to pass verification, you'll receive an email with instructions on how to upload the necessary documents.",
        },
      },
    ],
    next_playlist: {
      id: 23245,
      bundle_id: 5365,
      name: 'minimum-and-maximum-withdrawal-limits',
      title: 'Minimum and maximum withdrawal limits',
      url_alias: 'minimum-and-maximum-withdrawal-limits',
    },
  },
  {
    id: 23245,
    name: 'minimum-and-maximum-withdrawal-limits',
    title: 'Minimum and maximum withdrawal limits',
    meta: null,
    category_id: 30,
    category_name: 'payouts',
    category_title: 'Withdrawals',
    category_url_alias: 'withdrawals',
    bundle_id: 5365,
    url_alias: 'minimum-and-maximum-withdrawal-limits',
    atoms: [
      {
        id: 264945,
        type: 'paragraph',
        value: {
          text: 'Minimum withdrawal amounts',
        },
      },
      {
        id: 264955,
        type: 'paragraph',
        value: {
          text: 'The minimum withdrawal amount per transaction is generally $10 or its equivalent in other currencies. However, this amount can vary depending on the payment method used. For more details, see the Payment methods section.',
        },
      },
      {
        id: 264965,
        type: 'paragraph',
        value: {
          text: 'Maximum withdrawal amounts',
        },
      },
      {
        id: 264975,
        type: 'paragraph',
        value: {
          text: 'Olymptrade does not have maximum withdrawal limits. You can withdraw any amount based on your available balance. ',
        },
      },
      {
        id: 264985,
        type: 'paragraph',
        value: {
          text: 'However, banks may enforce their own limits on transfer amounts. Sometimes, if a bank rejects a transfer due to internal restrictions, the remaining amount may be withdrawn to an e-wallet.',
        },
      },
      {
        id: 264995,
        type: 'paragraph',
        value: {
          text: 'We recommend checking with your bank if they have any limits that could affect your withdrawal.',
        },
      },
      {
        id: 265005,
        type: 'paragraph',
        value: {
          text: 'Important:',
        },
      },
      {
        id: 265015,
        type: 'paragraph',
        value: {
          text: 'Only one withdrawal request can be processed at a time. Once your current request is completed, you can submit a new one.',
        },
      },
    ],
    next_playlist: {
      id: 23265,
      bundle_id: 5365,
      name: 'withdrawal-fee',
      title: 'Withdrawal fees',
      url_alias: 'withdrawal-fees',
    },
  },
  {
    id: 23265,
    name: 'withdrawal-fee',
    title: 'Withdrawal fees',
    meta: null,
    category_id: 30,
    category_name: 'payouts',
    category_title: 'Withdrawals',
    category_url_alias: 'withdrawals',
    bundle_id: 5365,
    url_alias: 'withdrawal-fees',
    atoms: [
      {
        id: 265025,
        type: 'paragraph',
        value: {
          text: 'Olymptrade generally does not charge withdrawal fees, except in the following cases:',
        },
      },
      {
        id: 265035,
        type: 'paragraph',
        value: {
          text: 'USDT accounts',
        },
      },
      {
        id: 265045,
        type: 'paragraph',
        value: {
          text: 'All USDT withdrawals are subject to commission.',
        },
      },
      {
        id: 265055,
        type: 'paragraph',
        value: {
          text: 'Cryptocurrency withdrawals',
        },
      },
      {
        id: 265065,
        type: 'paragraph',
        value: {
          text: 'A fee is applied when withdrawing funds into cryptocurrency.',
        },
      },
      {
        id: 265075,
        type: 'paragraph',
        value: {
          text: 'Non-trading activity',
        },
      },
      {
        id: 265085,
        type: 'paragraph',
        value: {
          text: 'Users who deposit and withdraw funds without trading and/or use duplicate accounts may be subject to commissions per the Non-Trading Transactions Regulation and KYC/AML Policy.',
        },
      },
    ],
    next_playlist: {
      id: 636,
      bundle_id: 188,
      name: 'how-long-do-withdrawal-requests-take',
      title: 'Withdrawal time frame',
      url_alias: 'withdrawal-time-frame',
    },
  },
  {
    id: 636,
    name: 'how-long-do-withdrawal-requests-take',
    title: 'Withdrawal time frame',
    meta: null,
    category_id: 30,
    category_name: 'payouts',
    category_title: 'Withdrawals',
    category_url_alias: 'withdrawals',
    bundle_id: 188,
    url_alias: 'withdrawal-time-frame',
    atoms: [
      {
        id: 241026,
        type: 'paragraph',
        value: {
          text: 'We aim to process all withdrawal requests as quickly as possible. According to statistics, 95% of requests are completed within 24 hours, with over 70% finalized in under an hour.',
        },
      },
      {
        id: 265095,
        type: 'paragraph',
        value: {
          text: 'The exact processing time depends on the payment method you use. ',
        },
      },
      {
        id: 265105,
        type: 'paragraph',
        value: {
          text: 'Important: ',
        },
      },
      {
        id: 265115,
        type: 'paragraph',
        value: {
          text: 'While withdrawal processing can take time, your funds will remain available for trading during this period. However, if your account balance decreases and becomes insufficient, your withdrawal request will be automatically canceled.',
        },
      },
    ],
    next_playlist: {
      id: 637,
      bundle_id: 188,
      name: 'why-do-you-credit-deposits-immediately-but-take-more-time-to-process-withdrawals',
      title: 'Why withdrawals take longer than deposits',
      url_alias: 'why-withdrawals-take-longer-than-deposits',
    },
  },
  {
    id: 637,
    name: 'why-do-you-credit-deposits-immediately-but-take-more-time-to-process-withdrawals',
    title: 'Why withdrawals take longer than deposits',
    meta: null,
    category_id: 30,
    category_name: 'payouts',
    category_title: 'Withdrawals',
    category_url_alias: 'withdrawals',
    bundle_id: 188,
    url_alias: 'why-withdrawals-take-longer-than-deposits',
    atoms: [
      {
        id: 241027,
        type: 'paragraph',
        value: {
          text: 'Withdrawals typically take longer than deposits because the requests need to be processed. Each withdrawal request goes through several stages, each with its own status, before the money is sent.',
        },
      },
      {
        id: 241028,
        type: 'paragraph',
        value: {
          text: 'In contrast, deposits are credited almost instantly since they are processed automatically. The speed may vary depending on the chosen payment method, but they are usually fast.',
        },
      },
      {
        id: 241029,
        type: 'paragraph',
        value: {
          text: 'Be aware that each payment system has a specific withdrawal processing period.',
        },
      },
    ],
    next_playlist: {
      id: 23275,
      bundle_id: 188,
      name: 'how-to-track-your-withdrawals-with-an-arn',
      title: 'How to track your withdrawals with an ARN',
      url_alias: 'how-to-track-your-withdrawals-with-an-arn',
    },
  },
  {
    id: 23275,
    name: 'how-to-track-your-withdrawals-with-an-arn',
    title: 'How to track your withdrawals with an ARN',
    meta: null,
    category_id: 30,
    category_name: 'payouts',
    category_title: 'Withdrawals',
    category_url_alias: 'withdrawals',
    bundle_id: 188,
    url_alias: 'how-to-track-your-withdrawals-with-an-arn',
    atoms: [
      {
        id: 265125,
        type: 'paragraph',
        value: {
          text: 'You can track your withdrawal status using an ARN (Acquirer’s Reference Number). This unique code is provided for each bank transaction and allows you to trace the movement of your funds through the banking system.',
        },
      },
      {
        id: 265135,
        type: 'paragraph',
        value: {
          text: 'You can get an ARN by reaching out to our Support team. Use it to monitor your withdrawal status and estimate when the funds will reach your account. Simply contact your bank with this number, and they’ll be able to provide more information about the transaction.',
        },
      },
    ],
    next_playlist: {
      id: 23295,
      bundle_id: 5375,
      name: 'reasons-for-canceled-withdrawal-requests',
      title: 'Reasons for canceled withdrawal requests',
      url_alias: 'reasons-for-canceled-withdrawal-requests',
    },
  },
  {
    id: 23295,
    name: 'reasons-for-canceled-withdrawal-requests',
    title: 'Reasons for canceled withdrawal requests',
    meta: null,
    category_id: 30,
    category_name: 'payouts',
    category_title: 'Withdrawals',
    category_url_alias: 'withdrawals',
    bundle_id: 5375,
    url_alias: 'reasons-for-canceled-withdrawal-requests',
    atoms: [
      {
        id: 265145,
        type: 'paragraph',
        value: {
          text: 'Your withdrawal request may be canceled for the following reasons:',
        },
      },
      {
        id: 265155,
        type: 'paragraph',
        value: {
          text: '1. Your bank has rejected the request.',
        },
      },
      {
        id: 265165,
        type: 'paragraph',
        value: {
          text: 'If this happens, we’ll notify you via email with instructions on what to do next.',
        },
      },
      {
        id: 265175,
        type: 'paragraph',
        value: {
          text: '2. You’ve requested to withdraw more than your available balance.',
        },
      },
      {
        id: 265185,
        type: 'paragraph',
        value: {
          text: 'This might happen if you continue trading while your withdrawal is being processed and your balance falls below the withdrawal amount. In this case, the withdrawal request would be cancelled automatically due to insufficient funds.',
        },
      },
      {
        id: 265195,
        type: 'paragraph',
        value: {
          text: "Here's a tip:",
        },
      },
      {
        id: 265205,
        type: 'paragraph',
        value: {
          text: 'If you change your mind, you can manually cancel your withdrawal in the Transactions section of your account.',
        },
      },
    ],
    next_playlist: {
      id: 23305,
      bundle_id: 5375,
      name: 'withdrawal-status-done-but-money-not-received',
      title: 'Withdrawal status "Done" but money not received',
      url_alias: 'withdrawal-status-%22done%22-but-money-not-received',
    },
  },
  {
    id: 23305,
    name: 'withdrawal-status-done-but-money-not-received',
    title: 'Withdrawal status "Done" but money not received',
    meta: null,
    category_id: 30,
    category_name: 'payouts',
    category_title: 'Withdrawals',
    category_url_alias: 'withdrawals',
    bundle_id: 5375,
    url_alias: 'withdrawal-status-%22done%22-but-money-not-received',
    atoms: [
      {
        id: 265215,
        type: 'paragraph',
        value: {
          text: 'When the withdrawal status shows "Done", it means we’ve processed your request and sent the funds to your bank account or e-wallet. However, the exact time it takes for the money to appear on your account depends on your payment method. ',
        },
      },
      {
        id: 265225,
        type: 'paragraph',
        value: {
          text: 'In some cases, banks may reject the transfer. If this happens, we can transfer the funds to your e-wallet instead.',
        },
      },
      {
        id: 265235,
        type: 'paragraph',
        value: {
          text: 'Additionally, different payment systems have limits on how much can be deposited or withdrawn within a single day. If your request exceeds this limit, be sure to contact your bank or payment provider.',
        },
      },
    ],
    next_playlist: {
      id: 23315,
      bundle_id: 5375,
      name: 'receiving-your-withdrawal-in-parts',
      title: 'Receiving your withdrawal in parts',
      url_alias: 'receiving-your-withdrawal-in-parts',
    },
  },
  {
    id: 23315,
    name: 'receiving-your-withdrawal-in-parts',
    title: 'Receiving your withdrawal in parts',
    meta: null,
    category_id: 30,
    category_name: 'payouts',
    category_title: 'Withdrawals',
    category_url_alias: 'withdrawals',
    bundle_id: 5375,
    url_alias: 'receiving-your-withdrawal-in-parts',
    atoms: [
      {
        id: 265245,
        type: 'paragraph',
        value: {
          text: 'If your withdrawal arrives in parts, it’s because some banks and e-payment systems have restrictions on the maximum payout amount. As a result, your withdrawal may be divided into smaller transfers.',
        },
      },
      {
        id: 265255,
        type: 'paragraph',
        value: {
          text: "Don't worry  — you'll receive the requested amount in full, but the funds will be transferred in several parts. During this process, the withdrawal request status will show as “Processing”. ",
        },
      },
      {
        id: 265265,
        type: 'paragraph',
        value: {
          text: 'Important:',
        },
      },
      {
        id: 265275,
        type: 'paragraph',
        value: {
          text: 'A new withdrawal request can only be submitted after the previous one has been processed. Multiple requests cannot be processed simultaneously.',
        },
      },
    ],
    next_playlist: {
      id: 639,
      bundle_id: 189,
      name: 'how-do-i-withdraw-funds-to-two-payment-methods',
      title: 'Withdrawing to multiple payment methods',
      url_alias: 'withdrawing-to-multiple-payment-methods',
    },
  },
  {
    id: 639,
    name: 'how-do-i-withdraw-funds-to-two-payment-methods',
    title: 'Withdrawing to multiple payment methods',
    meta: null,
    category_id: 30,
    category_name: 'payouts',
    category_title: 'Withdrawals',
    category_url_alias: 'withdrawals',
    bundle_id: 189,
    url_alias: 'withdrawing-to-multiple-payment-methods',
    atoms: [
      {
        id: 241035,
        type: 'paragraph',
        value: {
          text: 'If you’ve made deposits using multiple payment methods, your withdrawal amounts should be distributed proportionally between those methods. This regulation is in place to comply with international legal standards.',
        },
      },
      {
        id: 241036,
        type: 'paragraph',
        value: {
          text: 'Example:',
        },
      },
      {
        id: 241037,
        type: 'paragraph',
        value: {
          text: 'You first deposited $40 using a bank card and then added another $100 from an e-wallet. After earning a $160 profit from successful trades, your total balance is now $300.',
        },
      },
      {
        id: 241038,
        type: 'paragraph',
        value: {
          text: "Here's how you can withdraw:",
        },
      },
      {
        id: 241039,
        type: 'paragraph',
        value: {
          text: '• The initial $40 deposited with your bank card should be returned to that same card.',
        },
      },
      {
        id: 265285,
        type: 'paragraph',
        value: {
          text: '• The $100 deposited through your e-wallet should be sent back to that e-wallet.',
        },
      },
      {
        id: 265295,
        type: 'paragraph',
        value: {
          text: '• Your $160 profit can be withdrawn using any of these payment methods without any restrictions.',
        },
      },
    ],
    next_playlist: {
      id: 640,
      bundle_id: 189,
      name: 'how-do-i-remove-the-payment-method',
      title: 'How to remove a payment method from your account',
      url_alias: 'how-to-remove-a-payment-method-from-your-account',
    },
  },
  {
    id: 640,
    name: 'how-do-i-remove-the-payment-method',
    title: 'How to remove a payment method from your account',
    meta: null,
    category_id: 30,
    category_name: 'payouts',
    category_title: 'Withdrawals',
    category_url_alias: 'withdrawals',
    bundle_id: 189,
    url_alias: 'how-to-remove-a-payment-method-from-your-account',
    atoms: [
      {
        id: 241040,
        type: 'paragraph',
        value: {
          text: "If you want to remove a payment method (such as an expired or blocked card) you previously used to make a deposit, you'll first need to complete verification.",
        },
      },
      {
        id: 241041,
        type: 'paragraph',
        value: {
          text: 'In this case, please contact our Support team to request the method to be removed. They will guide you through the verification process and explain the next steps.',
        },
      },
    ],
    next_playlist: {
      id: 937,
      bundle_id: 189,
      name: 'what-should-i-do-if-my-carde-wallet-is-no-longer-active',
      title: 'What to do if your card or e-wallet is inactive',
      url_alias: 'what-to-do-if-your-card-or-e-wallet-is-inactive',
    },
  },
  {
    id: 937,
    name: 'what-should-i-do-if-my-carde-wallet-is-no-longer-active',
    title: 'What to do if your card or e-wallet is inactive',
    meta: null,
    category_id: 30,
    category_name: 'payouts',
    category_title: 'Withdrawals',
    category_url_alias: 'withdrawals',
    bundle_id: 189,
    url_alias: 'what-to-do-if-your-card-or-e-wallet-is-inactive',
    atoms: [
      {
        id: 241522,
        type: 'paragraph',
        value: {
          text: 'If your card or e-wallet is no longer active due to it being lost, expired or blocked, be sure to contact our Support team before you make a withdrawal request. They will help you update your withdrawal method.',
        },
      },
      {
        id: 241523,
        type: 'paragraph',
        value: {
          text: 'If you’ve already submitted a withdrawal request, let our Support team know as soon as possible. A member of our financial team will reach out to you by phone or email to discuss alternative withdrawal options.',
        },
      },
    ],
    next_playlist: {
      id: 23325,
      bundle_id: 189,
      name: 'e-wallet-as-a-solution-for-bank-transfer-limits',
      title: 'E-wallet as a solution for bank transfer limits',
      url_alias: 'e-wallet-as-a-solution-for-bank-transfer-limits',
    },
  },
  {
    id: 23325,
    name: 'e-wallet-as-a-solution-for-bank-transfer-limits',
    title: 'E-wallet as a solution for bank transfer limits',
    meta: null,
    category_id: 30,
    category_name: 'payouts',
    category_title: 'Withdrawals',
    category_url_alias: 'withdrawals',
    bundle_id: 189,
    url_alias: 'e-wallet-as-a-solution-for-bank-transfer-limits',
    atoms: [
      {
        id: 265305,
        type: 'paragraph',
        value: {
          text: 'In some cases, it’s not possible to withdraw funds to your bank card if the amount exceeds the original deposit made through this payment method. ',
        },
      },
      {
        id: 265315,
        type: 'paragraph',
        value: {
          text: 'This limitation is due to bank policies, and unfortunately, banks don’t always disclose a reason for rejecting such transfers.',
        },
      },
      {
        id: 265325,
        type: 'paragraph',
        value: {
          text: 'As an alternative, we may request your e-wallet details to complete the withdrawal. We will contact you by email or phone with instructions on how to complete your withdrawal.',
        },
      },
    ],
    next_playlist: null,
  },
  {
    id: 1216,
    name: 'what-are-statuses',
    title: 'What are statuses?',
    meta: null,
    category_id: 32,
    category_name: 'statuses',
    category_title: 'Statuses',
    category_url_alias: 'statuses',
    bundle_id: 208,
    url_alias: 'what-are-statuses',
    atoms: [
      {
        id: 241604,
        type: 'paragraph',
        value: {
          text: 'Olymptrade statuses are a customer loyalty program. A trader can reach a Starter, Advanced or Expert status and use a certain set of benefits. The higher the status, the more trading privileges the trader gets.',
        },
      },
      {
        id: 241605,
        type: 'paragraph',
        value: {
          text: 'Starter — a basic status.',
        },
      },
      {
        id: 241606,
        type: 'paragraph',
        value: {
          text: 'Advanced — a status with a set of privileges.',
        },
      },
      {
        id: 241607,
        type: 'paragraph',
        value: {
          text: 'Expert — a top-level status, which enables access to the largest pack of privileges.',
        },
      },
      {
        id: 241608,
        type: 'video',
        value: {
          url: 'https://youtube.com/embed/M7uJsVh2NJg',
        },
      },
    ],
    next_playlist: {
      id: 1217,
      bundle_id: 208,
      name: 'the-perks-of-the-starter-status',
      title: 'The Perks of the Starter Status',
      url_alias: 'the-perks-of-the-starter-status',
    },
  },
  {
    id: 1217,
    name: 'the-perks-of-the-starter-status',
    title: 'The Perks of the Starter Status',
    meta: null,
    category_id: 32,
    category_name: 'statuses',
    category_title: 'Statuses',
    category_url_alias: 'statuses',
    bundle_id: 208,
    url_alias: 'the-perks-of-the-starter-status',
    atoms: [
      {
        id: 241609,
        type: 'paragraph',
        value: {
          text: 'With a Starter status, a trader can use the basic functionality of the platform, and the maximum rate of return on their Fixed Time trades is 85%.',
        },
      },
      {
        id: 241610,
        type: 'video',
        value: {
          url: 'https://youtube.com/embed/P91Ee6vI418',
        },
      },
    ],
    next_playlist: {
      id: 1218,
      bundle_id: 208,
      name: 'advantages-of-the-advanced-status',
      title: 'Advantages of the Advanced Status on FTT',
      url_alias: 'advantages-of-the-advanced-status-on-ftt',
    },
  },
  {
    id: 1218,
    name: 'advantages-of-the-advanced-status',
    title: 'Advantages of the Advanced Status on FTT',
    meta: null,
    category_id: 32,
    category_name: 'statuses',
    category_title: 'Statuses',
    category_url_alias: 'statuses',
    bundle_id: 208,
    url_alias: 'advantages-of-the-advanced-status-on-ftt',
    atoms: [
      {
        id: 241611,
        type: 'paragraph',
        value: {
          text: '– Higher rate of return of up to 89% on two assets in Fixed Time mode.',
        },
      },
      {
        id: 241612,
        type: 'paragraph',
        value: {
          text: '– Faster processing of funds during withdrawal requests.',
        },
      },
      {
        id: 241613,
        type: 'paragraph',
        value: {
          text: '– The maximum trade amount is $4,000/€4,000.',
        },
      },
      {
        id: 241614,
        type: 'paragraph',
        value: {
          text: '– Up to 50 simultaneously opened positions.',
        },
      },
      {
        id: 241615,
        type: 'paragraph',
        value: {
          text: '– Monthly consultations with a dedicated analyst.',
        },
      },
      {
        id: 241616,
        type: 'paragraph',
        value: {
          text: '– 7 built-in trading strategies .',
        },
      },
      {
        id: 241617,
        type: 'paragraph',
        value: {
          text: '– Private webinars and access to the Special Materials section.',
        },
      },
      {
        id: 241618,
        type: 'video',
        value: {
          url: 'https://youtube.com/embed/HyqRNMxZsxE',
        },
      },
    ],
    next_playlist: {
      id: 9865,
      bundle_id: 208,
      name: 'advanced-status-forex',
      title: 'Advantages of the Advanced Status on Forex',
      url_alias: 'advantages-of-the-advanced-status-on-forex',
    },
  },
  {
    id: 9865,
    name: 'advanced-status-forex',
    title: 'Advantages of the Advanced Status on Forex',
    meta: null,
    category_id: 32,
    category_name: 'statuses',
    category_title: 'Statuses',
    category_url_alias: 'statuses',
    bundle_id: 208,
    url_alias: 'advantages-of-the-advanced-status-on-forex',
    atoms: [
      {
        id: 242594,
        type: 'paragraph',
        value: {
          text: '– Faster processing of funds during withdrawal requests.',
        },
      },
      {
        id: 242595,
        type: 'paragraph',
        value: {
          text: '– A maximum trade amount of $3,000/€3,000 in Forex mode when trading without a multiplier and up to $1,500,000/€1,500,000 when taking the multiplier into account.',
        },
      },
      {
        id: 242596,
        type: 'paragraph',
        value: {
          text: '– Up to 100 simultaneously opened positions.',
        },
      },
      {
        id: 242597,
        type: 'paragraph',
        value: {
          text: '– Monthly consultations with a dedicated analyst.',
        },
      },
      {
        id: 242598,
        type: 'paragraph',
        value: {
          text: '– 6 ready-to-go systems in Forex mode.',
        },
      },
      {
        id: 242599,
        type: 'paragraph',
        value: {
          text: '– Private webinars and access to the Special Materials section.',
        },
      },
      {
        id: 242600,
        type: 'paragraph',
        value: {
          text: '– Up to a 10% discount on the position opening fee in Forex mode.',
        },
      },
      {
        id: 242601,
        type: 'video',
        value: {
          url: 'https://youtube.com/embed/HyqRNMxZsxE',
        },
      },
    ],
    next_playlist: {
      id: 1219,
      bundle_id: 208,
      name: 'advantages-of-expert-status',
      title: 'Advantages of Expert Status on FTT',
      url_alias: 'advantages-of-expert-status-on-ftt',
    },
  },
  {
    id: 1219,
    name: 'advantages-of-expert-status',
    title: 'Advantages of Expert Status on FTT',
    meta: null,
    category_id: 32,
    category_name: 'statuses',
    category_title: 'Statuses',
    category_url_alias: 'statuses',
    bundle_id: 208,
    url_alias: 'advantages-of-expert-status-on-ftt',
    atoms: [
      {
        id: 241619,
        type: 'paragraph',
        value: {
          text: '– Increased rate of profitability up to 93% for 6 assets',
        },
      },
      {
        id: 241621,
        type: 'paragraph',
        value: {
          text: '– Top priority processing of funds withdrawal requests',
        },
      },
      {
        id: 241622,
        type: 'paragraph',
        value: {
          text: '–  The maximum trade amount is $5,000/€5,000.',
        },
      },
      {
        id: 241623,
        type: 'paragraph',
        value: {
          text: '– An opportunity to open up to 100 positions at the same time',
        },
      },
      {
        id: 241624,
        type: 'paragraph',
        value: {
          text: '– Individual training and a personal analyst',
        },
      },
      {
        id: 241625,
        type: 'paragraph',
        value: {
          text: '– 15 efficient trading strategies',
        },
      },
      {
        id: 241626,
        type: 'paragraph',
        value: {
          text: '– Private webinars and access to the Special Materials section',
        },
      },
      {
        id: 241627,
        type: 'paragraph',
        value: {
          text: '– Exclusive investment ideas every day',
        },
      },
    ],
    next_playlist: {
      id: 9895,
      bundle_id: 208,
      name: 'Advantages-of-Expert-Status-on-Forex',
      title: 'Advantages of Expert Status on Forex',
      url_alias: 'advantages-of-expert-status-on-forex',
    },
  },
  {
    id: 9895,
    name: 'Advantages-of-Expert-Status-on-Forex',
    title: 'Advantages of Expert Status on Forex',
    meta: null,
    category_id: 32,
    category_name: 'statuses',
    category_title: 'Statuses',
    category_url_alias: 'statuses',
    bundle_id: 208,
    url_alias: 'advantages-of-expert-status-on-forex',
    atoms: [
      {
        id: 242602,
        type: 'paragraph',
        value: {
          text: '– Top priority processing of funds withdrawal requests',
        },
      },
      {
        id: 242603,
        type: 'paragraph',
        value: {
          text: '– Maximum trade amounts of $4,000/€4,000 without multipliers and up to $2,000,000/€2,000,000 when taking multiplier into account',
        },
      },
      {
        id: 242604,
        type: 'paragraph',
        value: {
          text: '– An opportunity to open up to 100 positions at the same time',
        },
      },
      {
        id: 242605,
        type: 'paragraph',
        value: {
          text: '– Individual training and a personal analyst',
        },
      },
      {
        id: 242606,
        type: 'paragraph',
        value: {
          text: '– 12 reliable trading strategies for Forex',
        },
      },
      {
        id: 242607,
        type: 'paragraph',
        value: {
          text: '– Private webinars and access to the Special Materials section',
        },
      },
      {
        id: 242608,
        type: 'paragraph',
        value: {
          text: '– Exclusive investment ideas every day',
        },
      },
      {
        id: 242609,
        type: 'paragraph',
        value: {
          text: '– Up to a 20% discount on the position opening fee',
        },
      },
    ],
    next_playlist: {
      id: 1220,
      bundle_id: 209,
      name: 'how-do-i-get-a-new-status',
      title: 'How do I get a new status?',
      url_alias: 'how-do-i-get-a-new-status',
    },
  },
  {
    id: 1220,
    name: 'how-do-i-get-a-new-status',
    title: 'How do I get a new status?',
    meta: null,
    category_id: 32,
    category_name: 'statuses',
    category_title: 'Statuses',
    category_url_alias: 'statuses',
    bundle_id: 209,
    url_alias: 'how-do-i-get-a-new-status',
    atoms: [
      {
        id: 241628,
        type: 'paragraph',
        value: {
          text: 'The simplest way is to top up your account with the required amount:\n\n',
        },
      },
      {
        id: 241629,
        type: 'paragraph',
        value: {
          text: '• Starter — default status, no deposit necessary',
        },
      },
      {
        id: 241630,
        type: 'paragraph',
        value: {
          text: '• Advanced — you need to deposit at least $500/€500 or USDT 100 to your USDT account',
        },
      },
      {
        id: 241631,
        type: 'paragraph',
        value: {
          text: '• Expert — you need to deposit at least $2000/€2000 or USDT 500 to your USDT account',
        },
      },
      {
        id: 241632,
        type: 'paragraph',
        value: {
          text: "You can also upgrade your status by earning experience points (XP), which you can get by making trades on a live account and completing Trader's Way tasks.",
        },
      },
    ],
    next_playlist: {
      id: 1221,
      bundle_id: 209,
      name: 'what-are-experience-points-xp',
      title: 'What are experience points (XP)?',
      url_alias: 'what-are-experience-points-xp',
    },
  },
  {
    id: 1221,
    name: 'what-are-experience-points-xp',
    title: 'What are experience points (XP)?',
    meta: null,
    category_id: 32,
    category_name: 'statuses',
    category_title: 'Statuses',
    category_url_alias: 'statuses',
    bundle_id: 209,
    url_alias: 'what-are-experience-points-xp',
    atoms: [
      {
        id: 241633,
        type: 'paragraph',
        value: {
          text: 'This is a reward for your trading activity and your progress tracker. A trader needs experience points to achieve a higher status or extend the current one. They can get XP for each trade made in a live account.',
        },
      },
      {
        id: 241634,
        type: 'paragraph',
        value: {
          text: 'A profitable trade brings more experience points. The number of points you get also depends on the investment amount, the higher its value, the more XP you get.',
        },
      },
    ],
    next_playlist: {
      id: 9207,
      bundle_id: 209,
      name: 'how-to-subscribe-to-statuses',
      title: 'How To Subscribe to Statuses',
      url_alias: 'how-to-subscribe-to-statuses',
    },
  },
  {
    id: 9207,
    name: 'how-to-subscribe-to-statuses',
    title: 'How To Subscribe to Statuses',
    meta: null,
    category_id: 32,
    category_name: 'statuses',
    category_title: 'Statuses',
    category_url_alias: 'statuses',
    bundle_id: 209,
    url_alias: 'how-to-subscribe-to-statuses',
    atoms: [
      {
        id: 242554,
        type: 'paragraph',
        value: {
          text: 'Subscribing to a new status is simple. Once you have decided which status best fits your trading style and goals it is time to start your subscription.',
        },
      },
      {
        id: 242555,
        type: 'paragraph',
        value: {
          text: 'Let’s look at the steps to get your subscription:',
        },
      },
      {
        id: 242556,
        type: 'paragraph',
        value: {
          text: '1. Log in to your Olymptrade account.',
        },
      },
      {
        id: 242557,
        type: 'paragraph',
        value: {
          text: '2. On the left side of the platform, open the Market tab.',
        },
      },
      {
        id: 242558,
        type: 'paragraph',
        value: {
          text: '3. From the drop-down menu, choose your new status. (You can subscribe to one feature at a time)',
        },
      },
      {
        id: 242559,
        type: 'paragraph',
        value: {
          text: '4. Choose the length of your subscription (1/3/6/12 months).',
        },
      },
      {
        id: 242560,
        type: 'paragraph',
        value: {
          text: '5. If necessary, deposit the required amount to your account to activate the subscription. Otherwise, use your account balance to pay the subscription fee.',
        },
      },
      {
        id: 242561,
        type: 'paragraph',
        value: {
          text: '6. Finalize the transaction and pay.',
        },
      },
      {
        id: 242563,
        type: 'paragraph',
        value: {
          text: 'Note: You can only buy a subscription through the Web version of our platform, however, the features you’ve acquired will work on any device you own.',
        },
      },
    ],
    next_playlist: {
      id: 1222,
      bundle_id: 210,
      name: 'what-is-traders-way-about',
      title: 'What Is Trader’s Way About',
      url_alias: 'what-is-trader%E2%80%99s-way-about',
    },
  },
  {
    id: 1222,
    name: 'what-is-traders-way-about',
    title: 'What Is Trader’s Way About',
    meta: null,
    category_id: 32,
    category_name: 'statuses',
    category_title: 'Statuses',
    category_url_alias: 'statuses',
    bundle_id: 210,
    url_alias: 'what-is-trader%E2%80%99s-way-about',
    atoms: [
      {
        id: 241635,
        type: 'paragraph',
        value: {
          text: 'Traders earn experience points (XP) by trading using their live account. The Trader’s Way is a system that rewards traders for gaining XP. With this system, traders can not only upgrade their status or extend their current one, but also get useful trading tools as well.',
        },
      },
      {
        id: 241636,
        type: 'paragraph',
        value: {
          text: 'The number of XP you have earned, the sublevels you have reached and the rewards you have got are all fixed in your Trader’s Way. You need to gain 19 800 XP to reach an Advanced status and 99 000 XP to activate the Expert one. However, on the way towards this goal you will get a new indicator, consult an analyst and activate an option of increased profitability.',
        },
      },
      {
        id: 241637,
        type: 'paragraph',
        value: {
          text: 'The total amount of experience points resets to zero every 30 days. So don’t hesitate to collect as many rewards as possible.',
        },
      },
      {
        id: 241638,
        type: 'video',
        value: {
          url: 'https://youtube.com/embed/A1lonXHPXyM',
        },
      },
    ],
    next_playlist: {
      id: 1223,
      bundle_id: 210,
      name: 'why-is-it-so-important-to-complete-tasks',
      title: 'Why is it so important to complete tasks?',
      url_alias: 'why-is-it-so-important-to-complete-tasks',
    },
  },
  {
    id: 1223,
    name: 'why-is-it-so-important-to-complete-tasks',
    title: 'Why is it so important to complete tasks?',
    meta: null,
    category_id: 32,
    category_name: 'statuses',
    category_title: 'Statuses',
    category_url_alias: 'statuses',
    bundle_id: 210,
    url_alias: 'why-is-it-so-important-to-complete-tasks',
    atoms: [
      {
        id: 241639,
        type: 'paragraph',
        value: {
          text: 'Tasks are a great way to mix trading with training and gaining experience points. Each task has a detailed description of what a trader should do to complete it. For instance: open 5 trades on gold in Fixed Time Trades mode or make two profitable trades on currency pairs. The trader earns experience points for completing the tasks successfully.',
        },
      },
      {
        id: 241640,
        type: 'paragraph',
        value: {
          text: 'Please note that the tasks are updated daily, so you will only have 1 day to complete them.',
        },
      },
    ],
    next_playlist: {
      id: 1225,
      bundle_id: 210,
      name: 'how-do-i-get-more-experience-points',
      title: 'How do I get more experience points?',
      url_alias: 'how-do-i-get-more-experience-points',
    },
  },
  {
    id: 1225,
    name: 'how-do-i-get-more-experience-points',
    title: 'How do I get more experience points?',
    meta: null,
    category_id: 32,
    category_name: 'statuses',
    category_title: 'Statuses',
    category_url_alias: 'statuses',
    bundle_id: 210,
    url_alias: 'how-do-i-get-more-experience-points',
    atoms: [
      {
        id: 241642,
        type: 'paragraph',
        value: {
          text: '– Make more profitable trades.',
        },
      },
      {
        id: 241643,
        type: 'paragraph',
        value: {
          text: '– Trade larger amounts.',
        },
      },
      {
        id: 241644,
        type: 'paragraph',
        value: {
          text: '– Complete the regular tasks.',
        },
      },
      {
        id: 241645,
        type: 'paragraph',
        value: {
          text: 'Besides, the larger your investment amount, the more experience points you earn.',
        },
      },
    ],
    next_playlist: {
      id: 1224,
      bundle_id: 210,
      name: 'what-are-achievments',
      title: 'What are achievements?',
      url_alias: 'what-are-achievements',
    },
  },
  {
    id: 1224,
    name: 'what-are-achievments',
    title: 'What are achievements?',
    meta: null,
    category_id: 32,
    category_name: 'statuses',
    category_title: 'Statuses',
    category_url_alias: 'statuses',
    bundle_id: 210,
    url_alias: 'what-are-achievements',
    atoms: [
      {
        id: 241641,
        type: 'paragraph',
        value: {
          text: 'These are the virtual awards for your progress in trading.',
        },
      },
    ],
    next_playlist: {
      id: 623,
      bundle_id: 128,
      name: 'what-is-a-risk-free-trade',
      title: 'What is a risk-free trade?',
      url_alias: 'what-is-a-risk-free-trade',
    },
  },
  {
    id: 623,
    name: 'what-is-a-risk-free-trade',
    title: 'What is a risk-free trade?',
    meta: null,
    category_id: 32,
    category_name: 'statuses',
    category_title: 'Statuses',
    category_url_alias: 'statuses',
    bundle_id: 128,
    url_alias: 'what-is-a-risk-free-trade',
    atoms: [
      {
        id: 240988,
        type: 'paragraph',
        value: {
          text: 'Risk-free trades enable to return the trade amount to the trading account in case of a wrong forecast made in the FTT mode.',
        },
      },
      {
        id: 240989,
        type: 'paragraph',
        value: {
          text: 'If a trader activates a risk-free trade and makes a losing trade, the funds are returned to the trading account.',
        },
      },
      {
        id: 240990,
        type: 'paragraph',
        value: {
          text: 'Let’s say a trader activated a $100 risk-free trade.',
        },
      },
      {
        id: 240991,
        type: 'paragraph',
        value: {
          text: 'He or she opened a $100 trade.',
        },
      },
      {
        id: 240992,
        type: 'paragraph',
        value: {
          text: 'If the forecast is wrong, the trade amount ($100) will be returned to the trader’s account.',
        },
      },
    ],
    next_playlist: {
      id: 624,
      bundle_id: 128,
      name: 'how-do-i-get-a-risk-free-trade',
      title: 'How can I get a risk-free trade?',
      url_alias: 'how-can-i-get-a-risk-free-trade',
    },
  },
  {
    id: 624,
    name: 'how-do-i-get-a-risk-free-trade',
    title: 'How can I get a risk-free trade?',
    meta: null,
    category_id: 32,
    category_name: 'statuses',
    category_title: 'Statuses',
    category_url_alias: 'statuses',
    bundle_id: 128,
    url_alias: 'how-can-i-get-a-risk-free-trade',
    atoms: [
      {
        id: 240993,
        type: 'paragraph',
        value: {
          text: 'Traders with Starter or Advanced statuses can win risk-free trades in our contests. Also, they can get such trades for taking part in some promotions or by earning experience points (XP) on their Trader’s Way.',
        },
      },
    ],
    next_playlist: {
      id: 625,
      bundle_id: 128,
      name: 'how-risk-free-trades-work',
      title: 'How Risk-Free Trades Work',
      url_alias: 'how-risk-free-trades-work',
    },
  },
  {
    id: 625,
    name: 'how-risk-free-trades-work',
    title: 'How Risk-Free Trades Work',
    meta: null,
    category_id: 32,
    category_name: 'statuses',
    category_title: 'Statuses',
    category_url_alias: 'statuses',
    bundle_id: 128,
    url_alias: 'how-risk-free-trades-work',
    atoms: [
      {
        id: 240996,
        type: 'paragraph',
        value: {
          text: 'If you activate a risk-free trade and make a correct forecast, this risk-free trade will be written off.',
        },
      },
      {
        id: 240997,
        type: 'paragraph',
        value: {
          text: 'It’s essential that you have some real funds in your account to activate a risk-free trade. The risk-free service protects your account from losses but not provides you with funds for trading.',
        },
      },
      {
        id: 240998,
        type: 'paragraph',
        value: {
          text: 'Please note that a risk-free trade can only secure a limited amount. If you have a $10 risk-free trade and invest $1000 in a losing trade, only $10 will be returned to your account.',
        },
      },
      {
        id: 240999,
        type: 'paragraph',
        value: {
          text: 'A risk-free trade will be written off in full even if the amount of trade you open is less than the risk-free trade’s value.',
        },
      },
      {
        id: 241000,
        type: 'paragraph',
        value: {
          text: 'For example, if you activate a $20 risk-free trade and open a $5 trade, the $20 risk-free trade will be written off in full.',
        },
      },
    ],
    next_playlist: {
      id: 1226,
      bundle_id: 177,
      name: 'how-long-does-a-status-last',
      title: 'How long does a status last?',
      url_alias: 'how-long-does-a-status-last',
    },
  },
  {
    id: 1226,
    name: 'how-long-does-a-status-last',
    title: 'How long does a status last?',
    meta: null,
    category_id: 32,
    category_name: 'statuses',
    category_title: 'Statuses',
    category_url_alias: 'statuses',
    bundle_id: 177,
    url_alias: 'how-long-does-a-status-last',
    atoms: [
      {
        id: 241646,
        type: 'paragraph',
        value: {
          text: 'A status is valid for 30 days from the moment you achieve it. By the end of this period you need to have earned a certain number of experience points to extend the current status for another 30 days. If you fail to reach the required level, the status will be downgraded (except the Starter status, which is the basic one).',
        },
      },
      {
        id: 241647,
        type: 'paragraph',
        value: {
          text: 'However, you can earn a reward “Save” while completing the tasks on your Trader’s Way, which will extend your current status for another 30 days.',
        },
      },
    ],
    next_playlist: {
      id: 1230,
      bundle_id: 177,
      name: 'how-do-i-extend-my-status-level',
      title: 'How do I extend my status level?',
      url_alias: 'how-do-i-extend-my-status-level',
    },
  },
  {
    id: 1230,
    name: 'how-do-i-extend-my-status-level',
    title: 'How do I extend my status level?',
    meta: null,
    category_id: 32,
    category_name: 'statuses',
    category_title: 'Statuses',
    category_url_alias: 'statuses',
    bundle_id: 177,
    url_alias: 'how-do-i-extend-my-status-level',
    atoms: [
      {
        id: 241648,
        type: 'paragraph',
        value: {
          text: 'This requires earning enough XP.',
        },
      },
      {
        id: 241649,
        type: 'paragraph',
        value: {
          text: 'Starter — Can be extended without any points earned',
        },
      },
      {
        id: 241650,
        type: 'paragraph',
        value: {
          text: 'Advanced — from 35 000 XP',
        },
      },
      {
        id: 241651,
        type: 'paragraph',
        value: {
          text: 'Expert — from 160 000 XP',
        },
      },
      {
        id: 241652,
        type: 'paragraph',
        value: {
          text: 'A status is not automatically extended after making a new deposit of the amount sufficient for reaching the current one. However, if an Advanced trader tops up with enough funds to upgrade their status, they get a higher status for 30 days. The same scheme works for Starters – after depositing enough funds to reach an Advanced status into their trading account, they get a status upgrade for 30 days.',
        },
      },
    ],
    next_playlist: {
      id: 1231,
      bundle_id: 177,
      name: 'when-and-how-is-the-status-upgraded',
      title: 'When and how is the status upgraded?',
      url_alias: 'when-and-how-is-the-status-upgraded',
    },
  },
  {
    id: 1231,
    name: 'when-and-how-is-the-status-upgraded',
    title: 'When and how is the status upgraded?',
    meta: null,
    category_id: 32,
    category_name: 'statuses',
    category_title: 'Statuses',
    category_url_alias: 'statuses',
    bundle_id: 177,
    url_alias: 'when-and-how-is-the-status-upgraded',
    atoms: [
      {
        id: 241653,
        type: 'paragraph',
        value: {
          text: 'The status is extended and/or upgraded as soon as you earn the required number of XP or deposit the required amount into your trading account.',
        },
      },
    ],
    next_playlist: {
      id: 20485,
      bundle_id: 177,
      name: 'how-can-i-keep-my-status',
      title: 'How can I keep my status if I don’t have enough XP?',
      url_alias: 'how-can-i-keep-my-status-if-i-don%E2%80%99t-have-enough-xp',
    },
  },
  {
    id: 20485,
    name: 'how-can-i-keep-my-status',
    title: 'How can I keep my status if I don’t have enough XP?',
    meta: null,
    category_id: 32,
    category_name: 'statuses',
    category_title: 'Statuses',
    category_url_alias: 'statuses',
    bundle_id: 177,
    url_alias: 'how-can-i-keep-my-status-if-i-don%E2%80%99t-have-enough-xp',
    atoms: [
      {
        id: 249275,
        type: 'paragraph',
        value: {
          text: "You can keep your Advanced or Expert status by buying Save Status. This option will appear once you reach level 4 on the Trader’s Way as an Advanced trader or level 3 as an Expert. The more XP you have, if you haven't reached the Save Status award on the Trader's Way yet, the less you have to pay. ",
        },
      },
    ],
    next_playlist: null,
  },
  {
    id: 5723,
    name: 'what-is-verification',
    title: 'What is Verification?',
    meta: null,
    category_id: 29,
    category_name: 'verification',
    category_title: 'Verification',
    category_url_alias: 'verification',
    bundle_id: 283,
    url_alias: 'what-is-verification',
    atoms: [
      {
        id: 242151,
        type: 'paragraph',
        value: {
          text: 'Financial services regulators require brokers to verify their clients. Verification helps to ensure that the trader is of legal age, acts as an owner of the Olymptrade account and that the funds in the account are legal.\n ',
        },
      },
      {
        id: 242152,
        type: 'paragraph',
        value: {
          text: '\nTraders provide personal information for verification including ID, selfie, payment method details, and documents confirming the source of funds. ',
        },
      },
      {
        id: 242153,
        type: 'paragraph',
        value: {
          text: 'This data is stored following strict security requirements and is only used for verification purposes.',
        },
      },
      {
        id: 245235,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/frame5.b53ec6aaa97fd4e1c3e122a725d91f36.png',
            width: 1424,
            height: 1508,
          },
        },
      },
    ],
    next_playlist: {
      id: 5724,
      bundle_id: 283,
      name: 'voluntary-and-mandatory-verification',
      title: 'Voluntary and Mandatory Verification',
      url_alias: 'voluntary-and-mandatory-verification',
    },
  },
  {
    id: 5724,
    name: 'voluntary-and-mandatory-verification',
    title: 'Voluntary and Mandatory Verification',
    meta: null,
    category_id: 29,
    category_name: 'verification',
    category_title: 'Verification',
    category_url_alias: 'verification',
    bundle_id: 283,
    url_alias: 'voluntary-and-mandatory-verification',
    atoms: [
      {
        id: 242154,
        type: 'paragraph',
        value: {
          text: 'You can verify your account at any convenient time. To do so, you need to contact the support service. \n ',
        },
      },
      {
        id: 242155,
        type: 'paragraph',
        value: {
          text: '\nOpen the Help section in the main menu, go to Support, and click Open Chat. Then write a message requesting verification.',
        },
      },
      {
        id: 242156,
        type: 'paragraph',
        value: {
          text: 'In certain circumstances, verification is mandatory. For example, if you make a deposit using a new payment method or contact support because you suspect your account has been compromised. ',
        },
      },
      {
        id: 242157,
        type: 'paragraph',
        value: {
          text: 'You will receive a notification and an email stating the verification process is activated in any case. Follow the link in the email to start the verification process.',
        },
      },
    ],
    next_playlist: {
      id: 5732,
      bundle_id: 283,
      name: 'verification-timeframe',
      title: 'Verification Timeframe',
      url_alias: 'verification-timeframe',
    },
  },
  {
    id: 5732,
    name: 'verification-timeframe',
    title: 'Verification Timeframe',
    meta: null,
    category_id: 29,
    category_name: 'verification',
    category_title: 'Verification',
    category_url_alias: 'verification',
    bundle_id: 283,
    url_alias: 'verification-timeframe',
    atoms: [
      {
        id: 242176,
        type: 'paragraph',
        value: {
          text: 'Voluntary verification: no time limitations\nIf you have requested verification of your account, there is no time limit to undergo this process. You may upload your documents at any convenient time.\n \n \n',
        },
      },
      {
        id: 242177,
        type: 'paragraph',
        value: {
          text: '\nMandatory verification: 14 days\nIf you have not requested verification but received a notification or an email indicating verification is required, then verification is mandatory. ',
        },
      },
      {
        id: 242178,
        type: 'paragraph',
        value: {
          text: '\n \nYou must upload your documents within 14 days of receiving the email. Access to trading will be closed until your account is verified. \nWe know such limitations are inconvenient, but they are necessary to ensure your account and funds are safe. ',
        },
      },
      {
        id: 242179,
        type: 'paragraph',
        value: {
          text: '\nOnce you send the documents, it will take no more than 24 hours to verify your account. However, in some circumstances, the process may take up to five business days. As soon as we have any news, we will send you an email, a push notification, or an SMS.',
        },
      },
    ],
    next_playlist: {
      id: 5734,
      bundle_id: 283,
      name: 're-verification',
      title: 'Re-Verification',
      url_alias: 're-verification',
    },
  },
  {
    id: 5734,
    name: 're-verification',
    title: 'Re-Verification',
    meta: null,
    category_id: 29,
    category_name: 'verification',
    category_title: 'Verification',
    category_url_alias: 'verification',
    bundle_id: 283,
    url_alias: 're-verification',
    atoms: [
      {
        id: 242195,
        type: 'paragraph',
        value: {
          text: 'If you are an active trader, you will likely need to verify your account more than once. For example, if you decide to make a deposit using a new payment method. Verification helps protect your assets. You will receive an email, a push notification, or an SMS if there is a need for additional verification.',
        },
      },
    ],
    next_playlist: {
      id: 5727,
      bundle_id: 288,
      name: 'general-list-of-documents',
      title: 'General List of Documents',
      url_alias: 'general-list-of-documents',
    },
  },
  {
    id: 5727,
    name: 'general-list-of-documents',
    title: 'General List of Documents',
    meta: null,
    category_id: 29,
    category_name: 'verification',
    category_title: 'Verification',
    category_url_alias: 'verification',
    bundle_id: 288,
    url_alias: 'general-list-of-documents',
    atoms: [
      {
        id: 242162,
        type: 'paragraph',
        value: {
          text: 'If you sent a request to customer support and want to undergo voluntary verification, you will need to provide your ID and a 3D selfie.\n ',
        },
      },
      {
        id: 242163,
        type: 'paragraph',
        value: {
          text: "\nVerification is mandatory if you were notified about verification but have not requested it. In this case, you'll need to upload your ID, 3D selfie, and documents confirming your residence, payment method, and source of funds.",
        },
      },
    ],
    next_playlist: {
      id: 5728,
      bundle_id: 288,
      name: 'id',
      title: 'ID',
      url_alias: 'id',
    },
  },
  {
    id: 5728,
    name: 'id',
    title: 'ID',
    meta: null,
    category_id: 29,
    category_name: 'verification',
    category_title: 'Verification',
    category_url_alias: 'verification',
    bundle_id: 288,
    url_alias: 'id',
    atoms: [
      {
        id: 242164,
        type: 'paragraph',
        value: {
          text: 'ID is an official document issued by a government body of your country containing your full name, photo, and date of birth. \n \n ',
        },
      },
      {
        id: 242165,
        type: 'paragraph',
        value: {
          text: "\nYou can provide a color scan or a photo of your passport, driver's license, or another identification document. Screenshots of these documents' photos will not be accepted.",
        },
      },
      {
        id: 242166,
        type: 'paragraph',
        value: {
          text: '\nThe image must have been taken no more than two months before verification and be of good quality so that the texts are easy to read. Your picture on the document must be easily compared with your 3D selfie.',
        },
      },
    ],
    next_playlist: {
      id: 6110,
      bundle_id: 288,
      name: '3d-selfie',
      title: '3D Selfie',
      url_alias: '3d-selfie',
    },
  },
  {
    id: 6110,
    name: '3d-selfie',
    title: '3D Selfie',
    meta: null,
    category_id: 29,
    category_name: 'verification',
    category_title: 'Verification',
    category_url_alias: 'verification',
    bundle_id: 288,
    url_alias: '3d-selfie',
    atoms: [
      {
        id: 242271,
        type: 'paragraph',
        value: {
          text: "You can take a 3D selfie with a camera on your device. If you start the verification process on a computer that doesn't have a camera, you will be able to take a photo with your phone. There is a QR code on the 3D selfie page. Scan the code with your mobile camera and follow the link.",
        },
      },
    ],
    next_playlist: {
      id: 6111,
      bundle_id: 288,
      name: 'residence-verification',
      title: 'Residence',
      url_alias: 'residence',
    },
  },
  {
    id: 6111,
    name: 'residence-verification',
    title: 'Residence',
    meta: null,
    category_id: 29,
    category_name: 'verification',
    category_title: 'Verification',
    category_url_alias: 'verification',
    bundle_id: 288,
    url_alias: 'residence',
    atoms: [
      {
        id: 242272,
        type: 'paragraph',
        value: {
          text: 'The document proving your residence must have been issued within the past three months and state your full name, address, and date of issue.\n \n',
        },
      },
      {
        id: 242273,
        type: 'paragraph',
        value: {
          text: 'You can submit one of these documents:',
        },
      },
      {
        id: 242274,
        type: 'paragraph',
        value: {
          text: '• Bank statement',
        },
      },
      {
        id: 242275,
        type: 'paragraph',
        value: {
          text: '• Credit card statement',
        },
      },
      {
        id: 242276,
        type: 'paragraph',
        value: {
          text: '• Utility bill (electricity, water, or gas)',
        },
      },
      {
        id: 242277,
        type: 'paragraph',
        value: {
          text: '• Landline or Internet bill',
        },
      },
      {
        id: 242278,
        type: 'paragraph',
        value: {
          text: '• A letter from a local government body',
        },
      },
      {
        id: 242279,
        type: 'paragraph',
        value: {
          text: '• A tax notice or tax return',
        },
      },
      {
        id: 242280,
        type: 'paragraph',
        value: {
          text: '\n• Cell phone bills, medical bills, shopping receipts, and insurance certificates will not be accepted.',
        },
      },
    ],
    next_playlist: {
      id: 6112,
      bundle_id: 288,
      name: 'payment-method-verification',
      title: 'Payment Method',
      url_alias: 'payment-method',
    },
  },
  {
    id: 6112,
    name: 'payment-method-verification',
    title: 'Payment Method',
    meta: null,
    category_id: 29,
    category_name: 'verification',
    category_title: 'Verification',
    category_url_alias: 'verification',
    bundle_id: 288,
    url_alias: 'payment-method',
    atoms: [
      {
        id: 258215,
        type: 'paragraph',
        value: {
          text: 'E-Payment Systems',
        },
      },
      {
        id: 258225,
        type: 'paragraph',
        value: {
          text: 'To complete e-wallet verification, submit a screenshot showing a transaction you made to Olymptrade. The image must contain your name, transaction date, and amount.',
        },
      },
      {
        id: 258235,
        type: 'paragraph',
        value: {
          text: "If it's impossible to fit all the information into one image, upload a PDF file or screenshot of your e-wallet statement.",
        },
      },
      {
        id: 258245,
        type: 'paragraph',
        value: {
          text: "Make sure the information is visible, the edges of the photo or screenshot weren't cropped, the text on the images is easily readable, and the images weren't edited by a graphics editor.",
        },
      },
      {
        id: 242282,
        type: 'paragraph',
        value: {
          text: 'Bank Card',
        },
      },
      {
        id: 242283,
        type: 'paragraph',
        value: {
          text: '\nTo confirm your bank card, submit an image of the front side of the card. The following must be visible on a single image:',
        },
      },
      {
        id: 242284,
        type: 'paragraph',
        value: {
          text: '\n• Your name',
        },
      },
      {
        id: 242285,
        type: 'paragraph',
        value: {
          text: '• The expiration date',
        },
      },
      {
        id: 242286,
        type: 'paragraph',
        value: {
          text: '• The first six and the last four digits of the card number (the rest of the digits you can cover)',
        },
      },
      {
        id: 242287,
        type: 'paragraph',
        value: {
          text: 'To confirm а digital, expired, or blocked card, or a card without a name on it, submit one of the following documents:',
        },
      },
      {
        id: 242288,
        type: 'paragraph',
        value: {
          text: '\n• A screenshot of a bank statement with your card number and your name.',
        },
      },
      {
        id: 242289,
        type: 'paragraph',
        value: {
          text: '\n• A screenshot of a bank statement showing a transaction you made to Olymptrade. The image must contain your name, as well as the date and amount of the transaction.',
        },
      },
      {
        id: 242290,
        type: 'paragraph',
        value: {
          text: '\n• A document from your bank confirming that you are the owner of the card.',
        },
      },
      {
        id: 242291,
        type: 'paragraph',
        value: {
          text: "\n• Submit a screenshot of a page of your bank's website or the bank's mobile app that shows a transaction you made to Olymptrade. The image must contain your name, as well as the date and amount of the transaction.",
        },
      },
      {
        id: 242292,
        type: 'paragraph',
        value: {
          text: "\nMake sure the information is visible, the edges of the photo or screenshot weren't cropped, the text on the images is easily readable, and the images weren't edited by a graphics editor.",
        },
      },
      {
        id: 258255,
        type: 'paragraph',
        value: {
          text: 'Online Banking',
        },
      },
      {
        id: 258265,
        type: 'paragraph',
        value: {
          text: 'Use one of these three ways to confirm your payment method.',
        },
      },
      {
        id: 258275,
        type: 'paragraph',
        value: {
          text: '1. Submit an image of a statement showing a transaction you made to Olymptrade using your bank. The image must contain the following:',
        },
      },
      {
        id: 258285,
        type: 'paragraph',
        value: {
          text: '• Your name',
        },
      },
      {
        id: 258295,
        type: 'paragraph',
        value: {
          text: '• Date and amount of the transaction',
        },
      },
      {
        id: 258305,
        type: 'paragraph',
        value: {
          text: "2. Submit a PDF file of a bank statement if you're unable to fit your name and the date and amount of the transaction into one image.",
        },
      },
      {
        id: 258315,
        type: 'paragraph',
        value: {
          text: "3. Submit a screenshot of a page of your bank's website or the bank's mobile app that shows a transaction you made to Olymptrade. The image must contain the following:",
        },
      },
      {
        id: 258325,
        type: 'paragraph',
        value: {
          text: '• Your name',
        },
      },
      {
        id: 258335,
        type: 'paragraph',
        value: {
          text: '• Date and amount of the transaction',
        },
      },
      {
        id: 258345,
        type: 'paragraph',
        value: {
          text: "Make sure the information is visible, the edges of the photo or screenshot weren't cropped, the text on the images is easily readable, and the images weren't edited by a graphics editor.",
        },
      },
    ],
    next_playlist: {
      id: 5729,
      bundle_id: 289,
      name: 'the-bank-card-is-blocked',
      title: 'The bank card is blocked',
      url_alias: 'the-bank-card-is-blocked',
    },
  },
  {
    id: 5729,
    name: 'the-bank-card-is-blocked',
    title: 'The bank card is blocked',
    meta: null,
    category_id: 29,
    category_name: 'verification',
    category_title: 'Verification',
    category_url_alias: 'verification',
    bundle_id: 289,
    url_alias: 'the-bank-card-is-blocked',
    atoms: [
      {
        id: 242167,
        type: 'paragraph',
        value: {
          text: 'You need to submit a bank statement or an online bank app screenshot containing your name and card number to verify a blocked card.\n ',
        },
      },
      {
        id: 242168,
        type: 'paragraph',
        value: {
          text: '\nIf you cannot submit the necessary documents, contact our support service or email the verification team at kyc@olymptrade.com.',
        },
      },
    ],
    next_playlist: {
      id: 6007,
      bundle_id: 289,
      name: 'the-bank-card-is-not-personalized',
      title: 'The bank card is not personalized',
      url_alias: 'the-bank-card-is-not-personalized',
    },
  },
  {
    id: 6007,
    name: 'the-bank-card-is-not-personalized',
    title: 'The bank card is not personalized',
    meta: null,
    category_id: 29,
    category_name: 'verification',
    category_title: 'Verification',
    category_url_alias: 'verification',
    bundle_id: 289,
    url_alias: 'the-bank-card-is-not-personalized',
    atoms: [
      {
        id: 242259,
        type: 'paragraph',
        value: {
          text: "If your card does not state a cardholder's name, you can submit a bank statement or an online bank app screenshot containing your name and card number.\n ",
        },
      },
      {
        id: 242260,
        type: 'paragraph',
        value: {
          text: '\nIf you have questions, contact our support service through the platform or email the verification team at kyc@olymptrade.com.',
        },
      },
    ],
    next_playlist: {
      id: 17235,
      bundle_id: 289,
      name: 'e-wallet-belongs-to-someone-else',
      title: 'The bank card or e-wallet belongs to someone else',
      url_alias: 'the-bank-card-or-e-wallet-belongs-to-someone-else',
    },
  },
  {
    id: 17235,
    name: 'e-wallet-belongs-to-someone-else',
    title: 'The bank card or e-wallet belongs to someone else',
    meta: null,
    category_id: 29,
    category_name: 'verification',
    category_title: 'Verification',
    category_url_alias: 'verification',
    bundle_id: 289,
    url_alias: 'the-bank-card-or-e-wallet-belongs-to-someone-else',
    atoms: [
      {
        id: 243549,
        type: 'paragraph',
        value: {
          text: 'Using payment methods not belonging to a user to make a deposit violates paragraph 1.4.6 of the Client Agreement. We recommend depositing using payment methods that belong to you only. \n ',
        },
      },
      {
        id: 243550,
        type: 'paragraph',
        value: {
          text: '\nIn particular circumstances, we can allow users to verify a payment method that does not belong to them. A verification specialist will decide whether it is possible in your case. ',
        },
      },
      {
        id: 243551,
        type: 'paragraph',
        value: {
          text: '\nTo have your request considered, you must send a selfie and an ID of the payment method owner for verification. ',
        },
      },
      {
        id: 243552,
        type: 'paragraph',
        value: {
          text: '\nMake sure the information is visible, the edges of the photo or a screenshot are not cropped, and the text on the images can be easily read. You must submit color photos, scans, or screenshots.',
        },
      },
      {
        id: 243553,
        type: 'paragraph',
        value: {
          text: '\nIf you have questions, contact our support service through the platform or email the verification team at kyc@olymptrade.com.',
        },
      },
    ],
    next_playlist: null,
  },
  {
    id: 1935,
    name: 'what-is-the-market',
    title: 'What is the market?',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 248,
    url_alias: 'what-is-the-market',
    atoms: [
      {
        id: 241837,
        type: 'paragraph',
        value: {
          text: 'Market is a store where you can buy extensions for our platform. There, you can find additional analysis tools and upgrade options for better trading conditions.',
        },
      },
      {
        id: 244895,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/55.11a5d8c5c1ebf51150282f027805e8d4.png',
            width: 1424,
            height: 1502,
          },
        },
      },
    ],
    next_playlist: {
      id: 1936,
      bundle_id: 248,
      name: 'what-is-an-extension',
      title: 'What is an extension?',
      url_alias: 'what-is-an-extension',
    },
  },
  {
    id: 1936,
    name: 'what-is-an-extension',
    title: 'What is an extension?',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 248,
    url_alias: 'what-is-an-extension',
    atoms: [
      {
        id: 241838,
        type: 'paragraph',
        value: {
          text: 'Extension is a function or a tool that is absent in the basic version of the platform. You can buy extensions by subscribing to the Market or by receiving Experience points on Trader’s Way.',
        },
      },
    ],
    next_playlist: {
      id: 9905,
      bundle_id: 310,
      name: 'what-is-a-trading-signal',
      title: 'What is a trading signal?',
      url_alias: 'what-is-a-trading-signal',
    },
  },
  {
    id: 9905,
    name: 'what-is-a-trading-signal',
    title: 'What is a trading signal?',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 310,
    url_alias: 'what-is-a-trading-signal',
    atoms: [
      {
        id: 242610,
        type: 'paragraph',
        value: {
          text: 'A trading signal is a mathematical model that provides a recommendation on when to open a trade. It is based on the analysis of the current market situation by several algorithms.',
        },
      },
      {
        id: 242611,
        type: 'video',
        value: {
          url: 'https://youtube.com/embed/fB1hfi-rt0g',
        },
      },
      {
        id: 242612,
        type: 'video',
        value: {
          url: 'https://youtube.com/embed/-gR12IEPMdY',
        },
      },
    ],
    next_playlist: {
      id: 9915,
      bundle_id: 310,
      name: 'how-do-you-use-trading-signals',
      title: 'How do you use trading signals?',
      url_alias: 'how-do-you-use-trading-signals',
    },
  },
  {
    id: 9915,
    name: 'how-do-you-use-trading-signals',
    title: 'How do you use trading signals?',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 310,
    url_alias: 'how-do-you-use-trading-signals',
    atoms: [
      {
        id: 242613,
        type: 'paragraph',
        value: {
          text: 'To use a trading signal, you will need to choose the asset in question, choose a timeframe, and open a trade in the recommended direction.',
        },
      },
      {
        id: 244905,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/signalstrading.c7e401d26b1d96c31e3030ffcc3d087e.png',
            width: 1424,
            height: 1492,
          },
        },
      },
    ],
    next_playlist: {
      id: 9925,
      bundle_id: 310,
      name: 'What-is-a-scalping-trade',
      title: 'What is a scalping trade?',
      url_alias: 'what-is-a-scalping-trade',
    },
  },
  {
    id: 9925,
    name: 'What-is-a-scalping-trade',
    title: 'What is a scalping trade?',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 310,
    url_alias: 'what-is-a-scalping-trade',
    atoms: [
      {
        id: 242614,
        type: 'paragraph',
        value: {
          text: 'Scalping is a type of trading when traders buy and hold an asset for a short period of time, from one to five minutes.',
        },
      },
    ],
    next_playlist: {
      id: 9945,
      bundle_id: 310,
      name: 'What-is-an-intraday-trade',
      title: 'What is an intraday trade?',
      url_alias: 'what-is-an-intraday-trade',
    },
  },
  {
    id: 9945,
    name: 'What-is-an-intraday-trade',
    title: 'What is an intraday trade?',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 310,
    url_alias: 'what-is-an-intraday-trade',
    atoms: [
      {
        id: 242615,
        type: 'paragraph',
        value: {
          text: 'Intraday is a type of trading when traders buy and sell an asset within the same day. Our signals envelope timeframes from 10 to 60 minutes.',
        },
      },
    ],
    next_playlist: {
      id: 9955,
      bundle_id: 310,
      name: 'What-is-a-swing-trade',
      title: 'What is a swing trade?',
      url_alias: 'what-is-a-swing-trade',
    },
  },
  {
    id: 9955,
    name: 'What-is-a-swing-trade',
    title: 'What is a swing trade?',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 310,
    url_alias: 'what-is-a-swing-trade',
    atoms: [
      {
        id: 242616,
        type: 'paragraph',
        value: {
          text: 'Swing is a type of trading when traders buy and hold an asset for a longer period of time up to 1 month.',
        },
      },
    ],
    next_playlist: {
      id: 9965,
      bundle_id: 310,
      name: 'How-is-a-signal-formed',
      title: 'How is a signal formed?',
      url_alias: 'how-is-a-signal-formed',
    },
  },
  {
    id: 9965,
    name: 'How-is-a-signal-formed',
    title: 'How is a signal formed?',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 310,
    url_alias: 'how-is-a-signal-formed',
    atoms: [
      {
        id: 242617,
        type: 'paragraph',
        value: {
          text: 'Signals on our platform are formed automatically by analyzing the current up/down trends via mathematical formulas that allow forecasting for an asset.',
        },
      },
    ],
    next_playlist: {
      id: 9975,
      bundle_id: 310,
      name: 'how-can-i-get-more-signals',
      title: 'How can I get more signals?',
      url_alias: 'how-can-i-get-more-signals',
    },
  },
  {
    id: 9975,
    name: 'how-can-i-get-more-signals',
    title: 'How can I get more signals?',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 310,
    url_alias: 'how-can-i-get-more-signals',
    atoms: [
      {
        id: 242618,
        type: 'paragraph',
        value: {
          text: "There are two ways that you can unlock more trading signals: by raising your status on Trader's Way, or by purchasing signals via the Market. \n\n",
        },
      },
      {
        id: 242619,
        type: 'paragraph',
        value: {
          text: '\nTake note that some signals are not included in statuses and can only be acquired from the Market.',
        },
      },
      {
        id: 245215,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/signalstrading.c7e401d26b1d96c31e3030ffcc3d087e.png',
            width: 1424,
            height: 1492,
          },
        },
      },
    ],
    next_playlist: {
      id: 9985,
      bundle_id: 310,
      name: 'Can-I-trust-trading-signals',
      title: 'Can I trust trading signals?',
      url_alias: 'can-i-trust-trading-signals',
    },
  },
  {
    id: 9985,
    name: 'Can-I-trust-trading-signals',
    title: 'Can I trust trading signals?',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 310,
    url_alias: 'can-i-trust-trading-signals',
    atoms: [
      {
        id: 242620,
        type: 'paragraph',
        value: {
          text: "There is no way to predict the trend with 100% accuracy. However, signals are formed automatically by using the most objective tools and mathematical formulas. So, while you'll have to decide for yourself whether the forecast is accurate, you can take the signal into consideration when making your decision.",
        },
      },
    ],
    next_playlist: {
      id: 9995,
      bundle_id: 310,
      name: 'What-is-the-ticking-timer-in-the-signal',
      title: 'What is the ticking timer in the signal?',
      url_alias: 'what-is-the-ticking-timer-in-the-signal',
    },
  },
  {
    id: 9995,
    name: 'What-is-the-ticking-timer-in-the-signal',
    title: 'What is the ticking timer in the signal?',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 310,
    url_alias: 'what-is-the-ticking-timer-in-the-signal',
    atoms: [
      {
        id: 242621,
        type: 'paragraph',
        value: {
          text: 'This is the time before the signal expires, as every signal is accurate only for a certain period of time.',
        },
      },
    ],
    next_playlist: {
      id: 10005,
      bundle_id: 310,
      name: 'Why-is-there-no-new-signal',
      title: 'Why is there no new signal?',
      url_alias: 'why-is-there-no-new-signal',
    },
  },
  {
    id: 10005,
    name: 'Why-is-there-no-new-signal',
    title: 'Why is there no new signal?',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 310,
    url_alias: 'why-is-there-no-new-signal',
    atoms: [
      {
        id: 242622,
        type: 'paragraph',
        value: {
          text: 'There could be four reasons on why you have no new signals available:\n\n\n',
        },
      },
      {
        id: 242623,
        type: 'paragraph',
        value: {
          text: '1. You are trading on SPT mode where trading signals are not available. In this case, you will need to choose an FTT or Forex asset to have access to signals.',
        },
      },
      {
        id: 242624,
        type: 'paragraph',
        value: {
          text: '2. You are waiting for notifications for Intraday and Swing signals while you have access only to Scalping signals. You can look up the list of available assets. ',
        },
      },
      {
        id: 242625,
        type: 'paragraph',
        value: {
          text: '3. The asset itself is closed for trading at the moment.',
        },
      },
      {
        id: 242626,
        type: 'paragraph',
        value: {
          text: '\n4. Not enough time has passed since the last signal was posted. ',
        },
      },
    ],
    next_playlist: {
      id: 10015,
      bundle_id: 310,
      name: 'How-long-do-I-have-to-wait-for-a-new-signal',
      title: 'How long do I have to wait for a new signal?',
      url_alias: 'how-long-do-i-have-to-wait-for-a-new-signal',
    },
  },
  {
    id: 10015,
    name: 'How-long-do-I-have-to-wait-for-a-new-signal',
    title: 'How long do I have to wait for a new signal?',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 310,
    url_alias: 'how-long-do-i-have-to-wait-for-a-new-signal',
    atoms: [
      {
        id: 242627,
        type: 'paragraph',
        value: {
          text: 'New signals appear after the last one expires. For example, if you are a Starter with access to free 60 second signals, then you only need to wait 60 seconds for a new one to appear. The same goes for longer signals such as a 60 minute signal that requires an hour. ',
        },
      },
    ],
    next_playlist: {
      id: 10025,
      bundle_id: 310,
      name: 'On-which-trading-modes-can-I-find-signals',
      title: 'On which trading modes can I find signals?',
      url_alias: 'on-which-trading-modes-can-i-find-signals',
    },
  },
  {
    id: 10025,
    name: 'On-which-trading-modes-can-I-find-signals',
    title: 'On which trading modes can I find signals?',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 310,
    url_alias: 'on-which-trading-modes-can-i-find-signals',
    atoms: [
      {
        id: 242628,
        type: 'paragraph',
        value: {
          text: 'You can find trading signals for assets traded on FTT and Forex modes.',
        },
      },
    ],
    next_playlist: {
      id: 11015,
      bundle_id: 310,
      name: 'How-can-I-get-notifications-about-new-signals',
      title: 'How can I get notifications about new signals?',
      url_alias: 'how-can-i-get-notifications-about-new-signals',
    },
  },
  {
    id: 11015,
    name: 'How-can-I-get-notifications-about-new-signals',
    title: 'How can I get notifications about new signals?',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 310,
    url_alias: 'how-can-i-get-notifications-about-new-signals',
    atoms: [
      {
        id: 242677,
        type: 'paragraph',
        value: {
          text: 'You can turn on notifications for signals in the Settings menu under the Notifications tab. Take note that notifications are available only for Intraday and Swing assets.',
        },
      },
    ],
    next_playlist: {
      id: 8897,
      bundle_id: 311,
      name: 'what-are-advisers',
      title: 'What are Advisers?',
      url_alias: 'what-are-advisers',
    },
  },
  {
    id: 8897,
    name: 'what-are-advisers',
    title: 'What are Advisers?',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 311,
    url_alias: 'what-are-advisers',
    atoms: [
      {
        id: 242495,
        type: 'paragraph',
        value: {
          text: 'These algorithms advise you on when it is best to open favorable trades. Advisers carefully monitor any changes in the trend and determine beneficial moments for opening a trade. Utilize the MACD adviser, the Moving Average adviser, and the Predator adviser to trade with more confidence.',
        },
      },
      {
        id: 244915,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/6555.3e55befa66ac09688719b17c7a7d5d72.png',
            width: 1424,
            height: 1190,
          },
        },
      },
    ],
    next_playlist: {
      id: 8898,
      bundle_id: 311,
      name: 'macd-adviser',
      title: 'MACD Adviser',
      url_alias: 'macd-adviser',
    },
  },
  {
    id: 8897,
    name: 'what-are-advisers',
    title: 'What are Advisers?',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 311,
    url_alias: 'what-are-advisers',
    atoms: [
      {
        id: 242495,
        type: 'paragraph',
        value: {
          text: 'These algorithms advise you on when it is best to open favorable trades. Advisers carefully monitor any changes in the trend and determine beneficial moments for opening a trade. Utilize the MACD adviser, the Moving Average adviser, and the Predator adviser to trade with more confidence.',
        },
      },
      {
        id: 244915,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/6555.3e55befa66ac09688719b17c7a7d5d72.png',
            width: 1424,
            height: 1190,
          },
        },
      },
    ],
    next_playlist: {
      id: 8898,
      bundle_id: 311,
      name: 'macd-adviser',
      title: 'MACD Adviser',
      url_alias: 'macd-adviser',
    },
  },
  {
    id: 8898,
    name: 'macd-adviser',
    title: 'MACD Adviser',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 311,
    url_alias: 'macd-adviser',
    atoms: [
      {
        id: 242496,
        type: 'paragraph',
        value: {
          text: 'The MACD adviser provides non-stop trading signals based on the MACD strategy. Entrust your market analysis to an automated system.',
        },
      },
      {
        id: 242497,
        type: 'paragraph',
        value: {
          text: 'Based on three indicators: MACD, Parabolic SAR, and EMA, it supplies effective analysis for Fixed Time trading.',
        },
      },
      {
        id: 244925,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/6666.0c79b315181fec70a4c1af4cfffd6765.png',
            width: 1424,
            height: 1490,
          },
        },
      },
      {
        id: 244935,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/6777.16baae17c3dedccdc8170b3b99890da3.png',
            width: 1424,
            height: 1490,
          },
        },
      },
    ],
    next_playlist: {
      id: 8899,
      bundle_id: 311,
      name: 'predator-adviser',
      title: 'Predator Adviser',
      url_alias: 'predator-adviser',
    },
  },
  {
    id: 8899,
    name: 'predator-adviser',
    title: 'Predator Adviser',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 311,
    url_alias: 'predator-adviser',
    atoms: [
      {
        id: 242498,
        type: 'paragraph',
        value: {
          text: 'The Predator adviser generates trade-entry recommendations based on the unique Predatory Look strategy. It is based on a combination of two very effective indicators: Alligator and Awesome Oscillator.',
        },
      },
      {
        id: 242499,
        type: 'paragraph',
        value: {
          text: 'Designed for use in Fixed Time mode.',
        },
      },
      {
        id: 244945,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/6888.bc159a17e4abdfe60ec39df05740d257.png',
            width: 1424,
            height: 1490,
          },
        },
      },
      {
        id: 244955,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/7000.f7d9110ba4c7386cb41cb4c03c29e7dd.png',
            width: 1424,
            height: 1490,
          },
        },
      },
    ],
    next_playlist: {
      id: 8916,
      bundle_id: 311,
      name: 'sliding-on-averages-adviser',
      title: 'Sliding on Averages Adviser',
      url_alias: 'sliding-on-averages-adviser',
    },
  },
  {
    id: 8916,
    name: 'sliding-on-averages-adviser',
    title: 'Sliding on Averages Adviser',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 311,
    url_alias: 'sliding-on-averages-adviser',
    atoms: [
      {
        id: 242500,
        type: 'paragraph',
        value: {
          text: 'The Sliding on Averages adviser provides ready-to-use signals from one of the most popular strategies for both beginners and experienced traders. The adviser signals when two moving averages with different periods intersect.',
        },
      },
    ],
    next_playlist: {
      id: 8917,
      bundle_id: 311,
      name: 'when-to-use-advisers',
      title: 'When to Use Advisers?',
      url_alias: 'when-to-use-advisers',
    },
  },
  {
    id: 8917,
    name: 'when-to-use-advisers',
    title: 'When to Use Advisers?',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 311,
    url_alias: 'when-to-use-advisers',
    atoms: [
      {
        id: 242501,
        type: 'paragraph',
        value: {
          text: 'Advisers work best with Fixed Time trades. Use them to get a better idea of when to open potentially profitable trades.',
        },
      },
      {
        id: 242502,
        type: 'paragraph',
        value: {
          text: 'Probability plays an important role in all cases, as trading signals do not guarantee traders a 100% result.',
        },
      },
    ],
    next_playlist: {
      id: 8918,
      bundle_id: 311,
      name: 'how-can-you-get-advisers',
      title: 'How Can You Get Advisers?',
      url_alias: 'how-can-you-get-advisers',
    },
  },
  {
    id: 8918,
    name: 'how-can-you-get-advisers',
    title: 'How Can You Get Advisers?',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 311,
    url_alias: 'how-can-you-get-advisers',
    atoms: [
      {
        id: 242503,
        type: 'paragraph',
        value: {
          text: 'You can get advisers right on the Olymptrade platform in the Market. Subscribe for a month or up to a year and take advantage of these advisers every time you trade.',
        },
      },
    ],
    next_playlist: {
      id: 1937,
      bundle_id: 249,
      name: 'how-to-subscribe',
      title: 'How to Subscribe',
      url_alias: 'how-to-subscribe',
    },
  },
  {
    id: 1937,
    name: 'how-to-subscribe',
    title: 'How to Subscribe',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 249,
    url_alias: 'how-to-subscribe',
    atoms: [
      {
        id: 241839,
        type: 'paragraph',
        value: {
          text: 'You can buy a subscription from your trading account by depositing the required amount to your trading account, selecting an extension and whether you want the subscription for 1, 3, 6 or 12 months.',
        },
      },
      {
        id: 244965,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/subscribeot.d37bc1e862053657a45d4a286d86a4b0.png',
            width: 1424,
            height: 1471,
          },
        },
      },
    ],
    next_playlist: {
      id: 1938,
      bundle_id: 249,
      name: 'can-i-buy-subscription-with-my-profits-from-trading',
      title: 'Can I Buy Subscription With My Profits from Trading?',
      url_alias: 'can-i-buy-subscription-with-my-profits-from-trading',
    },
  },
  {
    id: 1938,
    name: 'can-i-buy-subscription-with-my-profits-from-trading',
    title: 'Can I Buy Subscription With My Profits from Trading?',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 249,
    url_alias: 'can-i-buy-subscription-with-my-profits-from-trading',
    atoms: [
      {
        id: 241840,
        type: 'paragraph',
        value: {
          text: 'You can pay for the subscription with your own money. This includes both the funds that you have deposited in your trading account, and all the profit you have made on the platform.',
        },
      },
    ],
    next_playlist: {
      id: 1940,
      bundle_id: 250,
      name: 'where-can-i-find-the-extensions-i-have-purchased',
      title: 'Where can I find the extensions i have purchased?',
      url_alias: 'where-can-i-find-the-extensions-i-have-purchased',
    },
  },
  {
    id: 1940,
    name: 'where-can-i-find-the-extensions-i-have-purchased',
    title: 'Where can I find the extensions i have purchased?',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 250,
    url_alias: 'where-can-i-find-the-extensions-i-have-purchased',
    atoms: [
      {
        id: 241842,
        type: 'paragraph',
        value: {
          text: 'Open “My toolbox” tab in the “Market” menu. You will see all the extensions you have purchased or received on your Trader’s Way.',
        },
      },
      {
        id: 246785,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/rewardscorrect.d38b514fab94a0a13cf5d5fe51e47f4e.png',
            width: 1490,
            height: 1378,
          },
        },
      },
      {
        id: 246795,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/rewardscorrect2.0a95fb6a7c68431dd03bf79ddb940dba.png',
            width: 1490,
            height: 1378,
          },
        },
      },
    ],
    next_playlist: {
      id: 1941,
      bundle_id: 250,
      name: 'i-have-recieved-an-extension-for-the-xp-ive-earned-on-my-traders-way-where-can-i-find-it',
      title:
        "I have recieved an extension for the XP I've earned on my Trader's Way. Where can i find it?",
      url_alias:
        'i-have-recieved-an-extension-for-the-xp-i%27ve-earned-on-my-trader%27s-way-where-can-i-find-it',
    },
  },
  {
    id: 1941,
    name: 'i-have-recieved-an-extension-for-the-xp-ive-earned-on-my-traders-way-where-can-i-find-it',
    title:
      "I have recieved an extension for the XP I've earned on my Trader's Way. Where can i find it?",
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 250,
    url_alias:
      'i-have-recieved-an-extension-for-the-xp-i%27ve-earned-on-my-trader%27s-way-where-can-i-find-it',
    atoms: [
      {
        id: 241843,
        type: 'paragraph',
        value: {
          text: 'You will find all the active extensions in the “My toolbox” tab of the "Market" menu.',
        },
      },
    ],
    next_playlist: {
      id: 1942,
      bundle_id: 250,
      name: 'if-you-update-the-extension-will-i-have-to-pay-for-it-again',
      title: 'If you update the extension, will I have to pay for it again?',
      url_alias: 'if-you-update-the-extension-will-i-have-to-pay-for-it-again',
    },
  },
  {
    id: 1942,
    name: 'if-you-update-the-extension-will-i-have-to-pay-for-it-again',
    title: 'If you update the extension, will I have to pay for it again?',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 250,
    url_alias: 'if-you-update-the-extension-will-i-have-to-pay-for-it-again',
    atoms: [
      {
        id: 241844,
        type: 'paragraph',
        value: {
          text: 'No, you won’t need to pay for any updates.',
        },
      },
    ],
    next_playlist: {
      id: 1943,
      bundle_id: 250,
      name: 'can-i-use-the-extension-on-all-platform-versions',
      title: 'Can I use the extension on all platform versions?',
      url_alias: 'can-i-use-the-extension-on-all-platform-versions',
    },
  },
  {
    id: 1943,
    name: 'can-i-use-the-extension-on-all-platform-versions',
    title: 'Can I use the extension on all platform versions?',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 250,
    url_alias: 'can-i-use-the-extension-on-all-platform-versions',
    atoms: [
      {
        id: 241845,
        type: 'paragraph',
        value: {
          text: "You can use paid (unlock) extensions with any version of the platform: web versions (in your computer's browser or smartphone), mobile applications for iOS and Android, and desktop applications for Windows and macOS.",
        },
      },
    ],
    next_playlist: {
      id: 5014,
      bundle_id: 251,
      name: 'how-do-i-disable-auto-renewal',
      title: 'How do I disable auto-renewal?',
      url_alias: 'how-do-i-disable-auto-renewal',
    },
  },
  {
    id: 5014,
    name: 'how-do-i-disable-auto-renewal',
    title: 'How do I disable auto-renewal?',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 251,
    url_alias: 'how-do-i-disable-auto-renewal',
    atoms: [
      {
        id: 242101,
        type: 'paragraph',
        value: {
          text: '1. Go to the “Market”, then select “Purchased”. Click on the extension. ',
        },
      },
      {
        id: 242102,
        type: 'paragraph',
        value: {
          text: '2. You will see “Auto-renewal” written above "Next billing date" on the button. Click on this button to unsubscribe from the extension. ',
        },
      },
      {
        id: 242103,
        type: 'paragraph',
        value: {
          text: 'Here, you can also restart your auto-renewal to this extension.',
        },
      },
      {
        id: 242104,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/imgo.91593a81a92201ac79088699f1a17849.png',
            width: 1424,
            height: 928,
          },
        },
      },
      {
        id: 246835,
        type: 'paragraph',
        value: {
          text: 'Please note that auto-renewal must be disabled at least 2 days before the next 30-day period.',
        },
      },
    ],
    next_playlist: {
      id: 1945,
      bundle_id: 251,
      name: 'can-i-return-my-funds',
      title: 'Can I return my funds?',
      url_alias: 'can-i-return-my-funds',
    },
  },
  {
    id: 1945,
    name: 'can-i-return-my-funds',
    title: 'Can I return my funds?',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 251,
    url_alias: 'can-i-return-my-funds',
    atoms: [
      {
        id: 241847,
        type: 'paragraph',
        value: {
          text: 'You can get a partial refund on the subscription payment.  The amount of the refund depends on how many days you have been using the extension.',
        },
      },
    ],
    next_playlist: {
      id: 1946,
      bundle_id: 251,
      name: 'how-much-will-i-get-as-a-refund-when-i-unsubscribe',
      title: 'How much will i get as a refund when i unsubscribe?',
      url_alias: 'how-much-will-i-get-as-a-refund-when-i-unsubscribe',
    },
  },
  {
    id: 1946,
    name: 'how-much-will-i-get-as-a-refund-when-i-unsubscribe',
    title: 'How much will i get as a refund when i unsubscribe?',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 251,
    url_alias: 'how-much-will-i-get-as-a-refund-when-i-unsubscribe',
    atoms: [
      {
        id: 241848,
        type: 'paragraph',
        value: {
          text: '30-day subscription',
        },
      },
      {
        id: 241849,
        type: 'paragraph',
        value: {
          text: 'If you signed up for a 30-day subscription, you will not get a refund even if you cancel it the next day. However, you will be able to use the extension until the end of the month you paid for.',
        },
      },
      {
        id: 241850,
        type: 'paragraph',
        value: {
          text: 'Subscription for 30+ days',
        },
      },
      {
        id: 241851,
        type: 'paragraph',
        value: {
          text: 'If you have subscribed for more than 30 days, the refund policy is as follows. Your subscription period is divided into 30-day blocks (60 days = 2x30, etc.). If you cancel it, you will only get a refund for the 30-day periods that remain at the time of your request.',
        },
      },
      {
        id: 241852,
        type: 'paragraph',
        value: {
          text: 'For example, if a user has paid for a 90-day subscription and requested to cancel it on the 45th day, they will get a refund for the block from the 60th to the 90th day',
        },
      },
    ],
    next_playlist: {
      id: 1947,
      bundle_id: 251,
      name: 'how-do-i-apply-to-get-a-refund',
      title: 'How do I apply to get a refund?',
      url_alias: 'how-do-i-apply-to-get-a-refund',
    },
  },
  {
    id: 1947,
    name: 'how-do-i-apply-to-get-a-refund',
    title: 'How do I apply to get a refund?',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 251,
    url_alias: 'how-do-i-apply-to-get-a-refund',
    atoms: [
      {
        id: 241853,
        type: 'paragraph',
        value: {
          text: 'Contact our support team in any convenient way: by phone, via platform chat or email.',
        },
      },
    ],
    next_playlist: {
      id: 1948,
      bundle_id: 252,
      name: 'what-if-i-fail-to-pay-for-an-extension',
      title: 'What if I fail to pay for an extension?',
      url_alias: 'what-if-i-fail-to-pay-for-an-extension',
    },
  },
  {
    id: 1948,
    name: 'what-if-i-fail-to-pay-for-an-extension',
    title: 'What if I fail to pay for an extension?',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 252,
    url_alias: 'what-if-i-fail-to-pay-for-an-extension',
    atoms: [
      {
        id: 241854,
        type: 'paragraph',
        value: {
          text: 'Make sure there are enough funds in your trading account to pay for the subscription. If you encounter any problems, contact our support team.',
        },
      },
    ],
    next_playlist: {
      id: 1949,
      bundle_id: 252,
      name: 'i-still-have-questions-about-how-market-works',
      title: 'I Still Have Questions About How Market Works',
      url_alias: 'i-still-have-questions-about-how-market-works',
    },
  },
  {
    id: 1949,
    name: 'i-still-have-questions-about-how-market-works',
    title: 'I Still Have Questions About How Market Works',
    meta: null,
    category_id: 37,
    category_name: 'market-place',
    category_title: 'Market and platform extensions',
    category_url_alias: 'market-and-platform-extensions',
    bundle_id: 252,
    url_alias: 'i-still-have-questions-about-how-market-works',
    atoms: [
      {
        id: 241855,
        type: 'paragraph',
        value: {
          text: "If you can't find the answer to your question, please contact our 24/7 support team. Our specialists will be happy to help you.",
        },
      },
      {
        id: 246805,
        type: 'image',
        value: {
          large: {
            path: 'https://cfcdn.olymptrade.com/assets1/help-center/Market/supportcorrect.74712cfee8bf22c06acc6e9d081ec24c.png',
            width: 1490,
            height: 1248,
          },
        },
      },
    ],
    next_playlist: null,
  },
  {
    id: 20885,
    name: 'how-to-create',
    title: 'How do I create my own strategy?',
    meta: null,
    category_id: 1715,
    category_name: 'custom-strategies',
    category_title: 'Custom strategies',
    category_url_alias: 'custom-strategies',
    bundle_id: 5105,
    url_alias: 'how-do-i-create-my-own-strategy',
    atoms: [
      {
        id: 250045,
        type: 'paragraph',
        value: {
          text: 'You can create your own strategies, which consist of the indicators and oscillators you have on your chart.',
        },
      },
      {
        id: 250055,
        type: 'paragraph',
        value: {
          text: 'To do this, go to your list of active instruments and press Save as Strategy in the additional actions menu. A strategy creation screen will open where you’ll need to enter the name of your strategy and select the trading modes it will work on.',
        },
      },
    ],
    next_playlist: {
      id: 20895,
      bundle_id: 5105,
      name: 'how-to-name',
      title: 'How do I name my strategy?',
      url_alias: 'how-do-i-name-my-strategy',
    },
  },
  {
    id: 20895,
    name: 'how-to-name',
    title: 'How do I name my strategy?',
    meta: null,
    category_id: 1715,
    category_name: 'custom-strategies',
    category_title: 'Custom strategies',
    category_url_alias: 'custom-strategies',
    bundle_id: 5105,
    url_alias: 'how-do-i-name-my-strategy',
    atoms: [
      {
        id: 250075,
        type: 'paragraph',
        value: {
          text: 'The strategy’s name can only consist of Latin letters and digits.',
        },
      },
    ],
    next_playlist: {
      id: 20905,
      bundle_id: 5105,
      name: 'where-find',
      title: 'Where can I find my created strategies?',
      url_alias: 'where-can-i-find-my-created-strategies',
    },
  },
  {
    id: 20905,
    name: 'where-find',
    title: 'Where can I find my created strategies?',
    meta: null,
    category_id: 1715,
    category_name: 'custom-strategies',
    category_title: 'Custom strategies',
    category_url_alias: 'custom-strategies',
    bundle_id: 5105,
    url_alias: 'where-can-i-find-my-created-strategies',
    atoms: [
      {
        id: 250095,
        type: 'paragraph',
        value: {
          text: 'You’ll find your created strategies in the Strategies section of your trading tools, under Custom.',
        },
      },
    ],
    next_playlist: {
      id: 20915,
      bundle_id: 5105,
      name: 'can-i-alter',
      title: 'Can I alter my strategy?',
      url_alias: 'can-i-alter-my-strategy',
    },
  },
  {
    id: 20915,
    name: 'can-i-alter',
    title: 'Can I alter my strategy?',
    meta: null,
    category_id: 1715,
    category_name: 'custom-strategies',
    category_title: 'Custom strategies',
    category_url_alias: 'custom-strategies',
    bundle_id: 5105,
    url_alias: 'can-i-alter-my-strategy',
    atoms: [
      {
        id: 250105,
        type: 'paragraph',
        value: {
          text: 'No, once a strategy is saved, its name, composition of tools, and the trading modes it’s designed for can’t be changed.',
        },
      },
    ],
    next_playlist: {
      id: 20925,
      bundle_id: 5105,
      name: 'can-i-delete',
      title: 'Can I delete my strategy?',
      url_alias: 'can-i-delete-my-strategy',
    },
  },
  {
    id: 20925,
    name: 'can-i-delete',
    title: 'Can I delete my strategy?',
    meta: null,
    category_id: 1715,
    category_name: 'custom-strategies',
    category_title: 'Custom strategies',
    category_url_alias: 'custom-strategies',
    bundle_id: 5105,
    url_alias: 'can-i-delete-my-strategy',
    atoms: [
      {
        id: 250115,
        type: 'paragraph',
        value: {
          text: 'You can delete your strategy in the custom strategies list by going to the strategy’s details and deleting it there.',
        },
      },
    ],
    next_playlist: null,
  },
  {
    id: 11195,
    name: 'what-is-tether',
    title: 'What is Tether?',
    meta: null,
    category_id: 105,
    category_name: 'tether',
    category_title: 'Tether',
    category_url_alias: 'tether',
    bundle_id: 565,
    url_alias: 'what-is-tether',
    atoms: [
      {
        id: 242699,
        type: 'paragraph',
        value: {
          text: 'Tether (USDT) is a cryptocurrency that can be used to make a deposit to the Olymptrade platform.',
        },
      },
    ],
    next_playlist: {
      id: 11205,
      bundle_id: 575,
      name: 'how-do-i-fund-my-account6',
      title: 'How do I fund my account?',
      url_alias: 'how-do-i-fund-my-account',
    },
  },
  {
    id: 11205,
    name: 'how-do-i-fund-my-account6',
    title: 'How do I fund my account?',
    meta: null,
    category_id: 105,
    category_name: 'tether',
    category_title: 'Tether',
    category_url_alias: 'tether',
    bundle_id: 575,
    url_alias: 'how-do-i-fund-my-account',
    atoms: [
      {
        id: 242700,
        type: 'paragraph',
        value: {
          text: '1. Fill in the deposit amount and choose the payment method.',
        },
      },
      {
        id: 242701,
        type: 'paragraph',
        value: {
          text: "2. You'll be redirected to the page where you'll need to specify the refund address in case the transaction fails.",
        },
      },
      {
        id: 242702,
        type: 'paragraph',
        value: {
          text: "3. After that, you'll be sent to the page with a generated QR code that you'll need to scan, or you can send the desired amount of USDT directly to the given address.",
        },
      },
    ],
    next_playlist: {
      id: 11215,
      bundle_id: 575,
      name: 'when_will_the_funds_be_credited6',
      title: 'When will the funds be credited?',
      url_alias: 'when-will-the-funds-be-credited',
    },
  },
  {
    id: 11215,
    name: 'when_will_the_funds_be_credited6',
    title: 'When will the funds be credited?',
    meta: null,
    category_id: 105,
    category_name: 'tether',
    category_title: 'Tether',
    category_url_alias: 'tether',
    bundle_id: 575,
    url_alias: 'when-will-the-funds-be-credited',
    atoms: [
      {
        id: 242703,
        type: 'paragraph',
        value: {
          text: 'The funds are usually credited to your account within 24 hours.',
        },
      },
    ],
    next_playlist: {
      id: 11225,
      bundle_id: 585,
      name: 'how_to_withdraw_funds6',
      title: 'How to Withdraw Funds',
      url_alias: 'how-to-withdraw-funds',
    },
  },
  {
    id: 11225,
    name: 'how_to_withdraw_funds6',
    title: 'How to Withdraw Funds',
    meta: null,
    category_id: 105,
    category_name: 'tether',
    category_title: 'Tether',
    category_url_alias: 'tether',
    bundle_id: 585,
    url_alias: 'how-to-withdraw-funds',
    atoms: [
      {
        id: 242704,
        type: 'paragraph',
        value: {
          text: "If you are making a first-time withdrawal, then you'll need to register a new account with Cryptology.\nAfter that, you'll need to go to the Balances tab, choose Futures once there and click on the Withdrawal button. Here, you'll get two options - to use either an Omni or ERC20 protocol for your withdrawal. \nAnd finally, you'll need to specify your USDT wallet address.\n",
        },
      },
      {
        id: 242705,
        type: 'paragraph',
        value: {
          text: '\nAll subsequent withdrawals will only require you to choose Cryptology as your withdrawal method, fill in the desired amount, and email.',
        },
      },
      {
        id: 242706,
        type: 'paragraph',
        value: {
          text: 'Take note: there is a withdrawal fee that depends on the Ethereum exchange rate.',
        },
      },
      {
        id: 242707,
        type: 'paragraph',
        value: {
          text: '\nYou can see the funds available for the withdrawal on the Withdrawal page.',
        },
      },
    ],
    next_playlist: {
      id: 11235,
      bundle_id: 585,
      name: 'timeline-for-withdrawal6',
      title: 'Timeline for Withdrawal',
      url_alias: 'timeline-for-withdrawal',
    },
  },
  {
    id: 11235,
    name: 'timeline-for-withdrawal6',
    title: 'Timeline for Withdrawal',
    meta: null,
    category_id: 105,
    category_name: 'tether',
    category_title: 'Tether',
    category_url_alias: 'tether',
    bundle_id: 585,
    url_alias: 'timeline-for-withdrawal',
    atoms: [
      {
        id: 242709,
        type: 'paragraph',
        value: {
          text: 'Withdrawals are usually processed from 24h up to 5 business days. After which, reach out to Billing Support if you have not received your money.',
        },
      },
    ],
    next_playlist: {
      id: 13305,
      bundle_id: 585,
      name: 'imortant6',
      title: 'Important',
      url_alias: 'important',
    },
  },
  {
    id: 13305,
    name: 'imortant6',
    title: 'Important',
    meta: null,
    category_id: 105,
    category_name: 'tether',
    category_title: 'Tether',
    category_url_alias: 'tether',
    bundle_id: 585,
    url_alias: 'important',
    atoms: [
      {
        id: 242969,
        type: 'paragraph',
        value: {
          text: '• You can have only one pending request at a time. This means that you can request your next withdrawal after the first one is completed. ',
        },
      },
      {
        id: 242970,
        type: 'paragraph',
        value: {
          text: '• When you request a withdrawal, the money is not deducted from your balance immediately. It may take up to 5 business days. If the money is not deducted, you continue trading, and your balance falls below the requested amount, the withdrawal will be cancelled automatically.',
        },
      },
      {
        id: 242971,
        type: 'paragraph',
        value: {
          text: "• You don't need to verify your account separately to withdraw funds. You will only need to upload documents upon request. Verification provides additional security for the funds in your account. If your account needs to be verified, you will receive instructions on how to do it by email.",
        },
      },
    ],
    next_playlist: {
      id: 14225,
      bundle_id: 1675,
      name: 'mistakes-tether',
      title: 'Avoid Common Mistakes: Tether',
      url_alias: 'avoid-common-mistakes:-tether',
    },
  },
  {
    id: 14225,
    name: 'mistakes-tether',
    title: 'Avoid Common Mistakes: Tether',
    meta: null,
    category_id: 105,
    category_name: 'tether',
    category_title: 'Tether',
    category_url_alias: 'tether',
    bundle_id: 1675,
    url_alias: 'avoid-common-mistakes:-tether',
    atoms: [
      {
        id: 243079,
        type: 'paragraph',
        value: {
          text: 'Remember to complete your payment within 3 hours of receiving the payment invoice. If you don’t complete your payment in time, please go back and try again. \nPlease send the exact deposit amount indicated in your e-wallet without rounding up.',
        },
      },
    ],
    next_playlist: null,
  },
]
