module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'quickcode',
  synchronize: true,
  //entities: ['dist/**/*.entity{.ts,.js}'],
  entities: ['src/**/*.entity{.ts,.js}'], //seed
  seeds: ['src/seeds/**/*{.ts,.js}'],
  factories: ['src/factories/**/*{.ts,.js}'],
};
