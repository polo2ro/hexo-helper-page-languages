# hexo-helper-page-languages

Get available languages as links on one page


## Install

Install using [npm](https://www.npmjs.com/).

```bash

 $ npm install hexo-helper-page-languages --save

```

## Usage

### In your front-matter.

The default language:

```yaml

title: Hello World
lang: en
contentId: hello-word

```

A translated version:

```yaml

title: Bonjour le monde
lang: fr
contentId: hello-word

```

If contentId is not provided, the full path except language will be used as value. The contentId variable is really usefull only if your file names are translated.

This can come handy if you care about SEO.



### in your ejs templates

List all pages for the same contentId.

```html

<dl>
    <dt><%= __('footer.otherlang') %></dt>
    <% var versions = getPageLanguages();
    for (var i=0; i<versions.length; i++) { %>
    <dd><a href="<%= versions[i].url %>"><%= versions[i].label %></a></dd>
    <% } %>
</dl>

```
