import { Routes } from "@angular/router";

export interface RouteInfo {
    path: string;
    title: string;
    class: string;
}

export interface RouteMap {
    routes: Routes,
    routeInfo: RouteInfo[]
}