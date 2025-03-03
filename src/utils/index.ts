import { config } from '../const.ts';

export const getRequiredMessage = (name: string) => {
    const item = config.find(item => item.id === name);

    return item?.isRequired && item?.errorMessage;
};
