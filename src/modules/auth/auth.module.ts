import { LibJournalModule } from '@app/journal';
import { LibNotificationModule } from '@app/notification';
import { LibUserAccessControlModule } from '@app/user-access-control';
import { Module } from '@nestjs/common';
import { AuthController } from './controller/user/auth.controller';

@Module({
  imports: [
    LibNotificationModule,
    LibJournalModule,
    LibUserAccessControlModule,
  ],
  controllers: [AuthController],
})
export class ApiAuthModule {}
