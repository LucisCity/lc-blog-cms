function removeSchema(url) {
  return url.replace(/^https?:\/\//, '');
}

const settings = [
  {
    "name": "lucis-blog-en",
    "match": [`${removeSchema(process.env.BLOG_URL)}/en/`],
    "state": {
      "frontity": {
        "url": `${process.env.BLOG_URL}/en`,
        "title": "Lucis blog english",
        "description": "WordPress installation for Frontity development"
      }
    },
    "packages": [
      {
        "name": "lucis-theme",
      },
      {
        "name": "@frontity/wp-source",
        "state": {
          "source": {
            "api": `${process.env.API_URL}/wp-json`,
            "subdirectory": "/en",
            "params": {
              "lang": "en"
            },
          }
        }
      },
      "@frontity/tiny-router",
      "@frontity/html2react",
      "@frontity/yoast"
    ]
  },

  {
    "name": "lucis-blog",
    "match": [`${removeSchema(process.env.BLOG_URL)}`],
    "state": {
      "frontity": {
        "url": process.env.BLOG_URL,
        "title": "Lucis blog",
        "description": "WordPress installation for Frontity development"
      }
    },
    "packages": [
      {
        "name": "lucis-theme",
      },
      {
        "name": "@frontity/wp-source",
        "state": {
          "source": {
            "api": `${process.env.API_URL}/wp-json`,
            "params": {
              "lang": "vi"
            },
          }
        }
      },
      "@frontity/tiny-router",
      "@frontity/html2react",
      "@frontity/yoast"
    ]
  },
]

export default settings