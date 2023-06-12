import {User} from './types/user.interface';
import {Icon} from './types/icon.enum';

const badgeValueRanges = [
    {min: -Infinity, max: -1, icon: Icon.BADGE_BAD_ASS},
    {min: 1, max: 4, icon: Icon.BADGE_STARTER},
    {min: 5, max: 24, icon: Icon.BADGE_BRONZE},
    {min: 25, max: 49, icon: Icon.BADGE_SILVER},
    {min: 50, max: 100, icon: Icon.BADGE_GOLD},
    {min: 101,max: 2000, icon: Icon.BADGE_PLATINUM},
    {min: 2001, icon: Icon.BADGE_GOOD_LIKE},
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
