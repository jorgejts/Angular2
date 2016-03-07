System.register(["angular2/core", "../../../providers/dataApi/dataApi", "angular2/http", "angular2/common", "angular2/router"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, dataApi_1, http_1, common_1, router_1;
    var NuevoClientePage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dataApi_1_1) {
                dataApi_1 = dataApi_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            NuevoClientePage = (function () {
                function NuevoClientePage(dataApi, builder, router, routeParams) {
                    var _this = this;
                    this.routeParams = routeParams;
                    this.client = { name: '', address: '', tlf1: '', tlf2: '', email1: '', email2: '', cif: '' };
                    this.router = router;
                    this.dataApi = dataApi;
                    this.clientForm = builder.group({
                        name: ["", common_1.Validators.required],
                        address: [""],
                        tlf1: ["", common_1.Validators.compose([
                                common_1.Validators.minLength(9),
                                common_1.Validators.maxLength(10)
                            ])
                        ],
                        tlf2: ["", common_1.Validators.compose([
                                common_1.Validators.minLength(9),
                                common_1.Validators.maxLength(10)
                            ])
                        ],
                        email1: ["",],
                        email2: ["",],
                        cif: ["", common_1.Validators.compose([
                                common_1.Validators.minLength(9),
                                common_1.Validators.maxLength(10)
                            ])
                        ]
                    });
                    this.name = this.clientForm.controls['name'];
                    this.address = this.clientForm.controls['address'];
                    this.tlf1 = this.clientForm.controls['tlf1'];
                    this.tlf2 = this.clientForm.controls['tlf2'];
                    this.email1 = this.clientForm.controls['email1'];
                    this.email2 = this.clientForm.controls['email2'];
                    this.cif = this.clientForm.controls['cif'];
                    if (this.id = this.routeParams.get("id")) {
                        this.dataApi.getClient(this.id).then(function (res) {
                            _this.client = res;
                            console.log(_this.client.name);
                        }, function (error) {
                            console.log("Error: " + JSON.stringify(error));
                        });
                    }
                }
                NuevoClientePage.prototype.onSubmit = function (value) {
                    var _this = this;
                    if (!this.id) {
                        this.dataApi.setClient(value).then(function (res) {
                            _this.router.navigate(['ClientSelected', { id: res }]);
                        }, function (error) {
                            console.log("Error: " + JSON.stringify(error));
                        });
                    }
                    else {
                        this.dataApi.updateClient(this.id, value).then(function (res) {
                            _this.router.navigate(['ClientSelected', { id: res }]);
                        }, function (error) {
                            console.log("Error: " + JSON.stringify(error));
                        });
                    }
                };
                NuevoClientePage = __decorate([
                    core_1.Component({
                        selector: "nuevoCliente",
                        templateUrl: "app/components/clients/nuevoCliente/nuevoCliente.html",
                        providers: [dataApi_1.DataApi, http_1.HTTP_PROVIDERS],
                        directives: [common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [dataApi_1.DataApi, common_1.FormBuilder, router_1.Router, router_1.RouteParams])
                ], NuevoClientePage);
                return NuevoClientePage;
            })();
            exports_1("NuevoClientePage", NuevoClientePage);
        }
    }
});
//# sourceMappingURL=nuevoCliente.js.map