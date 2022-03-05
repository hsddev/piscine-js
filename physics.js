/*
a = F/m
a = Δv/Δt
a = 2d/t^2

a = acceleration
F = force
Δv = final velocity - initial velocity
Δt = final time - initial time
d = distance
t = time
*/

// Function to calculate the acceleration if not possible return impossible
const getAcceleration = (obj) => {
    let a;

    if ((obj.F && obj.m) || (obj.Δv && obj.Δt) || obj.d || t) {
        a = obj.F / obj.m || obj.Δv / obj.Δt || (2 * obj.d) / t;
    } else {
        a = "impossible";
    }

    return a;
};
