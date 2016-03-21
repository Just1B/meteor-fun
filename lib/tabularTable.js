TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.carsList = new Tabular.Table({
  name: "cars",
  collection: cars,
  responsive: true,
  autoWidth: false,
  select: true,
  columns: [
    {data: "pref", title: "Préférence" },
    {data: "marque", title: "Marque" },
    {data: "modèle", title: "Modèle" },
    {data: "type", title: "Type de Voiture" },
    {data: "couleur", title: "Couleur" },
    {tmpl: Meteor.isClient && Template.updatePencil, class: "text-center", title:"Update" }
  ]
});
