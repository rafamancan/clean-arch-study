import { Injectable } from "@nestjs/common";
import { UserEntity } from "src/core/domain/entities/user.entity";
import { RepositoryCacheMemory } from "../repository-cache-memory";
import { UserRepository } from "src/core/repositories/user.repository";

// TODO: desaclopar o injectable do nestj e trocar por https://www.npmjs.com/package/typedi 
@Injectable()
export class UsersCacheMemoryRepository extends RepositoryCacheMemory<UserEntity> implements UserRepository { }
