const settings = {
  "name": "lucis-blog",
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
          "url": process.env.API_URL,
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
