export interface Pizza {
    id: string;
    size: PizzaSize;
    ingredients: PizzaIngredient[];
}

export enum PizzaSize {
    SMALL = 'Small',
    MEDIUM = 'Medium',
    LARGE = 'Large',
    EXTRA_LARGE = 'Extra Large'
}

export enum PizzaIngredient {
    TOMATO_SOUCE = 'Tomato souce',
    CHEESE = 'Cheese',
    OREGANO = 'Oregano',
    MUSHROOMS = 'Mushrooms',
    HAM = 'Ham',
    SALAMI = 'Salami',
    PEPPERONI = 'Pepperoni',
    CHICKEN = 'Chicken',
    BEACON = 'Beacon',
    POLEDWICA_SOPOCKA = 'Polędwica Sopocka'
}


export const DEFAULT_PIZZA = (id: string): Pizza => ({
    id: id,
    size: PizzaSize.MEDIUM,
    ingredients: [
        PizzaIngredient.TOMATO_SOUCE,
        PizzaIngredient.CHEESE,
        PizzaIngredient.OREGANO
    ]
});
