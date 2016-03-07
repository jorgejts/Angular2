import {Component, Attribute,AfterViewInit} from "angular2/core";
import {HTTP_PROVIDERS} from "angular2/http";
import {RouterLink, RouteParams, ROUTER_DIRECTIVES, Router} from "angular2/router";
import {VisitsApi} from "../../../providers/visitsApi/visitsApi";

@Component({
	selector: "client-visits",
	templateUrl: "app/components/clients/clientVisits/clientVisits.html",
	providers: [VisitsApi, HTTP_PROVIDERS],
	directives: [RouterLink, ROUTER_DIRECTIVES],
	inputs: ['client']
})

export class ClientsVisitsPage {
	id_client: string;
	client: string;
	visitsApi: VisitsApi;
	visits: Array<any>;
	tab: string = null;
	private router: Router;
	url: string;
	
   	constructor( @Attribute("client") client, visitsApi: VisitsApi, public routeParams: RouteParams, router: Router) {
		this.url = "http://localhost";
		this.router = router;
		this.id_client = this.client;
		this.visitsApi = visitsApi;
		if(this.routeParams.get('id')){//Este es el id de cliente
			this.id_client = this.routeParams.get('id');
		}
		
	}
	ngAfterViewInit(){
		this.visitsApi.getVisitsFromClient(this.client).then(
			(res) => {
				this.visits = res;
			},
			(error) => {
				console.log("Error: " + JSON.stringify(error));
			}
		)
	}

    
	goUpdateVisit(id, type) {
		this.router.navigate(['/UpdateAttachment', { id: id, type: type, id_client: this.id_client, file: 'no' }]);
    }
}