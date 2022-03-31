const settings = {
  "name": "lucis-blog",
  "state": {
    "frontity": {
      "url": "http://localhost:13501/",
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
          "url": "http://localhost:13500/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
