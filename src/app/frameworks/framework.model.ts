export interface Framework {
    id: FrameworkId;
    name: FrameworkName;
}

export enum FrameworkId {
    ANGULAR = 1,
    REACT,
    VUE
}

export enum FrameworkName {
    ANGULAR = 'Angular',
    REACT = 'React',
    VUE = 'Vue'
}

export class Angular implements Framework {
    id = FrameworkId.ANGULAR;
    name = FrameworkName.ANGULAR;
}

export class React implements Framework {
    id = FrameworkId.REACT;
    name = FrameworkName.REACT;
}

export class Vue implements Framework {
    id = FrameworkId.VUE;
    name = FrameworkName.VUE;
}