import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatCommonModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { PageThreeComponent } from './pages/page-three/page-three.component';
import { CompOneComponent } from './components/comp-one/comp-one.component';
import { CompTwoComponent } from './components/comp-two/comp-two.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudyPageComponent } from './pages/study-page/study-page.component';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDatepickerToggle} from '@angular/material/datepicker'
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio'
import {MatChipsModule} from '@angular/material/chips'
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// import {MatRippleModule} from '@angular/material/r';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {MatSortModule} from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field'
import {MatFormFieldModule} from '@angular/material/form-field'
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { MenuComponent } from './pages/menu/menu.component';
import { BuyComponent } from './pages/buy/buy.component';
import { StepBarComponent } from './pages/step-bar/step-bar.component';
import { TopPageComponent } from './pages/top-page/top-page.component'
import { FlexLayoutModule } from '@angular/flex-layout';


import { CommonService } from './service/common.service';
import { HttpService } from './service/http.service';
import { BuyService } from './service/buy.service';
import { CustCardInService } from './service/cust-card-in.service';
import { FundListServiceService } from './service/fund-list-service.service';
import { LoginComponent } from './pages/login/login.component';
import { VdFrameComponent } from './components/vd-frame/vd-frame.component';
import { CustomCardInputComponent } from './pages/custom-card-input/custom-card-input.component';
import { FundListComponent } from './pages/fund-list/fund-list.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Cpage1Component } from './pages/cpage1/cpage1.component';
import { Cpage2Component } from './pages/cpage2/cpage2.component';
import { DataService } from './service/data-service.service';
import { BuyInputComponent } from './pages/buy_input/buy_input.component';

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    CompOneComponent,
    CompTwoComponent,
    StudyPageComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    BuyComponent,
    StepBarComponent,
    TopPageComponent,
    LoginComponent,
    VdFrameComponent,
    CustomCardInputComponent,
    FundListComponent,
    SignInComponent,
    Cpage1Component,
    Cpage2Component,
    BuyInputComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCommonModule,
    // CdkTableModule,
    // CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    // MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatFormFieldModule,
    // MatDatepickerToggle
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}},
    CommonService,
    HttpService,
    BuyService,
    CustCardInService,
    FundListServiceService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
