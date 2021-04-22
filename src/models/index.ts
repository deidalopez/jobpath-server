import sequelize from './db';
import Offer from './Offer.model';
import Application from './Application.model';
import Interview from './Interview.model';
import User from './User.model';

Offer.belongsTo(Application, {
  foreignKey: 'application_id',
  as: 'offers',
});

Application.hasMany(Interview, {
  foreignKey: 'application_id',
  as: 'interviews',
});

User.hasMany(Application, {
  foreignKey: 'user_id',
  as: 'applications',
});

export {
  sequelize,
  User,
  Application,
  Interview,
  Offer,
};