import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
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


}