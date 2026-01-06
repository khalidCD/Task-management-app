import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Login required');
    }

    const token = authHeader.split(' ')[1];

    try {
      this.jwtService.verify(token, {
        secret: 'secretkey',
      });
      return true;
    } catch {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
