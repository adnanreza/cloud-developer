export const config = {
  dev: {
    username: 'adnanreza',
    password: '12rrAR88',
    database: 'udagramAR',
    host: 'udacityc2.ck7fzwxmzpyq.ca-central-1.rds.amazonaws.com',
    dialect: 'postgres',
    aws_region: 'ca-central-1',
    aws_profile: 'default',
    aws_media_bucket: 'udagram-ar-dev',
  },
  prod: {
    username: '',
    password: '',
    database: 'udagram_prod',
    host: '',
    dialect: 'postgres',
  },
};
