### Making It Act Like A Calculator

Now that we have captured elements on the page and are able to console log their contents, the next step is to create the effects of a caculator display by adding and changing elements on the DOM.

[X]First make the values on the buttons appear in the display

[ ]Next make clicking the = sign result in the answer being shown in the display.

Hint: One way of evaluating mathematical expressions is eval. Another way is by using the math.js library.

Some You do not have to stop users from entering bad input. For instance, if a user enters 2.1.0 -+ 7, you can let them enter that and do not have to show any special output when they try to evaluate it using the equals button. It is fine if you do prevent them from entering bad input, though.

You do not have to allow for chaining long calculations (like 2 + 4 \* 7 - 2), but you can.

### Bonus steps

You should find the above project challenging. However, if you complete it, here are more features you should attempt to add in.

[ ]Show an error message when invalid input is given. Using try-catch is your best bet here.
[ ]Disallow invalid input.
[ ]Allow for chaining long calculations. Order of operations must be honored.
[ ]Handle edge situations. For example, if a user starts by pressing the decimal button, they generally expect to start a decimal number, which needs a 0 before the decimal point. Add that 0.
[ ]Allow entry via the keyboard, not just clicking on buttons.
[ ]Add a button for calculating the modulo of two numbers.
[ ]Add a button for raising a number by a power.
[ ]Add parentheses to control the order of evaluation.
