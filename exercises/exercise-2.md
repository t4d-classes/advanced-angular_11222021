# Exercise 2

1. Create a new module named Car Tool.

2. Create a new component named Car Home.

3. Use the `ToolHeader` component to display "Car Tool" at the top of the `CarHome` component.

4. Create a new component named `CarTable` in the `CarTool` module. The `CarTable` component should receive an array of cars as an input. Each should have the following properties.

- id: number
- make: string
- model: string
- year: number
- color: string
- price: number

5. Add a list of cars to the NgRx store. Initialize the array of cars with two cars. Display the array of cars in the `CarTable` component

6. Display the `CarHome` component beneath the `ColorHome` component within the `AppComponent` component.