export { Profile, ProfileSchema } from './model/types/profile';

export { profileAction, profileReducer } from './model/silce/profileSlice';

export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
export { updateProfileData } from './model/services/updateProfileData/updateProfileData';

export { ProfileCard } from './ui/ProfileCard/ProfileCard';

export { ProfilePageHeader } from './ui/ProfileCard/ProfilePageHeader/ProfilePageHeader';

import { getProfileData } from './model/selectors/getProfileData/getProfileData';
import { getProfileError } from './model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadOnly } from './model/selectors/getProfileReadOnly/getProfileReadOnly';
import { getProfileForm } from './model/selectors/getProfileForm/getProfileForm';

export { getProfileData, getProfileError, getProfileIsLoading, getProfileReadOnly, getProfileForm };
