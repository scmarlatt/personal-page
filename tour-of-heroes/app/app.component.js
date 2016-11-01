System.register(['angular2/core', './champion-detail.component', './champion.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, champion_detail_component_1, champion_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (champion_detail_component_1_1) {
                champion_detail_component_1 = champion_detail_component_1_1;
            },
            function (champion_service_1_1) {
                champion_service_1 = champion_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_championService) {
                    this._championService = _championService;
                    this.title = 'Tour of Champions';
                }
                AppComponent.prototype.onSelect = function (champion) {
                    this.selectedChampion = champion;
                };
                AppComponent.prototype.getChampions = function () {
                    this.champions = this._championService.getChampions();
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getChampions();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        styles: ["\n    \t.selected {\n    \t\tbackground-color: #CFD8DC !important;\n    \t\tcolor: white;\n    \t}\n    \t.champions {\n    \t\tmargin: 0 0 2em 0;\n    \t\tlist-style-type: none;\n    \t\tpadding: 0;\n    \t\twidth: 10em;\n    \t}\n    \t.champions li {\n    \t\tcursor: pointer;\n    \t\tposition: relative;\n    \t\tleft: 0;\n    \t\tbackground-color: #EEE;\n    \t\tmargin: .5em;\n    \t\tpadding: .3em 0em;\n    \t\theight: 1.6em;\n    \t\tborder-radius: 4px;\n    \t}\n    \t.champions li.selected:hover{\n    \t\tcolor: white;\n    \t}\n    \t.champions li:hover {\n\t\t    color: #607D8B;\n\t\t    background-color: #EEE;\n\t\t    left: .1em;\n\t\t}\n    \t.champions .text {\n    \t\tposition: relative;\n    \t\ttop: -3px;\n    \t}\n    \t.champions .badge {\n    \t\tdisplay: inline-block;\n    \t\tfont-size: small;\n    \t\tcolor: white;\n    \t\tpadding: 0.8em 0.7em 0em 0.7em;\n    \t\tbackground-color: #607D8B;\n    \t\tline-height: 1em;\n    \t\tposition: relative;\n    \t\tleft: -1px;\n    \t\ttop: -4px;\n    \t\theight: 1.8em;\n    \t\tmargin-right: .8em;\n    \t\tborder-radius: 4px 0px 0px 4px;\n    \t}\n    "],
                        template: "\n    \t<h1>{{title}}</h1>\n    \t<h2>My Champions</h2>\n    \t<ul class=\"champions\">\n    \t\t<li *ngFor=\"#champion of champions\" (click)=\"onSelect(champion)\" [class.selected]=\"champion === selectedChampion\">\n    \t\t\t<span class=\"badge\">{{champion.id}}</span> {{champion.name}}\n    \t\t</li>\n    \t</ul>\n    \t<my-champion-detail [champion]=\"selectedChampion\"></my-champion-detail>\n    ",
                        directives: [champion_detail_component_1.ChampionDetailComponent],
                        providers: [champion_service_1.ChampionService]
                    }), 
                    __metadata('design:paramtypes', [champion_service_1.ChampionService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map