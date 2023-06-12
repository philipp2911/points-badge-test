import {User} from './types/user.interface';
import {Icon} from './types/icon.enum';

const MIN_SOLUTION_COUNT_BRONZE = 5;
const MIN_SOLUTION_COUNT_SILVER = 25;
const MIN_SOLUTION_COUNT_GOLD = 50;

export const getUsersBadge = (user: User): Icon | null => {
    if (user.solution_count >= MIN_SOLUTION_COUNT_BRONZE && user.solution_count < MIN_SOLUTION_COUNT_SILVER) {
        return Icon.BADGE_BRONZE;
    } else if (user.solution_count >= MIN_SOLUTION_COUNT_SILVER && user.solution_count < MIN_SOLUTION_COUNT_GOLD) {
        return Icon.BADGE_SILVER;
    } else if (user.solution_count >= MIN_SOLUTION_COUNT_GOLD) {
        return Icon.BADGE_GOLD;
    } else {
        return null;
    }
};
