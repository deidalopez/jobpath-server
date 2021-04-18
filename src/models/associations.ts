import User from './User.model';
import Application from './Application.model';

const associationOpts = {
  foreignKey: 'user_Id',
  as: 'application'
}

Application.belongsTo(User, associationOpts);
User.hasMany(Application, associationOpts);