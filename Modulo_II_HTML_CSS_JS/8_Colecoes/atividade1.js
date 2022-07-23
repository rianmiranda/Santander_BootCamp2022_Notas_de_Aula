const mapSystem = new Map()

mapSystem.set("Rian", "Adm")
mapSystem.set("Renan", "Adm")
mapSystem.set("Eliane", "User")
mapSystem.set("Jorge", "User")
mapSystem.set("Gabriel", "User")
mapSystem.set("Tamyres", "User")
mapSystem.set("Kevin", "User")

function getAdms(map) {
    arrayAdms = []
    for([key, role] of map){
        if (role === "Adm") {
            arrayAdms.push(key)
        }
    }
    return arrayAdms
}

console.log(getAdms(mapSystem))