import { Mapper } from 'src/core/base/mapper';
import { UserCreatedDto } from 'src/shared/dtos/user-created.dto';
import { UserEntity } from 'src/core/domain/entities/user.entity';

export class UserCreatedMapper extends Mapper<UserCreatedDto, UserEntity> {
  mapFrom(data: UserCreatedDto): UserEntity {
    const user = new UserEntity();

    user.id = data.id;
    user.name = data.name;

    return user;
  }

  mapTo(data: UserEntity): UserCreatedDto {
    const user = new UserCreatedDto();
    user.id = data.id;
    user.name = data.name;

    return user;
  }
}
