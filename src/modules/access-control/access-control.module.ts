import { LibJournalDomainModule } from '@app/journal/domain/domain.module';
import { LibUserAccessControlDomainModule } from '@app/user-access-control/domain/domain.module';
import { Module } from '@nestjs/common';
import {
  AdminController,
  GroupAssignmentController,
  RoleAssignmentController,
  RoleController,
  UserController,
} from './controllers';

@Module({
  imports: [LibUserAccessControlDomainModule, LibJournalDomainModule],
  controllers: [
    AdminController,
    RoleController,
    UserController,
    GroupAssignmentController,
    RoleAssignmentController,
  ],
})
export class ApiUserAccessControlModule {}
