export type Todo = {
  id: string;
  content: string;
  isDone: boolean;
}

export type GlobalState = {
    count: number;
    todos: Todo[];
  }
  
export type GlobalStateContextType = {
    state: GlobalState;
    setGlobalState: (data: Partial<GlobalState>) => void;
  }
  