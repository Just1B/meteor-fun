cars = new Mongo.Collection ('cars');

carsSchema = new SimpleSchema ({
  pref: {
    type: Number,
    label: "Préférence"
  },
  marque: {
    type: String,
    label: "Nom"
  },
  type: {
    type: String,
    label: "Type"
  },
  modèle: {
    type: String,
    label: "Modèle"
  },
  couleur: {
    type: String,
    label: "Couleur"
  }
});

cars.attachSchema( carsSchema );
