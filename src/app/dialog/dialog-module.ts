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
import {HC_DIALOG_SCROLL_STRATEGY_PROVIDER, MatDialog} from './dialog';
import {MatDialogContainer} from './dialog-container';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from './dialog-content-directives';


@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
    // MatCommonModule,
  ],
  exports: [
    MatDialogContainer,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    // MatCommonModule,
  ],
  declarations: [
    MatDialogContainer,
    MatDialogClose,
    MatDialogTitle,
    MatDialogActions,
    MatDialogContent,
  ],
  providers: [
    MatDialog,
    HC_DIALOG_SCROLL_STRATEGY_PROVIDER,
  ],
  entryComponents: [MatDialogContainer],
})
export class HcDialogModule {}
