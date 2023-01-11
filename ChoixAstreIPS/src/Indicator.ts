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


    computeProbability(weights: Weight[]): number {
        let value = 0;
        let totalWeight = 0;

        weights.forEach((weight) => {
            value += new Map(Object.entries(this)).get(weight.key) * weight.value;
            totalWeight += weight.value;
        })

        const proba = value / totalWeight;

        if (proba < 0) return 0;
        return proba;
    }
}



class Weight {
    key: string;
    value: number;
    title: string;


    constructor(key: string, value: number, title: string) {
        this.key = key;
        this.value = value;
        this.title = title;
    }
}

const defaultWeights: Weight[] = [
    new Weight("assos", 1, "Participation dans les associations"),
    new Weight("devices", .4, "Intêret pour l'utilisation de de certaines machines"),
    new Weight("highschoolSubjects", .2, "Attrait pour certaines matières au lycée"),
    new Weight("hobbies", .5, "Hobbies"),
    new Weight("oS", .2, "Système d'exploitation de prédilection"),
    new Weight("paradigm", .7, "Paradigme de programmation préféré"),
    new Weight("previousCursus", .4, "Formation avant le cycle ingénieur"),
    new Weight("s5Subjects", 1, "Attrait pour certains cours du S5"),
    new Weight("softwaresUsage", .4, "Habitude d'utilisation de certains logiciels"),
    new Weight("technos", .5, "Intérêt pour certains technologies"),
]


export { Indicator, defaultWeights, Weight }