import { Controller, Get, Post } from '@nestjs/common';

@Controller('items')
export class ItemsController {
  @Get()
  findAll() {
    return 'This action returns all items';
  }

  @Post()
  create() {
    return 'This action adds a new item';
  }
}
