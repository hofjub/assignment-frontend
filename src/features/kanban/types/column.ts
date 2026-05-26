import {KanbanItem} from "./index";
import {KanbanCard} from "./card";

/**
 * The column itself with the cards inside it, is draggable
 */
interface KanbanColumn extends KanbanItem {
    cards: KanbanCard[]
}



export type {KanbanColumn};