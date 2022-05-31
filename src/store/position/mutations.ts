import { Position } from './../../interfaces/position.interface';
import { MutationTree } from 'vuex';
import { PositionStateInterface } from './state';

const mutation: MutationTree<PositionStateInterface> = {
  setNewPosition(state, payload: Position) {
    state.newPosition = payload;
  },
  updatePosition(state, payload: Position) {
    state.newPosition = payload;
  },
  deletePosition(state, payload: any) {
    state.allPosition.push(payload);
  },

  getAllPosition(state, payload) {
    state.allPosition = [];
    state.allPosition.push(...payload);
  },

  getOnePosition(state, payload) {
    state.allPosition = payload;
  },
};

export default mutation;
