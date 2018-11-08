import { ActionReducerMap } from '@ngrx/store';
import { pizzasReducer, PizzasState } from './pizza.reducer';

export interface StoreState {
    pizzas: PizzasState;
}

export const reducers: ActionReducerMap<StoreState> = {
    pizzas: pizzasReducer
};
