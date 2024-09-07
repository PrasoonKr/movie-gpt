export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";
export const BG_LOGO =
  "https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_small.jpg";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer" + process.env.REACT_APP_TMDB_KEY,
    // eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDBhNzZjNTFmODNjZWFlN2ZjOGIzMTg5MzRjYjZkMyIsIm5iZiI6MTcyNTc0NjgxMS45ODcwNSwic3ViIjoiNjZkOWE1YzkxNjU1ZGFlMDQxMDE5M2UwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.0OTpRKH-d7wSKF_jIweFxn-y9cCFTd9VjObHdABPMv0"
  },
};
export const IMG_CDN = "https://image.tmdb.org/t/p/w500";
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
export const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY;
