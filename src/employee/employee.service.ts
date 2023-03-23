import { EmployeeDocument } from './../schema/cat.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee } from 'src/schema/cat.schema';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>,
  ) {}

  create(createEmployeeDto: Employee): Promise<Employee> {
    return this.employeeModel.create(createEmployeeDto);
  }

  fetchEmployees(): Promise<Employee[]> {
    return this.employeeModel.find().exec();
  }

  remove(employeeID: string): Promise<Employee> {
    return this.employeeModel.findByIdAndRemove(employeeID).exec();
  }

  update(employeeID: string, employee: Partial<Employee>): Promise<Employee> {
    return this.employeeModel.findByIdAndUpdate(employeeID, employee).exec();
  }
}
