import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Cep1620272882577 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: 'cep',
                    columns: [
                        {
                            name: "id",
                            type: "int",
                            isGenerated: true,
                            generationStrategy: 'increment',
                            isPrimary: true
                        },
                        {
                            name: 'cep',
                            type: 'varchar',
                            isNullable: false
                        }
                    ]
                }
            ))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
