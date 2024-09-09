import { Banner, BannerApiResponse, GetUserAuthRequestVo } from './apiRequestResponse';
import { apiRequest } from './apiService';


export const authenticateUser = (authData: GetUserAuthRequestVo) => {
  return apiRequest('/api/users/register', 'POST', {
    username: authData.username,
    password: authData.password,
    email: authData.email,
  });
};


// export const GetBanner = () => {
//   return apiRequest('/backend/api/library/banner/', 'GET');
// }

export const GetBanner = async (): Promise<Banner[]> => {
    const response: BannerApiResponse = await apiRequest('/backend/api/library/banner/', 'GET');
    return response.result.poster_banner;
  };