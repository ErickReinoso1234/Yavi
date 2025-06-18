import {
  IsEnum,
  IsNotEmpty,
  IsString,
  Matches,
  IsEmail,
  MinLength,
} from 'class-validator';
import { UserRole } from '../enum/user-role.enum';

export class CreateUsers {
  @IsString()
  @IsNotEmpty()
  @Matches(/^[A-Za-z]+$/, {
    message: 'Username debe contener solo letras',
  })
  username: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail({}, { message: 'Debe ser un correo válido' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6, {
    message: 'La contraseña debe tener al menos 6 caracteres',
  })
  password: string;

  @IsEnum(UserRole, {
    message:
      'El rol debe ser uno de: coordinador academico, docente, coordinador de carrera',
  })
  role: UserRole;
}
