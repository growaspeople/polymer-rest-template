polymer-rest-template
======================

Introduction
-------------
With polymer-rest-template, you can retrieve JSON from REST API, then apply variables in JSON into template.

For example,

```html
<ul>
  <rest-template src="https://api.github.com/search/repositories?q=user:phanect&sort=updated">
    <template>
      {{#each items}}
        <li><a href="{{ html_url }}">{{ name }}</a></li>
      {{/each}}
    </template>
  </rest-template>
</ul>
```

URL specified in `src` attribute < https://api.github.com/search/repositories?q=user:phanect&sort=updated > returns something like this:

```json
{
  "items": [
    {
      "name": "restament",
      "html_url": "https://github.com/phanect/restament"
    },
    {
      "name": "polymer-rest-template",
      "html_url": "https://github.com/phanect/polymer-rest-template"
    },
    {
      "name": "phanective.org",
      "html_url": "https://github.com/phanect/phanective.org"
    }
  ]
}
```

Above HTML with template produces following HTML:

```html
<ul>
  <li><a href="https://github.com/phanect/restament">restament</a></li>
  <li><a href="https://github.com/phanect/polymer-rest-template">polymer-rest-template</a></li>
  <li><a href="https://github.com/phanect/phanective.org">phanective.org</a></li>
</ul>
```

You can currently use handlebars as template language.
I'm considering to support multiple template engines in the future, but currently not because of performance problem.

Install
--------

```shell
$ bower install polymer-rest-template
```

I haven't registered this to Bower repository for now.
I will register it when it is a little bit more stable.

You can also use npm, but it is experimental. Bower is recommended.

```shell
$ npm install --save polymer-rest-template
```

Usage
-----

Load rest-template.html with `<link rel=import>`.
Be sure to load webcomponentsjs if your browser doesn't fully support web components (See webcomponents.org for current status)

```html
<!DOCTYPE html>
<html>
  <head>
    <title>polymer-rest-template</title>
    <script src="./bower_components/webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="./bower_components/polymer-rest-template/rest-template.html">
  </head>
  <body>
    <rest-template src="http://localhost/api/v1/something/1">
      <template>
        id: {{ id }}, description: {{ description }}
      </template>
    </rest-template>
  </body>
</html>
```
