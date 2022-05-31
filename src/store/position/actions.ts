import { Position } from './../../interfaces/position.interface';
import { PositionDto } from 'src/services/rest-api';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { PositionStateInterface } from './state';
import positionservice from 'src/services/position.service';

const actions: ActionTree<PositionStateInterface, StateInterface> = {
  async addPosition(context, payload: PositionDto): Promise<void> {
    const result = await positionservice.create(payload);
    context.commit('setNewPosition', result);
    await context.dispatch('getAllPosition');
  },

  async editPosition(context, payload: any): Promise<any> {
    const result = await positionservice.update(payload.position_id, payload);
    context.commit('updatePosition', result);
    await context.dispatch('getAllPosition');
  },

  async deletePosition(context, position_id: number): Promise<any> {
    const result = await positionservice.delete(position_id);
    context.commit('deletePosition', result);
    await context.dispatch('getAllPosition');
  },

  async getAllPosition(context): Promise<any> {
    const res = await positionservice.getAll();
    context.commit('getAllPosition', res);
  },

  async getOnePosition(context, position_id: number): Promise<any> {
    const res = await positionservice.getOne(position_id);
    context.commit('getOnePosition', res);
  },
};

export default actions;
