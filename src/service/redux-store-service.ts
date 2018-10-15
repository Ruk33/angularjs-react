import { buildStore } from '../store';

export class ReduxStoreService {
    private store = buildStore();
    public getStore = () => this.store;
}
