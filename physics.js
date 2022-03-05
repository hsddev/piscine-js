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

    if (obj.f !== undefined && obj.m !== undefined) {
        a = obj.f / obj.m;
    } else if (obj.Δv !== undefined && obj.Δt !== undefined) {
        a = obj.Δv / obj.Δt;
    } else if (obj.d !== undefined && obj.t !== undefined) {
        a = (2 * obj.d) / obj.t ** 2;
    } else {
        a = "impossible";
    }

    return a;
};
