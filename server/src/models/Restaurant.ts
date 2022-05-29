import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Restaurant {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    adress: string

    @Column()
    type: number

}
