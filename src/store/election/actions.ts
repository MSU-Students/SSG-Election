import { Election } from 'src/interfaces/election.interface';
import electionservice from 'src/services/election.service';
import { ElectionDto } from 'src/services/rest-api';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ElectionStateInterface } from './state';

const actions: ActionTree<ElectionStateInterface, StateInterface> = {
  async addElection(context, payload: ElectionDto): Promise<void> {
    const result = await electionservice.create(payload);
    context.commit('setNewElection', result);
    await context.dispatch('getAllElection');
  },

  async electionStatus(context, student_id: number) {
    const electionStatus = await electionservice.getOne(student_id);
    await electionservice.update(student_id, {
      ...electionStatus,
      status: 'Active',
    });
  },

  async editElection(context, payload: any): Promise<any> {
    const result = await electionservice.update(payload.election_id, payload);
    context.commit('updateElection', result);
    await context.dispatch('getAllElection');
  },

  async deleteElection(context, election_id: number): Promise<any> {
    const result = await electionservice.delete(election_id);
    context.commit('deleteElection', result);
    await context.dispatch('getAllElection');
  },

  async getAllElection(context): Promise<any> {
    const res = await electionservice.getAll();
    context.commit('getAllElection', res);
  },

  async getActiveElection(context) {
    if (!context.state.allElection) {
      await context.dispatch('getAllElection');
    }
    const active = context.state.allElection?.find((election) => {
      const now = new Date();
      const startDate =
        election.start_date && election.start_time
          ? new Date(election.start_date + ' ' + election.start_time)
          : now;
      if (election.end_date && election.end_time) {
        const endDate = new Date(election.end_date + ' ' + election.end_time);
        if (startDate <= now && now < endDate) {
          return startDate <= now && now < endDate;
        } else {
          if (election.status == 'Active') {
            Promise.all([
              context.dispatch('editElection', {
                ...election,
                status: 'Election Done',
              }),
            ]);
          }
        }
      } else {
        return false;
      }
    });
    if (active && active.status == 'Inactive') {
      await context.dispatch('editElection', { ...active, status: 'Active' });
    }
    context.commit('setActiveElection', active);
  },

  async getOneElection(context, election_id: number): Promise<any> {
    const res = await electionservice.getOne(election_id);
    context.commit('getOneElection', res);
  },
};

export default actions;
