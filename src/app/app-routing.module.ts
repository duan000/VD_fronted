import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from './pages/buy/buy.component';
import { TopPageComponent } from './pages/top-page/top-page.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageThreeComponent } from './pages/page-three/page-three.component';
import { LoginComponent } from './pages/login/login.component';
import { CustomCardInputComponent } from './pages/custom-card-input/custom-card-input.component';
import { FundListComponent } from './pages/fund-list/fund-list.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { Cpage1Component } from './pages/cpage1/cpage1.component';
import { Cpage2Component } from './pages/cpage2/cpage2.component';
import { BuyInputComponent } from './pages/buy_input/buy_input.component';
import { CompOneComponent } from './components/comp-one/comp-one.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'pages/buy', component: BuyComponent },
  { path: 'top', component: TopPageComponent },
  { path: 'pages/pageOne', component: PageOneComponent },
  { path: 'pages/pageThree', component: PageThreeComponent },
  { path: 'pages/customCard', component: CustomCardInputComponent },
  { path: 'pages/fundList', component: FundListComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'pages/cpage1', component: Cpage1Component },
  { path: 'pages/cpage2', component: Cpage2Component },
  { path: 'pages/cpage0', component: BuyInputComponent },
  { path: 'test', component: CompOneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
