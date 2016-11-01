System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ChampionDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ChampionDetailComponent = (function () {
                function ChampionDetailComponent() {
                }
                ChampionDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-champion-detail',
                        template: "\n\t\t<div *ngIf=\"champion\">\n\t    \t<h2>{{champion.name}} details!</h2>\n\t    \t<div><label>id: </label>{{champion.id}}</div>\n\t    \t<div>\n\t    \t\t<label>name: </label>\n\t    \t\t<div><input [(ngModel)]=\"champion.name\" placeholder=\"name\"></div>\n\t    \t</div>\n\t    </div>\n\t",
                        inputs: ['champion']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChampionDetailComponent);
                return ChampionDetailComponent;
            }());
            exports_1("ChampionDetailComponent", ChampionDetailComponent);
        }
    }
});
//# sourceMappingURL=champion-detail.component.js.map