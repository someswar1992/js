const object = {
    indra:"IPS Lecturer",
    vikas:"Indian Railway",
    vivek:"Atomic Energy Dept",
    manoj:"Job Seeker"
}
// The for in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.
for (const key in object) {
        const element = object[key];   
        console.log(`Key-${key}:${element}`)
    }

const settingProtoObject = {
    RKShah : "NCL Nigahi",
    RRShah : "House Maker"
}
Object.setPrototypeOf(object,settingProtoObject);
/*
Key-indra:IPS Lecturer
Key-vikas:Indian Railway
Key-vivek:Atomic Energy Dept
Key-manoj:Job Seeker
Key-RKShah:NCL Nigahi
Key-RRShah:House Maker
*/