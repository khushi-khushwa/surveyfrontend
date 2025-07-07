import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './loading/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LinkcomponentComponent } from './linkcomponent/linkcomponent.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AssetsComponent } from './assets/assets.component';
import { ConfigureComponent } from './configure/configure.component';
import { QuotaComponent } from './quota/quota.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LaunchComponent } from './launch/launch.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SurveyComponent } from './survey/survey.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { SingleMultipleComponent } from './single-multiple/single-multiple.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { PlatformComponent } from './platform/platform.component';
import { FreetextComponent } from './freetext/freetext.component';
import { GridComponent } from './grid/grid.component';
import { NumericComponent } from './numeric/numeric.component';
import { ImageComponent } from './image/image.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AddMoreOptionComponent } from './add-more-option/add-more-option.component';
import { ExamplequestionComponent } from './examplequestion/examplequestion.component';
import { MatDialogModule } from '@angular/material/dialog';
import { preview } from './single-multiple/single-multiple.component';
import { SurveyPreviewComponent } from './survey-preview/survey-preview.component';
import { PreviewSingleComponent } from './preview-single/preview-single.component';
import { PreviewGridComponent } from './preview-grid/preview-grid.component';
import { PreviewNumericComponent } from './preview-numeric/preview-numeric.component';
import { PreviewImageComponent } from './preview-image/preview-image.component';
import { PreviewFreetextComponent } from './preview-freetext/preview-freetext.component';
import { QuestionHeadingComponent } from './question-heading/question-heading.component';
import { WriteQuestionComponent } from './write-question/write-question.component';
import { EditSurveyComponent } from './edit-survey/edit-survey.component';
import { OptionComponent } from './option/option.component';
import { deletedialogueComponent } from './question-heading/question-heading.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { GraphComponent } from './graph/graph.component';
import { HighchartsChartModule } from 'highcharts-angular';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// import {
//   MAT_DIALOG_DATA,
//   MatDialog,
//   MatDialogActions,
//   MatDialogClose,
//   MatDialogContent,
//   MatDialogRef,
//   MatDialogTitle,
// } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    DetailsComponent,
    ConfigureComponent,
    NavbarComponent,
    HomeComponent,
    QuotaComponent,
    preview,
    deletedialogueComponent,
    DashboardComponent,
    AssetsComponent,
    LoginComponent,
    RegisterComponent,
    LinkcomponentComponent,
    ContentComponent,
    LaunchComponent,
    SurveyComponent,
    CreateQuestionComponent,
    SingleMultipleComponent,
    ConfigurationComponent,
    PlatformComponent,
    FreetextComponent,
    GridComponent,
    NumericComponent,
    ImageComponent,
    AddMoreOptionComponent,
    ExamplequestionComponent,
    SurveyPreviewComponent,
    PreviewSingleComponent,
    PreviewGridComponent,
    PreviewNumericComponent,
    PreviewImageComponent,
    PreviewFreetextComponent,
    QuestionHeadingComponent,
    WriteQuestionComponent,
    EditSurveyComponent,
    OptionComponent,
    GraphComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    MatSlideToggleModule,
    HighchartsChartModule,
    MatProgressSpinnerModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
