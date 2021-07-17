import { Player } from "./player";

export class Team {
    public id: any;
    public name: string = '';
    public captain: string = '';
    public teamMembers: Player[] = [];
}
