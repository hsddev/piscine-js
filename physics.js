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

    if (
        Object.keys(obj).length == 2 ||
        Object.keys(obj).length == 4 ||
        Object.keys(obj).length == 5
    ) {
        if (obj.f !== undefined && obj.m !== undefined) {
            a = obj.f / obj.m;
        } else if (obj.Δv && obj.Δt) {
            a = obj.Δv / obj.Δt;
        } else if (obj.d || obj.t) {
            a = (2 * obj.d) / obj.t;
        } else {
            a = "impossible";
        }
    } else {
        a = "impossible";
    }

    return a;
};

console.log(getAcceleration({ d: 10, f: 2, Δv: 100 }));
