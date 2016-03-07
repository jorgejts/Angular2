import {Component} from "angular2/core";
import {DataApi} from "../../../providers/dataApi/dataApi";
import {HTTP_PROVIDERS} from "angular2/http";
import {FormBuilder,FORM_DIRECTIVES,Validators,ControlGroup,AbstractControl} from "angular2/common";
import {Router, RouteParams,ROUTER_DIRECTIVES} from "angular2/router";


@Component({
    selector: "nuevoCliente",
	templateUrl: "app/components/clients/nuevoCliente/nuevoCliente.html",
	providers:[DataApi,HTTP_PROVIDERS],
    directives:[FORM_DIRECTIVES,ROUTER_DIRECTIVES],
})

export class NuevoClientePage {
	dataApi: DataApi;
    clientForm: ControlGroup;
    name: AbstractControl;
    direction: AbstractControl;
    tlf1: AbstractControl;
    tlf2: AbstractControl;
    email1: AbstractControl;
    email2: AbstractControl;
    cif: AbstractControl;

    client:Object={name:'',address:'',tlf1:'',tlf2:'',email1:'',email2:'',cif:''};
    id: string;
    private router: Router;

    constructor (dataApi: DataApi,builder:FormBuilder,router:Router, public routeParams:RouteParams) {
        this.router = router;
	    this.dataApi = dataApi;
        this.clientForm = builder.group({
            name: ["", Validators.required],
            address:[""],
            tlf1: ["", Validators.compose([
                Validators.minLength(9),
                Validators.maxLength(10)
                ])
            ],
            tlf2: ["", Validators.compose([
                Validators.minLength(9),
                Validators.maxLength(10)
                ])
            ],
            email1:["",],
            email2:["",],
            cif: ["", Validators.compose([
                Validators.minLength(9),
                Validators.maxLength(10)
                ])
            ]
        })
        this.name = this.clientForm.controls['name'];
        this.address = this.clientForm.controls['address'];
        this.tlf1 = this.clientForm.controls['tlf1'];
        this.tlf2 = this.clientForm.controls['tlf2'];
        this.email1 = this.clientForm.controls['email1'];
        this.email2 = this.clientForm.controls['email2'];
        this.cif = this.clientForm.controls['cif'];

        if(this.id =this.routeParams.get("id")){
            this.dataApi.getClient(this.id).then(
                (res) => {
                   this.client = res;
                   console.log(this.client.name);
                },
                (error) => {
                    console.log("Error: " + JSON.stringify(error));
                }
            )
        }
    }
    onSubmit(value): void {
        if(!this.id){
            this.dataApi.setClient(value).then(         
                (res) => {
            this.router.navigate(['ClientSelected',{id:res}]); 
                },
                (error) => {
                    console.log("Error: " + JSON.stringify(error));
                }
            )
        }else{
            this.dataApi.updateClient(this.id,value).then(         
                (res) => {
            this.router.navigate(['ClientSelected',{id:res}]); 
                },
                (error) => {
                    console.log("Error: " + JSON.stringify(error));
                }
            )
        }
        
    }
}
        
