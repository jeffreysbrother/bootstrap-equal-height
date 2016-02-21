#Equal-height Columns in Bootstrap and Foundation#

A number of different solutions exist for forcing adjacent columns to have equal height. This is a summary of a few such solutions.

##1. BOOTSTRAP##
###the best solution###

An example can be found in the folder "best-css-solution". This is a CSS fix that requires the addition of only two classes to the markup (one for the containing row, and one for each of the columns within) and only a few lines of CSS. The fix functions by modifying the padding and margin of the columns drastically, and then hiding the overflow of the containing row.

```css
.row-eq-height {
    overflow: hidden;
}

.col-eq-height {
    margin-bottom: -99999px;
    padding-bottom: 99999px;
}
```

###the second-best solution###

Find this solution in the "js-solution" directory of this project. This is a jQuery workaround that sets the height of the columns to be equal to the height of the containing row. This code is wrapped in a conditional in order to guarantee that the height adjustment only happens when necessary (without the conditional statement, the columns will remain equal-in-height even if the current viewport size causes the columns to stack).

**one additional note:** this solution requires that the page be refreshed every time the browser window is resized. This is likely not an issue, because the typical user isn't constantly resizing.

```javascript
$(document).ready(function() {
  if ($(window).width() > 950) {
    $('.row-eq-height').each(function() {
      var eHeight = $(this).innerHeight();
      $(this).find('.col-eq-height').outerHeight(eHeight);
    });
  }
});
```

###the third-best solution (likely a shitty idea in most cases)###

You can find an example of this fix in the "css-solution" directory. This CSS hack is fairly ridiculous, so I don't want to spend any time explaining it. If you look at the HTML file, you'll see that a bunch of additional markup---even beyond the addition of classes---is necessary. It also relies on the use of Bootstrap's "well" class, and this styling is quite difficult to remove (although I'm sure it's possible). An additional headache is caused by the fact that we must also adjust two media queries according to whatever Bootstrap classes we use to specify column widths.

##2. FOUNDATION##
###another viable solution (if using foundation)###

The project directory for this solution is named "equalizer-solution". In my opinion, this is the most elegant solution; the only thing preventing me from considering it as 'the best' is the simple fact that the agency I work for appears to have a Bootstrap fetish.

What I like about this workaround is that the developer isn't required to add *any* additional CSS or JavaScript. Only the markup needs slight tweaking:

```HTML
<div class="row" data-equalizer>
  <div class="large-4 columns blue" data-equalizer-watch>
    { content here }
  </div>

  <div class="large-4 columns green" data-equalizer-watch>
    { content here }
  </div>

  <div class="large-4 columns otherblue" data-equalizer-watch>
    { content here }
  </div>
</div>
```

In other words, everything is handled by Foundation "natively". An extra bonus is the built-in ability to specify the behavior of the columns when they stack in smaller viewports. By default, the columns remain equal-height when stacked. To avoid this, we can add the `data-equalize-on-stack="false"` attribute to the containing row.
