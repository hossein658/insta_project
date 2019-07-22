import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProjectNewSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ProjectNewSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ProjectNewSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectNewSharedModule {
  static forRoot() {
    return {
      ngModule: ProjectNewSharedModule
    };
  }
}
