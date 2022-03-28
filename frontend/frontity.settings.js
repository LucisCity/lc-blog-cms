const settings = {
  "name": "coin98-clone",
  "state": {
    "frontity": {
      "url": "http://localhost:3000/",
      "title": "Test Frontity Blog",
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
          "url": "http://wp-api.local/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
