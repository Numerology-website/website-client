export enum ERole {
  Admin = "Admin",
  User = "User",
}

export enum EStatusCode {
  Success = 200,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  InternalServerError = 500,
  Conflict = 409,
}
