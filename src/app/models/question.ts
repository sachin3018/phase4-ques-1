import { Options } from "./options";

export interface  Question{
    id: number;
    name: string;
    questionTypeId: number;
    options: Options[];
    answered: boolean;
}