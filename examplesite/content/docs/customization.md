---
title: Customization
description: Describes common Roadster theme configuration parameters that can be adjusted via config file or via Front
  Matter section.
lead: Describes common Roadster theme configuration parameters that can be adjusted via config file or via Front Matter
  section.
date: 2025-01-06 
thumbnail:
  src: "img/placeholder.png"
  visibility:
    - list
authorbox: false
sidebar: false
pager: false
weight: 2
menu: main
---

Customization page describes common Roadster configuration parameters which can be specified via configuration file or
via Front Matter section. That includes logo section tuning, adding a sidebar with widgets, adjusting highlight color,
and more.

<!--more-->

## Examples 

### Configuration Example
```toml
baseurl = "https://roadster.pages.dev"
title = "roadster"
languageCode = "en-us"
# paginate = "10" # DEPRECATED! Use pagination.pagerSize below
theme = "roadster" 
# disqusShortname = "" # DEPRECATED! Use .Services.Disqus.Shortname below
# googleAnalytics = "" # DEPRECATED! Use .Services.googleAnalytics.ID below

# Configure Pagination. See https://gohugo.io/templates/pagination/#configuration
[pagination]
  pagerSize = 10 # (int) The number of articles per pager. Default is 10
  #index = 10 # (int) The number of articles on the index-page per pager. Default is pagerSize from above. 

[services]
  [services.googleAnalytics]
    id = 'G-MEASUREMENT_ID'  # Enable Google Analytics by entering your tracking id
  [services.disqus]
    shortname = 'your-disqus-shortname' # Enable Disqus by entering your Disqus shortname

# Goldmark renders raw HTML mixed within the Markdown
[markup.goldmark.renderer]
  unsafe = true # N.B. This is unsafe unless the content is under your control.  Set to false if you don't mix HTML with markdown.

[Params]
  description = "John Doe's Personal blog about everything" # Site description. Used in meta description
  copyright = "John Doe" # Footer copyright holder, otherwise will use site title
  opengraph = true # Enable OpenGraph if true
  schema = true # Enable Schema
  twitter_cards = true # Enable Twitter Cards if true
  readmore = false # Show "Read more" button in list if true
  authorbox = true # Show authorbox at bottom of pages if true
  toc = true # Enable Table of Contents
  pager = true # Show pager navigation (prev/next links) at the bottom of pages if true
  post_meta = ["author", "date", "categories", "translations"] # Order of post meta information
  mainSections = ["post", "blog", "news"] # Specify section pages to show on home page and the "Recent articles" widget
  dateformat = "2006-01-02" # Change the format of dates
  mathjax = true # Enable MathJax
  mathjaxPath = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.6/MathJax.js" # Specify MathJax path
  mathjaxConfig = "TeX-AMS-MML_HTMLorMML" # Specify MathJax config
  googleFontsLink = "https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700" # Load Google Fonts
  customCSS = ["css/custom.css"] # Include custom CSS files
  customJS = ["js/custom.js"] # Include custom JS files
  

[params.author]
  name = "John Doe"
  bio = "John Doe's true identity is unknown. Maybe he is a successful blogger or writer. Nobody knows it."
  avatar = "img/avatar.png"

  # DEPRECATED PARAMS
  subtitle = "" # Deprecated in favor of .Site.Params.logo.subtitle
  highlightColor = "" # Deprecated in favor of .Site.Params.style.vars.highlightColor

[Params.style.vars]
  highlightColor = "#e22d30" # Override highlight color

  # Override font-family sets
  # Take care of different quotes OR escaping symbols in these params if necessary
  fontFamilyPrimary = "'Open Sans', Helvetica, Arial, sans-serif"
  # Secondary font-family set responsible for pre, code, kbd, and samp tags font
  fontFamilySecondary = "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"

[Params.logo]
  image = "img/placeholder.png" # Logo image. Path relative to "static"
  title = "Roadster" # Logo title, otherwise will use site title
  subtitle = "Just another site" # Logo subtitle

[Params.thumbnail]
  visibility = ["list", "post"] # Control thumbnail visibility

[Params.sidebar]
  home = "right" # Configure layout for home page
  list = "left"  # Configure layout for list pages
  single = false # Configure layout for single pages
  # Enable widgets in given order
  widgets = ["search", "recent", "categories", "taglist", "social", "languages"]

[Params.widgets]
  recent_num = 5 # Set the number of articles in the "Recent articles" widget
  categories_counter = false # Enable counter for each category in "Categories" widget
  tags_counter = false # Enable counter for each tag in "Tags" widget

[Params.widgets.social]
  cached = false # activate cache if true
  # Enable parts of social widget
  facebook = "username"
  twitter = "username"
  instagram = "username"
  linkedin = "username"
  telegram = "username"
  github = "username"
  gitlab = "username"
  bitbucket = "username"
  email = "example@example.com"
  discourse = "username"
  mastodon = "username"

# Custom social links
[[Params.widgets.social.custom]]
  title = "Youtube"
  url = "https://youtube.com/user/username"
  icon = "youtube.svg" # Optional. Path relative to "layouts/partials"
  rel = "noopener noreferrer" # Set to false to remove the rel attribute

[[Params.widgets.social.custom]]
  title = "My Home Page"
  url = "https://example.com"

[Params.widgets.search]
  cached = false # activate cache if true
  url = "https://google.com/search"
  [Params.widgets.search.input]
    name = "sitesearch"
    pre = ""
```

### Post Frontmatter Example
```yaml
---
# Common-Defined params
title: "Example article title"
date: "2017-08-21"
description: "Example article description"
categories:
  - "Category 1"
  - "Category 2"
tags:
  - "Test"
  - "Another test"
menu: main # Optional, add page to a menu. Options: main, side, footer

# Theme-Defined params
thumbnail: "img/placeholder.png" # Thumbnail image
lead: "Example lead - highlighted near the title" # Lead text
comments: false # Enable Disqus comments for specific page
authorbox: true # Enable authorbox for specific page
pager: true # Enable pager navigation (prev/next) for specific page
toc: true # Enable Table of Contents for specific page
mathjax: true # Enable MathJax for specific page
sidebar: "right" # Enable sidebar (on the right side) per page
widgets: # Enable sidebar widgets in given order per page
  - "search"
  - "recent"
  - "taglist"
---
```

This section will mainly cover customization settings that are unique to this theme. If something is not covered here,
there's a good chance it is covered somewhere in [Hugo docs](https://gohugo.io/documentation/).

### Logo

**Roadster** allows you to set a custom logo in the site header. You may use text, or image, or both. Use the following
options in your site config:

```toml
[Params.logo]
  image = "img/placeholder.png"
  title = "Roadster"
  subtitle = "Just another site"
```

**Note:** logo image will display at a maximum width of 128 pixels and a maximum height of 128 pixels
when you use text and image simultaneously. When the only logo image is active, it will display at a maximum height of
256 pixels. Ideally, your logo image should be SVG.

---

If you don't set any of these variables, the theme uses the site title as a logo title. Don't need a logo section?
Disable it this way:

```toml
[Params.logo]
  image = false
  title = false
  subtitle = false
```

### Highlight color

Roadster uses `#e22d30` as a default highlight color, but you may choose and set any other color.

```toml
[Params.style.vars]
  highlightColor = "#e22d30"
```

### Post meta

Post meta is a feature that refers to including additional meta information (such as author name, categories, date,
translations, etc.) on pages. It can be enabled via config using the `post_meta` key with a list of meta field names as
value. Order matters here: rearrange fields if you want to.

```toml
[Params]
  post_meta = ["author", "date", "categories", "translations"]
```

Full list of available default post meta fields:

* `author`, `categories`, `date`, `translations`

In addition to the default meta fields, you can add your own by placing a custom partial under
`layouts/partials/post_meta/<name>.html`.

#### Post meta: `date` localization

With [Hugo v0.87.0](https://gohugo.io/news/0.87.0-relnotes/) (or later), `date` meta field shows localized dates (with
weekdays and months in the current language) by default. In most cases, such a transition is painless, but owners of
multilingual sites should be careful and check that everything translates as expected after the upgrade.

You can also use a predefined layout, like `:date_full`, and it will output localized dates or times. For additional
information about localized dates and possible date/time formatting layouts, please see
[Hugo: time.Format](https://gohugo.io/functions/dateformat/).

### Thumbnail visibility

By default, a thumbnail image has shown for a list and single pages simultaneously. In some cases, you may want to show
a thumbnail for list-like pages only and hide it on single pages (or vice versa). Control global thumbnail visibility
via config, use the key `visibility` with combination of valid values `"list"` and `"post"`.

```toml
[Params.thumbnail]
  # Show thumbnail only for list items
  visibility = ["list"]
```

Besides global configuration, you can change thumbnail visibility individually with extended thumbnail notation via
front matter block.

```yaml
thumbnail:
  src: "img/placeholder.png"
  visibility:
    - list
    - post
```

This page is an example of list-only thumbnail visibility.

### Sidebar

**Roadster** comes with a configurable sidebar that can be on the left, on the right, or disabled. The default layout
can be specified in the `[Params.sidebar]` section of the configuration. The position can be specified for home, list
and single pages individually. Use the keys `home`, `list` and `single` with values `"left"`, `"right"` or `false`.

```toml
[Params.sidebar]
  home = "right"
  list = "right"
  single = "right"
```

The layout can be configured per page, by setting the `sidebar` parameter with one of the same values (`"left"`,
`"right"` or `false`) in the page's front matter.

```yaml
sidebar: "left" # Enable sidebar (on the left side) per page
```

The sidebar consists of multiple widgets. Widgets can be enabled individually using the `widgets` key with a list of
widget names as value. You can add your own widgets, by placing a template under `layouts/partials/widgets/<name>.html`.

```toml
[Params.sidebar]
  # Enable widgets in given order
  widgets = ["search", "recent", "categories", "taglist", "social", "languages"]
```

The list of widgets can be overwritten from a page's front matter.

```yaml
# Enable sidebar widgets in given order
widgets:
  - "search"
  - "recent"
  - "taglist"
```

Full list of available default widgets:

* `search`, `ddg-search`, `recent`, `categories`, `taglist`, `social`, `languages`

**Note**: DuckDuckGo widget (`ddg-search`) deprecated in favor of `search` widget.

---

Some of our widgets respect optional configuration. Have a look at the `[Params.widgets]` and `[Params.widgets.social]`
sections in the example below.

```toml
[Params.widgets]
  recent_num = 5 # Set the number of articles in the "Recent articles" widget
  categories_counter = false # Enable counter for each category in "Categories" widget
  tags_counter = false # Enable counter for each tag in "Tags" widget
```

```toml
[Params.widgets.social]
  # Enable parts of social widget
  facebook = "username"
  twitter = "username"
  instagram = "username"
  linkedin = "username"
  telegram = "username"
  github = "username"
  gitlab = "username"
  bitbucket = "username"
  email = "example@example.com"
  discourse = "username"
  mastodon = "username"
  bluesky = "username"
```

### Widget caching

Sidebar strongly affects overall build time, especially if you are using all of our widgets or even more. Widget caching
can significantly improve the generation time. Cached partials remain the same for all affected pages and are not
generated multiple times by Hugo. All built-in widgets (`search`, `recent`, `categories`, `taglist`, `social`,
`languages`) support caching.

Add `cached = true` inside the corresponding widget's dictionary table to activate caching. For example, to cache the
`recent` widget:

```toml
[Params.widgets.recent]
  cached = true
```

The following sample configuration extract shows how to cache all standard widgets and generate your website faster:

```toml
[Params.widgets.search]
  cached = true

[Params.widgets.recent]
  cached = true

[Params.widgets.categories]
  cached = true

[Params.widgets.taglist]
  cached = true

[Params.widgets.social]
  cached = true

[Params.widgets.languages]
  cached = true
```

Not all widgets are cacheable. If a widget contains (can contain) different data for different pages (e.g., for TOC
generation), then it should not be cached. Always check that your modified/customized widget is cached correctly.

### Social Widget: custom links

**Roadster** contains built-in social links in the social widget. In addition to default social links, you may set
custom links by adding `Params.widgets.social.custom` to your `config.toml`. Here is an example:

```toml
[[Params.widgets.social.custom]]
  title = "My Home Page"
  url = "https://example.com"
```

If you want to display an icon of your social link, you need to put SVG icon file in `layouts/partials` directory under
your site's root. The `icon` key filed, which is optional, should be a path relative to `layouts/partials`.

```toml
[[Params.widgets.social.custom]]
  title = "Youtube"
  url = "https://youtube.com/user/username"
  icon = "youtube.svg"
```

**Note:** *Only* SVG files are supported to be used as custom social icons. If you use any other files, PNG for example,
a compile error will be raised by Hugo. Moreover, not every SVG icon can be used. For better results, it should be
one-color SVG file with a special class attribute `{{ with .class }}{{ . }} {{ end }}` and 24x24 size. At a minimum,
custom SVG icon needs these attributes:

```html
<svg class="{{ with .class }}{{ . }} {{ end }} icon" width="24" height="24">...</svg>
```

You can also specify the `rel` attribute for the link. By default, the attribute value is `"noopener noreferrer"`. You can remove the attribute completely by setting its value to `false`.

```toml
[[Params.widgets.social.custom]]
  title = "My Home Page"
  url = "https://example.com"
  rel = "me"

[[Params.widgets.social.custom]]
  title = "Youtube"
  url = "https://youtube.com/user/username"
  rel = false
```

### Search box widget

The search box widget can refer to the results of Google, Bing, and DuckDuckGo searches. By default, Roadster uses
Google search if no additional configuration options are specified.

To use a different search engine, first of all, check that the search widget is enabled. Then set the search parameters
(`Site.Params.widgets.search` section) according to the data below.

**Google (default)**:

```toml
[Params.widgets.search]
  url = "https://google.com/search"
  [Params.widgets.search.input]
    name = "sitesearch"
    pre = ""
```

**DuckDuckGo**:

```toml
[Params.widgets.search]
  url = "https://duckduckgo.com/"
  [Params.widgets.search.input]
    name = "sites"
    pre = ""
```

**Bing**:

```toml
[Params.widgets.search]
  url = "https://www.bing.com/search"
  [Params.widgets.search.input]
    name = "q1"
    pre = "site:"
```

**Google PSE**:

```toml
[Params.widgets.search]
  url = "/search/"
  [Params.widgets.search.input]
    name = false
    pre = ""
```

Note that Google PSE requires additional steps to work correctly.
See [Creating a Programmable Search Engine](https://developers.google.com/custom-search/docs/tutorial/creatingcse) and
especially our [FAQ]({{< relref "/docs/faq.md" >}} "Roadster FAQ") for more instructions.

### Menus

**Roadster** supports multiple menus. The `main` menu is fully responsive and displayed right under the site header. The
secondary menus `side` and `footer` are displayed in a sidebar widget and the page footer respectively. To add a page to
a menu, add a `menu: <menu>` parameter to the page's front matter:

```yaml
menu: main # Add page to a main menu
```

**Note:** Don't forget to enable the `sidemenu` widget in the `widgets` configuration param if you want to use the
`side` menu.

---

You can also add a page to multiple menus by providing a list:

```yaml
# Add page to a main, side, and footer menu
menu:
  - main
  - side
  - footer
```

**Note:** Please keep in mind that Roadster menus don't support nested items i.e. submenus.

See [Menus](https://gohugo.io/content-management/menus/#readout) from official Hugo documentation for more info.

### Custom Google Fonts support

Roadster uses Open Sans from Google Fonts as a main font. But you can use any other font from Google Fonts if you'd
like. Beware, in most cases, such changes require manual CSS adjustment because every set of fonts is different and
might not look as good as our default font.

Follow the procedure below.

1. Open Google Fonts, choose font(s) that you prefer and copy href font link. For this particular example, we choose
[Roboto with 3 different styles](https://fonts.google.com/share?selection.family=Roboto:ital,wght@0,400;0,700;1,400;1,700).
Our href font link:

    ```
    https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap
    ```

1. Set `googleFontsLink` site's config param value to your href font link. For example:

    ```toml
    [Params]
      googleFontsLink = "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap"
    ```

1. Override default font-family set(s):

    ```toml
    [Params.style.vars]
      fontFamilyPrimary = "'Roboto', sans-serif"
    ```

---

It is possible to disable Google Fonts and use system font stack instead.

1. Disable Google Fonts include. Set `googleFontsLink` site's config param value to `false`:

    ```toml
    [Params]
      googleFontsLink = false
    ```

1. Override font-family sets:

    ```toml
    [Params.style.vars]
      # Override font-family sets. Take care of different quotes OR escaping symbols in these params if necessary
      fontFamilyPrimary = "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
      # Secondary font-family set responsible for pre, code, kbd, and samp tags font
      fontFamilySecondary = "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
    ```

[Edit this page on GitHub](https://github.com/mansoorbarri/Roadster/blob/master/exampleSite/content/docs/customization.md)
