System.register(["angular2/core", "../../../providers/dataApi/dataApi", "angular2/http", "angular2/router", "../../attachments/attachments/attachments", "../clientVisits/clientVisits", "../clientBudgets/clientBudgets"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, dataApi_1, http_1, router_1, attachments_1, clientVisits_1, clientBudgets_1;
    var ClientsPage;
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
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (attachments_1_1) {
                attachments_1 = attachments_1_1;
            },
            function (clientVisits_1_1) {
                clientVisits_1 = clientVisits_1_1;
            },
            function (clientBudgets_1_1) {
                clientBudgets_1 = clientBudgets_1_1;
            }],
        execute: function() {
            ClientsPage = (function () {
                function ClientsPage(dataApi, routeParams, router) {
                    var _this = this;
                    this.routeParams = routeParams;
                    this.tab = null;
                    this.url = "http://localhost";
                    this.router = router;
                    this.dataApi = dataApi;
                    this.dataApi.getClients().then(function (res) {
                        _this.clientss = res;
                    }, function (error) {
                        console.log("Error: " + JSON.stringify(error));
                    });
                    if (this.routeParams.get("id")) {
                        this.setTab(this.routeParams.get("id"));
                    }
                }
                ClientsPage.prototype.setTab = function (value) {
                    if (this.tab == value) {
                        this.tab = null;
                    }
                    else if (this.tab != value) {
                        this.tab = value;
                    }
                };
                ClientsPage.prototype.goUpdate = function (id) {
                    this.router.navigate(['UpdateClient', { id: id }]);
                };
                ClientsPage.prototype.deleteClient = function (id) {
                    var _this = this;
                    this.dataApi.deleteClient(id).then(function (res) {
                        _this.dataApi.getClients().then(function (res) {
                            _this.clientss = res;
                        }, function (error) {
                            console.log("Error: " + JSON.stringify(error));
                        });
                    }, function (error) {
                        console.log("Error: " + JSON.stringify(error));
                    });
                };
                ClientsPage = __decorate([
                    core_1.Component({
                        selector: "clients",
                        templateUrl: "app/components/clients/clients/clients.html",
                        providers: [dataApi_1.DataApi, http_1.HTTP_PROVIDERS],
                        directives: [router_1.RouterLink, router_1.ROUTER_DIRECTIVES, attachments_1.AttachmentsPage, clientVisits_1.ClientsVisitsPage, clientBudgets_1.ClientsBudgetsPage],
                    }), 
                    __metadata('design:paramtypes', [dataApi_1.DataApi, router_1.RouteParams, router_1.Router])
                ], ClientsPage);
                return ClientsPage;
            })();
            exports_1("ClientsPage", ClientsPage);
        }
    }
});
//# sourceMappingURL=clients.js.map