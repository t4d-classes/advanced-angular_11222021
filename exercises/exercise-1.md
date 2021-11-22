## Exercise 1

1. Create a new module named `Shared`. 

```bash
ng g module shared
```

2. Create a component named `ToolHeader` in the `Shared` module that accepts an input named "headerText" and displays a template with the following structure:

```html
<header>
  <h1>[Display the Content of Header Text Here]</h1>
</header>
```

```bash
ng g component shared/components/tool-header
```

3. Create a new module named `ColorTool`.

4. Create a second component named `ColorList` in the `ColorTool` module that accepts an input named "colors". The input "colors" is an unordered list of color objects. Each object should have three properties:

- id: number
- name: string
- hexcode: string

Design the template to show the list of color names as an unordered list.

5. Create a third component named `ColorForm` in the `ColorTool` module that is a form that collects the name and hexcode of a new color and outputs it to the parent component. To output the new color to the parent component a button with a label of "Add Color" is clicked.

6. Create a fourth component named `ColorHome` in the `ColorTool` module. The `ColorHome` component should use the three components created above (`ToolHeader`, `ColorList`, and `ColorForm`) to display a header with the text of "Color Tool" and manage a list of colors. The list of colors should be defined on `ColorHome`. The list is passed into the `ColorList` component and receives new colors from the `ColorForm` component.

7. Within AppComponent, display the `ColorHome` component.

8. Ensure the applications works. The header is displayed. The list of colors is displayed. When a new color is typed in and the "Add Color" button it clicked it appears in the list and the input box is blanked out.
