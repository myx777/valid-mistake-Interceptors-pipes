import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!this.isValid(value)) {
      throw new BadRequestException('Validation failed');
    }
    return value;
  }

  private isValid(value: any): boolean {
    // Простая проверка: если значение пустое
    return value !== null && value !== undefined && value !== '';
  }
}
