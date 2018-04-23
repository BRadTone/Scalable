# Scalable

Boilerplate for simple web pages, including usefull @mixins and variables

Main goal - achive reusable and scalable sass files architecture.

## SCSS structure
<pre>
├── __GLOBAL            // @include(<all files>)
├── _base
|	├── _projectSetUp.scss
|	├── _reset.scss
|	└── _typography.scss
├── _components
|	├── _buttons.scss
|	├── _inputs.scss
|	├── _navigations.scss
|	└── _popUp.scss
├── _components
|	├── _buttons.scss
|	├── _inputs.scss
|	├── _navigations.scss
|	└── _popUp.scss
├── _helpers
|	├── _functions.scss
|	├── _mixins.scss
|	├── _placeholders.scss
|	└── _variables.scss
├── _vendor
	└──[third-party-libs]
├── _pages
	└── _index.scss
</pre>

-----

##### Example:

```
@mixin before($name, $fallback-extension : 'png',$width:20px, $height:20px) {
  &:before {
    content: '';
    position: absolute;
    background: url('#{$image-path}/#{$name}.#{$fallback-extension}') no-repeat center;
    width: $width;
    height: $height;
    @content;
  }
}
```

Usage:
```
.need-icon {
    @include before('file_name');
}
```