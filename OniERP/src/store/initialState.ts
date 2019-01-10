import { Check, ProfilesEnum } from '../utils/types';

export default {
    hasErrored: false,
    isLoading: false,
    items: [],
    check: null,
    history: new Array<Check>(),
    log: '',
    errorMessage: '',
    lastId: 0,
    notificationType: 0,
    currentProfile: ProfilesEnum.Alina,
    dailyBonus: 0
}