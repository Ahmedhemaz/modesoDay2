import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, BeforeInsert} from "typeorm";
import { Article } from "./Article";
import * as bcrypt from "bcrypt";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    email: string

    @Column()
    password: string

    @CreateDateColumn({type: "timestamp"})
    createdAt: Date;

    @UpdateDateColumn({type: "timestamp"})
    updatedAt: Date;

    @OneToMany(type => Article, article => article.user)
    articles: Article[]

    @BeforeInsert()
    async hashUserPassword(){
        this.password =  await bcrypt.hash(this.password, 10);
    }

}
