# Small-ify, a URL Shortening API

### Built for all of your URL shortening needs.

> Pass a URL as a URL parameter and you'll receive a shortened URL in the JSON response.

> If you pass an invalid URL that doesn't follow the valid `http://www.example.com` format, the JSON response will contain an error instead.

> When you visit the shortened URL, you'll be redirected to your original link.

### Example Usage:

[https://small-ify.herokuapp.com/http://www.example.com/](https://small-ify.herokuapp.com/http://www.example.com/)

### Example Output:

The following JSON response will be returned.
```
{
  url: http://www.example.com/,
  shortUrl: https://small-ify.herokuapp.com/randomcharactershere
}
```

Developed for a Free Code Camp project. Original project idea link: [https://www.freecodecamp.com/challenges/url-shortener-microservice](https://www.freecodecamp.com/challenges/url-shortener-microservice)