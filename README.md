# Whirlwindcss-nextgen

The shortest and most readable CSS framework ever

## comparison: tachyons vs whirlwindcss-nextgen

tachyons:

```html

<div class="pa1 flex flex-column">
  <!-- ... -->
</div>

```

whirlwindcss-nextgen:

```html

<div class="p1 flxclmn">
  <!-- ... -->
</div>

```

tachyons doesn't support react. whirlwindcss-nextgen does

## Editor autocomplete & intellisense

Whirlwindcss-nextgen has built-in intellisense for react.

For HTML intellisense download the VS code extension **HTML CSS support** (by ECMEL) or **Mirego CSS intellisense**

## Common bugs and fixes

Here are some common bugs and fixes

### Flex basis issues

in Whirlwind CSS nextgen, layout utilities assume you want to move quickly. A class like flxb-a initializes a flex layout and sets the basis all at once. Want to apply the basis to a child item without turning it into a new flex container? Just add the -manual flag. This design completely eliminates layout bugs caused by accidental nesting.

### Issues regarding no -manual

If you have issues that break your layout because it applies things all at once then use the -manual suffix this completely removes the `display: thing;` and only puts the actual property.

### HTML intellisense wont work

This bug is one of the most common bugs with whirlwindcss-nextgen the fix is to download one of the extensions mentioned in the Editor autocomplete & intellisense section

### Preact wont load the react module

This bug has no fix whirlwindcss-nextgen was not meant for preact but in a future version it might add support I recommend you drop whirlwindcss-nextgen fully with `npm uninstall whirlwindcss-nextgen` if you're using preact unless you want to manually figure out all the classes.

### Some CSS classes dont have -manual

This is to reduce bloat for example iflxb-cntnt doesnt have manual because the same way to get manual inline-flex basis content is by using `iflx flxb-cntnt-manual`.

## Other

Read the docs if available at: whirlwindcss-nextgen.surge.sh (Another way to find all the classes is to look in classes.json)

Github repository: [whirlwindcss-nextgen repo](https://github.com/Beey1234567/whirlwindcss-nextgen/)

### Important notes

WE ARE NOT AFFILIATED IN ANY WAY WITH TOUHOU

## Legal

This is the legal section. READ CAREFULLY

### License

License: MIT
