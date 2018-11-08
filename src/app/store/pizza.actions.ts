import { Action } from '@ngrx/store';
import { Pizza, PizzaIngredient, PizzaSize } from '../models/pizza.model';

export const CREATE_PIZZA = '[Pizzas] CREATE_PIZZA';
export const UPDATE_PIZZA_SIZE = '[Pizzas] UPDATE_PIZZA_SIZE';
export const TOGGLE_SELECTED_INGREDIENT = '[Pizzas] TOGGLE_SELECTED_INGREDIENT';
export const DELETE_PIZZA = '[Pizzas] DeletePizza';

type PizzaId = string;

export class CreatePizza implements Action {
    readonly type = CREATE_PIZZA;

    constructor(public readonly payload: Pizza) {
    }
}

export class UpdatePizzaSize implements Action {
    public readonly type = UPDATE_PIZZA_SIZE;

    constructor(public readonly payload: { id: string, size: PizzaSize }) {
    }
}

export class ToggleSelectedIngredient implements Action {
    public readonly type = TOGGLE_SELECTED_INGREDIENT;

    constructor(public readonly payload: { id: string, ingredient: PizzaIngredient }) {
    }
}

export class DeletePizza implements Action {
    public readonly type = DELETE_PIZZA;

    constructor(public readonly payload: PizzaId) {
    }
}

export type PizzaActions =
    CreatePizza
    | UpdatePizzaSize
    | ToggleSelectedIngredient
    | DeletePizza;
