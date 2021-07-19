import { ObjectId } from "bson";
import { Player } from "./player";

export class Team {
    public id: string = '';
    public name: string = '';
    public captain: string = '';
    public teamMembers: Player[] = [];
}
