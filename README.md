```
  ___                              ____       _           _   
 |_ _|_ __ ___   __ _  __ _  ___  / ___|  ___| | ___  ___| |_ 
  | || '_ ` _ \ / _` |/ _` |/ _ \ \___ \ / _ \ |/ _ \/ __| __|
  | || | | | | | (_| | (_| |  __/  ___) |  __/ |  __/ (__| |_ 
 |___|_| |_| |_|\__,_|\__, |\___| |____/ \___|_|\___|\___|\__|
 Web Semantics, Inc.  |___/                                   

 Version 1.5
```

We designed this plugin extension as a humanized UI element for social networking sites that need to faciliate relations between people. Research shows that people are extremely sensitvie to photos of others, so we needed to revamp the traditional UI elements to make them more intuitive and human.

You can use these plugin extensions for modelling multiple (one-to-many) or single (one-to-one) relations between people. Go to [main page](http://websemantics.github.io/Image-Select/) or try this [example](http://websemantics.github.io/Image-Select/example.html).

![Alt text](http://websemantics.github.io/Image-Select/img/screen-shot.png "Image Select")

We couldn't find any scripts that had this full functionality, so we developed it ourselves on top of Chosen. Hope you find it helpful, and get back if you have any feedback/improvements.

## Installation

- Clone locally, `git clone https://github.com/websemantics/Image-Select`
- Install dependencies, `bower install`
- Browse to `index.html` or `example.html`

### Via Bower 

`bower install image-select`

To get information about available packages

`bower info image-select`

## Usage

You only need to add a `data-img-src` attribute to your `<option>` tag.
```HTML
<select class="my-select">
  <option data-img-src="img/adnan.png">Adnan Sagar</option> 
  <option data-img-src="img/rena.png">Rena Cugelman</option> 
  <option data-img-src="img/tavis.png">Tavis Lochhead</option> 
  <option data-img-src="img/brian.png" selected="selected">Brain Cugelman</option> 
</select>
```
Then call Chosen as you would with the options you need.
```JAVASCRIPT
$(".my-select").chosen();
```


# Change Log
All notable changes to this project will be documented in this section.

## [1.5] - 2016-02-08
### Changed
- Flexible templates (insert images before / after text regardless of rtl)
- Various code fixes

### [1.4] - 2015-08-18
#### Changed
- Use [Bower](http://bower.io/) for dependancies.
- Merged main project and `gh-pages` into one codebase.
- Upgrade to latest [Chosen](http://github.com/harvesthq/chosen) library.
- Support for Left to Right, LTR (i.e. Arabic).
- Code refactoring to improve quality and ease of contribution.
- Fixed all known issues

### [1.3] - 2015-03-29
#### Changed
- Fixed few bugs.

# Used by

[PyroCMS Social Field Type](https://github.com/websemantics/social-field_type)

![demo](https://raw.githubusercontent.com/websemantics/Image-Select/master/img/social_field_type.gif)

## Related
Chosen, http://github.com/harvesthq/chosen
