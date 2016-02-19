##Equal-height Columns in Bootstrap##

A number of different methods exist for forcing adjacent columns to have equal height. This is a summary of a few such solutions.


###the best solution###

An example can be found in the folder "best-css-solution". This is a CSS fix that requires the addition of only two classes to the markup (one for the containing row, and one for each of the columns within) and only a few lines of CSS. The fix functions by modifying the padding and margin of the columns drastically, and then hiding the overflow of the containing row.

###the second-best solution###

Find this solution in the "js-solution" directory of this project. This is a jQuery workaround that sets the height of the columns to be equal to the height of the row. This code is wrapped in a conditional in order to guarantee that the height adjustment only happens when necessay (without the conditional statement, the columns will remain equal-in-height even if the current viewport size causes the columns to stack). 
