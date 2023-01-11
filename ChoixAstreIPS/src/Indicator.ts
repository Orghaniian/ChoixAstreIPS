class Indicator {
    id: string;
    assos: number;
    devices: number;
    highschoolSubjects: number;
    hobbies: number;
    oS: number;
    paradigm: number;
    previousCursus: number;
    s5Subjects: number;
    softwaresUsage: number;
    technos: number;

    constructor(json: any) {
        this.id = json.id;
        this.assos = json.assos;
        this.devices = json.devices;
        this.highschoolSubjects = json.highschoolSubjects;
        this.hobbies = json.hobbies;
        this.oS = json.oS;
        this.paradigm = json.paradigm;
        this.previousCursus = json.previousCursus;
        this.s5Subjects = json.s5Subjects;
        this.softwaresUsage = json.softwaresUsage;
        this.technos = json.technos;
    }


    computeProbability(weights: Map<string, number>): number {
        let value = 0;
        let totalWeight = 0;

        weights.forEach((weight, key) => {
            value += new Map(Object.entries(this)).get(key) * weight;
            totalWeight += weight;
        })

        console.log("probability: ", value / totalWeight, weights);


        return value / totalWeight;
    }
}

const defaultWeights = new Map<string, number>([
    ["assos", 1],
    ["devices", .4],
    ["highschoolSubjects", .2],
    ["hobbies", .5],
    ["oS", .2],
    ["paradigm", .7],
    ["previousCursus", .4],
    ["s5Subjects", 1],
    ["softwaresUsage", .4],
    ["technos", .5]
])

export { Indicator, defaultWeights }