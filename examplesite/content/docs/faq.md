---
title: Frequently asked questions (FAQ)
description: Browse this FAQ page to find answers to frequently asked questions that have not been covered elsewhere in
  the documentation.
date: 2022-01-24T14:00:00.000Z
authors:
  - "John Doe"
sidebar: false
pager: false
weight: 3
menu:
  main:
    name: FAQ
---

Browse this FAQ page to find answers to frequently asked questions that have not been covered elsewhere
in the documentation.

<!--more-->

The answers have been categorized into two groups:

1. Answers to general questions without any lines of code.
2. Answers to technical questions with code snippets, step-by-step instructions, etc.

## General questions

### Do I need to have prior experience before proceeding with the Roadster theme?

**Yes.** You'll need to be familiar with Hugo before proceeding.
[Our docs section]({{< ref "/docs/_index.md" >}} "Roadster theme documentation") is intended for intermediate to
advanced users and developers. Our documentation may still be helpful to users with minimal experience, but are not
comprehensive.

### Do I need to use the extended version of Hugo?

**No.** Roadster theme intentionally does not use any features of the extended version. As such, the extended version of
Hugo is not required (but applicable).

### Is there a list of all possible configuration options?

**Configuration:**

* See [All Configuration Settings](https://gohugo.io/getting-started/configuration/#all-configuration-settings)
for the full list of Hugo-defined variables with their default values.
* See [Roadster config.toml example](http://localhost:1313/docs/customization/#configuration-example) for the full list of
Roadster-specific variables.

**Front Matter:**

* See [Front Matter Variables](https://gohugo.io/content-management/front-matter#front-matter-variables) for the
list of Hugo-defined Front Matter variables.
* See [Roadster Front Matter example](https://github.com/mansoorbarri/Roadster#front-matter-example) for the list of
Roadster-specific Front Matter variables.

### What if I have more questions? Should I create an issue?

For general questions, feature requests, or usage help, we encourage you to start a discussion in our community Discussions tab first. Issues should be reserved for bug reports and technical problems with the theme.

Here's where to go:
- Use [Discussions](https://github.com/mansoorbarri/roadster/discussions) for:
  - Questions about theme configuration
  - Feature requests and suggestions
  - Showcasing your site
  - Getting help with customization
  - General usage questions

- Create an [Issue](https://github.com/mansoorbarri/roadster/issues) only for:
  - Reporting bugs
  - Technical problems with theme functionality
  - Documentation errors

This helps keep our Issues focused on technical problems while building a helpful knowledge base in Discussions for future users.

## Technical questions

### I want to get the `favicon.ico` and `apple-touch-icon.png` to match my `hightlightColor`. What should I do?

There is no way to do this on the fly with Hugo, but you can use the one-liners below with some preparations:

1. Copy:
    * `./themes/roadster/static/favicon.ico` to `./static/favicon.ico`
    * `./themes/roadster/static/apple-touch-icon.png` to `./static/apple-touch-icon.png`
1. At the beginning of each script, replace the color in the variable with your preferred color. You must use
six-digit hex triplet notation (e.g., `#E22D30`) to make it work properly.

Go to the root of your project directory in the terminal and execute these two commands accordingly.

```
a=#E22D30;a=\\x${a:5:2}\\x${a:3:2}\\x${a:1:2};for i in 98 274 578;do printf $a|dd of=static/favicon.ico bs=1 seek=$i conv=notrunc;done
```

```
a=#E22D30;a=$(echo 504C54452A2A2A${a:1:6}|sed -e 's/../\\x&/g');printf $a|gzip|tail -c8|od -tx4 -N4 -An|xargs|sed -e 's/../\\x&/g'|printf $a$(cat -)|dd of=static/apple-touch-icon.png bs=1 seek=37 conv=notrunc
```

### I want to use Google Programmable Search Engine as a site search engine. Is it possible?

**Yes, it is possible to use [Google PSE (CSE)](https://developers.google.com/custom-search/docs/overview) as a site
search engine.**

1. Create a new search engine with [Google PSE](https://programmablesearchengine.google.com/about/). Google account
required.

1. Add a new layout.

    Create file `./layouts/search/index.html` with the following content:

    ```
    {{ define "main" }}
    <script async src="https://cse.google.com/cse.js?cx=YOUR_PSE_ENGINE_ID"></script>
    <div class="gcse-search"></div>
    {{ end }}
    ```

    Don't forget to paste your Google PSE ID.

1. Add search page by creating file `./content/search.md` with the following content:

    ```
    ---
    title: Search
    authorbox: false
    sidebar: false
    pager: false
    ---
    ```

1. Optional. If you use the search widget, don't forget to change the search box parameters:

    ```toml
    [Params.widgets.search]
      url = "/search/"
      input.name = false
      input.pre = ""
    ```

Google PSE (CSE) should work when it's done. Look and feel will be far from perfect, but you have to solve this problem
with [Google PSE Control Panel](https://programmablesearchengine.google.com/controlpanel/all) and additional CSS.

[Edit this page on GitHub](https://github.com/mansoorbarri/roadster/blob/master/exampleSite/content/docs/faq.md)
