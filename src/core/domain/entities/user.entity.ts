import { Entity } from "../../base/entity";

export class UserEntity extends Entity {
  public name: string;
  public email: string;
  public password: string;
}
