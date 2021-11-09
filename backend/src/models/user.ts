import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
class User extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({nullable: true})
    name: string;

}

export = User;