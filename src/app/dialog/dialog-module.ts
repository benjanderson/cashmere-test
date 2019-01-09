/**
 * @license
 * Copyright Health Catalyst All Rights Reserved.
 *
 * Use of this source code is governed by an Apache-2.0 license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/HealthCatalyst/Fabric.Cashmere/dev/LICENSE
 */

import {OverlayModule} from '@angular/cdk/overlay';
import {PortalModule} from '@angular/cdk/portal';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
// import {MatCommonModule} from '@angular/material/core';
import {HC_DIALOG_SCROLL_STRATEGY_PROVIDER, HcDialog} from './dialog';
import {HcDialogContainer} from './dialog-container';
import {
  HcDialogActions,
  HcDialogClose,
  HcDialogContent,
  HcDialogTitle,
} from './dialog-content-directives';


@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
    // MatCommonModule,
  ],
  exports: [
    HcDialogContainer,
    HcDialogClose,
    HcDialogTitle,
    HcDialogContent,
    HcDialogActions,
    // MatCommonModule,
  ],
  declarations: [
    HcDialogContainer,
    HcDialogClose,
    HcDialogTitle,
    HcDialogActions,
    HcDialogContent,
  ],
  providers: [
    HcDialog,
    HC_DIALOG_SCROLL_STRATEGY_PROVIDER,
  ],
  entryComponents: [HcDialogContainer],
})
export class HcDialogModule {}
