# Accessibility Playground Notes

## Components Built From Scratch

I built three interactive components using React and TypeScript without using a component library:

* Modal Dialog
* Tabs
* Disclosure

I implemented them using the W3C ARIA Authoring Practices patterns and tested their keyboard interaction.

## Modal Dialog

My custom modal includes:

* `role="dialog"`
* `aria-modal="true"`
* An accessible title using `aria-labelledby`
* Escape key support
* Tab and Shift+Tab focus trapping
* Focus moving into the modal when it opens
* Focus returning to the trigger after the modal closes

### What shadcn/Base UI handled that I handled manually or missed

1. **Portal rendering**

shadcn renders the dialog using a portal. This keeps the modal outside the normal page layout and makes overlay and stacking behavior more reliable.

My custom version renders the modal directly where the component appears in the React tree.

2. **Built-in focus management**

My version manually finds focusable elements and traps focus using a `keydown` event listener.

shadcn/Base UI handles focus trapping, focus movement, Escape behavior, and focus restoration through the dialog primitive.

This reduces the chance of missing keyboard edge cases.

3. **Accessible close button**

shadcn includes a close icon with:

`<span className="sr-only">Close</span>`

This gives screen-reader users an accessible name even though the visible control is only an icon.

My custom version uses a visible text button, so it is already labelled, but I did not implement an icon-only accessible close button.

4. **Reusable dialog structure**

shadcn separates the dialog into reusable pieces such as:

* `DialogTrigger`
* `DialogPortal`
* `DialogOverlay`
* `DialogContent`
* `DialogClose`
* `DialogTitle`
* `DialogDescription`

My implementation combines most of this behavior into one `Modal` component.

## Tabs

My custom Tabs component includes:

* `role="tablist"`
* `role="tab"`
* `role="tabpanel"`
* `aria-selected`
* `aria-controls`
* Roving `tabIndex`
* ArrowRight navigation
* ArrowLeft navigation
* Home navigation
* End navigation
* Tab movement from the selected tab into the panel

### What shadcn/Base UI handled that I missed

1. **Orientation support**

shadcn/Base UI supports both horizontal and vertical tab layouts.

My implementation only supports horizontal Left and Right arrow navigation.

For a vertical tab list, Up and Down arrow navigation would also need to be supported.

2. **Disabled tab handling**

shadcn/Base UI includes support for disabled and `aria-disabled` tab states.

My implementation does not currently handle disabled tabs or skip them during keyboard navigation.

3. **Built-in keyboard and focus logic**

My implementation manually stores button references and calculates which tab should receive focus.

Base UI provides this behavior through its Tabs primitive, which reduces custom keyboard-management code.

4. **State attributes**

shadcn exposes states such as `data-active`, orientation, and disabled state through attributes that can be used for consistent styling and behavior.

My custom implementation manages active state directly with React state and conditional classes.

## Disclosure

My disclosure uses a native `<button>` with:

* `aria-expanded`
* `aria-controls`
* A matching content `id`
* Native Enter and Space keyboard activation

Using a real button means I do not need custom keyboard handlers for Enter or Space.

## Keyboard Testing

I tested the components using keyboard-only navigation.

### Modal

* Tab stays inside the modal.
* Shift+Tab cycles backward inside the modal.
* Escape closes the modal.
* Focus returns to the opening button after closing.

### Tabs

* Tab enters the active tab.
* ArrowRight moves to the next tab.
* ArrowLeft moves to the previous tab.
* Home moves to the first tab.
* End moves to the last tab.
* Tab moves from the active tab into the tab panel.

### Disclosure

* Tab focuses the disclosure button.
* Enter toggles the disclosure.
* Space toggles the disclosure.

## Conclusion

Building the components manually helped me understand the accessibility behavior that component libraries normally hide.

The main gaps I found were that shadcn/Base UI provides more complete focus management, portal-based dialogs, disabled-state handling, orientation support, and reusable accessibility primitives.

Using a component library can reduce accessibility mistakes, but understanding the ARIA patterns is still necessary so generated components can be reviewed correctly.
