import { Module } from '@nestjs/common';
import { RegistryController } from './registry.controller';
import { RegistryService } from './registry.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Errors } from 'src/database/models/errors.model';
import { Credentials } from 'src/database/models/credentials.model';
import { Organizations } from 'src/database/models/organizations.model';
import { Applications } from 'src/database/models/applications.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Errors,
      Credentials,
      Organizations,
      Applications,
    ]),
  ],
  controllers: [RegistryController],
  providers: [RegistryService],
})
export class RegistryModule {}
