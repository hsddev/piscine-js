// Function to calculate dog's age
const dogYears = (planet, age) => {
    const ageInEarthYears = (age / 31557600) * 7;

    let ageInYears;

    switch (planet) {
        // earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31,557,600 seconds
        case "earth":
            ageInYears = ageInEarthYears;
            break;
        // mercury : orbital period 0.2408467 Earth years
        case "mercury":
            ageInYears = ageInEarthYears * 0.2408467;
            break;
        // venus : orbital period 0.61519726 Earth years
        case "venus":
            ageInYears = ageInEarthYears * 0.2408467;
            break;
        // mars : orbital period 1.8808158 Earth years
        case "mars":
            ageInYears = ageInEarthYears * 1.8808158;
            break;
        // jupiter : orbital period 11.862615 Earth years
        case "jupiter":
            ageInYears = ageInEarthYears * 11.862615;
            break;
        // saturn : orbital period 29.447498 Earth years
        case "saturn":
            ageInYears = ageInEarthYears * 29.447498;
            break;
        // uranus : orbital period 84.016846 Earth years
        case "uranus":
            ageInYears = ageInEarthYears * 84.016846;
            break;
        // neptune : orbital period 164.79132 Earth years
        case "neptune":
            ageInYears = ageInEarthYears * 164.79132;
            break;
    }
    return ageInYears;
};
