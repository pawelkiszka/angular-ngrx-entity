import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { PizzasState } from './store/pizza.reducer';
import * as fromPizzasSelectors from './store/pizza.selectors';
import { DEFAULT_PIZZA, Pizza, PizzaIngredient, PizzaSize } from './models/pizza.model';
import { CreatePizza, DeletePizza, ToggleSelectedIngredient, UpdatePizzaSize } from './store/pizza.actions';
import { getUUID } from './utils/uuid.generator';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public PizzaSize = PizzaSize;
    public PizzaIngredient = PizzaIngredient;
    public availablePizzaSizes = Object.keys(PizzaSize);
    public availablePizzaIngredients = Object.keys(PizzaIngredient);
    public pizzas: Observable<Pizza[]>;

    constructor(private readonly store$: Store<PizzasState>) {
    }

    public ngOnInit() {
        this.pizzas = this.store$.pipe(select(fromPizzasSelectors.selectAll));
    }

    createPizza() {
        const pizza: Pizza = DEFAULT_PIZZA(getUUID());

        this.store$.dispatch(new CreatePizza(pizza));
    }

    updatePizzaSize(id: string, size: PizzaSize) {
        this.store$.dispatch(new UpdatePizzaSize({id, size}));
    }

    toggleSelectedIngredient(id: string, ingredient: PizzaIngredient) {
        this.store$.dispatch(new ToggleSelectedIngredient({id, ingredient}));
    }

    deletePizza(id) {
        this.store$.dispatch(new DeletePizza(id));
    }
}
