const pokemonInfo = [
    {
        title: "Pikachu",
        evolutionStage: "Stage1",  // Pikachu's base form (Stage 1 in this context)
        type: "Electric",
        weight: 6.0,
        height: 0.4,
        form: "Standard",
        imageUrl: "public/pika.png",
        altText: ""
    },
    {
        title: "Gengar",
        evolutionStage: "Stage2",  // Gengar is the evolved form of Gastly
        type: "Ghost, Poison",
        weight: 40.5,
        height: 1.5,
        form: "Standard",
        imageUrl: "public/gengar.png",
        altText: ""
    },
    {
        title: "Gengar",
        evolutionStage: "MegaEvolution",  // Mega Gengar, a further form of Gengar
        type: "Ghost, Poison",
        weight: 40.5,
        height: 1.5,
        form: "Mega",
        imageUrl: "public/mega gengar.png",
        altText: ""
    },
    {
        title: "Charizard",
        evolutionStage: "Stage2",  // Charizard is the evolved form of Charmander
        type: "Fire, Flying",
        weight: 90.5,
        height: 1.7,
        form: "Standard",
        imageUrl: "public/chari.png",
        altText: ""
    },
    {
        title: "Charizard",
        evolutionStage: "MegaEvolution",  // Mega Evolution forms of Charizard
        type: "Fire, Flying",
        weight: 90.5,
        height: 1.7,
        form: "Mega X",
        imageUrl: "public/meg y char.webp",
        altText: ""
    },
    {
        title: "Charizard",
        evolutionStage: "MegaEvolution",  // Mega Evolution forms of Charizard
        type: "Fire, Flying",
        weight: 90.5,
        height: 1.7,
        form: "Mega Y",
        imageUrl: "public/meg char y.png",
        altText: ""
    },
    {
        title: "Mewtwo",
        evolutionStage: "Basic",  // Mewtwo is a powerful Pokémon (Stage 3), though not an evolution
        type: "Psychic",
        weight: 122.0,
        height: 2.0,
        form: "Standard",
        imageUrl: "public/mew two.jpg",
        altText: ""
    },
    {
        title: "Mewtwo",
        evolutionStage: "MegaEvolution",  // Mega Evolution forms of Mewtwo
        type: "Psychic",
        weight: 130.0,
        height: 2.0,
        form: "Mega X",
        imageUrl: "public/mewtwo mega y.png",
        altText: ""
    },
    {
        title: "Mewtwo",
        evolutionStage: "MegaEvolution",  // Mega Evolution forms of Mewtwo
        type: "Psychic",
        weight: 90.5,
        height: 2.0,
        form: "Mega Y",
        imageUrl: "public/mega mewtwo y.jpg",
        altText: ""
    },
    {
        title: "Zygarde",
        evolutionStage: "Other",  // Zygarde has multiple forms (Stage 2 and Complete Forme), so labeled as "Other"
        type: "Dragon, Ground",
        weight: 31.5,
        height: 1.2,
        form: "50% Forme",
        imageUrl: "public/zygarde 50.png",
        altText: ""
    },
    {
        title: "Zygarde",
        evolutionStage: "Other",  // Zygarde's Complete Forme (Stage 3)
        type: "Dragon, Ground",
        weight: 610.0,
        height: 4.0,
        form: "Complete Forme",
        imageUrl: "public/zygarde 100.png",
        altText: ""
    },
    {
        title: "Rotom",
        evolutionStage: "Basic",  // Rotom's base form (Stage 1)
        type: "Electric, Ghost",
        weight: 3.0,
        height: 0.3,
        form: "Standard",
        imageUrl: "public/rotom standard.png",
        altText: ""
    },
    {
        title: "Rotom",
        evolutionStage: "Basic",  // Rotom Wash form, still Stage 1
        type: "Electric, Ghost",
        weight: 3.0,
        height: 0.3,
        form: "Wash",
        imageUrl: "public/rotom wash.png",
        altText: ""
    },
    {
        title: "Rotom",
        evolutionStage: "Basic",  // Rotom Frost form, still Stage 1
        type: "Electric, Ghost",
        weight: 3.0,
        height: 0.3,
        form: "Frost",
        imageUrl: "public/rotom frost.png",
        altText: ""
    },
    {
        title: "Rotom",
        evolutionStage: "Basic",  // Rotom Fan form, still Stage 1
        type: "Electric, Ghost",
        weight: 3.0,
        height: 0.3,
        form: "Fan",
        imageUrl: "public/rotom fan.png",
        altText: ""
    },
    {
        title: "Rotom",
        evolutionStage: "Basic",  // Rotom Mow form, still Stage 1
        type: "Electric, Ghost",
        weight: 3.0,
        height: 0.3,
        form: "Mow",
        imageUrl: "public/rotom mow.png",
        altText: ""
    },
    {
        title: "Lucario",
        evolutionStage: "Stage2",  // Lucario is the evolved form of Riolu
        type: "Fighting, Steel",
        weight: 54.0,
        height: 1.2,
        form: "Mega",
        imageUrl: "public/lucario meg.png",
        altText: ""
    },
    {
        title: "Deoxys",
        evolutionStage: "Basic",  // Deoxys is a single Pokémon but has multiple forms (Stage 1)
        type: "Psychic",
        weight: 60.8,
        height: 1.7,
        form: "Normal",
        imageUrl: "public/deox norm.png",
        altText: ""
    },
    {
        title: "Deoxys",
        evolutionStage: "Basic",  // Deoxys' Attack form, still Stage 1
        type: "Psychic",
        weight: 60.8,
        height: 1.7,
        form: "Attack",
        imageUrl: "public/deox attack.png",
        altText: ""
    },
    {
        title: "Deoxys",
        evolutionStage: "Basic",  // Deoxys' Defense form, still Stage 1
        type: "Psychic",
        weight: 60.8,
        height: 1.7,
        form: "Defense",
        imageUrl: "public/deox def.png",
        altText: ""
    },
    {
        title: "Deoxys",
        evolutionStage: "Basic",  // Deoxys' Speed form, still Stage 1
        type: "Psychic",
        weight: 60.8,
        height: 1.7,
        form: "Speed",
        imageUrl: "public/deox speed.png",
        altText: ""
    }
];


export {pokemonInfo};
