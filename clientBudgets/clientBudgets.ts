import {Component, Attribute,AfterViewInit} from "angular2/core";
import {HTTP_PROVIDERS} from "angular2/http";
import {RouterLink, RouteParams, ROUTER_DIRECTIVES, Router} from "angular2/router";
import {BudgetsApi} from "../../../providers/budgetsApi/budgetsApi";

@Component({
	selector: "client-budgets",
	templateUrl: "app/components/clients/clientBudgets/clientBudgets.html",
	providers: [BudgetsApi, HTTP_PROVIDERS],
	directives: [RouterLink, ROUTER_DIRECTIVES],
	inputs: ['client']
})

export class ClientsBudgetsPage {
	client: string;
	budgets: Array<any>;
	tab: string = null;
	private router: Router;
	url: string;
	
   	constructor( @Attribute("client") client, private budgetsApi: BudgetsApi, public routeParams: RouteParams, router: Router) {
		this.url = "http://localhost";
		this.router = router;
		this.budgetsApi = budgetsApi;
		if(this.routeParams.get('id')){//Este es el id de cliente
			this.client = this.routeParams.get('id');
		}
		
	}
	ngAfterViewInit(){
		this.budgetsApi.getBudgetsFromClient(this.client).then(
			(res) => {
				this.budgets = res;
			},
			(error) => {
				console.log("Error: " + JSON.stringify(error));
			}
		)
	}
}