import {KanbanItem} from "./index";

/**
 * The card inside a column, for example a todo
 */
interface KanbanCard extends KanbanItem {
    finishedAt?: Date,
    description?:string,
}

type CreateKanbanCard = Omit<KanbanCard, "createdAt"|"finishedAt" | "id">

export type {KanbanCard, CreateKanbanCard}