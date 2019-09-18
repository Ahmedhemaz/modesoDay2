import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne} from "typeorm";
import {Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max} from "class-validator";
import { User } from "./User";
export enum PostStatus{
    PUBLIC = "public",
    PRIVATE = "private"
}

@Entity()
export class Article{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        nullable:false
    })
    title:string;

    @Column({
        nullable:false
    })
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

    
    @ManyToOne(type => User, user=>user.articles,{
        eager:true,
        nullable:false
    })
    user: User;

}