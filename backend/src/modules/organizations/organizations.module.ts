import { Module } from '@nestjs/common';
import { OrganizationsController } from './organizations.controller';
import { OrganizationsService } from './organizations.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ApplicationMembership } from 'src/database/models/application-membership.model';
import { ApplicationTypes } from 'src/database/models/application-types.model';
import { Applications } from 'src/database/models/applications.model';
import { Credentials } from 'src/database/models/credentials.model';
import { Errors } from 'src/database/models/errors.model';
import { OrganizationMembership } from 'src/database/models/organization-membership.model';
import { Organizations } from 'src/database/models/organizations.model';
import { Users } from 'src/database/models/users.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Users,
      Organizations,
      OrganizationMembership,
      Credentials,
      ApplicationMembership,
      ApplicationTypes,
      Applications,
      Errors,
    ]),
  ],
  controllers: [OrganizationsController],
  providers: [OrganizationsService],
})
export class OrganizationsModule {}
