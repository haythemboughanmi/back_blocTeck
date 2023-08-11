import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";


@Entity()
export class Post {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    title : string;

    @Column()
    postBody : string;

    @ManyToOne( ()=> User , (user)=> user.posts)
    ower : User


    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
      })
      public createdAt: Date;
    
      /**
       * DB last update time.
       */
      @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
      })
      public updatedAt: Date;
}