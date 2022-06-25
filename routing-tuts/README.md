### Note: To follow this example, use Angular CLI.

# RoutingTuts
In Angular Application, we have multiple component and Each component has its own view.We need a way to navigate when user perform some action.
So, for this purpose we use angular router.

## Creating Application
  
The following command uses the Angular CLI to generate a basic Angular application with an application routing module, called AppRoutingModule,
which is an NgModule where you can configure your routes. The application name in the following  example is routing-app

ng new routing-app --routing --defaults


## Adding components for routing

To add routing in angular application, we need atleast two component.So that one can navigate from one component to
another.

ng g c History

Repeat this step for a second component but give it a different name

ng g c Science

## Importing your new components
To use your new components, import them into AppRoutingModule at the top of the file, as follows:

import {HistoryComponent} from './history/history.component'
import {ScienceComponent} from './science/science.component'

Make sure AppRoutingModule module is imported in AppModule and added to the imports array.

## Define your Routes
Each route in this array is a JavaScript object that contains two properties. The first property, path, defines the URL path for the route. The second property, component, defines the component Angular should use for the corresponding path.

const routes: Routes = [
  { path: 'history', component: HistoryComponent },
  { path: 'science', component: ScienceComponent }
];

## Add route to your application

Now you have defined the route, add them to application.
![image](https://user-images.githubusercontent.com/10788848/175759588-b5e64593-bf7c-4411-ad63-71836fcbcb4d.png)

## Route Order
Route order is important because router use first match win strategy when matching the routes, So more specific 
routes should be placed above the less specific routes.The wildcard route comes last because it matches every URL and
the Router selects it only if no other routes match first.

## Getting route information
Often, as a user navigates your application, you want to pass information from one component to another. we can do this with activatedRoute.
we need to follow below step to use activatedROute.

1. Import ActivatedRoute and ParamMap to your component.
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

2. Inject an instance of ActivatedRoute by adding it to your application's constructor:
   constructor(
  private route: ActivatedRoute,
) {}

3. Update the ngOnInit() method to access the ActivatedRoute and track the name parameter:
  ngOnInit() {
  this.route.queryParams.subscribe(params => {
    this.name = params['name'];
  });
}

## Setting up wildcard routes
A well-functioning application should gracefully handle when users attempt to navigate to a part of your application that does not exist. To add this functionality to your application, you set up a wildcard route. The Angular router selects this route any time the requested URL doesn't match any router paths.

To set up a wildcard route, add the following code to your routes definition.

{ path: '**', component: <component-name> }
  
  
  ## Setting up redirects
  
  To set up a redirect, configure a route with the path you want to redirect from, the component you want to redirect to, and a pathMatch value that tells the router how to match the URL.
  
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  
## Nested Routes
  As your application grows more complex, you might want to create routes that are relative to a component other than your root component.
  Create two component with below command
  ng g c  science/physcics
  ng g c science/chemistry
  
  Import these component in routing module and children to science route
  
![image](https://user-images.githubusercontent.com/10788848/175769753-db1fad59-2ae9-4767-aad7-301d39458724.png)
  

