import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateFieldDto } from './create-field.dto';
import { FieldService } from './field.service';

@Controller('api/table/:tableId/field')
export class FieldController {
  constructor(private readonly fieldService: FieldService) {}

  @Get(':fieldId')
  getField(@Param('tableId') tableId: string, @Param('fieldId') fieldId: string) {
    return this.fieldService.getField(tableId, fieldId);
  }

  @ApiOperation({ summary: 'Create Field' })
  @ApiResponse({ status: 201, description: 'The field has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post()
  createField(@Param('tableId') tableId: string, @Body() createFieldDto: CreateFieldDto) {
    return this.fieldService.createField(tableId, createFieldDto);
  }
}
