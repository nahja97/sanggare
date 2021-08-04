import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model, Schema as MongooseSchema } from 'mongoose'
import { JwtService } from '@nestjs/jwt';

import { User, UserDocument } from '../users/model/users.model'

import {
    ListUserAuth,
    RefreshTokenAuth,
    AccessTokenPayload,
    RefreshTokenPayload
} from './auth.inputs'

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        private readonly jwtService: JwtService
    ) {}
    
    async login(payload: ListUserAuth) {
        try {
            const user = await this.userModel.findOne({username: payload.username}).exec()
            const res = await bcrypt.compare(payload.password, user.password)
            if (res) {
                const dataToken = {
                    _id: user._id,
                    name: user.name,
                    role: user.role,
                    username: user.username
                }

                const accessToken = this.createAccessToken(dataToken)
                const refreshToken = this.createRefreshToken({_id: user._id, access_token: accessToken})

                return {
                    _id: user._id,
                    name: user.name,
                    role: user.role,
                    username: user.username,
                    access_token: accessToken,
                    refresh_token: refreshToken
                }
            }
            throw new Error('Invalid username or Password!')
        } catch(err) {
            throw new Error('Invalid username or Password!')
        }
    }
    
    async assignRefreshToken(payload: RefreshTokenAuth) {
        const decodeRefreshToken = this.jwtService.verify(payload.refresh_token)
        if (decodeRefreshToken.access_token == payload.access_token) {
            try {
                const user = await this.userModel.findById(decodeRefreshToken._id, '_id name username role').exec()

                const dataToken = {
                    _id: user._id,
                    name: user.name,
                    role: user.role,
                    username: user.username
                }

                const accessToken = this.createAccessToken(dataToken)
                const refreshToken = this.createRefreshToken({_id: user._id, access_token: accessToken})

                return {
                    _id: user._id,
                    name: user.name,
                    role: user.role,
                    username: user.username,
                    access_token: accessToken,
                    refresh_token: refreshToken
                }
            } catch(err) {
                throw new Error('Please register or sign in.')
            }
        }
    
        throw new Error('Please register or sign in.')
    }
    
    createAccessToken(payload: AccessTokenPayload) {
        return this.jwtService.sign(payload)
    }
    
    createRefreshToken(payload: RefreshTokenPayload) {
        return this.jwtService.sign(payload, {
            expiresIn: '7d',
        })
    }
}
