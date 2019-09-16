import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max} from "class-validator";
export enum PostStatus{
    PUBLIC = "public",
    PRIVATE = "private"
}

@Entity()
export class Post{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @Column()
    description:string;

    @Column({
        type: "enum",
        enum: PostStatus,
        default: PostStatus.PUBLIC
    })
    status: PostStatus;

    @CreateDateColumn({type: "timestamp"})
    createdAt: Date;

    @UpdateDateColumn({type: "timestamp"})
    updatedAt: Date;


}