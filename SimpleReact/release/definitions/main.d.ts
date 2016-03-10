declare class Animal {
    name: string;
    constructor(theName: string);
    move(meters?: number): void;
}
declare var animal: Animal;
declare class Human {
    name: string;
    constructor(yourHumanName: string);
    callHuman: () => void;
}
