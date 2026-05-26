import {create} from "zustand";
import {KanbanStore} from "../types";
import {KanbanColumn} from "../types/column";


export const useKanbanStore = create<KanbanStore>((set, get) => ({
    columns: [],
    addColumn: (title: string) => {
        const newColumn: KanbanColumn = {
            id: crypto.randomUUID(),
            title,
            createdAt: new Date(),
            cards: [],
        };

        set((state) => ({
            columns: [...state.columns, newColumn],
        }));
    }
}))