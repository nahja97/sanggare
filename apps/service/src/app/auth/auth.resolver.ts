import {
    Args,
    Mutation,
    Resolver,
  } from '@nestjs/graphql'
import { Auth } from './model/auth.model'
import { AuthService } from './auth.service'

import {
    ListUserAuth,
    RefreshTokenAuth,
  } from './auth.inputs'

@Resolver(() => Auth)
export class AuthResolver {
    constructor(private authService: AuthService, ) {}
    @Mutation(() => Auth)
    async login(
        @Args('payload') payload?: ListUserAuth,
    ) {
        return this.authService.login(payload)
    }

    @Mutation(() => Auth)
    async refreshToken(
        @Args('payload') payload?: RefreshTokenAuth,
    ) {
        return this.authService.assignRefreshToken(payload)
    }
}
