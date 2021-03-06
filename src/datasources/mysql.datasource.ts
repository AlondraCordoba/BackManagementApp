import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mysql',
  connector: 'mysql',
  url: 'mysql://uwqjib7ojjqp1dw8:qcsj54cgbsK4OFV073bk@bk7mh9fknmbwcoqdstab-mysql.services.clever-cloud.com:3306/bk7mh9fknmbwcoqdstab',
  host: 'bk7mh9fknmbwcoqdstab-mysql.services.clever-cloud.com',
  port: 3306,
  user: 'uwqjib7ojjqp1dw8',
  password: 'qcsj54cgbsK4OFV073bk',
  database: 'bk7mh9fknmbwcoqdstab'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MysqlDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mysql';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mysql', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
