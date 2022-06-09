module.exports = {
  "title": "k-Blog",
  "description": "Welcome my friend",
  "dest": "public",
  "base": "kjuns",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/DLAM.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时光",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "文档",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "我的",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/1085348082",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ],
      "/blogs/JavaSE/": [
        "",
        "JavaSE1",
        "JavaSE2",
        "JavaSE3",
        "JavaSE4",
        "JavaSE5",
        "JavaSE6",
        "JavaSE7",
        "JavaSE8",
        "JavaSE9",
        "JavaSE10",
      ],
      "/blogs/write/": [
        "",
        "hello-my-blog",
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [//友链
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/clothes.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "kjuns",
    "authorAvatar": "/clothes.png",
    "record": "xxxx",
    "startYear": "2021"
  },
  "markdown": {
    "lineNumbers": true
  },
  "plugins": [
    ['@vuepress-reco/comments', {
      solution: 'valine',
      options: {
        appId: 'GohBwk9J3N1yklPwRUr7pkNN-gzGzoHsz',// your appId
        appKey: 'NnuxI6rH21OGXTOMcF7dz9Ro', // your appKey
      }
    }],
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ['blackCat', 'whiteCat'],
        clean: false,
        messages: {
          welcome: '欢迎光临Kjuns的个人空间哦',
          home: '心里的花，我想要带你回家。',
          theme: '想看看我的其他小伙伴吗hhh。',
          close: '拜拜~~'
        }
      }
    ],
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",
      {
        audios: [
          {
            name: '银色飞行船',
            artist: 'supercell',
            url: '/bgm/supercell.mp3',
            cover: '/bgm/supercell.jpg'
          },
          {
            name: '可乐',
            artist: '赵紫骅',
            url: '/bgm/可乐.mp3',
            cover: '/bgm/可乐.jpg'
          },
        ],
        autoShrink: true,
        shrinkMode: 'mini',
      }
    ]
  ]
}
