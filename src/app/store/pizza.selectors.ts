import { pizzasAdapter, PizzasState } from './pizza.reducer';
import { createFeatureSelector } from '@ngrx/store';

export const getPizzaState = createFeatureSelector<PizzasState>('pizzas');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = pizzasAdapter.getSelectors(getPizzaState);
