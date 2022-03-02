// Function to calculate dog's age
const dogYears = (planet, age) => {
    const ageInEarthYears = Math.round((age / 31557600) * 7 * 100) / 100;

    let ageInYears;

    switch (planet) {
        // earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31,557,600 seconds
        case "earth":
            ageInYears = ageInEarthYears;
            break;
        // mercury : orbital period 0.2408467 Earth years
        case "mercury":
            ageInYears = Math.round((ageInEarthYears / 0.2408467) * 100) / 100;
            break;
        // venus : orbital period 0.61519726 Earth years
        case "venus":
            ageInYears = Math.round((ageInEarthYears / 0.2408467) * 100) / 100;
            break;
        // mars : orbital period 1.8808158 Earth years
        case "mars":
            ageInYears = Math.round((ageInEarthYears / 1.8808158) * 100) / 100;
            break;
        // jupiter : orbital period 11.862615 Earth years
        case "jupiter":
            ageInYears = Math.round((ageInEarthYears / 11.862615) * 100) / 100;
            break;
        // saturn : orbital period 29.447498 Earth years
        case "saturn":
            ageInYears = Math.round((ageInEarthYears / 29.447498) * 100) / 100;
            break;
        // uranus : orbital period 84.016846 Earth years
        case "uranus":
            ageInYears = Math.round((ageInEarthYears / 84.016846) * 100) / 100;
            break;
        // neptune : orbital period 164.79132 Earth years
        case "neptune":
            ageInYears = Math.round((ageInEarthYears / 164.79132) * 100) / 100;
            break;
    }
    return ageInYears;
};

console.log(dogYears("mercury", 2134835688));
