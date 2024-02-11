export { Profile, ProfileSchema } from './model/types/profile';

export { profileAction, profileReducer } from './model/silce/profileSlice';

export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';

export { ProfileCard } from './ui/ProfileCard/ProfileCard';

import { getProfileData } from './model/selectors/getProfileData/getProfileData';
import { getProfileError } from './model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';

export { getProfileData, getProfileError, getProfileIsLoading };
