Meteor.startup(function () {

    var greatCars;

    greatCars = [

        {
            pref: 1,
            marque: "Aston Martin",
            type: "Supercar",
            modèle: "DB 10",
            couleur: "Gris",
        },
        {
            pref: 2,
            marque: "Porsche",
            type: "Suv",
            modèle: "Macan S",
            couleur: "Noir",
        },
        {
            pref: 3,
            marque: "Mercedes",
            type: "Citadine",
            modèle: "Classe A",
            couleur: "Gris Montagne",
        },
        {
            pref: 4,
            marque: "BMW",
            type: "Citadine",
            modèle: "Serie 1",
            couleur: "Rouge",
        },
        {
            pref: 5,
            marque: "Mercedes",
            type: "Suv",
            modèle: "GLA",
            couleur: "Gris Montagne",
        },
        {
            pref: 6,
            marque: "Ferrari ",
            type: "Supercar",
            modèle: "California",
            couleur: "Rouge",
        },
        {
            pref: 7,
            marque: "Ford",
            type: "Coupé",
            modèle: "Mustang",
            couleur: "Jaune",
        },
        {
            pref: 8,
            marque: "Audi",
            type: "Supercar",
            modèle: "R8",
            couleur: "Blanche",
        },

    ];

    initCars(greatCars);

    function initCars(carsArray) {
        cars.remove({});
        var numberCars = cars.find().count();
        if (numberCars === 0) {
            for (i = 0; i < carsArray.length; i++) {
                cars.insert({
                    pref: carsArray[i].pref,
                    marque: carsArray[i].marque,
                    type: carsArray[i].type,
                    modèle: carsArray[i].modèle,
                    couleur: carsArray[i].couleur,
                });
            }
        }
    }
});
