# Exercise 3

1. Create a new component named `CarForm` in the `CarTool` module.

2. The `CarForm` component should collect the `make`, `model`, `year`, `color`, and `price` of a new car. When the `Add Car` button is clicked the form should output a new car to the parent component.

3. Display the `CarForm` component in the `CarHome` component.

4. Wire up the `CarHome` component to dispatch an action when a new car is received from the `CarForm` component. The action should add a new car to the list of cars in the state.

5. Ensure the new is a displayed in the table after it has been added to the state.

6. Add a new column to each car table row. The column header should be set to 'Actions'. In the new column place a delete button. When the button is clicked, delete the car from the table.

7. Ensure it works.