export enum EAxiosVerb {
    Get = "get",
    Post = "post",
    Put = "put",
    Patch = "patch",
    Delete = "delete",
}


export enum SortOrder {
    asc = 'asc',
    desc = 'desc',
    undefined = ''
}



export enum UserRole {
    admin = "Admin",
    editor = "Editor",
    viewer = "Viewer",
}

export enum AnimalStatus {
    extinct = "Extinto",
    extinct_in_the_wild = "Extinto en el vida silvestre",
    critically_endangered = "En peligro crítico",
    endangered = "En peligro",
    vulnerable = "Vulnerable",
    least_concerned = "Baja preocupación",
    near_threatened = "Casi amenazado",
    data_deficient = "Datos insuficientes",
    not_evaluated = "No evaluado",
    not_endagered = "Sin peligro",
}

export enum HabitatClimate {
    tropical = "Tropical",
    subtropical = "Subtropical",
    dry = "Seco",
    continental = "Continental",
    polar = "Polar",
    other = "Otro",
}

export enum HabitatType {
    terrestrial = "Terrestre",
    aquatic = "Acuático",
    aerial = "Aéreo",
    other = "Otro",
}


export enum DietType {
    herbivore = "Herbívoro",
    carnivore = "Carnívoro",
    omnivore = "Omnívoro",
    predator = "Predador",
    scavenger = "Escavador",
    other = "Otro",
}

export enum ReproductionType {
    oviparous = "Ovípara",
    viviparous = "Vivípara"
}

export enum Season {
    spring = "Primavera",
    summer = "Verano",
    autumn = "Otoño",
    winter = "Invierno"
}