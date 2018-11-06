import { NgModule } from '@angular/core';
import {
    NavbarModule,
    AppSwitcherModule,
    IconModule,
    PopoverModule,
    ListModule,
    SelectModule,
    APP_SWITCHER_SERVICE,
    IDiscoveryRequest
} from '@healthcatalyst/cashmere';
import { of, Observable } from 'rxjs';

const applications: IDiscoveryRequest = {
    value: [
        {
            ServiceName: 'Example',
            Version: 1,
            DiscoveryServiceId: 1,
            ServiceUrl: 'http://example.com/',
            Heartbeat: null,
            DiscoveryType: 'Application',
            IsHidden: false,
            Icon: '',
            FriendlyName: 'Example',
            Description: 'An example of a web application',
            BuildNumber: '1.0'
        }
    ]
};

class CustomAppSwitcherService {
    readonly allApplicationsUri = 'http://example.com/';

    getApplications(): Observable<IDiscoveryRequest> {
        return of(applications);
    }
}

@NgModule({
    imports: [
        AppSwitcherModule
    ],
    exports: [NavbarModule, AppSwitcherModule, IconModule, PopoverModule, ListModule, SelectModule],
    providers: [
        {
            provide: APP_SWITCHER_SERVICE,
            useClass: CustomAppSwitcherService
        }
    ]
})
export class CashmereModule {}
