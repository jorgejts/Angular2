System.register(["angular2/core", "angular2/http", "angular2/router", "../../../providers/visitsApi/visitsApi"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, http_1, router_1, visitsApi_1;
    var ClientsVisitsPage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (visitsApi_1_1) {
                visitsApi_1 = visitsApi_1_1;
            }],
        execute: function() {
            ClientsVisitsPage = (function () {
                function ClientsVisitsPage(client, visitsApi, routeParams, router) {
                    this.routeParams = routeParams;
                    this.tab = null;
                    this.url = "http://localhost";
                    this.router = router;
                    this.id_client = this.client;
                    this.visitsApi = visitsApi;
                    if (this.routeParams.get('id')) {
                        this.id_client = this.routeParams.get('id');
                    }
                }
                ClientsVisitsPage.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this.visitsApi.getVisitsFromClient(this.client).then(function (res) {
                        _this.visits = res;
                    }, function (error) {
                        console.log("Error: " + JSON.stringify(error));
                    });
                };
                ClientsVisitsPage.prototype.goUpdateVisit = function (id, type) {
                    this.router.navigate(['/UpdateAttachment', { id: id, type: type, id_client: this.id_client, file: 'no' }]);
                };
                ClientsVisitsPage = __decorate([
                    core_1.Component({
                        selector: "client-visits",
                        templateUrl: "app/components/clients/clientVisits/clientVisits.html",
                        providers: [visitsApi_1.VisitsApi, http_1.HTTP_PROVIDERS],
                        directives: [router_1.RouterLink, router_1.ROUTER_DIRECTIVES],
                        inputs: ['client']
                    }),
                    __param(0, core_1.Attribute("client")), 
                    __metadata('design:paramtypes', [Object, visitsApi_1.VisitsApi, router_1.RouteParams, router_1.Router])
                ], ClientsVisitsPage);
                return ClientsVisitsPage;
            })();
            exports_1("ClientsVisitsPage", ClientsVisitsPage);
        }
    }
});
//# sourceMappingURL=clientVisits.js.map