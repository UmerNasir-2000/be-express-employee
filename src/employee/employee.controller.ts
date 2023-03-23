import { Employee } from './../schema/cat.schema';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get('/')
  fetchEmployees() {
    return this.employeeService.fetchEmployees();
  }

  @Post('/')
  createEmployee(@Body() data: Employee) {
    return this.employeeService.create(data);
  }

  @Delete('/:id')
  removeEmployee(@Param('id') employeeID: string) {
    return this.employeeService.remove(employeeID);
  }

  @Put('/:id')
  updateEmployee(
    @Param('id') employeeID: string,
    @Body() data: Partial<Employee>,
  ) {
    return this.employeeService.update(employeeID, data);
  }
}
