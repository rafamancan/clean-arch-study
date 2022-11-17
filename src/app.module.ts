import { Module } from '@nestjs/common';

import { UsersControllers } from './presentation/users/users.controller';
import { UserRepository } from './core/repositories/user.repository';
import { UsersCacheMemoryRepository } from './data/cache-memory/users/users-cache-memory.repository';
import { CreateUserUseCase } from './use-cases/users/create-user.usecase';
import { GetAllUsersUseCase } from './use-cases/users/get-all-users.usecase';

@Module({
  imports: [],
  controllers: [UsersControllers],
  providers: [
    {
      provide: UserRepository,
      useClass: UsersCacheMemoryRepository,
    },
    CreateUserUseCase,
    GetAllUsersUseCase,
  ],
})
export class AppModule {}
