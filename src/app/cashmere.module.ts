import { NgModule } from '@angular/core';
import {
    AccordionModule,
    AppSwitcherModule,
    BreadcrumbsModule,
    ButtonModule,
    CheckboxModule,
    ChipModule,
    DrawerModule,
    FormFieldModule,
    IconModule,
    InputModule,
    ListModule,
    ModalModule,
    NavbarModule,
    PaginationModule,
    PicklistModule,
    PopoverModule,
    ProgressIndicatorsModule,
    RadioButtonModule,
    SelectModule,
    SortModule,
    SubnavModule,
    TableModule,
    TabsModule,
    TileModule,
    TypeformSurveyModule,
    IDiscoveryRequest,
    APP_SWITCHER_SERVICE
} from '@healthcatalyst/cashmere';
import { of, Observable } from 'rxjs';

const applications: IDiscoveryRequest = {
    value: [
        {
            ServiceName: 'Example',
            Version: 1,
            DiscoveryServiceId: 1,
            ServiceUrl: 'http://example.com/',
            DiscoveryType: 'Application',
            IsHidden: false,
            Icon: '',
            FriendlyName: 'Example',
            Description: 'An example of a web application',
            BuildNumber: '1.0'
        }
    ]
};

export class CustomAppSwitcherService {
    readonly allApplicationsUri = 'http://example.com/';

    getApplications(): Observable<IDiscoveryRequest> {
        return of(applications);
    }
}

@NgModule({
    imports: [
        AccordionModule,
        AppSwitcherModule,
        BreadcrumbsModule,
        ButtonModule,
        CheckboxModule,
        ChipModule,
        DrawerModule,
        FormFieldModule,
        IconModule,
        InputModule,
        ListModule,
        ModalModule,
        NavbarModule,
        PaginationModule,
        PicklistModule,
        PopoverModule,
        ProgressIndicatorsModule,
        RadioButtonModule,
        SelectModule,
        SortModule,
        SubnavModule,
        TableModule,
        TabsModule,
        TileModule,
        TypeformSurveyModule
    ],
    exports: [
        AccordionModule,
        AppSwitcherModule,
        BreadcrumbsModule,
        ButtonModule,
        CheckboxModule,
        ChipModule,
        DrawerModule,
        FormFieldModule,
        IconModule,
        InputModule,
        ListModule,
        ModalModule,
        NavbarModule,
        PaginationModule,
        PicklistModule,
        PopoverModule,
        ProgressIndicatorsModule,
        RadioButtonModule,
        SelectModule,
        SortModule,
        SubnavModule,
        TableModule,
        TabsModule,
        TileModule,
        TypeformSurveyModule
    ],
    providers: [
        {
            provide: APP_SWITCHER_SERVICE,
            useClass: CustomAppSwitcherService
        }
    ]
})
export class CashmereModule {}
