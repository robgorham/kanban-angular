# KanBan

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Motivation
To create a container that will take a specially crafted object and render a KanBan board.  This container will allow actions to be taken through the UI and trigger certain CRUD events on the backend that whose api will be created afterwards.
This is going to be as simple as possible to begin with.  This is just one application that is the front end to an open source suite hopefully, which will lead to some tutorials.
This might eventually become an exported library

### Definitions:

`Board: Container of Columns.  Can perform CRUD operations on said columns.  Can also sort child Columns`

`Column: Container of Cards. Can perform CRUD operations on said columns and sort by a given function`

`Card: Object which has a title: string, content: string, created: datetime`

## Architecture
### BoardManager: Container Class that can do crud on Boards

`BoardManager : {
    id: string;
    name: string | null;
    boards: Board[] | null;
}`

#TECHDEBT Might want to make a relationship instead of putting the sort on the card.  This is the same for the Board and Column Classes

### Board: component class that contains a collection of ### columns

`Board: {
    id: string;
    name: string;
    columns: Column[] | null;
    deleted: boolean;
    created: datetime;
    modified: datetime;
}`

### Column: Component class that contains a collection of cards
`Column: {
    id: string;
    name: string | null;
    cards: Card[] | null;
    deleted: boolean;
    created: datetime;
    modified: datetime;
}`
### Card: Component class that contains a title, content, and date
Starts with both created and modified being the same

`Card: {
    id: string;
    name: string | null;
    content: string | null;
    created: datetime;
    modified: datetime;
    deleted: boolean;
}`
## Services
Seeing as we're using ngrx/data services, we will bubble up all requests to the BoardManager Container.  This container will act almost as a facade for the rest of the components.  There will be no service calls from anywhere but here currently.


## State
The state will be handled by ngrx/data services and will be able to be seen using redux dev tools

## Routes
There are none needed currently.  Not until this becomes a multiple user application.  The module will be lazy loaded regardless

## UI

I expect to be able to do CRUD on each one of the Component classes and retrieve said class after.  In addition, I want to be able to drag cards from one column to another.

## Seed Data

The seed data will live next to the interfaces.


## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files besides seed data. 

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
