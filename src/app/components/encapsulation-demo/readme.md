# Angular provides three types of view encapsulation to control how styles are applied to components:

- `Emulated (default):` Styles are scoped to the component using a technique similar to Shadow DOM but without actual Shadow DOM.
- `Shadow DOM (ViewEncapsulation.ShadowDom):` Uses the browser's native Shadow DOM to encapsulate styles.
- `None (ViewEncapsulation.None):` No encapsulation, meaning styles will affect the entire application.
