export interface Banner {
    id: number;
    website_banner: string;
    mobile_banner: string;
    created: string;
    modified: string;
    banner_type: string;
    url: string;
    url_type: string;
    content_type: string;
    published: boolean;
    age_rating: number;
  }
  
export interface BannerApiResponse {
    result: {
      welcome_banner: any[];
      poster_banner: Banner[];
    };
  }

export interface GetUserAuthRequestVo{
    username: string;
    password: string;
    email: string;
}
  