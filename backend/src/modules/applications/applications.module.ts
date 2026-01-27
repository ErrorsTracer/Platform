import { Module } from '@nestjs/common';
import { ApplicationsController } from './applications.controller';
import { ApplicationsService } from './applications.service';

import { SequelizeModule } from '@nestjs/sequelize';
import { ApplicationTypes } from 'src/database/models/application-types.model';
import { Applications } from 'src/database/models/applications.model';
import { OrganizationMembership } from 'src/database/models/organization-membership.model';
import { Users } from 'src/database/models/users.model';
import { ApplicationMembership } from 'src/database/models/application-membership.model';
import { Credentials } from 'src/database/models/credentials.model';
import { Errors } from 'src/database/models/errors.model';
import { TransactionManager } from 'src/helpers/transaction.helper';
import { ApplicationsRepository } from './applications.repo';

@Module({
  imports: [
    SequelizeModule.forFeature([
      ApplicationTypes,
      Applications,
      OrganizationMembership,
      Users,
      ApplicationMembership,
      Credentials,
      Errors,
    ]),
  ],
  controllers: [ApplicationsController],
  providers: [ApplicationsService, TransactionManager, ApplicationsRepository],
})
export class ApplicationsModule {}
