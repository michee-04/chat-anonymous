import { LibCoreModule } from '@app/core';
import { LibNotificationModule } from '@app/notification';
import { Module } from '@nestjs/common';
import { ApiUserAccessControlModule } from './modules/access-control/access-control.module';
import { ApiAuthModule } from './modules/auth/auth.module';
import { ApiCoreModule } from './modules/core/core.module';

@Module({
  imports: [
    LibCoreModule,
    LibNotificationModule,
    ApiCoreModule,
    ApiUserAccessControlModule,
    ApiAuthModule,
  ],
  controllers: [],
  providers: [],
})
export class ApiModule {}
