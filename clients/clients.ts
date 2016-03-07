import {Component} from "angular2/core";
import {DataApi} from "../../../providers/dataApi/dataApi";
import {HTTP_PROVIDERS} from "angular2/http";
import {RouterLink,RouteParams,ROUTER_DIRECTIVES,Router} from "angular2/router";
import {NuevoClientePage} from "../nuevoCliente/nuevoCliente";
import {AttachmentsPage} from "../../attachments/attachments/attachments";
import {ClientsVisitsPage} from "../clientVisits/clientVisits";
import {ClientsBudgetsPage} from "../clientBudgets/clientBudgets";

@Component({
	selector: "clients",
	templateUrl: "app/components/clients/clients/clients.html",
	providers: [DataApi, HTTP_PROVIDERS],
	directives: [RouterLink, ROUTER_DIRECTIVES, AttachmentsPage, ClientsVisitsPage,ClientsBudgetsPage],
})

export class ClientsPage {
	dataApi: DataApi;
	clientss: Array <any>;
	tab: string = null;
	private router: Router;
	url: string;
   	constructor(dataApi: DataApi, public routeParams: RouteParams, router: Router) {
		this.url="http://localhost"
		this.router = router;
		this.dataApi = dataApi;
	    this. dataApi.getClients().then(
            (res) => {
               this.clientss = res;
            },
            (error) => {
                console.log("Error: " + JSON.stringify(error));
            }
        )
		if (this.routeParams.get("id")){
			this.setTab(this.routeParams.get("id"));
		}
    }

    setTab(value:string){
    	if(this.tab==value){
			this.tab = null;
		} else if (this.tab!=value){
			this.tab = value;
		}
    }

    goUpdate(id) {
		this.router.navigate(['UpdateClient',{id:id}] );
    }

    deleteClient(id) {
		this.dataApi.deleteClient(id).then(
			(res) => {
				this. dataApi.getClients().then(
		            (res) => {
		               this.clientss = res;
		            },
		            (error) => {
				           console.log("Error: " + JSON.stringify(error));
		            }
		        )
            },
            (error) => {
                console.log("Error: " + JSON.stringify(error));
            }
    	)
    }
}