System.register(["angular2/core", "angular2/http", "angular2/router", "../../../providers/budgetsApi/budgetsApi"], function(exports_1) {
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
    var core_1, http_1, router_1, budgetsApi_1;
    var ClientsBudgetsPage;
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
            function (budgetsApi_1_1) {
                budgetsApi_1 = budgetsApi_1_1;
            }],
        execute: function() {
            ClientsBudgetsPage = (function () {
                function ClientsBudgetsPage(client, budgetsApi, routeParams, router) {
                    this.budgetsApi = budgetsApi;
                    this.routeParams = routeParams;
                    this.tab = null;
                    this.url = "http://localhost";
                    this.router = router;
                    this.budgetsApi = budgetsApi;
                    if (this.routeParams.get('id')) {
                        this.client = this.routeParams.get('id');
                    }
                }
                ClientsBudgetsPage.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this.budgetsApi.getBudgetsFromClient(this.client).then(function (res) {
                        _this.budgets = res;
                    }, function (error) {
                        console.log("Error: " + JSON.stringify(error));
                    });
                };
                ClientsBudgetsPage = __decorate([
                    core_1.Component({
                        selector: "client-budgets",
                        templateUrl: "app/components/clients/clientBudgets/clientBudgets.html",
                        providers: [budgetsApi_1.BudgetsApi, http_1.HTTP_PROVIDERS],
                        directives: [router_1.RouterLink, router_1.ROUTER_DIRECTIVES],
                        inputs: ['client']
                    }),
                    __param(0, core_1.Attribute("client")), 
                    __metadata('design:paramtypes', [Object, budgetsApi_1.BudgetsApi, router_1.RouteParams, router_1.Router])
                ], ClientsBudgetsPage);
                return ClientsBudgetsPage;
            })();
            exports_1("ClientsBudgetsPage", ClientsBudgetsPage);
        }
    }
});
//# sourceMappingURL=clientBudgets.js.map