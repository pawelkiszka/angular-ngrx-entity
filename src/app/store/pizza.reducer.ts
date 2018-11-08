import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Pizza, PizzaIngredient } from '../models/pizza.model';
import { CREATE_PIZZA, DELETE_PIZZA, PizzaActions, TOGGLE_SELECTED_INGREDIENT, UPDATE_PIZZA_SIZE } from './pizza.actions';

export type PizzasState = EntityState<Pizza>;

export const pizzasAdapter: EntityAdapter<Pizza> = createEntityAdapter<Pizza>({
    selectId: pizza => pizza.id
});

export const INITIAL_PIZZAS_STATE = pizzasAdapter.getInitialState();

export function pizzasReducer(state: PizzasState = INITIAL_PIZZAS_STATE, action: PizzaActions): PizzasState {
    switch (action.type) {
        case CREATE_PIZZA:
            return pizzasAdapter.addOne(action.payload, state);
        case UPDATE_PIZZA_SIZE:
            return pizzasAdapter.updateOne(
                {
                    id: action.payload.id,
                    changes: {size: action.payload.size}
                },
                state
            );
        case TOGGLE_SELECTED_INGREDIENT:
            const pizzaId: string = action.payload.id;
            const ingredientToToggle: PizzaIngredient = action.payload.ingredient;
            const currentlySelectedIngredients = extractIngredientsByPizzaId(state, pizzaId);
            return pizzasAdapter.updateOne(
                {
                    id: pizzaId,
                    changes: {ingredients: pizzaIngredientsReducer(currentlySelectedIngredients, ingredientToToggle)}
                },
                state
            );
        case DELETE_PIZZA:
            return pizzasAdapter.removeOne(action.payload, state);
        default:
            return state;
    }
}

function extractIngredientsByPizzaId(state: PizzasState, pizzaId: string): PizzaIngredient[] {
    return state.entities[pizzaId].ingredients;
}

function pizzaIngredientsReducer(currentlySelectedIngredients: PizzaIngredient[], ingredientToToggle: PizzaIngredient): PizzaIngredient[] {
    return currentlySelectedIngredients.includes(ingredientToToggle)
        ? currentlySelectedIngredients.filter((ingredientInStore: PizzaIngredient) => ingredientInStore !== ingredientToToggle)
        : [...currentlySelectedIngredients, ingredientToToggle];
}




