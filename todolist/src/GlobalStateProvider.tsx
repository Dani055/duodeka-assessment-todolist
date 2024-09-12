import React, { ReactNode, useState } from 'react';
import { GlobalStateContextType, GlobalState } from './types/types';
import { initialTodos } from './data/todos';

const initialGlobalState: GlobalState = {
  count: 0,
  todos: initialTodos,
};

// Create a Context for the (global) State
const GlobalStateContext = React.createContext<GlobalStateContextType>({state: initialGlobalState, setGlobalState: () => {}});

type Props = {
  children: ReactNode
}
export function GlobalStateProvider({ children }: Props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     globals: initialGlobalState || {},
  //   };
  // }
  // Set the initial (global) State
  const [state, setState] = useState(initialGlobalState);

  // Expose the setGlobals function to the Globals object
  // componentDidMount() {
  //   GlobalState.set = this.setGlobalState;
  // }
  

  // setGlobalState = (data = {}) => {
  //   const { globals } = this.state;
  //   Object.keys(data).forEach((key) => {
  //     globals[key] = data[key];
  //   });
  //   this.setState(globals);
  // };
  const setGlobalState = (data: Partial<GlobalState>) => {
    // Update the state with the new State
    setState((prevState) => {
      const newState = {...prevState};

      // Copy changes from data object to new state
      Object.assign(newState, data);
      // Same as
      // Object.keys(data).forEach((key) => {
      //   newState[key] = data[key];
      // });

      return newState
    });
  };
  
  // render() {
  //   const { globals } = this.state;
  //   const { Root } = this.props;
  //   return (
  //     // Pass the current value of GlobalState, based on this components' State, down
  //     <GlobalState.Provider value={globals}>
  //       <Root />
  //     </GlobalState.Provider>
  //   );
  // }
  return (
      <GlobalStateContext.Provider value={{state, setGlobalState}}>
          {children}
      </GlobalStateContext.Provider>
  )
}

// Export hook for easier use
export const useGlobalState = () => React.useContext(GlobalStateContext);