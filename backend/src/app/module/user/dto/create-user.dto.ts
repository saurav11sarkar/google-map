import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Address is required' })
  address: string;

  @IsNumber(
    { allowInfinity: false, allowNaN: false },
    { message: 'Latitude is number' },
  )
  @IsOptional()
  lat: number;

  @IsNumber(
    { allowInfinity: false, allowNaN: false },
    { message: 'Longitude is number' },
  )
  @IsOptional()
  lng: number;
}
