import {User} from './types/user.interface';
import {Icon} from './types/icon.enum';

const badgeValueRanges = [
    {min: 5, max: 24, icon: Icon.BADGE_BRONZE},
    {min: 25, max: 49, icon: Icon.BADGE_SILVER},
    {min: 50, icon: Icon.BADGE_GOLD},
]

export const getUsersBadge = async (user: User): Promise <Icon | null> => {
    let badge = null;

    badgeValueRanges.forEach(badgeValueRange => {
        if (user.solution_count >= badgeValueRange.min &&
            (badgeValueRange.max === undefined || user.solution_count <= badgeValueRange.max)) {
            badge = badgeValueRange.icon;
        }
    });

    return badge;
};
