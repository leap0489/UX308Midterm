function characterizeEarthquake(richter){
    let description;
    if (richter < 5) {
        description = "Little or no damage";
    }else if (richter >= 5 && richter < 5.5){
        description = "Some damage";
    }else if (richter >= 5.5 && richter < 6.5){
        description = "Serious damage: walls may crack or fall";
    }else if (richter >= 6.5 && richter < 7.5) {
        description = "Disaster: buildings may collapse";
    }else if (richter >= 7.5){
        description = "Catastrophe: most buildings destroyed";
    }
    return description;
}


export {characterizeEarthquake}