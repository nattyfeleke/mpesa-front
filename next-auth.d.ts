import { DefaultSession } from "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      accessToken: string;
      data: {
        createdAt: string;
        email: string;

        firstName: string;

        phoneNumber: string;

        id: string;
        accessToken?: string;
      };
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    user: {
      accessToken: string;
      data: {
        createdAt: string;
        email: string;
        enabled: boolean;
        firstName: string;
        isChecker: boolean;
        isDeleted: boolean;
        isFullAuthorizer: boolean;
        isMaker: boolean;
        isVerified: boolean;
        lastLogin: string;
        lastLoginAttempt: string;
        lastName: string;
        loginAttemptCount: number;
        middleName: string;
        organizationID: string;
        permissionGroup: {
          _id: string;
          groupName: string;
          permissions: string[];
        };
        phoneNumber: string;
        realm: string;
        updatedAt: string;
        userCode: string;
        _id: string;
      };
      exp: number;
      iat: number;
      jti: string;
      statusCode: number;
      success: boolean;
    } & DefaultSession["user"];
  }
}
