import User from './User.model';
import Application from './Application.model';

import Interview from './Interview.model';
import Offer from './Offer.model';

const associationOpts = {
  foreignKey: 'user_Id',
  as: 'application'
}

const associationApplication = {
  foreignKey: 'application_id',
  as: 'app_id'
}

Application.belongsTo(User, associationOpts);
User.hasMany(Application, associationOpts);

Interview.belongsTo(Application, associationApplication);
Application.hasMany(Interview, associationApplication);


Offer.belongsTo(Application, associationApplication);
Application.hasMany(Offer, associationApplication);